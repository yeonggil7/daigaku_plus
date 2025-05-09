import { NextResponse } from 'next/server';
import { articleService } from '@/lib/db/services/articleService';
import { connectDB } from '@/lib/db/connectDb';
import Article from '@/lib/db/models/Article';
import { generateArticle } from '@/lib/articles/generator';
import { saveArticle } from '@/lib/articles/repository';
import { ArticleCategory } from '@/lib/articles/generator';

// 動的ルートとして設定
export const dynamic = 'force-dynamic';

// 接続カウンターとタイムスタンプを記録
let connectionCounter = 0;
let lastConnectionTime: Date | null = null;

/**
 * スケジューラーのcronジョブAPI
 * 予約投稿の記事を公開するなどの定期実行タスクを処理します
 */
export async function GET(request: Request) {
  try {
    // URLからシークレットを取得
    const { searchParams } = new URL(request.url);
    const secret = searchParams.get('secret');

    // シークレットのチェック
    if (secret !== process.env.CRON_SECRET) {
      console.warn('Invalid CRON_SECRET provided');
      return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 });
    }

    // 接続カウンターと時間を更新
    connectionCounter++;
    lastConnectionTime = new Date();

    // データベースに接続
    await connectDB();

    // 月間コスト上限をチェック（今回は記事生成時のみチェック）
    await checkMonthlyCost();

    // カテゴリをランダムに選択
    const categories = ['study', 'career', 'community', 'part-time'];
    const randomCategory = categories[Math.floor(Math.random() * categories.length)];

    // AI記事の生成（カテゴリに基づく）
    const generatedArticle = await generateArticle(randomCategory);

    // 記事をデータベースに保存
    const article = new Article({
      title: generatedArticle.title,
      content: generatedArticle.content,
      summary: generatedArticle.summary,
      slug: generatedArticle.slug,
      category: randomCategory,
      status: 'published', // 自動で公開
      publishDate: new Date(),
      author: 'AI編集部',
      tags: generatedArticle.tags || [],
    });

    await article.save();

    // ログ記録
    console.log(`[CRON] Generated new article: ${article.title} (${article.slug})`);

    return NextResponse.json({
      success: true,
      message: 'Article generated successfully',
      article: {
        id: article._id,
        title: article.title,
        slug: article.slug,
        category: article.category
      },
      stats: {
        connectionCounter,
        lastConnectionTime
      }
    });
  } catch (error) {
    console.error('[CRON] Error:', error);
    return NextResponse.json(
      { success: false, error: 'Internal server error', message: (error as Error).message },
      { status: 500 }
    );
  }
}

// 月間コスト上限をチェック
async function checkMonthlyCost() {
  // 現在の月の開始日
  const currentDate = new Date();
  const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);

  // 今月作成された記事数をカウント
  const monthlyArticlesCount = await Article.countDocuments({
    createdAt: { $gte: firstDayOfMonth }
  });

  // 1記事あたりのコスト（例: 30円）
  const costPerArticle = 30;
  
  // 合計コスト
  const totalCost = monthlyArticlesCount * costPerArticle;
  
  // 上限コスト（環境変数から取得、デフォルトは1000円）
  const maxMonthlyCost = parseInt(process.env.MAX_MONTHLY_COST || '1000', 10);
  
  // コストが上限を超えているか確認
  if (totalCost >= maxMonthlyCost) {
    throw new Error(`Monthly cost limit exceeded (${totalCost}円/${maxMonthlyCost}円)`);
  }
} 