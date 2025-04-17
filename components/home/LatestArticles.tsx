import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { articleService } from '@/lib/db/services/articleService';
import { formatDate } from '@/lib/utils/dateUtils';
import { Types } from 'mongoose';
import { IArticle } from '@/types/article';

type LatestArticlesProps = {
  limit?: number;
  category?: string;
  title?: string;
  viewMoreLink?: string;
  viewMoreText?: string;
};

export default async function LatestArticles({
  limit = 3,
  category,
  title = "最新の情報",
  viewMoreLink = "/articles",
  viewMoreText = "すべて見る"
}: LatestArticlesProps) {
  // 記事を取得
  const result = await articleService.getArticles({
    status: 'published',
    category,
    limit,
    skip: 0
  });

  const articles = result.articles;

  // カテゴリーに応じた色とテキストを設定するユーティリティ関数
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

  return (
    <>
      {title && viewMoreLink && (
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold">{title}</h2>
          <Link href={viewMoreLink} className="text-blue-600 hover:underline">{viewMoreText}</Link>
        </div>
      )}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {articles.length > 0 ? (
          articles.map((article: IArticle) => {
            const categoryStyle = getCategoryStyles(article.category);
            
            return (
              <Link 
                key={(article._id as unknown as Types.ObjectId).toString()} 
                href={`/articles/${article.slug}`}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all transform hover:-translate-y-1"
              >
                <div className="relative h-48 bg-gray-200">
                  <Image
                    src={article.imageUrl || categoryStyle.defaultImage}
                    alt={article.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <span className={`inline-block px-3 py-1 ${categoryStyle.bg} ${categoryStyle.text} text-xs font-medium rounded-full mb-2`}>
                    {categoryStyle.label}
                  </span>
                  <h3 className="font-bold text-lg mb-2 line-clamp-2">{article.title}</h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">{article.summary}</p>
                  <div className="text-sm text-gray-500">
                    {article.publishDate && formatDate(article.publishDate)}
                  </div>
                </div>
              </Link>
            );
          })
        ) : (
          <div className="col-span-3 py-8 text-center text-gray-500">
            表示する記事がありません
          </div>
        )}
      </div>
    </>
  );
} 