import { NextResponse, NextRequest } from 'next/server';
import { articleService } from '@/lib/db/services/articleService';
import { connectDB } from '@/lib/db/connectDb';
import { ArticleCategory } from '@/lib/ai/article-generator';
import { ArticleStatus } from '@/lib/db/models/Article';

// 環境変数の取得
const API_SECRET = process.env.API_SECRET;

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
 * 記事一覧を取得するAPI
 */
export async function GET(request: NextRequest) {
  try {
    // 認証チェック
    if (!verifyApiAuth(request)) {
      return NextResponse.json({ error: '認証に失敗しました' }, { status: 401 });
    }

    const { searchParams } = new URL(request.url);
    
    // クエリパラメーターの取得
    const category = searchParams.get('category') as ArticleCategory | undefined;
    const limit = searchParams.get('limit') ? parseInt(searchParams.get('limit') as string) : 10;
    const skip = searchParams.get('skip') ? parseInt(searchParams.get('skip') as string) : 0;
    const slug = searchParams.get('slug');
    
    // スラグが指定されている場合は特定の記事を返す
    if (slug) {
      const article = await articleService.getArticleBySlug(slug);
      if (!article) {
        return NextResponse.json({ success: false, error: 'Article not found' }, { status: 404 });
      }
      return NextResponse.json({ success: true, article });
    }
    
    await connectDB();

    // 記事一覧を取得
    const articles = await articleService.getAllArticles({
      status: 'published',
      category,
      limit,
      skip,
      sortBy: 'publishDate',
      sortOrder: 'desc'
    });
    
    // 総記事数も取得
    const totalCount = await articleService.getArticlesCount({
      status: 'published',
      category
    });
    
    return NextResponse.json({
      success: true,
      articles,
      meta: {
        total: totalCount,
        limit,
        skip
      }
    });
  } catch (error) {
    console.error('Error fetching articles:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch articles' },
      { status: 500 }
    );
  }
}

/**
 * 新しい記事を作成するAPI
 */
export async function POST(request: NextRequest) {
  try {
    // 認証チェック
    if (!verifyApiAuth(request)) {
      return NextResponse.json({ error: '認証に失敗しました' }, { status: 401 });
    }

    const body = await request.json();
    
    // APIキーの検証
    const { apiKey } = body;
    if (apiKey !== process.env.ADMIN_API_KEY) {
      return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 });
    }
    
    const { title, content, summary, category, status, tags } = body;
    
    // 必須フィールドの確認
    if (!title || !content || !summary || !category) {
      return NextResponse.json(
        { success: false, error: 'Missing required fields' },
        { status: 400 }
      );
    }
    
    // 記事の作成
    const article = await articleService.createArticle({
      title,
      content,
      summary,
      category,
      status: status || 'draft',
      tags: tags || [],
      author: body.author || 'AI編集部'
    });
    
    return NextResponse.json({
      success: true,
      message: 'Article created successfully',
      article
    }, { status: 201 });
  } catch (error) {
    console.error('Error creating article:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to create article' },
      { status: 500 }
    );
  }
}

/**
 * AI記事を生成するAPI
 */
export async function PUT(request: NextRequest) {
  try {
    // 認証チェック
    if (!verifyApiAuth(request)) {
      return NextResponse.json({ error: '認証に失敗しました' }, { status: 401 });
    }

    // リクエストボディの解析
    const data = await request.json();

    // 必須フィールドのバリデーション
    if (!data.generationParams || !data.generationParams.category) {
      return NextResponse.json(
        { error: '必須フィールドが不足しています（generationParams.category）' },
        { status: 400 }
      );
    }

    // AI記事を生成
    const article = await articleService.generateAndCreateArticle({
      generationParams: {
        category: data.generationParams.category,
        topic: data.generationParams.topic,
        keywords: data.generationParams.keywords,
        targetLength: data.generationParams.targetLength || 'medium',
        useGpt4: data.generationParams.useGpt4 || false
      },
      status: data.status || 'draft',
      publishDate: data.publishDate ? new Date(data.publishDate) : undefined,
      author: data.author,
      tags: data.tags || []
    });

    return NextResponse.json(article, { status: 201 });
  } catch (error) {
    console.error('AI記事生成中にエラーが発生しました:', error);
    return NextResponse.json(
      { error: 'AI記事の生成に失敗しました', message: error instanceof Error ? error.message : '不明なエラー' },
      { status: 500 }
    );
  }
} 