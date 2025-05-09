import { connectDB } from '@/lib/db/connectDb';
import Article from '@/lib/db/models/Article';
import Link from 'next/link';
import { formatDate } from '@/lib/utils/date';
import { Metadata } from 'next';

// メタデータを追加
export const metadata: Metadata = {
  title: '記事一覧 | 大学生活ガイド',
  description: '大学生活を充実させるための情報記事を定期的に更新しています'
};

// カテゴリスタイル管理関数
function getCategoryStyle(category: string) {
  switch (category) {
    case 'study':
      return { bg: 'bg-blue-100', text: 'text-blue-800' };
    case 'career':
      return { bg: 'bg-green-100', text: 'text-green-800' };
    case 'community':
      return { bg: 'bg-purple-100', text: 'text-purple-800' };
    case 'part-time':
      return { bg: 'bg-yellow-100', text: 'text-yellow-800' };
    default:
      return { bg: 'bg-gray-100', text: 'text-gray-800' };
  }
}

function getCategoryName(category: string) {
  const names: Record<string, string> = {
    'study': '勉強',
    'career': '就職',
    'community': 'コミュニティ',
    'part-time': 'バイト'
  };
  return names[category] || category;
}

// このページはサーバーコンポーネントとして実装
export default async function BlogPage() {
  // データベースに接続
  await connectDB();
  
  // SKIP_MONGODBが設定されている場合はモックデータを使用
  let articles;
  if (process.env.SKIP_MONGODB === 'true' || process.env.VERCEL_ENV === 'production') {
    // モックデータの作成
    articles = [
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
  } else {
    // 公開済みの記事を取得（最新のものから最大20件）
    articles = await Article.find({ status: 'published' })
      .sort({ publishDate: -1 })
      .limit(20)
      .lean();
  }
  
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">記事一覧</h1>
        <p className="text-gray-600">大学生活を充実させるための情報記事を定期的に更新しています</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.length > 0 ? (
          articles.map((article) => {
            const categoryStyle = getCategoryStyle(article.category);
            
            return (
              <div key={article._id.toString()} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-48 bg-gray-200"></div>
                <div className="p-6">
                  <span className={`inline-block px-3 py-1 ${categoryStyle.bg} ${categoryStyle.text} text-xs font-medium rounded-full mb-2`}>
                    {getCategoryName(article.category)}
                  </span>
                  <h3 className="font-bold text-lg mb-2">{article.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{article.summary}</p>
                  <div className="flex justify-between items-center">
                    <div className="text-sm text-gray-500">
                      {article.publishDate ? formatDate(article.publishDate) : '日付なし'}
                    </div>
                    <Link href={`/blog/${article.slug}`} className="text-blue-600 hover:underline text-sm">
                      続きを読む →
                    </Link>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <div className="col-span-full text-center py-12">
            <p className="text-gray-500 mb-4">まだ記事がありません</p>
            <p className="text-sm text-gray-400">記事は定期的に更新されます</p>
          </div>
        )}
      </div>
    </div>
  );
}
