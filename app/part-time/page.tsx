import Link from 'next/link';
import LatestArticles from '@/components/home/LatestArticles';
import Image from 'next/image';

export default function PartTimePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* ヘッダーセクション */}
      <section className="bg-yellow-100 rounded-xl p-8 md:p-12 mb-12">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-2/3 mb-6 md:mb-0 md:pr-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-yellow-800">大学生のためのバイト情報</h1>
            <p className="text-lg text-yellow-700 mb-6">
              学業と両立できるアルバイト情報や、効率的な探し方、面接対策など、充実したバイトライフをサポートします。
            </p>
            <Link href="/part-time/search" className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded-full font-medium inline-block transition-colors">
              バイト検索を始める
            </Link>
          </div>
          <div className="md:w-1/3 relative">
            <div className="w-full h-64 md:h-80 relative">
              <Image 
                src="/images/part-time-job.jpg" 
                alt="大学生バイト" 
                fill 
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 特集セクション */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-8 text-center">人気の<span className="text-yellow-600">バイト特集</span></h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* 飲食業界 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <div className="h-48 bg-yellow-50 flex items-center justify-center">
              <svg className="w-16 h-16 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="p-6">
              <h3 className="font-bold text-xl mb-2">飲食店バイト</h3>
              <p className="text-gray-600 mb-4">カフェ、レストラン、居酒屋など、シフトの融通が利きやすく、大学生に人気の飲食店バイト情報。</p>
              <Link href="/part-time/category/restaurant" className="text-yellow-600 font-medium hover:underline inline-flex items-center">
                詳しく見る
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
          
          {/* 販売・接客 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <div className="h-48 bg-yellow-50 flex items-center justify-center">
              <svg className="w-16 h-16 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
            </div>
            <div className="p-6">
              <h3 className="font-bold text-xl mb-2">販売・接客バイト</h3>
              <p className="text-gray-600 mb-4">アパレル、コンビニ、スーパーなど、接客スキルが身につく販売系バイトの求人情報。</p>
              <Link href="/part-time/category/retail" className="text-yellow-600 font-medium hover:underline inline-flex items-center">
                詳しく見る
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
          
          {/* オフィスワーク */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <div className="h-48 bg-yellow-50 flex items-center justify-center">
              <svg className="w-16 h-16 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <div className="p-6">
              <h3 className="font-bold text-xl mb-2">オフィスワーク</h3>
              <p className="text-gray-600 mb-4">事務、データ入力、コールセンターなど、ビジネススキルが身につくオフィスワークの求人。</p>
              <Link href="/part-time/category/office" className="text-yellow-600 font-medium hover:underline inline-flex items-center">
                詳しく見る
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* おすすめのバイト記事 */}
      <section className="mb-16">
        <LatestArticles 
          limit={3} 
          category="part-time"
          title="おすすめのバイト情報記事" 
          viewMoreLink="/articles?category=part-time" 
          viewMoreText="すべてのバイト記事を見る" 
        />
      </section>
      
      {/* バイト探しのコツセクション */}
      <section className="mb-16 bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-2xl font-bold mb-6">バイト探しのコツ</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4 text-yellow-700">効果的なバイトの見つけ方</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <svg className="w-6 h-6 text-yellow-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <p className="font-medium">自分のスケジュールを先に確認</p>
                  <p className="text-gray-600 text-sm">授業や課外活動の予定を確認し、働ける時間帯を明確にしておきましょう。</p>
                </div>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-yellow-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <p className="font-medium">複数のバイト情報サイトを活用</p>
                  <p className="text-gray-600 text-sm">1つのサイトだけでなく、複数のバイト情報サイトをチェックすることで選択肢が広がります。</p>
                </div>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-yellow-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <p className="font-medium">大学の求人情報を活用</p>
                  <p className="text-gray-600 text-sm">大学の掲示板やキャリアセンターには学生向けの求人が多く掲載されています。</p>
                </div>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4 text-yellow-700">面接成功のポイント</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <svg className="w-6 h-6 text-yellow-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <p className="font-medium">清潔感のある服装で臨む</p>
                  <p className="text-gray-600 text-sm">カジュアルな職場でも、最初の印象は大切です。清潔感のある服装を心がけましょう。</p>
                </div>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-yellow-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <p className="font-medium">志望動機を具体的に伝える</p>
                  <p className="text-gray-600 text-sm">「近いから」以外の理由を用意し、そのバイトを選んだ理由を明確に伝えましょう。</p>
                </div>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-yellow-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <p className="font-medium">シフトの希望を正直に伝える</p>
                  <p className="text-gray-600 text-sm">無理なシフトを約束すると後々トラブルになります。正直に働ける時間を伝えましょう。</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
} 