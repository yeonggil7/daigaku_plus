import React from 'react';
import { notFound } from 'next/navigation';
import { articleService } from '@/lib/db/services/articleService';
import { formatDate } from '@/lib/utils/dateUtils';
import Link from 'next/link';
import Image from 'next/image';
import { Types } from 'mongoose';

// 勉強記事ページのパラメータの型定義
type StudyArticlePageProps = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({ params }: StudyArticlePageProps) {
  // 非同期に解決されたパラメータを使用
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

export default async function StudyArticlePage({ params }: StudyArticlePageProps) {
  // 非同期に解決されたパラメータを使用
  const resolvedParams = await params;
  const article = await articleService.getArticleBySlug(resolvedParams.slug);
  
  if (!article || article.status !== 'published' || article.category !== 'study') {
    notFound();
  }
  
  // カテゴリーに応じた色とスタイルを設定
  const categoryStyle = {
    bg: 'bg-blue-100',
    text: 'text-blue-800',
    label: '勉強',
    defaultImage: '/images/student-studying.jpg',
    accentColor: 'border-blue-500'
  };
  
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <Link href="/study" className="inline-flex items-center text-blue-600 hover:underline mb-6">
          <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          勉強情報一覧に戻る
        </Link>
        
        <article className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="relative h-64 md:h-96 w-full">
            <Image
              src={article.imageUrl || categoryStyle.defaultImage}
              alt={article.title}
              fill
              className="object-cover"
              priority
            />
          </div>
          
          <div className="p-6 md:p-8">
            <div className="mb-6">
              <div className="flex items-center mb-4">
                <span className={`inline-block px-3 py-1 ${categoryStyle.bg} ${categoryStyle.text} text-xs font-medium rounded-full mr-3`}>
                  {categoryStyle.label}
                </span>
                <time className="text-gray-500 text-sm" dateTime={article.publishDate?.toISOString() || ''}>
                  {article.publishDate && formatDate(article.publishDate)}
                </time>
              </div>
              
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                {article.title}
              </h1>
              
              <p className="text-lg text-gray-700 mb-6">
                {article.summary}
              </p>
              
              {article.tags && article.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-6">
                  {article.tags.map((tag) => (
                    <Link 
                      key={tag} 
                      href={`/articles?tag=${encodeURIComponent(tag)}`}
                      className="inline-block bg-gray-100 hover:bg-gray-200 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded transition-colors"
                    >
                      #{tag}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            
            <div className="prose max-w-none">
              <div dangerouslySetInnerHTML={{ __html: article.content }} />
            </div>
            
            <div className="mt-8 pt-6 border-t border-gray-200">
              <div className="flex items-center">
                <div className="text-sm">
                  <p className="text-gray-900 font-medium">{article.author || 'AI編集部'}</p>
                </div>
              </div>
            </div>
          </div>
        </article>
        
        <div className="mt-8 bg-blue-50 rounded-lg p-6">
          <h2 className="text-xl font-bold mb-4">もっと勉強情報を見る</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link 
              href="/study/class-selection" 
              className="block p-4 bg-white rounded-lg shadow hover:shadow-md transition-shadow border-l-4 border-blue-500"
            >
              <h3 className="font-bold text-lg mb-1">授業の選び方</h3>
              <p className="text-gray-600 text-sm">自分に合った科目の選択方法や履修のコツを紹介</p>
            </Link>
            <Link 
              href="/study/learning-methods" 
              className="block p-4 bg-white rounded-lg shadow hover:shadow-md transition-shadow border-l-4 border-blue-500"
            >
              <h3 className="font-bold text-lg mb-1">効率的な学習方法</h3>
              <p className="text-gray-600 text-sm">集中力を高め、効率よく学習するためのテクニック</p>
            </Link>
            <Link 
              href="/study/exam-prep" 
              className="block p-4 bg-white rounded-lg shadow hover:shadow-md transition-shadow border-l-4 border-blue-500"
            >
              <h3 className="font-bold text-lg mb-1">テスト対策</h3>
              <p className="text-gray-600 text-sm">テスト前の効果的な勉強計画と対策法</p>
            </Link>
            <Link 
              href="/study/report-writing" 
              className="block p-4 bg-white rounded-lg shadow hover:shadow-md transition-shadow border-l-4 border-blue-500"
            >
              <h3 className="font-bold text-lg mb-1">レポート・論文作成</h3>
              <p className="text-gray-600 text-sm">説得力のあるレポートの書き方と資料の探し方</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 