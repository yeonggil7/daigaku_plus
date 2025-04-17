#!/usr/bin/env node

/**
 * 手動で作成したサンプル記事JSONファイルをMongoDBにインポートするスクリプト
 */

const fs = require('fs').promises;
const path = require('path');
const mongoose = require('mongoose');
// .env.localファイルを明示的に読み込む
require('dotenv').config({ path: path.resolve(process.cwd(), '.env.local') });

// 環境変数が読み込まれているか確認
console.log('使用するMongoDB URI:', process.env.MONGODB_URI ? 'MongoDB URI が設定されています' : '設定されていません');

// MongoDB接続
async function connectToMongoDB() {
  try {
    const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/daigakusei';
    if (!MONGODB_URI) {
      throw new Error('MongoDBの接続文字列が設定されていません。環境変数MONGODB_URIを設定してください。');
    }

    console.log('接続を試みています...');
    await mongoose.connect(MONGODB_URI, {
      serverSelectionTimeoutMS: 5000 // タイムアウト時間を5秒に設定
    });
    
    console.log('MongoDB接続成功');
  } catch (error) {
    console.error('MongoDBへの接続に失敗しました:', error);
    process.exit(1);
  }
}

// 記事スキーマの定義
const ArticleSchema = new mongoose.Schema(
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
ArticleSchema.pre('validate', function(next) {
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

const Article = mongoose.model('Article', ArticleSchema);

/**
 * sample-articlesディレクトリからすべてのJSONファイルを読み込む
 */
async function getSampleArticleFiles() {
  try {
    const sampleDirPath = path.join(process.cwd(), 'sample-articles');
    const files = await fs.readdir(sampleDirPath);
    return files.filter(file => file.endsWith('.json')).map(file => path.join(sampleDirPath, file));
  } catch (error) {
    console.error('サンプル記事ファイルの読み込みに失敗しました:', error);
    return [];
  }
}

/**
 * JSONファイルから記事データを読み込む
 */
async function readArticleFromFile(filePath) {
  try {
    const data = await fs.readFile(filePath, 'utf8');
    const article = JSON.parse(data);
    
    // publishDateをpublishedAtに変換（必要に応じて）
    if (article.publishDate && !article.publishedAt) {
      article.publishedAt = article.publishDate;
      delete article.publishDate;
    }
    
    return article;
  } catch (error) {
    console.error(`ファイル ${filePath} の読み込みに失敗しました:`, error);
    return null;
  }
}

/**
 * 記事をMongoDBに保存する
 */
async function saveArticleToMongoDB(articleData) {
  try {
    // 既存の記事を探す（スラッグで検索）
    const existingArticle = await Article.findOne({ slug: articleData.slug });
    
    if (existingArticle) {
      console.log(`記事「${articleData.title}」（スラッグ: ${articleData.slug}）は既に存在しています。スキップします。`);
      return false;
    }
    
    // 新しい記事を作成
    const article = new Article(articleData);
    await article.save();
    console.log(`記事「${articleData.title}」をインポートしました。`);
    return true;
  } catch (error) {
    console.error(`記事「${articleData.title}」の保存に失敗しました:`, error);
    return false;
  }
}

/**
 * メイン処理
 */
async function main() {
  try {
    // MongoDBに接続
    await connectToMongoDB();
    
    // サンプル記事ファイルの一覧を取得
    const articleFiles = await getSampleArticleFiles();
    console.log(`${articleFiles.length}件のサンプル記事ファイルが見つかりました。`);
    
    let importedCount = 0;
    let errorCount = 0;
    
    // 各ファイルを処理
    for (const filePath of articleFiles) {
      const articleData = await readArticleFromFile(filePath);
      if (articleData) {
        const success = await saveArticleToMongoDB(articleData);
        if (success) {
          importedCount++;
        }
      } else {
        errorCount++;
      }
    }
    
    console.log(`処理完了: ${importedCount}件のインポートに成功、${errorCount}件のエラーが発生しました。`);
    
    // 接続を閉じる
    await mongoose.disconnect();
    console.log('MongoDB接続を閉じました。');
    
  } catch (error) {
    console.error('処理中にエラーが発生しました:', error);
  }
}

// スクリプトを実行
main(); 