import Link from 'next/link';
import LatestArticles from '@/components/home/LatestArticles';
import Image from 'next/image';
import { Metadata } from 'next';

// メタデータを追加
export const metadata: Metadata = {
  title: 'キャリア・就職情報 | 大学生活ガイド',
  description: '就職活動のサポートから、インターンシップ、自己分析、業界研究まで、あなたの将来のキャリアをサポートする情報を提供します。'
};

// モックの最新記事
const mockLatestArticles = [
  {
    _id: '1',
    title: '自己分析の効果的な方法',
    summary: '就活で差をつける自己分析のポイントとは？強みを見つけるための具体的な手法を紹介します。',
    slug: 'effective-self-analysis',
    category: 'career',
    publishDate: new Date('2023-06-15')
  },
  {
    _id: '2',
    title: '面接での自己PRの伝え方',
    summary: '面接官に印象に残る自己PRの構成方法と実例を紹介します。',
    slug: 'self-pr-interview',
    category: 'career',
    publishDate: new Date('2023-05-20')
  },
  {
    _id: '3',
    title: '業界研究の進め方',
    summary: '効率的な業界研究のステップと情報収集のコツを解説します。',
    slug: 'industry-research-tips',
    category: 'career',
    publishDate: new Date('2023-04-10')
  }
];

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

// 日付フォーマット関数
function formatDate(date: Date): string {
  return date.toLocaleDateString('ja-JP', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

export default function CareerPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* ヘッダーセクション */}
      <section className="bg-green-100 rounded-xl p-8 md:p-12 mb-12">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-2/3 mb-6 md:mb-0 md:pr-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-green-800">大学生のためのキャリア情報</h1>
            <p className="text-lg text-green-700 mb-6">
              就職活動のサポートから、インターンシップ、自己分析、業界研究まで、あなたの将来のキャリアをサポートする情報を提供します。
            </p>
            <Link href="/career/search" className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full font-medium inline-block transition-colors">
              就活情報を探す
            </Link>
          </div>
          <div className="md:w-1/3 relative">
            <div className="w-full h-64 md:h-80 relative">
              <Image 
                src="/images/blog-thumb.jpg" 
                alt="キャリア情報" 
                fill 
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 就活ステップセクション */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-8 text-center">就活<span className="text-green-600">ステップガイド</span></h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* 自己分析 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="h-3 bg-green-500"></div>
            <div className="p-6">
              <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
                <span className="text-green-600 font-bold text-xl">1</span>
              </div>
              <h3 className="font-bold text-xl mb-3">自己分析</h3>
              <p className="text-gray-600 mb-4">自分の強み・弱み、価値観、スキルを理解し、あなたに合った仕事を見つけるための第一歩です。</p>
              <Link href="/career/self-analysis" className="text-green-600 font-medium hover:underline inline-flex items-center">
                詳しく見る
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
          
          {/* 業界研究 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="h-3 bg-green-500"></div>
            <div className="p-6">
              <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
                <span className="text-green-600 font-bold text-xl">2</span>
              </div>
              <h3 className="font-bold text-xl mb-3">業界研究</h3>
              <p className="text-gray-600 mb-4">様々な業界の動向や特徴を理解し、自分が働きたい業界を見つけるためのリサーチ方法を紹介します。</p>
              <Link href="/career/industry-research" className="text-green-600 font-medium hover:underline inline-flex items-center">
                詳しく見る
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
          
          {/* エントリー */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="h-3 bg-green-500"></div>
            <div className="p-6">
              <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
                <span className="text-green-600 font-bold text-xl">3</span>
              </div>
              <h3 className="font-bold text-xl mb-3">エントリー</h3>
              <p className="text-gray-600 mb-4">効果的なエントリーシートの書き方やWebテスト対策など、選考を突破するためのポイントを解説します。</p>
              <Link href="/career/entry-preparation" className="text-green-600 font-medium hover:underline inline-flex items-center">
                詳しく見る
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
          
          {/* 面接対策 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="h-3 bg-green-500"></div>
            <div className="p-6">
              <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
                <span className="text-green-600 font-bold text-xl">4</span>
              </div>
              <h3 className="font-bold text-xl mb-3">面接対策</h3>
              <p className="text-gray-600 mb-4">自己PRや志望動機の伝え方、よくある質問への回答例など、面接を成功させるためのテクニックを紹介します。</p>
              <Link href="/career/interview-tips" className="text-green-600 font-medium hover:underline inline-flex items-center">
                詳しく見る
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* おすすめのキャリア記事 */}
      <section className="mb-16">
        <div className="mb-6 flex justify-between items-center">
          <h2 className="text-2xl font-bold">おすすめのキャリア記事</h2>
          <Link href="/articles?category=career" className="text-green-600 hover:underline">
            すべてのキャリア記事を見る
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {mockLatestArticles.map((article) => {
            const categoryStyle = getCategoryStyle(article.category);
            
            return (
              <div key={article._id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-48 bg-gray-200"></div>
                <div className="p-6">
                  <span className={`inline-block px-3 py-1 ${categoryStyle.bg} ${categoryStyle.text} text-xs font-medium rounded-full mb-2`}>
                    キャリア
                  </span>
                  <h3 className="font-bold text-lg mb-2">{article.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{article.summary}</p>
                  <div className="flex justify-between items-center">
                    <div className="text-sm text-gray-500">
                      {formatDate(article.publishDate)}
                    </div>
                    <Link href={`/blog/${article.slug}`} className="text-green-600 hover:underline text-sm">
                      続きを読む →
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
      
      {/* インターンシップ情報 */}
      <section className="mb-16 bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-2xl font-bold mb-6">インターンシップ情報</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4 text-green-700">インターンシップのメリット</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <svg className="w-6 h-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <p className="font-medium">業界の実態を知れる</p>
                  <p className="text-gray-600 text-sm">実際の業務を体験することで、イメージと現実のギャップを埋められます。</p>
                </div>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <p className="font-medium">社会人基礎力が身につく</p>
                  <p className="text-gray-600 text-sm">ビジネスマナーやコミュニケーション能力など、社会で必要なスキルが習得できます。</p>
                </div>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <p className="font-medium">就活で有利になる</p>
                  <p className="text-gray-600 text-sm">インターン経験は選考でのアピールポイントになり、内定直結の場合もあります。</p>
                </div>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4 text-green-700">インターンシップの探し方</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <svg className="w-6 h-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
                <div>
                  <p className="font-medium">就活サイト</p>
                  <p className="text-gray-600 text-sm">リクナビやマイナビなどの就活サイトでインターンシップ情報を探せます。</p>
                </div>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
                <div>
                  <p className="font-medium">大学のキャリアセンター</p>
                  <p className="text-gray-600 text-sm">大学独自のインターンシップ枠や情報を提供していることがあります。</p>
                </div>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
                <div>
                  <p className="font-medium">企業公式サイト</p>
                  <p className="text-gray-600 text-sm">興味のある企業の採用サイトで独自のインターンシップを探せます。</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 text-center">
          <Link href="/career/internships" className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full font-medium inline-block transition-colors">
            インターンシップ情報を見る
          </Link>
        </div>
      </section>
      
      {/* 業界別企業情報 */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-8 text-center">注目の<span className="text-green-600">業界情報</span></h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h3 className="font-bold text-xl mb-3">IT・テクノロジー業界</h3>
            <p className="text-gray-600 mb-4">
              デジタルトランスフォーメーションの加速により、IT人材の需要は高まる一方です。プログラミングやデータ分析スキルを持つ学生は特に注目されています。
            </p>
            <Link href="/career/industry/it" className="text-green-600 font-medium hover:underline inline-flex items-center">
              業界を詳しく見る
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h3 className="font-bold text-xl mb-3">コンサルティング業界</h3>
            <p className="text-gray-600 mb-4">
              様々な企業の課題解決を支援するコンサルタントは、論理的思考力やコミュニケーション能力が求められる職種です。幅広い知識と問題解決能力を身につけたい方に人気があります。
            </p>
            <Link href="/career/industry/consulting" className="text-green-600 font-medium hover:underline inline-flex items-center">
              業界を詳しく見る
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h3 className="font-bold text-xl mb-3">金融業界</h3>
            <p className="text-gray-600 mb-4">
              銀行、証券、保険など多様な職種がある金融業界。フィンテックの台頭により、従来の金融とテクノロジーを融合した新しいサービスも増えています。安定性と革新性のバランスが魅力です。
            </p>
            <Link href="/career/industry/finance" className="text-green-600 font-medium hover:underline inline-flex items-center">
              業界を詳しく見る
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h3 className="font-bold text-xl mb-3">メディア・広告業界</h3>
            <p className="text-gray-600 mb-4">
              デジタルメディアの普及により大きく変化している業界です。クリエイティブな思考と最新のマーケティング知識を活かしたい方に向いています。SNSやデジタル広告の知識が強みになります。
            </p>
            <Link href="/career/industry/media" className="text-green-600 font-medium hover:underline inline-flex items-center">
              業界を詳しく見る
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
} 