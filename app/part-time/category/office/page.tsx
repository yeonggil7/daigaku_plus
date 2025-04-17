import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'オフィスワークアルバイト情報・求人ガイド | 大学生活ガイド',
  description: '大学生におすすめのオフィスワークアルバイト情報。事務、データ入力、コールセンター、受付など職種別の特徴、時給相場、メリット・デメリットを紹介。',
};

export default function OfficeJobsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <nav className="flex mb-8" aria-label="Breadcrumb">
          <ol className="inline-flex items-center space-x-1 md:space-x-3">
            <li className="inline-flex items-center">
              <Link href="/" className="text-gray-700 hover:text-blue-600">
                ホーム
              </Link>
            </li>
            <li>
              <div className="flex items-center">
                <span className="mx-2 text-gray-400">/</span>
                <Link href="/part-time" className="text-gray-700 hover:text-blue-600">
                  バイト
                </Link>
              </div>
            </li>
            <li>
              <div className="flex items-center">
                <span className="mx-2 text-gray-400">/</span>
                <Link href="/part-time/category" className="text-gray-700 hover:text-blue-600">
                  カテゴリー
                </Link>
              </div>
            </li>
            <li aria-current="page">
              <div className="flex items-center">
                <span className="mx-2 text-gray-400">/</span>
                <span className="text-gray-500">オフィスワーク</span>
              </div>
            </li>
          </ol>
        </nav>

        <header className="bg-gradient-to-r from-purple-600 to-indigo-400 rounded-lg p-8 mb-8 text-white shadow-lg">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">オフィスワークアルバイト情報</h1>
          <p className="text-lg opacity-90 max-w-2xl">
            大学生に人気のオフィスワークアルバイト。事務、データ入力、コールセンター、受付など、
            職種別の特徴や働き方のポイントを紹介します。
          </p>
        </header>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 border-b border-gray-200 pb-2">オフィスワークアルバイトの種類</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-48">
                <div className="absolute inset-0 bg-purple-900 opacity-40"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 className="text-2xl font-bold text-white text-center">一般事務</h3>
                </div>
              </div>
              <div className="p-5">
                <p className="mb-4">
                  書類整理、データ入力、電話対応、会議準備など、オフィス内の様々な業務を担当します。
                  企業のバックオフィス業務を支える重要な役割です。
                </p>
                <div className="flex flex-wrap items-center text-sm text-gray-600 mb-4">
                  <div className="mr-4 mb-2">
                    <span className="font-semibold">時給相場:</span> 1,100〜1,300円
                  </div>
                  <div className="mr-4 mb-2">
                    <span className="font-semibold">シフト:</span> 週3〜5日
                  </div>
                  <div>
                    <span className="font-semibold">未経験:</span> 応相談
                  </div>
                </div>
                <div className="mt-4">
                  <h4 className="font-semibold mb-2">向いている人</h4>
                  <ul className="list-disc list-inside text-sm text-gray-700">
                    <li>几帳面で正確な作業ができる人</li>
                    <li>PCスキルがある程度ある人</li>
                    <li>ビジネスマナーに興味がある人</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-48">
                <div className="absolute inset-0 bg-purple-900 opacity-40"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 className="text-2xl font-bold text-white text-center">データ入力</h3>
                </div>
              </div>
              <div className="p-5">
                <p className="mb-4">
                  紙の書類やアンケート結果などをパソコンに入力する作業が中心です。
                  黙々と作業するのが好きな人に向いています。
                </p>
                <div className="flex flex-wrap items-center text-sm text-gray-600 mb-4">
                  <div className="mr-4 mb-2">
                    <span className="font-semibold">時給相場:</span> 1,100〜1,250円
                  </div>
                  <div className="mr-4 mb-2">
                    <span className="font-semibold">シフト:</span> 週2〜3日から
                  </div>
                  <div>
                    <span className="font-semibold">未経験:</span> 歓迎
                  </div>
                </div>
                <div className="mt-4">
                  <h4 className="font-semibold mb-2">向いている人</h4>
                  <ul className="list-disc list-inside text-sm text-gray-700">
                    <li>タイピングスキルがある人</li>
                    <li>正確で丁寧な作業ができる人</li>
                    <li>長時間同じ作業を集中できる人</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-48">
                <div className="absolute inset-0 bg-purple-900 opacity-40"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 className="text-2xl font-bold text-white text-center">コールセンター</h3>
                </div>
              </div>
              <div className="p-5">
                <p className="mb-4">
                  電話やチャットでの問い合わせ対応、テレアポ、電話営業などを行います。
                  インバウンド（受信）とアウトバウンド（発信）の2種類があります。
                </p>
                <div className="flex flex-wrap items-center text-sm text-gray-600 mb-4">
                  <div className="mr-4 mb-2">
                    <span className="font-semibold">時給相場:</span> 1,200〜1,500円
                  </div>
                  <div className="mr-4 mb-2">
                    <span className="font-semibold">シフト:</span> 週3〜5日
                  </div>
                  <div>
                    <span className="font-semibold">未経験:</span> 研修あり
                  </div>
                </div>
                <div className="mt-4">
                  <h4 className="font-semibold mb-2">向いている人</h4>
                  <ul className="list-disc list-inside text-sm text-gray-700">
                    <li>コミュニケーション能力が高い人</li>
                    <li>臨機応変な対応ができる人</li>
                    <li>明るく丁寧な電話応対ができる人</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-48">
                <div className="absolute inset-0 bg-purple-900 opacity-40"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 className="text-2xl font-bold text-white text-center">受付</h3>
                </div>
              </div>
              <div className="p-5">
                <p className="mb-4">
                  企業のフロント業務として、来客対応や電話取次ぎ、簡単な事務作業などを行います。
                  企業の顔として重要な役割を担います。
                </p>
                <div className="flex flex-wrap items-center text-sm text-gray-600 mb-4">
                  <div className="mr-4 mb-2">
                    <span className="font-semibold">時給相場:</span> 1,150〜1,400円
                  </div>
                  <div className="mr-4 mb-2">
                    <span className="font-semibold">シフト:</span> 週3〜5日
                  </div>
                  <div>
                    <span className="font-semibold">未経験:</span> 応相談
                  </div>
                </div>
                <div className="mt-4">
                  <h4 className="font-semibold mb-2">向いている人</h4>
                  <ul className="list-disc list-inside text-sm text-gray-700">
                    <li>笑顔で丁寧な対応ができる人</li>
                    <li>身だしなみに気を配れる人</li>
                    <li>臨機応変な対応ができる人</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12 bg-gray-50 p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-6">オフィスワークアルバイトのメリット・デメリット</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-green-600">メリット</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="w-5 h-5 mr-2 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <div>
                    <span className="font-medium">ビジネススキルが身につく</span>
                    <p className="text-sm text-gray-600 mt-1">
                      ビジネスマナーやオフィスでのコミュニケーション方法など、就職後に役立つスキルが身につきます。
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 mr-2 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <div>
                    <span className="font-medium">PCスキルが向上する</span>
                    <p className="text-sm text-gray-600 mt-1">
                      Excel、Word、PowerPointなどのオフィスソフトの使い方が上達します。
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 mr-2 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <div>
                    <span className="font-medium">就活に有利</span>
                    <p className="text-sm text-gray-600 mt-1">
                      オフィスでの実務経験は就職活動でアピールポイントになります。
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 mr-2 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <div>
                    <span className="font-medium">職場環境が快適</span>
                    <p className="text-sm text-gray-600 mt-1">
                      空調の効いた室内での作業なので、季節を問わず快適に働けます。
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4 text-red-600">デメリット</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="w-5 h-5 mr-2 text-red-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                  <div>
                    <span className="font-medium">平日勤務が基本</span>
                    <p className="text-sm text-gray-600 mt-1">
                      多くの場合、平日の日中勤務が中心となるため、大学の授業との両立が難しい場合があります。
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 mr-2 text-red-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                  <div>
                    <span className="font-medium">長期勤務が求められることが多い</span>
                    <p className="text-sm text-gray-600 mt-1">
                      研修期間が必要なため、短期ではなく長期で働ける人を求められることが多いです。
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 mr-2 text-red-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                  <div>
                    <span className="font-medium">同じ姿勢での作業が多い</span>
                    <p className="text-sm text-gray-600 mt-1">
                      デスクワークが中心なので、長時間同じ姿勢で作業することによる疲労があります。
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 mr-2 text-red-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                  <div>
                    <span className="font-medium">スキルが求められることも</span>
                    <p className="text-sm text-gray-600 mt-1">
                      PCスキルやビジネスマナーなど、ある程度のスキルが求められる場合があります。
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 border-b border-gray-200 pb-2">先輩たちの体験談</h2>
          
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <div className="flex items-start">
              <div className="flex-shrink-0 mr-4">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center">
                  <span className="text-purple-600 font-bold">MT</span>
                </div>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">田中 美咲（一般事務・3年生）</h3>
                <p className="mb-3">
                  「法律事務所で一般事務のアルバイトを始めて1年半になります。最初は社会人の方に囲まれて緊張しましたが、仕事の内容は丁寧に教えてもらえました。書類のファイリングや来客応対、電話対応など様々な業務を任せてもらえるようになり、責任感も芽生えました。ビジネスマナーや敬語の使い方など、社会に出てから役立つスキルが身につくのが一番のメリットです。弁護士の方の仕事を間近で見られるのも貴重な経験になっています。テスト期間は融通を利かせてもらえるので、学業との両立もできています。」
                </p>
                <div className="text-sm text-gray-600">
                  <span className="font-semibold">バイト先：</span>法律事務所 / 
                  <span className="font-semibold ml-2">時給：</span>1,200円 / 
                  <span className="font-semibold ml-2">勤務：</span>週3日
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <div className="flex items-start">
              <div className="flex-shrink-0 mr-4">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center">
                  <span className="text-purple-600 font-bold">KH</span>
                </div>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">高橋 健太（コールセンター・2年生）</h3>
                <p className="mb-3">
                  「通信会社のコールセンターで働いています。最初は研修が2週間あり、商品知識や対応方法について学びました。電話対応は最初は緊張しましたが、マニュアルがあるので徐々に慣れていきました。お客様から「ありがとう」と言われたときはとても嬉しいです。時給が高めなのと、土日も働けるのでしっかり稼げるのが魅力です。電話応対力が上がったことで、自分の中でも自信がついたと感じています。ただ、時々クレーム対応もあり、精神的に疲れることもあります。シフトの融通は利きやすく、テスト前は調整してもらえるので助かっています。」
                </p>
                <div className="text-sm text-gray-600">
                  <span className="font-semibold">バイト先：</span>大手通信会社コールセンター / 
                  <span className="font-semibold ml-2">時給：</span>1,300円 / 
                  <span className="font-semibold ml-2">勤務：</span>週4日
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-start">
              <div className="flex-shrink-0 mr-4">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center">
                  <span className="text-purple-600 font-bold">YM</span>
                </div>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">山本 優子（データ入力・1年生）</h3>
                <p className="mb-3">
                  「市場調査会社でアンケート結果のデータ入力のバイトをしています。黙々と作業するのが好きなタイプなので、自分に合っていると思います。基本的にExcelを使ってデータを入力するだけなので、難しいスキルは必要ありませんでしたが、タイピングスピードは上がりました。職場は静かで集中できる環境で、休憩時間もしっかり取れるので体力的な負担は少ないです。平日の時間があるときに入れるシフト制なので、授業との両立もしやすいです。将来事務職に就きたいと考えているので、PCスキルや事務作業の経験を積めるのはプラスになると思っています。」
                </p>
                <div className="text-sm text-gray-600">
                  <span className="font-semibold">バイト先：</span>市場調査会社 / 
                  <span className="font-semibold ml-2">時給：</span>1,150円 / 
                  <span className="font-semibold ml-2">勤務：</span>週2〜3日
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12 bg-purple-50 p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-6">オフィスワークバイト成功のポイント</h2>
          
          <div className="space-y-4">
            <div className="flex items-start">
              <div className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                <span>1</span>
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-semibold mb-2">ビジネスマナーを学ぶ</h3>
                <p>
                  敬語の使い方、電話応対、メールの書き方など基本的なビジネスマナーを
                  事前に学んでおくと、スムーズに仕事に取り組めます。
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                <span>2</span>
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-semibold mb-2">PCスキルを磨く</h3>
                <p>
                  基本的なWord、Excel、PowerPointの操作方法を習得しておくと、
                  業務がスムーズに進みます。タイピングスピードも重要なポイントです。
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                <span>3</span>
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-semibold mb-2">メモを取る習慣をつける</h3>
                <p>
                  指示されたことや重要な情報はメモを取る習慣をつけましょう。
                  複数の業務を抱えることもあるので、タスク管理がとても重要です。
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                <span>4</span>
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-semibold mb-2">身だしなみに気を配る</h3>
                <p>
                  オフィスでは清潔感のある服装と身だしなみが求められます。
                  特に受付やフロント業務では、会社の顔として接するため重要です。
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="bg-white rounded-lg p-6 shadow-md mb-8">
          <h2 className="text-xl font-bold mb-4 text-purple-700">おすすめの求人サイト</h2>
          <p className="mb-4">オフィスワークのアルバイトを探すなら、以下のサイトがおすすめです。</p>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="border rounded-lg p-4 text-center">
              <h3 className="font-bold mb-2">リクルートバイト</h3>
              <p className="text-sm text-gray-600 mb-2">オフィス系の幅広い求人</p>
              <a href="https://job.recruit.co.jp/" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:underline text-sm">サイトを見る →</a>
            </div>
            <div className="border rounded-lg p-4 text-center">
              <h3 className="font-bold mb-2">マイナビバイト</h3>
              <p className="text-sm text-gray-600 mb-2">事務職に特化した検索可能</p>
              <a href="https://バイト.マイナビ.jp/" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:underline text-sm">サイトを見る →</a>
            </div>
            <div className="border rounded-lg p-4 text-center">
              <h3 className="font-bold mb-2">はたらこねっと</h3>
              <p className="text-sm text-gray-600 mb-2">オフィスワーク専門の求人</p>
              <a href="https://www.hatarako.net/" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:underline text-sm">サイトを見る →</a>
            </div>
          </div>
        </div>

        <div className="bg-purple-50 rounded-lg p-6 shadow-sm">
          <h2 className="text-xl font-bold mb-4 text-purple-800">関連情報</h2>
          <ul className="space-y-2">
            <li>
              <Link href="/part-time/interview" className="text-purple-600 hover:underline">
                アルバイト面接対策ガイド
              </Link>
            </li>
            <li>
              <Link href="/study/certifications" className="text-purple-600 hover:underline">
                大学生におすすめの資格
              </Link>
            </li>
            <li>
              <Link href="/part-time/category/restaurant" className="text-purple-600 hover:underline">
                飲食店アルバイト情報
              </Link>
            </li>
            <li>
              <Link href="/part-time/category/retail" className="text-purple-600 hover:underline">
                小売業アルバイト情報
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
} 