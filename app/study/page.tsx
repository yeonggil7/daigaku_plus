import Link from 'next/link';
import LatestArticles from '@/components/home/LatestArticles';
import Image from 'next/image';

export default function StudyPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* ヘッダーセクション */}
      <section className="bg-blue-100 rounded-xl p-8 md:p-12 mb-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-blue-800">大学生のための勉強情報</h1>
        <p className="text-lg text-blue-700 mb-6">
          効率的な学習方法や大学での授業の選び方、テスト対策など、大学生活での学びを成功させるための情報を提供します。
        </p>
      </section>

      {/* 主要コンテンツセクション */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-8 text-center">勉強に関する<span className="text-blue-600">主要コンテンツ</span></h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-10">
          {/* 効率的な学習方法 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col h-full">
            <div className="p-6 flex-grow">
              <h3 className="font-bold text-xl mb-4 text-blue-700">効率的な学習方法</h3>
              <p className="text-gray-600 mb-4">
                大学での学習は高校までとは異なります。自分に合った学習スタイルを見つけ、効率的に知識を吸収するためのテクニックを紹介します。
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>効果的なノートの取り方</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>記憶力を高めるテクニック</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>集中力を維持する方法</span>
                </li>
              </ul>
            </div>
            <div className="px-6 pb-6">
              <Link href="/study/learning-methods" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition duration-300">
                詳しく見る
              </Link>
            </div>
          </div>
          
          {/* 試験対策ガイド */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col h-full">
            <div className="p-6 flex-grow">
              <h3 className="font-bold text-xl mb-4 text-blue-700">試験対策ガイド</h3>
              <p className="text-gray-600 mb-4">
                大学の試験は高校までとは異なる形式や評価方法が用いられます。効果的な準備方法からメンタル面のケアまで、総合的な対策を解説します。
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>試験形式別の対策法</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>効果的な学習計画の立て方</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>試験前の不安対処法</span>
                </li>
              </ul>
            </div>
            <div className="px-6 pb-6">
              <Link href="/study/exam-preparation" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition duration-300">
                詳しく見る
              </Link>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* 資格取得ガイド */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="font-bold text-xl mb-4 border-b pb-2 border-blue-100">資格取得ガイド</h3>
            <p className="text-gray-600 mb-4">大学生におすすめの資格と効率的な勉強方法を紹介します。</p>
            <div className="mt-4">
              <Link href="/study/certifications" className="text-blue-600 hover:underline font-medium inline-flex items-center">
                詳しく見る
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
          
          {/* レポート作成ガイド */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="font-bold text-xl mb-4 border-b pb-2 border-blue-100">レポート作成ガイド</h3>
            <p className="text-gray-600 mb-4">大学のレポート・論文の書き方と評価されるポイントを解説します。</p>
            <div className="mt-4">
              <Link href="/study/report-writing" className="text-blue-600 hover:underline font-medium inline-flex items-center">
                詳しく見る
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
          
          {/* 授業の選び方 */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="font-bold text-xl mb-4 border-b pb-2 border-blue-100">授業の選び方</h3>
            <p className="text-gray-600 mb-4">自分に合った授業の選択方法と履修計画の立て方について解説します。</p>
            <div className="mt-4">
              <Link href="/study/class-selection" className="text-blue-600 hover:underline font-medium inline-flex items-center">
                詳しく見る
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 最新記事セクション */}
      <section className="mb-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold">最新の勉強関連記事</h2>
          <Link href="/articles?category=study" className="text-blue-600 hover:underline font-medium">
            全ての記事を見る
          </Link>
        </div>
        
        <LatestArticles category="study" limit={3} />
      </section>
      
      {/* 学習に役立つヒントセクション */}
      <section className="bg-gray-50 rounded-lg p-8 mb-12">
        <h2 className="text-2xl font-bold mb-6 text-center">大学での学習を成功させるコツ</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="font-semibold text-lg mb-3 text-blue-700">規則正しい生活習慣を保つ</h3>
            <p className="text-gray-600">
              十分な睡眠、バランスの取れた食事、適度な運動は学習効率を高める基本です。特に睡眠不足は記憶力と集中力を著しく低下させます。
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="font-semibold text-lg mb-3 text-blue-700">質問することを恐れない</h3>
            <p className="text-gray-600">
              わからないことは放置せず、積極的に教授やTAに質問しましょう。多くの教員はオフィスアワーを設けており、個別の質問に答えてくれます。
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="font-semibold text-lg mb-3 text-blue-700">復習を習慣化する</h3>
            <p className="text-gray-600">
              授業後24時間以内に復習すると記憶の定着率が大幅に向上します。講義ノートの整理や要点のまとめを習慣にしましょう。
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="font-semibold text-lg mb-3 text-blue-700">スタディグループを活用する</h3>
            <p className="text-gray-600">
              同じ授業を取る仲間と定期的に集まって勉強すると、多角的な視点で理解が深まります。また、教えることで自分の理解も強化されます。
            </p>
          </div>
        </div>
      </section>
    </div>
  );
} 