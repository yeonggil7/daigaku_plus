import React from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { articleService } from '@/lib/db/services/articleService';
import { formatDate } from '@/lib/utils/dateUtils';
import { IArticle } from '@/types/article';
import { Types } from 'mongoose';
import ArticleContent from '@/components/articles/ArticleContent';
import ShareButtons from '@/components/articles/ShareButtons';
import AuthorInfo from '@/components/articles/AuthorInfo';

// カテゴリー名を日本語に変換する関数
const getCategoryNameJa = (category: string): string => {
  const categoryMap: Record<string, string> = {
    'study': '学習',
    'career': 'キャリア',
    'community': 'コミュニティ',
    'part-time': 'アルバイト',
    'life': '生活'
  };
  return categoryMap[category] || category;
};

// カテゴリーに応じたスタイルを返す関数
const getCategoryStyles = (category: string): { bg: string; text: string; border: string } => {
  switch (category) {
    case 'study':
      return { bg: 'bg-blue-100', text: 'text-blue-800', border: 'border-blue-300' };
    case 'career':
      return { bg: 'bg-purple-100', text: 'text-purple-800', border: 'border-purple-300' };
    case 'community':
      return { bg: 'bg-green-100', text: 'text-green-800', border: 'border-green-300' };
    case 'part-time':
      return { bg: 'bg-yellow-100', text: 'text-yellow-800', border: 'border-yellow-300' };
    default:
      return { bg: 'bg-gray-100', text: 'text-gray-800', border: 'border-gray-300' };
  }
};

type ArticlePageProps = {
  params: {
    slug: string;
  };
};

export async function generateMetadata(
  { params }: ArticlePageProps
): Promise<Metadata> {
  try {
    // パラメータをawaitしてから使用
    const resolvedParams = await params;
    const article = await articleService.getArticleBySlug(resolvedParams.slug);

    if (!article) {
      return {
        title: '記事が見つかりません | 大学生活ガイド',
        description: '指定された記事は存在しないか、削除された可能性があります。',
      };
    }

    return {
      title: `${article.title} | 大学生活ガイド`,
      description: article.summary,
      openGraph: {
        title: article.title,
        description: article.summary,
        type: 'article',
        images: article.imageUrl ? [article.imageUrl] : [],
      }
    };
  } catch (error) {
    console.error('Metadata error:', error);
    return {
      title: '記事が見つかりません | 大学生活ガイド',
      description: '指定された記事は存在しないか、削除された可能性があります。',
    };
  }
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  try {
    // パラメータをawaitしてから使用
    const resolvedParams = await params;
    
    // 記事のデータを取得
    const articleData = await articleService.getArticleBySlug(resolvedParams.slug);
    
    if (!articleData) {
      return notFound();
    }

    // 記事のステータスを確認
    if (articleData.status !== 'published' && process.env.NODE_ENV === 'production') {
      return notFound();
    }

    // 閲覧数をインクリメント
    if (articleData._id) {
      const articleId = typeof articleData._id === 'string' 
        ? articleData._id 
        : articleData._id.toString();
      await articleService.incrementViewCount(articleId);
    }

    // 関連記事を取得
    const relatedArticlesResponse = await articleService.getArticles({
      category: articleData.category,
      status: 'published',
      limit: 3,
    });
    
    const relatedArticles = relatedArticlesResponse.articles || [];

    // カテゴリーに基づいたスタイルを取得
    const categoryStyle = getCategoryStyles(articleData.category);

    return (
      <article className="max-w-4xl mx-auto px-4 py-8">
        <div className="mb-8">
          <div className={`inline-block px-3 py-1 rounded-md text-sm font-medium mb-4 ${categoryStyle.text} ${categoryStyle.bg}`}>
            {getCategoryNameJa(articleData.category)}
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">{articleData.title}</h1>
          <div className="flex items-center text-gray-600 mb-6">
            <span>{formatDate(articleData.publishDate || articleData.createdAt)}</span>
            <span className="mx-2">•</span>
            <span>閲覧数: {articleData.viewCount || 0}</span>
          </div>
          {articleData.imageUrl && (
            <div className="relative w-full h-64 md:h-96 mb-8 rounded-lg overflow-hidden">
              <Image
                src={articleData.imageUrl}
                alt={articleData.title}
                fill
                style={{ objectFit: 'cover' }}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority
              />
            </div>
          )}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-3">
            <div className="prose max-w-none">
              <ArticleContent content={articleData.content} />
            </div>
            
            <div className="mt-8 pt-6 border-t border-gray-200">
              <ShareButtons title={articleData.title} />
            </div>
            
            {articleData.author && (
              <div className="mt-8 pt-6 border-t border-gray-200">
                <AuthorInfo author={articleData.author} />
              </div>
            )}
          </div>
          
          <aside className="md:col-span-1">
            <div className="sticky top-24">
              <h3 className="text-xl font-bold mb-4">関連記事</h3>
              {relatedArticles.length > 0 ? (
                <div className="space-y-4">
                  {relatedArticles.map((relatedArticle) => (
                    <Link 
                      href={`/articles/${relatedArticle.slug}`} 
                      key={relatedArticle._id ? relatedArticle._id.toString() : relatedArticle.slug}
                      className="block group"
                    >
                      <div className="flex items-start space-x-3">
                        {relatedArticle.imageUrl && (
                          <div className="relative w-20 h-20 rounded overflow-hidden flex-shrink-0">
                            <Image
                              src={relatedArticle.imageUrl}
                              alt={relatedArticle.title}
                              fill
                              style={{ objectFit: 'cover' }}
                              sizes="80px"
                            />
                          </div>
                        )}
                        <div>
                          <h4 className="text-sm font-medium group-hover:text-blue-600 transition-colors">
                            {relatedArticle.title}
                          </h4>
                          <p className="text-xs text-gray-500 mt-1">
                            {formatDate(relatedArticle.publishDate || relatedArticle.createdAt)}
                          </p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              ) : (
                <p className="text-gray-500 text-sm">関連記事はありません</p>
              )}
            </div>
          </aside>
        </div>
      </article>
    );
  } catch (error) {
    console.error('Error in ArticlePage:', error);
    return notFound();
  }
} 