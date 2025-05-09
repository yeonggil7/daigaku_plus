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

// モックデータ
const mockArticles: any[] = [
  {
    _id: '1',
    title: '大学生におすすめの勉強法',
    summary: '効率的な学習法と集中力を高めるための方法を紹介します。',
    slug: 'effective-study-methods',
    category: 'study',
    publishDate: new Date('2023-07-01')
  },
  {
    _id: '2',
    title: '就活準備の始め方',
    summary: '就職活動を成功させるための準備と心構えについて解説します。',
    slug: 'job-hunting-preparation',
    category: 'career',
    publishDate: new Date('2023-06-15')
  },
  {
    _id: '3',
    title: 'サークル選びのポイント',
    summary: '大学生活を充実させるためのサークル選びのコツと注意点を紹介します。',
    slug: 'circle-selection-guide',
    category: 'community',
    publishDate: new Date('2023-06-01')
  },
  {
    _id: '4',
    title: '学生におすすめのバイト',
    summary: '大学生におすすめのアルバイト先と両立のコツについて解説します。',
    slug: 'recommended-part-time-jobs',
    category: 'part-time',
    publishDate: new Date('2023-05-15')
  }
];

// カテゴリー別モックデータ
const categoryMockArticles: {[key: string]: any[]} = {
  'study': [
    {
      _id: '1',
      title: '大学生におすすめの勉強法',
      summary: '効率的な学習法と集中力を高めるための方法を紹介します。',
      slug: 'effective-study-methods',
      category: 'study',
      publishDate: new Date('2023-07-01')
    },
    {
      _id: '5',
      title: 'テスト対策の効率的な進め方',
      summary: '試験前の効果的な学習計画と暗記のコツを紹介します。',
      slug: 'test-preparation-tips',
      category: 'study',
      publishDate: new Date('2023-06-20')
    },
    {
      _id: '6',
      title: '大学のレポート作成術',
      summary: '高評価を得るためのレポートの書き方と資料の探し方を解説します。',
      slug: 'report-writing-guide',
      category: 'study',
      publishDate: new Date('2023-06-05')
    }
  ],
  'career': [
    {
      _id: '2',
      title: '就活準備の始め方',
      summary: '就職活動を成功させるための準備と心構えについて解説します。',
      slug: 'job-hunting-preparation',
      category: 'career',
      publishDate: new Date('2023-06-15')
    },
    {
      _id: '7',
      title: '自己分析の効果的な方法',
      summary: '就活で差をつける自己分析のポイントとは？強みを見つけるための具体的な手法を紹介します。',
      slug: 'effective-self-analysis',
      category: 'career',
      publishDate: new Date('2023-05-25')
    },
    {
      _id: '8',
      title: '面接での自己PRの伝え方',
      summary: '面接官に印象に残る自己PRの構成方法と実例を紹介します。',
      slug: 'self-pr-interview',
      category: 'career',
      publishDate: new Date('2023-05-10')
    }
  ],
  'community': [
    {
      _id: '3',
      title: 'サークル選びのポイント',
      summary: '大学生活を充実させるためのサークル選びのコツと注意点を紹介します。',
      slug: 'circle-selection-guide',
      category: 'community',
      publishDate: new Date('2023-06-01')
    }
  ],
  'part-time': [
    {
      _id: '4',
      title: '学生におすすめのバイト',
      summary: '大学生におすすめのアルバイト先と両立のコツについて解説します。',
      slug: 'recommended-part-time-jobs',
      category: 'part-time',
      publishDate: new Date('2023-05-15')
    },
    {
      _id: '9',
      title: 'バイト面接での好印象の与え方',
      summary: '採用担当者が見ているポイントと、面接で成功するためのコツを解説します。',
      slug: 'part-time-interview-tips',
      category: 'part-time',
      publishDate: new Date('2023-04-25')
    }
  ]
};

export default async function LatestArticles({
  limit = 3,
  category,
  title = "最新の情報",
  viewMoreLink = "/articles",
  viewMoreText = "すべて見る"
}: LatestArticlesProps) {
  let articles;
  
  // 静的ビルド時またはVercel環境ではモックデータを使用
  if (process.env.SKIP_MONGODB === 'true' || process.env.VERCEL_ENV === 'production') {
    if (category) {
      // カテゴリー指定がある場合は、そのカテゴリーのモックデータを使用
      articles = (categoryMockArticles[category] || mockArticles).slice(0, limit);
    } else {
      // カテゴリー指定がない場合は、全カテゴリーのモックデータを使用
      articles = mockArticles.slice(0, limit);
    }
  } else {
    // 通常のデータ取得
    const result = await articleService.getArticles({
      status: 'published',
      category,
      limit,
      skip: 0
    });
    
    articles = result.articles;
  }

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
            const articleId = article._id ? 
              (typeof article._id === 'string' ? article._id : (article._id as unknown as Types.ObjectId).toString()) : 
              '0';
            
            return (
              <Link 
                key={articleId} 
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