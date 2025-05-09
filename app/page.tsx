import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import LatestArticles from '@/components/home/LatestArticles';

export const metadata: Metadata = {
  title: '大学生活ガイド | 勉強・就活・サークル・バイト情報',
  description: '大学生のための学生生活全般に関する情報サイト。授業や就活、サークル、アルバイトなど、様々な場面で役立つ情報を提供します。'
};

export default function Home() {
  return (
    <main>
      {/* ヒーローセクション */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0 md:pr-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
                大学生活を<span className="text-blue-600">もっと</span>充実させよう
              </h1>
              <p className="text-lg text-gray-700 mb-8">
                勉強、就活、サークル、バイト。大学生活のあらゆる場面で役立つ情報を、先輩たちの経験からお届けします。
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/study"
                  className="bg-blue-600 text-white px-6 py-3 rounded-full font-medium hover:bg-blue-700 transition-colors"
                >
                  勉強法を見る
                </Link>
                <Link
                  href="/career"
                  className="bg-white text-blue-600 border border-blue-600 px-6 py-3 rounded-full font-medium hover:bg-blue-50 transition-colors"
                >
                  就活情報を探す
                </Link>
              </div>
            </div>
            <div className="md:w-1/2 relative">
              <div className="rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/images/study-group.jpg"
                  alt="大学生のグループ学習"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* カテゴリーセクション */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">大学生活の<span className="text-blue-600">4つの柱</span></h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* 勉強カード */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-blue-100 flex items-center justify-center">
                <svg className="w-20 h-20 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">勉強</h3>
                <p className="text-gray-600 mb-4">
                  効率的な勉強法や授業選びのコツ、レポート作成のテクニックなど、学業成功のための情報を提供します。
                </p>
                <Link href="/study" className="text-blue-600 font-medium hover:underline inline-flex items-center">
                  詳しく見る
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* キャリアカード */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-green-100 flex items-center justify-center">
                <svg className="w-20 h-20 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">就活</h3>
                <p className="text-gray-600 mb-4">
                  自己分析から業界研究、ES対策、面接テクニックまで、就職活動を成功させるためのガイドを提供します。
                </p>
                <Link href="/career" className="text-green-600 font-medium hover:underline inline-flex items-center">
                  詳しく見る
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* コミュニティカード */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-purple-100 flex items-center justify-center">
                <svg className="w-20 h-20 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">サークル・コミュニティ</h3>
                <p className="text-gray-600 mb-4">
                  様々なサークルやコミュニティ活動の紹介、選び方のコツ、イベント情報などを提供します。
                </p>
                <Link href="/community" className="text-purple-600 font-medium hover:underline inline-flex items-center">
                  詳しく見る
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* バイトカード */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-yellow-100 flex items-center justify-center">
                <svg className="w-20 h-20 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">バイト</h3>
                <p className="text-gray-600 mb-4">
                  学業と両立しやすいバイト情報、面接対策、効率的な稼ぎ方、トラブル対処法などを紹介します。
                </p>
                <Link href="/part-time" className="text-yellow-600 font-medium hover:underline inline-flex items-center">
                  詳しく見る
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 最新記事セクション */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <LatestArticles 
            title="最新の記事" 
            viewMoreLink="/articles" 
            viewMoreText="すべての記事を見る" 
          />
        </div>
      </section>

      {/* CTAセクション */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">大学生活を最大限に活用しよう</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            サイト内の情報を活用して、あなたの大学生活をより充実したものにしましょう。
            新しい記事や役立つ情報を定期的に更新しています。
          </p>
          <Link
            href="/articles"
            className="bg-white text-blue-600 px-8 py-4 rounded-full font-medium text-lg hover:bg-gray-100 transition-colors inline-block"
          >
            全ての記事を見る
          </Link>
        </div>
      </section>
    </main>
  );
}
