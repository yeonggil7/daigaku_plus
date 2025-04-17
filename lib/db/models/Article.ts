import mongoose, { Schema, Document, Model } from 'mongoose';
import { ArticleCategory } from '../../ai/article-generator';

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

// 記事スキーマの定義
const ArticleSchema: Schema = new Schema(
  {
    title: { type: String, required: true, trim: true },
    content: { type: String, required: true },
    summary: { type: String, required: true, trim: true },
    category: { 
      type: String, 
      required: true, 
      enum: ['study', 'career', 'community', 'part-time'] 
    },
    status: { 
      type: String, 
      required: true, 
      enum: ['draft', 'scheduled', 'published'],
      default: 'draft'
    },
    publishDate: { type: Date },
    slug: { 
      type: String, 
      required: true, 
      unique: true, 
      trim: true,
      lowercase: true
    },
    author: { 
      type: String, 
      default: 'AI編集部' 
    },
    tags: [{ type: String, trim: true }],
    aiGenerated: { type: Boolean, default: true },
    generationCost: { type: Number },
    viewCount: { type: Number, default: 0 },
    imageUrl: { type: String }
  },
  { timestamps: true }
);

// スラッグを自動生成するミドルウェア
ArticleSchema.pre('validate', function(this: IArticle, next) {
  if (!this.slug) {
    this.slug = this.title
      .toLowerCase()
      .replace(/[^\w\s-]/g, '')  // 特殊文字を削除
      .replace(/[\s_-]+/g, '-')   // スペースとアンダースコアをハイフンに置換
      .replace(/^-+|-+$/g, '')    // 先頭と末尾のハイフンを削除
      .substring(0, 100);         // 最大100文字に制限
    
    // 重複防止のためにタイムスタンプを追加
    const timestamp = new Date().getTime().toString(36);
    this.slug = `${this.slug}-${timestamp}`;
  }
  next();
});

// 月ごとのコスト集計を行うスタティックメソッド
ArticleSchema.statics.getMonthlyCost = async function(year: number, month: number) {
  const startDate = new Date(year, month - 1, 1);
  const endDate = new Date(year, month, 0);
  
  const result = await this.aggregate([
    {
      $match: {
        createdAt: { $gte: startDate, $lte: endDate },
        aiGenerated: true,
        generationCost: { $exists: true }
      }
    },
    {
      $group: {
        _id: null,
        totalCost: { $sum: '$generationCost' },
        count: { $sum: 1 }
      }
    }
  ]);
  
  return result.length > 0 ? result[0] : { totalCost: 0, count: 0 };
};

// モデルインターフェースの拡張
interface ArticleModel extends Model<IArticle> {
  getMonthlyCost(year: number, month: number): Promise<{ totalCost: number; count: number }>;
}

// モデルの作成（存在しない場合のみ）
const Article = (mongoose.models.Article as ArticleModel) || 
  mongoose.model<IArticle, ArticleModel>('Article', ArticleSchema);

export default Article; 