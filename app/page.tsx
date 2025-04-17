import Image from "next/image";
import Link from "next/link";
import LatestArticles from "@/components/home/LatestArticles";

export default async function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* ヒーローセクション */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-xl p-8 md:p-12 shadow-lg mb-12">
        <div className="max-w-3xl">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            大学生活を<span className="text-yellow-300">もっと</span>充実させよう
          </h1>
          <p className="text-lg mb-6">
            ダイガク+は、大学1・2年生のための情報ポータルサイトです。<br />
            勉強、就職、サークル、バイト情報など大学生活に必要な情報を網羅的に提供します。
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/part-time" className="bg-transparent border-2 border-white px-6 py-3 rounded-full font-medium hover:bg-white hover:text-blue-700 transition-colors">
              バイト情報を探す
            </Link>
          </div>
        </div>
      </section>

      {/* カテゴリセクション */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-8 text-center">大学生活を支援する<span className="text-blue-600">4つの</span>カテゴリ</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* 勉強カード */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <div className="h-40 bg-blue-100 flex items-center justify-center">
              <svg className="w-16 h-16 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <div className="p-6">
              <h3 className="font-bold text-xl mb-2">勉強・学習</h3>
              <p className="text-gray-600 mb-4">授業の選び方、効果的な学習法、テスト対策など、学業を成功させるためのヒント</p>
              <Link href="/study" className="text-blue-600 font-medium hover:underline inline-flex items-center">
                詳しく見る
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
          
          {/* 就職カード */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <div className="h-40 bg-green-100 flex items-center justify-center">
              <svg className="w-16 h-16 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div className="p-6">
              <h3 className="font-bold text-xl mb-2">就職・キャリア</h3>
              <p className="text-gray-600 mb-4">インターンシップ情報、業界研究、エントリーシートの書き方など、将来のキャリアに向けた準備</p>
              <Link href="/career" className="text-green-600 font-medium hover:underline inline-flex items-center">
                詳しく見る
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
          
          {/* コミュニティカード */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <div className="h-40 bg-purple-100 flex items-center justify-center">
              <svg className="w-16 h-16 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <div className="p-6">
              <h3 className="font-bold text-xl mb-2">サークル・コミュニティ</h3>
              <p className="text-gray-600 mb-4">サークル情報、イベント、学生コミュニティなど、充実した大学生活のための仲間づくり</p>
              <Link href="/community" className="text-purple-600 font-medium hover:underline inline-flex items-center">
                詳しく見る
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
          
          {/* バイトカード */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <div className="h-40 bg-yellow-100 flex items-center justify-center">
              <svg className="w-16 h-16 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="p-6">
              <h3 className="font-bold text-xl mb-2">アルバイト情報</h3>
              <p className="text-gray-600 mb-4">大学生向けバイト情報、時給比較、面接のコツなど、学業と両立できる仕事探し</p>
              <Link href="/part-time" className="text-yellow-600 font-medium hover:underline inline-flex items-center">
                詳しく見る
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* 最新情報セクション */}
      <section className="mb-16">
        <LatestArticles 
          limit={3} 
          title="最新の情報" 
          viewMoreLink="/articles" 
          viewMoreText="すべて見る" 
        />
      </section>
    </div>
  );
}
