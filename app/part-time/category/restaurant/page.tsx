import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '飲食店アルバイト情報・求人ガイド | 大学生活ガイド',
  description: '大学生に人気の飲食店アルバイト情報。カフェ、ファミレス、ファストフードなど職種別の特徴、時給相場、メリット・デメリットを紹介。シフトの組み方や先輩の体験談も掲載。',
};

export default function RestaurantJobsPage() {
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
                <span className="text-gray-500">飲食店</span>
              </div>
            </li>
          </ol>
        </nav>

        <header className="bg-gradient-to-r from-orange-500 to-yellow-400 rounded-lg p-8 mb-8 text-white shadow-lg">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">飲食店アルバイト情報</h1>
          <p className="text-lg opacity-90 max-w-2xl">
            大学生に人気の飲食店アルバイト。カフェ、ファミレス、ファストフードなど、
            職種別の特徴や働き方のポイントを紹介します。
          </p>
        </header>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 border-b border-gray-200 pb-2">飲食店アルバイトの種類</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-48">
                <div className="absolute inset-0 bg-orange-900 opacity-40"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 className="text-2xl font-bold text-white text-center">カフェ</h3>
                </div>
              </div>
              <div className="p-5">
                <p className="mb-4">
                  お客様へのドリンク・フードの提供、レジ対応、店内清掃などを行います。
                  比較的落ち着いた雰囲気の中で働けるのが特徴です。
                </p>
                <div className="flex flex-wrap items-center text-sm text-gray-600 mb-4">
                  <div className="mr-4 mb-2">
                    <span className="font-semibold">時給相場:</span> 950〜1,200円
                  </div>
                  <div className="mr-4 mb-2">
                    <span className="font-semibold">シフト:</span> 週2〜5日
                  </div>
                  <div>
                    <span className="font-semibold">未経験:</span> 歓迎
                  </div>
                </div>
                <div className="mt-4">
                  <h4 className="font-semibold mb-2">向いている人</h4>
                  <ul className="list-disc list-inside text-sm text-gray-700">
                    <li>丁寧な接客ができる人</li>
                    <li>落ち着いた雰囲気が好きな人</li>
                    <li>コーヒーや飲食に興味がある人</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-48">
                <div className="absolute inset-0 bg-orange-900 opacity-40"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 className="text-2xl font-bold text-white text-center">ファミレス</h3>
                </div>
              </div>
              <div className="p-5">
                <p className="mb-4">
                  お客様の案内、オーダー取り、料理の提供、レジ会計、店内清掃など
                  様々な業務を担当します。時間帯によって忙しさが変わります。
                </p>
                <div className="flex flex-wrap items-center text-sm text-gray-600 mb-4">
                  <div className="mr-4 mb-2">
                    <span className="font-semibold">時給相場:</span> 950〜1,100円
                  </div>
                  <div className="mr-4 mb-2">
                    <span className="font-semibold">シフト:</span> 週2〜5日
                  </div>
                  <div>
                    <span className="font-semibold">未経験:</span> 歓迎
                  </div>
                </div>
                <div className="mt-4">
                  <h4 className="font-semibold mb-2">向いている人</h4>
                  <ul className="list-disc list-inside text-sm text-gray-700">
                    <li>接客が好きな人</li>
                    <li>チームワークを大切にできる人</li>
                    <li>忙しい環境でも冷静に対応できる人</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-48">
                <div className="absolute inset-0 bg-orange-900 opacity-40"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 className="text-2xl font-bold text-white text-center">ファストフード</h3>
                </div>
              </div>
              <div className="p-5">
                <p className="mb-4">
                  接客、調理、レジ、清掃などを行います。
                  マニュアルが整備されているため、未経験でも始めやすいのが特徴です。
                </p>
                <div className="flex flex-wrap items-center text-sm text-gray-600 mb-4">
                  <div className="mr-4 mb-2">
                    <span className="font-semibold">時給相場:</span> 950〜1,050円
                  </div>
                  <div className="mr-4 mb-2">
                    <span className="font-semibold">シフト:</span> 週2〜5日
                  </div>
                  <div>
                    <span className="font-semibold">未経験:</span> 大歓迎
                  </div>
                </div>
                <div className="mt-4">
                  <h4 className="font-semibold mb-2">向いている人</h4>
                  <ul className="list-disc list-inside text-sm text-gray-700">
                    <li>テキパキと作業できる人</li>
                    <li>明るく元気な対応ができる人</li>
                    <li>チームワークを大切にできる人</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-48">
                <div className="absolute inset-0 bg-orange-900 opacity-40"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 className="text-2xl font-bold text-white text-center">居酒屋</h3>
                </div>
              </div>
              <div className="p-5">
                <p className="mb-4">
                  接客、料理の提供、ドリンク作り、レジ、清掃などを行います。
                  夕方〜夜の時間帯が中心となります。
                </p>
                <div className="flex flex-wrap items-center text-sm text-gray-600 mb-4">
                  <div className="mr-4 mb-2">
                    <span className="font-semibold">時給相場:</span> 1,000〜1,300円
                  </div>
                  <div className="mr-4 mb-2">
                    <span className="font-semibold">シフト:</span> 週2〜5日
                  </div>
                  <div>
                    <span className="font-semibold">未経験:</span> 応相談
                  </div>
                </div>
                <div className="mt-4">
                  <h4 className="font-semibold mb-2">向いている人</h4>
                  <ul className="list-disc list-inside text-sm text-gray-700">
                    <li>明るく活気のある職場が好きな人</li>
                    <li>夜間の勤務ができる人</li>
                    <li>接客が好きな人</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12 bg-gray-50 p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-6">飲食店アルバイトのメリット・デメリット</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-green-600">メリット</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="w-5 h-5 mr-2 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <div>
                    <span className="font-medium">人とのコミュニケーション能力が向上する</span>
                    <p className="text-sm text-gray-600 mt-1">
                      様々なお客様と接することで、コミュニケーション能力が自然と高まります。
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 mr-2 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <div>
                    <span className="font-medium">食事補助や賄いがある場合が多い</span>
                    <p className="text-sm text-gray-600 mt-1">
                      多くの飲食店では食事補助や賄いがあり、食費の節約になります。
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 mr-2 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <div>
                    <span className="font-medium">シフトの融通が利きやすい</span>
                    <p className="text-sm text-gray-600 mt-1">
                      多くの店舗ではシフト制を採用しており、学業との両立がしやすいです。
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 mr-2 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <div>
                    <span className="font-medium">同年代の友人ができやすい</span>
                    <p className="text-sm text-gray-600 mt-1">
                      学生が多く働いていることが多いため、新しい友人関係が生まれやすいです。
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
                    <span className="font-medium">体力的にきつい場合がある</span>
                    <p className="text-sm text-gray-600 mt-1">
                      長時間立ちっぱなしの作業や忙しい時間帯の連続作業は体力を消耗します。
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 mr-2 text-red-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                  <div>
                    <span className="font-medium">土日祝日や夜間の勤務が多い</span>
                    <p className="text-sm text-gray-600 mt-1">
                      お客様が多い土日祝日や夜間のシフトに入ることが多く、遊びの予定が立てにくいことがあります。
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 mr-2 text-red-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                  <div>
                    <span className="font-medium">クレーム対応がストレスになることも</span>
                    <p className="text-sm text-gray-600 mt-1">
                      お客様からのクレームへの対応がストレスになることがあります。
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 mr-2 text-red-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                  <div>
                    <span className="font-medium">人間関係が難しい場合も</span>
                    <p className="text-sm text-gray-600 mt-1">
                      忙しい環境下での連携が必要なため、チームワークや人間関係がストレスになることもあります。
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
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center">
                  <span className="text-orange-600 font-bold">YS</span>
                </div>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">佐藤 裕子（カフェ・3年生）</h3>
                <p className="mb-3">
                  「駅前のカフェで1年半ほど働いています。最初はドリンク作りが難しかったですが、今では任せてもらえるようになりました。お客様から美味しいと言われると嬉しいです。シフトは週3日程度で、テスト期間中は調整してもらえるので学業との両立もできています。カフェなので落ち着いた雰囲気で働けるのがいいですね。接客マナーやコーヒーの知識も身につきました。時々仕事帰りに友達と会ったりできるのも良いところです。」
                </p>
                <div className="text-sm text-gray-600">
                  <span className="font-semibold">バイト先：</span>都内カフェチェーン / 
                  <span className="font-semibold ml-2">時給：</span>1,050円 / 
                  <span className="font-semibold ml-2">勤務：</span>週3日
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <div className="flex items-start">
              <div className="flex-shrink-0 mr-4">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center">
                  <span className="text-orange-600 font-bold">KT</span>
                </div>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">伊藤 健太（ファストフード・1年生）</h3>
                <p className="mb-3">
                  「大手ハンバーガーチェーンで入学直後から働いています。マニュアルがしっかりしているので、未経験でもすぐに仕事を覚えられました。週末のランチタイムはかなり忙しいですが、チームで助け合って乗り切るのが楽しいです。時給は普通ですが、食事補助があるのでお昼を節約できています。同じ大学の先輩も働いていて、大学の情報も教えてもらえて助かっています。シフトは1週間前に提出するので、テスト期間や大学のイベントとも調整しやすいです。」
                </p>
                <div className="text-sm text-gray-600">
                  <span className="font-semibold">バイト先：</span>大手ハンバーガーチェーン / 
                  <span className="font-semibold ml-2">時給：</span>1,000円 / 
                  <span className="font-semibold ml-2">勤務：</span>週3〜4日
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-start">
              <div className="flex-shrink-0 mr-4">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center">
                  <span className="text-orange-600 font-bold">MA</span>
                </div>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">鈴木 美咲（居酒屋・2年生）</h3>
                <p className="mb-3">
                  「駅前の居酒屋で働き始めて8ヶ月になります。夕方以降のシフトが中心で、授業との両立がしやすいのがいいところです。時給が1,200円と高めなので、月に10万円ほど稼げています。お客様は様々な方がいて、接客の難しさを感じることもありますが、社会勉強になっています。店長も含めスタッフ同士の仲が良く、月1回の飲み会があるので友人も増えました。食事補助もあるので、夕食の心配もありません。ただ、金曜日や土曜日は深夜まで勤務になるので体力は必要です。」
                </p>
                <div className="text-sm text-gray-600">
                  <span className="font-semibold">バイト先：</span>個人経営の居酒屋 / 
                  <span className="font-semibold ml-2">時給：</span>1,200円（22時以降1,500円） / 
                  <span className="font-semibold ml-2">勤務：</span>週4日
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12 bg-orange-50 p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-6">飲食店バイト成功のポイント</h2>
          
          <div className="space-y-4">
            <div className="flex items-start">
              <div className="bg-orange-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                <span>1</span>
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-semibold mb-2">笑顔と挨拶を大切に</h3>
                <p>
                  飲食店では接客が基本です。明るい笑顔と元気な挨拶を心がけましょう。
                  お客様だけでなく、同僚へのコミュニケーションも重要です。
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-orange-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                <span>2</span>
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-semibold mb-2">メニューをしっかり覚える</h3>
                <p>
                  お客様からの質問に答えられるよう、メニューの内容やアレルギー情報などを
                  把握しておくことが大切です。
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-orange-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                <span>3</span>
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-semibold mb-2">衛生管理に気をつける</h3>
                <p>
                  食品を扱う仕事なので、手洗いやうがい、身だしなみには特に注意しましょう。
                  お客様に安心して食事を楽しんでいただくための基本です。
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-orange-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                <span>4</span>
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-semibold mb-2">チームワークを大切に</h3>
                <p>
                  忙しい時間帯は特にスタッフ間の連携が重要です。
                  自分の担当以外の仕事も手伝う姿勢があると、職場での評価も高まります。
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="bg-white rounded-lg p-6 shadow-md mb-8">
          <h2 className="text-xl font-bold mb-4 text-orange-700">シフトの組み方のコツ</h2>
          <p className="mb-4">飲食店バイトをする上で、シフト管理は重要なポイントです。以下のコツを参考にしてみてください。</p>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start">
              <svg className="w-5 h-5 mr-2 text-orange-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <p>授業の時間割を考慮して、余裕を持ったシフトを組む</p>
            </li>
            <li className="flex items-start">
              <svg className="w-5 h-5 mr-2 text-orange-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <p>テスト期間や課題提出期限を事前にカレンダーに記入しておく</p>
            </li>
            <li className="flex items-start">
              <svg className="w-5 h-5 mr-2 text-orange-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <p>休日は連続して取るよりも、週の中で分散させた方が体力的に楽</p>
            </li>
            <li className="flex items-start">
              <svg className="w-5 h-5 mr-2 text-orange-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <p>シフト変更が必要な場合は早めに相談し、代わりに入れる日も提案する</p>
            </li>
            <li className="flex items-start">
              <svg className="w-5 h-5 mr-2 text-orange-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <p>土日や祝日のシフトを入れられると重宝されることが多い</p>
            </li>
          </ul>
        </div>

        <div className="bg-orange-50 rounded-lg p-6 shadow-sm">
          <h2 className="text-xl font-bold mb-4 text-orange-800">関連情報</h2>
          <ul className="space-y-2">
            <li>
              <Link href="/part-time/interview" className="text-orange-600 hover:underline">
                アルバイト面接対策ガイド
              </Link>
            </li>
            <li>
              <Link href="/part-time/category/retail" className="text-orange-600 hover:underline">
                小売業アルバイト情報
              </Link>
            </li>
            <li>
              <Link href="/part-time/category/office" className="text-orange-600 hover:underline">
                オフィスワークアルバイト情報
              </Link>
            </li>
            <li>
              <Link href="/career/part-time-benefits" className="text-orange-600 hover:underline">
                就活に活かせるアルバイト経験
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
} 