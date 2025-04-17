import React from 'react';
import { articleService } from '@/lib/db/services/articleService';
import ArticleList from '@/components/articles/ArticleList';
import ArticleFilters from '@/components/articles/ArticleFilters';
import { IArticle } from '@/types/article';

type ArticlesPageProps = {
  searchParams: {
    category?: string;
    tag?: string;
    search?: string;
    page?: string;
  };
};

export const metadata = {
  title: '記事一覧 | 大学生Web',
  description: '大学生活に役立つ情報や就活、アルバイト、サークルなど、様々な記事をお届けします。',
};

export default async function ArticlesPage({ searchParams }: ArticlesPageProps) {
  const page = searchParams.page ? parseInt(searchParams.page) : 1;
  const limit = 9;
  const skip = (page - 1) * limit;
  
  // クエリパラメータからフィルターを構築
  const filter = {
    category: searchParams.category,
    tag: searchParams.tag,
    search: searchParams.search,
    status: 'published' as const,
    limit,
    skip
  };
  
  // 記事データと総数を取得
  const result = await articleService.getArticles(filter);
  const totalPages = Math.ceil(result.total / limit);
  
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">記事一覧</h1>
      
      <ArticleFilters 
        currentCategory={searchParams.category} 
        currentTag={searchParams.tag}
        currentSearch={searchParams.search}
      />
      
      <div className="mt-8">
        <ArticleList articles={result.articles as IArticle[]} />
      </div>
      
      {/* ページネーション */}
      {totalPages > 1 && (
        <div className="flex justify-center mt-8">
          <nav className="flex items-center space-x-1">
            {page > 1 && (
              <a
                href={`/articles?${new URLSearchParams({
                  ...searchParams,
                  page: (page - 1).toString()
                })}`}
                className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
              >
                前へ
              </a>
            )}
            
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
              <a
                key={p}
                href={`/articles?${new URLSearchParams({
                  ...searchParams,
                  page: p.toString()
                })}`}
                className={`px-4 py-2 text-sm font-medium ${
                  p === page
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-700 bg-white border border-gray-300 hover:bg-gray-50'
                } rounded-md`}
              >
                {p}
              </a>
            ))}
            
            {page < totalPages && (
              <a
                href={`/articles?${new URLSearchParams({
                  ...searchParams,
                  page: (page + 1).toString()
                })}`}
                className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
              >
                次へ
              </a>
            )}
          </nav>
        </div>
      )}
    </div>
  );
} 