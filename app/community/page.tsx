import Link from 'next/link';
import LatestArticles from '@/components/home/LatestArticles';
import Image from 'next/image';

export default function CommunityPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* ヘッダーセクション */}
      <section className="bg-green-100 rounded-xl p-8 md:p-12 mb-12">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-2/3 mb-6 md:mb-0 md:pr-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-green-800">大学生のためのコミュニティ情報</h1>
            <p className="text-lg text-green-700 mb-6">
              サークル、部活動、学内イベント、ボランティア活動など、充実した大学生活をサポートする情報を提供します。
            </p>
            <Link href="/community/search" className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full font-medium inline-block transition-colors">
              コミュニティを探す
            </Link>
          </div>
          <div className="md:w-1/3 relative">
            <div className="w-full h-64 md:h-80 relative">
              <Image 
                src="/images/campus-life.jpg" 
                alt="大学生コミュニティ" 
                fill 
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* サークル・部活動セクション */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-8 text-center">人気の<span className="text-green-600">サークル・部活動</span></h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* スポーツ系 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <div className="h-48 bg-green-50 flex items-center justify-center">
              <svg className="w-16 h-16 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="p-6">
              <h3 className="font-bold text-xl mb-2">スポーツ系サークル</h3>
              <p className="text-gray-600 mb-4">サッカー、テニス、バスケなど、運動不足解消や友達作りに最適なスポーツ系サークル情報。</p>
              <Link href="/community/category/sports" className="text-green-600 font-medium hover:underline inline-flex items-center">
                詳しく見る
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
          
          {/* 文化系 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <div className="h-48 bg-green-50 flex items-center justify-center">
              <svg className="w-16 h-16 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <div className="p-6">
              <h3 className="font-bold text-xl mb-2">文化系サークル</h3>
              <p className="text-gray-600 mb-4">音楽、演劇、写真、読書など、趣味を探したり創造性を高める文化系サークル情報。</p>
              <Link href="/community/category/culture" className="text-green-600 font-medium hover:underline inline-flex items-center">
                詳しく見る
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
          
          {/* ボランティア */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <div className="h-48 bg-green-50 flex items-center justify-center">
              <svg className="w-16 h-16 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <div className="p-6">
              <h3 className="font-bold text-xl mb-2">ボランティア活動</h3>
              <p className="text-gray-600 mb-4">地域貢献、国際支援、環境保護など、社会に貢献しながら成長できるボランティア情報。</p>
              <Link href="/community/category/volunteer" className="text-green-600 font-medium hover:underline inline-flex items-center">
                詳しく見る
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* おすすめのコミュニティ記事 */}
      <section className="mb-16">
        <LatestArticles 
          limit={3} 
          category="community"
          title="おすすめのコミュニティ記事" 
          viewMoreLink="/articles?category=community" 
          viewMoreText="すべてのコミュニティ記事を見る" 
        />
      </section>
      
      {/* イベント情報セクション */}
      <section className="mb-16 bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-2xl font-bold mb-6">キャンパスイベント情報</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4 text-green-700">定期イベント</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <svg className="w-6 h-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <div>
                  <p className="font-medium">新歓祭</p>
                  <p className="text-gray-600 text-sm">毎年4月に開催される新入生歓迎イベント。サークルや部活動の紹介が行われます。</p>
                </div>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <div>
                  <p className="font-medium">学園祭</p>
                  <p className="text-gray-600 text-sm">秋に開催される大学最大のイベント。模擬店やステージ発表などが行われます。</p>
                </div>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <div>
                  <p className="font-medium">スポーツ大会</p>
                  <p className="text-gray-600 text-sm">スポーツ系サークルによる大会や交流試合が定期的に開催されています。</p>
                </div>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4 text-green-700">特別イベント</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <svg className="w-6 h-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                </svg>
                <div>
                  <p className="font-medium">講演会・シンポジウム</p>
                  <p className="text-gray-600 text-sm">著名な研究者や業界の専門家を招いた講演会が開催されます。</p>
                </div>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                </svg>
                <div>
                  <p className="font-medium">文化発表会</p>
                  <p className="text-gray-600 text-sm">音楽や演劇などの文化系サークルによる発表会が定期的に開催されます。</p>
                </div>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                </svg>
                <div>
                  <p className="font-medium">国際交流イベント</p>
                  <p className="text-gray-600 text-sm">留学生との交流や海外文化を体験できるイベントが開催されます。</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 text-center">
          <Link href="/community/events" className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full font-medium inline-block transition-colors">
            イベントカレンダーを見る
          </Link>
        </div>
      </section>
      
      {/* 学生団体情報 */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-8 text-center">注目の<span className="text-green-600">学生団体</span></h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h3 className="font-bold text-xl mb-3">学生自治会</h3>
            <p className="text-gray-600 mb-4">
              大学生活をより良くするための活動や、学生の意見を大学に伝える役割を担っています。学内の問題解決やイベント企画に興味のある方におすすめです。
            </p>
            <Link href="/community/organizations/student-council" className="text-green-600 font-medium hover:underline inline-flex items-center">
              詳細を見る
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h3 className="font-bold text-xl mb-3">国際交流サークル</h3>
            <p className="text-gray-600 mb-4">
              留学生との交流や言語交換、国際イベントの企画を行っています。異文化理解を深めたい方や語学力を向上させたい方におすすめです。
            </p>
            <Link href="/community/organizations/international-exchange" className="text-green-600 font-medium hover:underline inline-flex items-center">
              詳細を見る
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