import { v4 as uuidv4 } from 'uuid';
import { ArticleCategory, GeneratedArticle } from './generator';

export interface Article extends GeneratedArticle {
  id: string;
  categoryId: ArticleCategory;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date | null;
  viewCount: number;
}

// メモリ内ストレージ（開発用）
const articlesStore: Article[] = [];

/**
 * 記事を保存する
 */
export async function saveArticle(article: GeneratedArticle, category: ArticleCategory): Promise<Article> {
  const now = new Date();
  
  const newArticle: Article = {
    id: uuidv4(),
    ...article,
    categoryId: category,
    createdAt: now,
    updatedAt: now,
    publishedAt: now, // 開発用に自動公開
    viewCount: 0
  };
  
  articlesStore.push(newArticle);
  return newArticle;
}

/**
 * カテゴリごとの記事一覧を取得する
 */
export async function getArticlesByCategory(category: ArticleCategory): Promise<Article[]> {
  return articlesStore
    .filter(article => article.categoryId === category && article.publishedAt !== null)
    .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
}

/**
 * スラグから記事を取得する
 */
export async function getArticleBySlug(slug: string): Promise<Article | null> {
  const article = articlesStore.find(article => article.slug === slug);
  return article || null;
}

/**
 * 最新の記事を取得する
 */
export async function getLatestArticles(limit: number = 10): Promise<Article[]> {
  return articlesStore
    .filter(article => article.publishedAt !== null)
    .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime())
    .slice(0, limit);
}

/**
 * 記事の閲覧数を増やす
 */
export async function incrementViewCount(id: string): Promise<void> {
  const article = articlesStore.find(article => article.id === id);
  if (article) {
    article.viewCount++;
  }
}

/**
 * 記事を削除する
 */
export async function deleteArticle(id: string): Promise<boolean> {
  const index = articlesStore.findIndex(article => article.id === id);
  if (index !== -1) {
    articlesStore.splice(index, 1);
    return true;
  }
  return false;
}

/**
 * 全記事数を取得する
 */
export async function getArticleCount(): Promise<number> {
  return articlesStore.filter(article => article.publishedAt !== null).length;
}

/**
 * タグで記事を検索する
 */
export async function getArticlesByTag(tag: string): Promise<Article[]> {
  return articlesStore
    .filter(article => 
      article.publishedAt !== null && 
      article.tags.some(t => t.toLowerCase() === tag.toLowerCase())
    )
    .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
} 