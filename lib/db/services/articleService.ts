import { connectDB, isConnected } from '../connectDb';
import Article, { IArticle, ArticleStatus } from '../models/Article';
import { ArticleCategory, ArticleGenerationParams, generateArticle } from '../../ai/article-generator';

// モックデータ（MongoDB接続がないケース用）
const MOCK_ARTICLES = [
  {
    _id: '1',
    title: '大学生活スタートガイド',
    content: '<p>大学生活を充実させるためのガイドです。</p>',
    summary: '新入生のための大学生活ガイド',
    slug: 'university-start-guide',
    category: 'study',
    tags: ['大学生活', '新入生'],
    status: 'published',
    publishDate: new Date(),
    createdAt: new Date(),
    updatedAt: new Date(),
    author: 'サイト管理者'
  },
  {
    _id: '2',
    title: '効率的な勉強法',
    content: '<p>効率よく勉強するためのテクニックを紹介します。</p>',
    summary: '時間を有効活用して成績アップ',
    slug: 'efficient-study-methods',
    category: 'study',
    tags: ['勉強法', '時間管理'],
    status: 'published',
    publishDate: new Date(),
    createdAt: new Date(),
    updatedAt: new Date(),
    author: 'サイト管理者'
  }
];

/**
 * 記事作成のためのパラメータ
 */
export type ArticleCreateParams = {
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
};

/**
 * AI記事生成用のパラメータ
 */
export type AIArticleGenerateParams = {
  generationParams: ArticleGenerationParams;
  status?: ArticleStatus;
  publishDate?: Date;
  author?: string;
  tags?: string[];
};

/**
 * 記事データサービス
 */
export const articleService = {
  /**
   * 新しい記事を作成する
   */
  async createArticle(params: ArticleCreateParams): Promise<IArticle> {
    await connectDB();
    
    const article = new Article({
      title: params.title,
      content: params.content,
      summary: params.summary,
      category: params.category,
      status: params.status || 'draft',
      publishDate: params.publishDate,
      slug: params.slug || '', // スラッグは自動生成される
      author: params.author || 'AI編集部',
      tags: params.tags || [],
      aiGenerated: params.aiGenerated !== undefined ? params.aiGenerated : false,
      generationCost: params.generationCost
    });
    
    return await article.save();
  },
  
  /**
   * AIを使って記事を生成し、保存する
   */
  async generateAndCreateArticle(params: AIArticleGenerateParams): Promise<IArticle> {
    // AIで記事を生成
    const generatedArticle = await generateArticle(params.generationParams);
    
    // 記事をデータベースに保存
    return await this.createArticle({
      title: generatedArticle.title,
      content: generatedArticle.content,
      summary: generatedArticle.summary,
      category: params.generationParams.category,
      status: params.status || 'draft',
      publishDate: params.publishDate,
      author: params.author || 'AI編集部',
      tags: params.tags || [],
      aiGenerated: true,
      generationCost: generatedArticle.estimatedCost
    });
  },
  
  /**
   * 記事を更新する
   */
  async updateArticle(id: string, updates: Partial<ArticleCreateParams>): Promise<IArticle | null> {
    await connectDB();
    
    const article = await Article.findById(id);
    if (!article) {
      return null;
    }
    
    // 更新可能なフィールドを設定
    if (updates.title) article.title = updates.title;
    if (updates.content) article.content = updates.content;
    if (updates.summary) article.summary = updates.summary;
    if (updates.category) article.category = updates.category;
    if (updates.status) article.status = updates.status;
    if (updates.publishDate) article.publishDate = updates.publishDate;
    if (updates.author) article.author = updates.author;
    if (updates.tags) article.tags = updates.tags;
    
    return await article.save();
  },
  
  /**
   * 記事を公開する
   */
  async publishArticle(id: string, publishDate?: Date): Promise<IArticle | null> {
    await connectDB();
    
    const date = publishDate || new Date();
    
    return await Article.findByIdAndUpdate(
      id,
      { 
        status: 'published',
        publishDate: date
      },
      { new: true }
    );
  },
  
  /**
   * 記事を削除する
   */
  async deleteArticle(id: string): Promise<boolean> {
    await connectDB();
    
    const result = await Article.deleteOne({ _id: id });
    return result.deletedCount > 0;
  },
  
  /**
   * 全ての記事を取得する
   */
  async getAllArticles(
    options: {
      status?: ArticleStatus;
      category?: ArticleCategory;
      limit?: number;
      skip?: number;
      sortBy?: string;
      sortOrder?: 'asc' | 'desc';
    } = {}
  ): Promise<IArticle[]> {
    try {
      await connectDB();
      
      // MongoDB接続に失敗した場合はモックデータを使用
      if (!isConnected()) {
        return MOCK_ARTICLES as unknown as IArticle[];
      }
      
      const query: any = {};
      if (options.status) query.status = options.status;
      if (options.category) query.category = options.category;
      
      const sortOptions: any = {};
      sortOptions[options.sortBy || 'createdAt'] = options.sortOrder === 'asc' ? 1 : -1;
      
      return await Article.find(query)
        .sort(sortOptions)
        .skip(options.skip || 0)
        .limit(options.limit || 50);
    } catch (error) {
      console.error('記事一覧取得中にエラーが発生しました:', error);
      // モックデータから返す
      return MOCK_ARTICLES as unknown as IArticle[];
    }
  },
  
  /**
   * IDで記事を取得
   */
  async getArticleById(id: string): Promise<IArticle | null> {
    try {
      // MongoDB接続を試みる
      await connectDB();
      
      // MongoDB接続に失敗した場合はモックデータを使用
      if (!isConnected()) {
        const mockArticle = MOCK_ARTICLES.find(article => article._id === id);
        return mockArticle as unknown as IArticle || null;
      }
      
      return await Article.findById(id);
    } catch (error) {
      console.error('記事取得中にエラーが発生しました:', error);
      // モックデータから返す
      const mockArticle = MOCK_ARTICLES.find(article => article._id === id);
      return mockArticle as unknown as IArticle || null;
    }
  },
  
  /**
   * スラッグで記事を取得
   */
  async getArticleBySlug(slug: string): Promise<IArticle | null> {
    try {
      await connectDB();
      
      // MongoDB接続に失敗した場合はモックデータを使用
      if (!isConnected()) {
        const mockArticle = MOCK_ARTICLES.find(article => article.slug === slug);
        return mockArticle as unknown as IArticle || null;
      }
      
      return await Article.findOne({ slug });
    } catch (error) {
      console.error('記事取得中にエラーが発生しました:', error);
      // モックデータから返す
      const mockArticle = MOCK_ARTICLES.find(article => article.slug === slug);
      return mockArticle as unknown as IArticle || null;
    }
  },
  
  /**
   * 記事の総数を取得
   */
  async getArticlesCount(
    options: {
      status?: ArticleStatus;
      category?: ArticleCategory;
    } = {}
  ): Promise<number> {
    await connectDB();
    
    const query: any = {};
    if (options.status) query.status = options.status;
    if (options.category) query.category = options.category;
    
    return await Article.countDocuments(query);
  },
  
  /**
   * 月間コスト情報を取得
   */
  async getMonthlyCost(year: number, month: number): Promise<{ totalCost: number; count: number }> {
    await connectDB();
    return await Article.getMonthlyCost(year, month);
  },
  
  /**
   * 予約投稿記事を公開する（スケジューラーで実行）
   */
  async publishScheduledArticles(): Promise<number> {
    await connectDB();
    
    const now = new Date();
    
    const result = await Article.updateMany(
      { 
        status: 'scheduled',
        publishDate: { $lte: now }
      },
      { status: 'published' }
    );
    
    return result.modifiedCount;
  },
  
  /**
   * 関連記事を取得する
   */
  async getRelatedArticles(params: {
    category: string;
    currentArticleId: string;
    limit?: number;
    tags?: string[];
  }): Promise<IArticle[]> {
    await connectDB();
    
    const { category, currentArticleId, tags, limit = 3 } = params;
    
    let query = {
      category,
      status: 'published',
      _id: { $ne: currentArticleId }
    };
    
    // タグがある場合は、共通タグを持つ記事を優先
    const articles = await Article.find(query)
      .sort({ publishDate: -1 })
      .limit(limit);
      
    return articles;
  },
  
  /**
   * 記事の閲覧数を増やす
   */
  async incrementViewCount(id: string): Promise<void> {
    await connectDB();
    
    await Article.findByIdAndUpdate(id, { $inc: { viewCount: 1 } });
    return;
  },
  
  /**
   * 記事を一覧取得する
   */
  async getArticles(filter: {
    category?: string;
    tag?: string;
    search?: string;
    status?: string;
    limit?: number;
    skip?: number;
  }): Promise<{ articles: IArticle[]; total: number }> {
    await connectDB();
    
    const { category, tag, search, status, limit = 10, skip = 0 } = filter;
    
    // クエリを構築
    const query: any = {};
    
    // 公開ステータス
    if (status) {
      query.status = status;
    }
    
    // カテゴリーフィルター
    if (category) {
      query.category = category;
    }
    
    // タグフィルター
    if (tag) {
      query.tags = tag;
    }
    
    // 検索クエリ
    if (search) {
      query.$or = [
        { title: { $regex: search, $options: 'i' } },
        { summary: { $regex: search, $options: 'i' } },
        { content: { $regex: search, $options: 'i' } }
      ];
    }
    
    // 記事を取得
    const articles = await Article.find(query)
      .sort({ publishDate: -1 })
      .skip(skip)
      .limit(limit);
      
    // 総数を取得
    const total = await Article.countDocuments(query);
    
    return { articles, total };
  }
}; 