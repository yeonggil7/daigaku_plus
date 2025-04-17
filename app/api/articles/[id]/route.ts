import { NextResponse, NextRequest } from 'next/server';
import { articleService } from '@/lib/db/services/articleService';
import { connectDB } from '@/lib/db/connectDb';

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
 * 記事詳細を取得するAPI
 */
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    // パラメータのIDを取得
    const id = params.id;
    
    // スラッグか通常IDかを判定
    const isSlug = !id.match(/^[0-9a-fA-F]{24}$/);
    
    // 記事を取得
    await connectDB();
    const article = isSlug
      ? await articleService.getArticleBySlug(id)
      : await articleService.getArticleById(id);
    
    // 記事が見つからない場合
    if (!article) {
      return NextResponse.json(
        { error: `ID ${id} の記事が見つかりません` },
        { status: 404 }
      );
    }
    
    return NextResponse.json(article);
  } catch (error) {
    console.error('記事取得中にエラーが発生しました:', error);
    return NextResponse.json(
      { error: '記事の取得に失敗しました', message: error instanceof Error ? error.message : '不明なエラー' },
      { status: 500 }
    );
  }
}

/**
 * 記事を更新するAPI
 */
export async function PATCH(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    // 認証チェック
    if (!verifyApiAuth(request)) {
      return NextResponse.json({ error: '認証に失敗しました' }, { status: 401 });
    }
    
    // パラメータのIDを取得
    const id = params.id;
    
    // リクエストボディの解析
    const updates = await request.json();
    
    // 記事を更新
    await connectDB();
    const updatedArticle = await articleService.updateArticle(id, updates);
    
    // 記事が見つからない場合
    if (!updatedArticle) {
      return NextResponse.json(
        { error: `ID ${id} の記事が見つかりません` },
        { status: 404 }
      );
    }
    
    return NextResponse.json(updatedArticle);
  } catch (error) {
    console.error('記事更新中にエラーが発生しました:', error);
    return NextResponse.json(
      { error: '記事の更新に失敗しました', message: error instanceof Error ? error.message : '不明なエラー' },
      { status: 500 }
    );
  }
}

/**
 * 記事を公開状態に変更するAPI
 */
export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    // 認証チェック
    if (!verifyApiAuth(request)) {
      return NextResponse.json({ error: '認証に失敗しました' }, { status: 401 });
    }
    
    // パラメータのIDを取得
    const id = params.id;
    
    // リクエストボディの解析（公開日時が含まれる可能性がある）
    const body = await request.json();
    const publishDate = body.publishDate ? new Date(body.publishDate) : undefined;
    
    // 記事を公開
    await connectDB();
    const publishedArticle = await articleService.publishArticle(id, publishDate);
    
    // 記事が見つからない場合
    if (!publishedArticle) {
      return NextResponse.json(
        { error: `ID ${id} の記事が見つかりません` },
        { status: 404 }
      );
    }
    
    return NextResponse.json(publishedArticle);
  } catch (error) {
    console.error('記事公開中にエラーが発生しました:', error);
    return NextResponse.json(
      { error: '記事の公開に失敗しました', message: error instanceof Error ? error.message : '不明なエラー' },
      { status: 500 }
    );
  }
}

/**
 * 記事を削除するAPI
 */
export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    // 認証チェック
    if (!verifyApiAuth(request)) {
      return NextResponse.json({ error: '認証に失敗しました' }, { status: 401 });
    }
    
    // パラメータのIDを取得
    const id = params.id;
    
    // 記事を削除
    await connectDB();
    const success = await articleService.deleteArticle(id);
    
    // 記事が見つからない場合
    if (!success) {
      return NextResponse.json(
        { error: `ID ${id} の記事が見つかりません` },
        { status: 404 }
      );
    }
    
    return NextResponse.json(
      { message: '記事が正常に削除されました' },
      { status: 200 }
    );
  } catch (error) {
    console.error('記事削除中にエラーが発生しました:', error);
    return NextResponse.json(
      { error: '記事の削除に失敗しました', message: error instanceof Error ? error.message : '不明なエラー' },
      { status: 500 }
    );
  }
} 