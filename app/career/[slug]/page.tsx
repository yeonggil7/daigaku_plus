import React from 'react';
import { notFound } from 'next/navigation';
import { articleService } from '@/lib/db/services/articleService';
import { formatDate } from '@/lib/utils/dateUtils';
import Link from 'next/link';
import Image from 'next/image';
import { Types } from 'mongoose';

type CareerArticlePageProps = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({ params }: CareerArticlePageProps) {
  const resolvedParams = await params;
  const article = await articleService.getArticleBySlug(resolvedParams.slug);
  
  if (!article) {
    return {
      title: '記事が見つかりません',
      description: 'お探しの記事は見つかりませんでした。',
    };
  }
  
  return {
    title: `${article.title} | 大学生Web`,
    description: article.summary,
  };
}

export default async function CareerArticlePage({ params }: CareerArticlePageProps) {
  // 重要: paramsをawaitして解決してからスラッグを取得する
  const resolvedParams = await params;
  const { slug } = resolvedParams;
  
  // スラッグから記事を取得
  const article = await articleService.getArticleBySlug(slug);
  
  // 記事が見つからない場合は404
  if (!article) {
    notFound();
  }

  // カテゴリが「career」でない場合は404
  if (article.category !== 'career') {
    notFound();
  }
  
  // カテゴリ別のスタイル
  const getCategoryStyle = (category: string) => {
    switch (category) {
      case 'study':
        return 'bg-blue-100 text-blue-800';
      case 'career':
        return 'bg-purple-100 text-purple-800';
      case 'community':
        return 'bg-green-100 text-green-800';
      case 'part-time':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };
  
  // カテゴリスタイルを取得
  const categoryStyle = getCategoryStyle(article.category);
  
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto">
        <Link href="/career" className="text-purple-600 hover:underline mb-6 inline-block">
          ← キャリア情報に戻る
        </Link>
        
        <article className="bg-white rounded-lg shadow-md p-6 md:p-8 mb-8">
          <h1 className="text-2xl md:text-3xl font-bold mb-4">{article.title}</h1>
          
          <div className="flex flex-wrap items-center gap-4 mb-6 text-sm text-gray-600">
            <span className={`px-3 py-1 rounded-full text-xs font-medium ${categoryStyle}`}>
              キャリア
            </span>
            <time dateTime={article.publishDate?.toISOString()}>
              {article.publishDate ? formatDate(article.publishDate) : '日付なし'}
            </time>
            {article.author && (
              <span>by {article.author}</span>
            )}
          </div>
          
          {article.tags && article.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-6">
              {article.tags.map((tag) => (
                <span key={tag} className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">
                  #{tag}
                </span>
              ))}
            </div>
          )}
          
          <div 
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: article.content }} 
          />
        </article>
        
        <div className="bg-purple-50 rounded-lg p-6 shadow-sm">
          <h2 className="text-xl font-bold mb-4 text-purple-800">関連キャリア情報</h2>
          <ul className="space-y-2">
            <li>
              <Link href="/career/internship" className="text-purple-600 hover:underline">
                インターンシップ情報
              </Link>
            </li>
            <li>
              <Link href="/career/job-hunting" className="text-purple-600 hover:underline">
                就職活動ガイド
              </Link>
            </li>
            <li>
              <Link href="/career/interviews" className="text-purple-600 hover:underline">
                面接対策
              </Link>
            </li>
            <li>
              <Link href="/career/industry-guide" className="text-purple-600 hover:underline">
                業界研究ガイド
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
} 