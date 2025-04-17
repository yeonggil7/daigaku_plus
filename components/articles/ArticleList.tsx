import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { IArticle } from '@/types/article';
import { formatDate } from '@/lib/utils/dateUtils';
import { Types } from 'mongoose';

type ArticleListProps = {
  articles: IArticle[];
};

export default function ArticleList({ articles }: ArticleListProps) {
  if (articles.length === 0) {
    return (
      <div className="text-center py-12">
        <h3 className="text-lg font-medium text-gray-700">条件に一致する記事が見つかりませんでした</h3>
        <p className="text-gray-500 mt-2">別の検索条件をお試しください。</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {articles.map((article) => (
        <ArticleCard key={(article._id as unknown as Types.ObjectId).toString()} article={article} />
      ))}
    </div>
  );
}

// カテゴリーに応じた色とスタイルを設定するユーティリティ関数
const getCategoryStyles = (category: string) => {
  switch (category) {
    case 'study':
      return { bg: 'bg-blue-100', text: 'text-blue-800', label: '勉強', defaultImage: '/images/student-studying.jpg' };
    case 'career':
      return { bg: 'bg-green-100', text: 'text-green-800', label: 'キャリア', defaultImage: '/images/blog-thumb.jpg' };
    case 'community':
      return { bg: 'bg-purple-100', text: 'text-purple-800', label: 'コミュニティ', defaultImage: '/images/campus-life.jpg' };
    case 'part-time':
      return { bg: 'bg-yellow-100', text: 'text-yellow-800', label: 'バイト', defaultImage: '/images/part-time-job.jpg' };
    default:
      return { bg: 'bg-gray-100', text: 'text-gray-800', label: 'その他', defaultImage: '/images/study-group.jpg' };
  }
};

function ArticleCard({ article }: { article: IArticle }) {
  const categoryStyle = getCategoryStyles(article.category);
  
  return (
    <Link 
      href={`/articles/${article.slug}`}
      className="block group"
    >
      <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:shadow-lg hover:-translate-y-1">
        <div className="relative h-48 w-full">
          <Image
            src={article.imageUrl || categoryStyle.defaultImage}
            alt={article.title}
            fill
            className="object-cover"
          />
          <div className="absolute top-0 right-0 px-2 py-1 m-2 rounded-md" 
            style={{ backgroundColor: 'rgba(255, 255, 255, 0.85)' }}>
            <span className={`text-xs font-medium ${categoryStyle.text}`}>
              {categoryStyle.label}
            </span>
          </div>
        </div>
        <div className="p-4">
          <div className="text-xs text-gray-500 mb-1">
            {article.publishDate && formatDate(article.publishDate)}
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600">
            {article.title}
          </h3>
          <p className="text-gray-600 text-sm line-clamp-2">
            {article.summary}
          </p>
          {article.tags?.length > 0 && (
            <div className="mt-3 flex flex-wrap gap-1">
              {article.tags.slice(0, 3).map((tag) => (
                <span 
                  key={tag} 
                  className="inline-block bg-gray-100 text-gray-800 text-xs px-2 py-0.5 rounded"
                >
                  #{tag}
                </span>
              ))}
              {article.tags.length > 3 && (
                <span className="inline-block text-gray-500 text-xs">+{article.tags.length - 3}</span>
              )}
            </div>
          )}
        </div>
      </div>
    </Link>
  );
} 