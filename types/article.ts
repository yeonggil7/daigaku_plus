import { Document } from 'mongoose';
import { ArticleCategory } from '@/lib/ai/article-generator';

// 記事のステータス
export type ArticleStatus = 'draft' | 'scheduled' | 'published';

// 記事データのインターフェース
export interface IArticle extends Document {
  title: string;
  content: string;
  summary: string;
  category: ArticleCategory;
  status: ArticleStatus;
  publishDate?: Date;
  createdAt: Date;
  updatedAt: Date;
  slug: string;
  author: string;
  tags: string[];
  aiGenerated: boolean;
  generationCost?: number;
  viewCount: number;
  imageUrl?: string;
}

// 記事のフィルタリング条件
export interface ArticleFilter {
  category?: string;
  status?: ArticleStatus;
  tag?: string;
  search?: string;
  slug?: string;
  limit?: number;
  skip?: number;
}

// 記事作成パラメータ
export interface ArticleCreateParams {
  title: string;
  content: string;
  summary: string;
  category: ArticleCategory;
  status?: ArticleStatus;
  publishDate?: Date;
  slug?: string;
  author?: string;
  tags?: string[];
  aiGenerated?: boolean;
  generationCost?: number;
  imageUrl?: string;
} 