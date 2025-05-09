import { NextResponse, NextRequest } from 'next/server';
import { articleService } from '@/lib/db/services/articleService';
import { connectDB } from '@/lib/db/connectDb';
import Article from '@/lib/db/models/Article';

// 環境変数の取得
const API_SECRET = process.env.API_SECRET;
const SKIP_MONGODB = process.env.SKIP_MONGODB === 'true';
const IS_BUILD_TIME = process.env.VERCEL_ENV === 'production';

/**
 * API認証確認
 */
function verifyApiAuth(request: NextRequest): boolean {
  // API_SECRETが設定されていない場合は認証をスキップ（開発モード）
  if (!API_SECRET) return true;
  
  const authHeader = request.headers.get('Authorization');
  const token = authHeader?.replace('Bearer ', '');
  
  return token === API_SECRET;
}

/**
 * 記事の統計情報を取得するAPI
 */
export async function GET(request: NextRequest) {
  try {
    // 認証チェック
    if (!verifyApiAuth(request)) {
      return NextResponse.json({ error: '認証に失敗しました' }, { status: 401 });
    }

    // ビルド時はモックデータを返す
    if (SKIP_MONGODB || IS_BUILD_TIME) {
      return NextResponse.json({
        currentMonth: {
          year: 2023,
          month: 7,
          articleCount: 15,
          totalCost: 300
        },
        categoryStats: {
          study: 20,
          career: 15,
          community: 10,
          partTime: 5
        },
        statusStats: {
          draft: 10,
          scheduled: 5,
          published: 35
        },
        sourceStats: {
          ai: 40,
          manual: 10
        },
        monthlyTrend: [
          { year: 2023, month: 7, count: 15, cost: 300, avgCost: 20 },
          { year: 2023, month: 6, count: 12, cost: 240, avgCost: 20 },
          { year: 2023, month: 5, count: 10, cost: 200, avgCost: 20 },
          { year: 2023, month: 4, count: 8, cost: 160, avgCost: 20 },
          { year: 2023, month: 3, count: 5, cost: 100, avgCost: 20 },
          { year: 2023, month: 2, count: 0, cost: 0, avgCost: 0 }
        ],
        latestArticles: []
      });
    }

    // データベース接続
    await connectDB();

    // 現在の月のコスト情報を取得
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth() + 1;
    const costInfo = await articleService.getMonthlyCost(year, month);

    // カテゴリー別記事数を取得
    const [studyCount, careerCount, communityCount, partTimeCount] = await Promise.all([
      Article.countDocuments({ category: 'study' }),
      Article.countDocuments({ category: 'career' }),
      Article.countDocuments({ category: 'community' }),
      Article.countDocuments({ category: 'part-time' })
    ]);

    // ステータス別記事数を取得
    const [draftCount, scheduledCount, publishedCount] = await Promise.all([
      Article.countDocuments({ status: 'draft' }),
      Article.countDocuments({ status: 'scheduled' }),
      Article.countDocuments({ status: 'published' })
    ]);

    // AI生成記事と手動作成記事の数
    const [aiGeneratedCount, manuallyCreatedCount] = await Promise.all([
      Article.countDocuments({ aiGenerated: true }),
      Article.countDocuments({ aiGenerated: false })
    ]);

    // 月間記事生成推移（過去6ヶ月）
    const monthlyStats = [];
    for (let i = 0; i < 6; i++) {
      const statsMonth = month - i <= 0 ? month - i + 12 : month - i;
      const statsYear = month - i <= 0 ? year - 1 : year;
      
      // この月の記事数とコスト
      const startDate = new Date(statsYear, statsMonth - 1, 1);
      const endDate = new Date(statsYear, statsMonth, 0);
      
      const articlesInMonth = await Article.countDocuments({
        createdAt: { $gte: startDate, $lte: endDate }
      });
      
      const costInMonth = await articleService.getMonthlyCost(statsYear, statsMonth);
      
      monthlyStats.push({
        year: statsYear,
        month: statsMonth,
        count: articlesInMonth,
        cost: costInMonth.totalCost,
        avgCost: articlesInMonth > 0 ? costInMonth.totalCost / articlesInMonth : 0
      });
    }

    // 最新の記事
    const latestArticles = await Article.find()
      .sort({ createdAt: -1 })
      .limit(5)
      .select('title category status createdAt slug aiGenerated');

    return NextResponse.json({
      currentMonth: {
        year,
        month,
        articleCount: costInfo.count,
        totalCost: costInfo.totalCost
      },
      categoryStats: {
        study: studyCount,
        career: careerCount,
        community: communityCount,
        partTime: partTimeCount
      },
      statusStats: {
        draft: draftCount,
        scheduled: scheduledCount,
        published: publishedCount
      },
      sourceStats: {
        ai: aiGeneratedCount,
        manual: manuallyCreatedCount
      },
      monthlyTrend: monthlyStats,
      latestArticles
    });
  } catch (error) {
    console.error('統計情報取得中にエラーが発生しました:', error);
    return NextResponse.json(
      { error: '統計情報の取得に失敗しました', message: error instanceof Error ? error.message : '不明なエラー' },
      { status: 500 }
    );
  }
} 