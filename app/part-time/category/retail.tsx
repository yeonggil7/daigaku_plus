import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '小売業アルバイト情報・求人ガイド | 大学生活ガイド',
  description: '大学生におすすめの小売業アルバイト情報。コンビニ、アパレル、家電量販店など職種別の特徴、時給相場、メリット・デメリットを紹介。シフトの組み方や先輩の体験談も掲載。',
};

export default function RetailJobsPage() {
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
                <span className="text-gray-500">小売業</span>
              </div>
            </li>
          </ol>
        </nav>

        <header className="bg-gradient-to-r from-blue-500 to-indigo-400 rounded-lg p-8 mb-8 text-white shadow-lg">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">小売業アルバイト情報</h1>
          <p className="text-lg opacity-90 max-w-2xl">
            大学生に人気の小売業アルバイト。コンビニ、アパレル、家電量販店など、
            職種別の特徴や働き方のポイントを紹介します。
          </p>
        </header>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 border-b border-gray-200 pb-2">小売業アルバイトの種類</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-48">
                <div className="absolute inset-0 bg-blue-900 opacity-40"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 className="text-2xl font-bold text-white text-center">コンビニ</h3>
                </div>
              </div>
              <div className="p-5">
                <p className="mb-4">
                  レジ対応、商品陳列、清掃、発注業務などを行います。
                  24時間営業の店舗が多く、様々な時間帯で働けるのが特徴です。
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
                    <li>複数の業務を同時に行える人</li>
                    <li>臨機応変に対応できる人</li>
                    <li>休憩時間以外は立ち仕事でも問題ない人</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-48">
                <div className="absolute inset-0 bg-blue-900 opacity-40"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 className="text-2xl font-bold text-white text-center">アパレル</h3>
                </div>
              </div>
              <div className="p-5">
                <p className="mb-4">
                  接客、商品説明、レジ、商品整理、在庫管理などを行います。
                  ファッションに関する知識が身につく点が魅力です。
                </p>
                <div className="flex flex-wrap items-center text-sm text-gray-600 mb-4">
                  <div className="mr-4 mb-2">
                    <span className="font-semibold">時給相場:</span> 1,000〜1,200円
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
                    <li>ファッションに興味がある人</li>
                    <li>コーディネートの提案が好きな人</li>
                    <li>接客が好きな人</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-48">
                <div className="absolute inset-0 bg-blue-900 opacity-40"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 className="text-2xl font-bold text-white text-center">家電量販店</h3>
                </div>
              </div>
              <div className="p-5">
                <p className="mb-4">
                  商品説明、販売、レジ対応、商品陳列などを行います。
                  家電の知識が身につき、時給が高めなのが特徴です。
                </p>
                <div className="flex flex-wrap items-center text-sm text-gray-600 mb-4">
                  <div className="mr-4 mb-2">
                    <span className="font-semibold">時給相場:</span> 1,050〜1,300円
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
                    <li>家電や最新技術に興味がある人</li>
                    <li>説明が得意な人</li>
                    <li>目標達成に向けて努力できる人</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-48">
                <div className="absolute inset-0 bg-blue-900 opacity-40"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 className="text-2xl font-bold text-white text-center">書店</h3>
                </div>
              </div>
              <div className="p-5">
                <p className="mb-4">
                  レジ対応、本の陳列、棚卸し、接客などを行います。
                  静かな環境で働けて、様々な本に触れられる点が魅力です。
                </p>
                <div className="flex flex-wrap items-center text-sm text-gray-600 mb-4">
                  <div className="mr-4 mb-2">
                    <span className="font-semibold">時給相場:</span> 950〜1,050円
                  </div>
                  <div className="mr-4 mb-2">
                    <span className="font-semibold">シフト:</span> 週2〜4日
                  </div>
                  <div>
                    <span className="font-semibold">未経験:</span> 歓迎
                  </div>
                </div>
                <div className="mt-4">
                  <h4 className="font-semibold mb-2">向いている人</h4>
                  <ul className="list-disc list-inside text-sm text-gray-700">
                    <li>本が好きな人</li>
                    <li>整理整頓が得意な人</li>
                    <li>落ち着いた雰囲気を好む人</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12 bg-gray-50 p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-6">小売業アルバイトのメリット・デメリット</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-green-600">メリット</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="w-5 h-5 mr-2 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <div>
                    <span className="font-medium">接客スキルが身につく</span>
                    <p className="text-sm text-gray-600 mt-1">
                      様々なお客様に対応することで、コミュニケーション能力が向上します。
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 mr-2 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <div>
                    <span className="font-medium">商品知識が得られる</span>
                    <p className="text-sm text-gray-600 mt-1">
                      取り扱う商品についての知識が深まり、自分の生活にも役立ちます。
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 mr-2 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <div>
                    <span className="font-medium">従業員割引が利用できる場合が多い</span>
                    <p className="text-sm text-gray-600 mt-1">
                      店舗商品を割引価格で購入できることが多く、生活費の節約になります。
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 mr-2 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <div>
                    <span className="font-medium">シフトの融通が利く場合が多い</span>
                    <p className="text-sm text-gray-600 mt-1">
                      多くの店舗ではシフト制を採用しており、学業との両立がしやすいです。
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
                    <span className="font-medium">立ち仕事が多い</span>
                    <p className="text-sm text-gray-600 mt-1">
                      長時間立ち続けることが多く、体力的に疲れることがあります。
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 mr-2 text-red-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                  <div>
                    <span className="font-medium">土日祝日に出勤することが多い</span>
                    <p className="text-sm text-gray-600 mt-1">
                      お客様が多い土日祝日の出勤が求められることが多く、休日の予定が立てにくいことがあります。
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 mr-2 text-red-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                  <div>
                    <span className="font-medium">クレーム対応にストレスを感じることも</span>
                    <p className="text-sm text-gray-600 mt-1">
                      お客様からの難しい要望やクレームに対応する場面もあります。
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 mr-2 text-red-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                  <div>
                    <span className="font-medium">繁忙期は体力的に大変</span>
                    <p className="text-sm text-gray-600 mt-1">
                      セール時期や年末年始などの繁忙期は特に忙しく、体力的にも精神的にも疲れることがあります。
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
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-bold">TN</span>
                </div>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">中村 拓也（コンビニ・2年生）</h3>
                <p className="mb-3">
                  「自宅近くのコンビニで1年以上働いています。夜間のシフトが多いので、昼間の授業と両立しやすいのがメリットです。最初はレジ操作や商品陳列が難しかったですが、慣れると問題なくこなせるようになりました。様々なお客様と接するので、コミュニケーション能力も上がりました。店長が良い人で、テスト期間中はシフトを減らしてくれるので助かっています。夜間は時給もアップするので、月に8万円ほど稼げています。コンビニの業務は意外と多岐にわたり、責任感も身につくので良い経験になっています。」
                </p>
                <div className="text-sm text-gray-600">
                  <span className="font-semibold">バイト先：</span>大手コンビニチェーン / 
                  <span className="font-semibold ml-2">時給：</span>980円（22時以降1,225円） / 
                  <span className="font-semibold ml-2">勤務：</span>週4日
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <div className="flex items-start">
              <div className="flex-shrink-0 mr-4">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-bold">AY</span>
                </div>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">山本 愛（アパレル・3年生）</h3>
                <p className="mb-3">
                  「ファッションが好きで、大学2年生から駅前のアパレルショップで働いています。接客はもちろん、商品ディスプレイの作成や在庫管理なども任せてもらえるようになりました。お客様に似合う服を提案できたときの喜びはとても大きいです。社員の方々も優しく、ファッションについて多くのことを教えてもらっています。最大のメリットは従業員割引で、30%オフで購入できるので、洋服代の節約になります。土日は忙しいですが、平日は比較的落ち着いているので、レポートの構想を考えたりする時間もあります。ファッションセンスも磨かれるので、就活の時の身だしなみにも役立っています。」
                </p>
                <div className="text-sm text-gray-600">
                  <span className="font-semibold">バイト先：</span>カジュアルブランド店 / 
                  <span className="font-semibold ml-2">時給：</span>1,100円 / 
                  <span className="font-semibold ml-2">勤務：</span>週3日
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-start">
              <div className="flex-shrink-0 mr-4">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-bold">KS</span>
                </div>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">佐藤 健（家電量販店・4年生）</h3>
                <p className="mb-3">
                  「大手家電量販店で2年半働いています。パソコン売り場を担当していますが、元々PCに興味があったので、知識を深められて楽しいです。お客様にスペックや使い方を説明するスキルが身につき、プレゼンテーション能力も向上しました。時給が1,200円と高めで、インセンティブもあるので、月に12万円ほど稼げることもあります。休日は忙しいですが、平日のシフトは授業に合わせて調整できるので、学業との両立もできています。PCの知識が身についたことで、大学のレポート作成も効率良くできるようになりました。特に就活中は、PCの知識をアピールポイントにできたのも良かったです。」
                </p>
                <div className="text-sm text-gray-600">
                  <span className="font-semibold">バイト先：</span>大手家電量販店 / 
                  <span className="font-semibold ml-2">時給：</span>1,200円（+インセンティブ） / 
                  <span className="font-semibold ml-2">勤務：</span>週3〜4日
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12 bg-blue-50 p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-6">小売業バイト成功のポイント</h2>
          
          <div className="space-y-4">
            <div className="flex items-start">
              <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                <span>1</span>
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-semibold mb-2">商品知識を積極的に学ぶ</h3>
                <p>
                  取り扱っている商品についての知識を深めることで、お客様からの質問に
                  的確に答えられるようになります。また、店長からの信頼も得やすくなります。
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                <span>2</span>
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-semibold mb-2">清潔感のある身だしなみを心がける</h3>
                <p>
                  お客様に好印象を与えるためには、清潔感のある身だしなみが重要です。
                  特にアパレルでは、自社商品を着用することが推奨される場合もあります。
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                <span>3</span>
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-semibold mb-2">忙しい時期のシフト調整に注意</h3>
                <p>
                  セール時期や年末年始などの繁忙期は特に人手が必要です。
                  事前に予定を確認し、テスト期間と重ならないように調整しましょう。
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                <span>4</span>
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-semibold mb-2">接客の基本を押さえる</h3>
                <p>
                  「いらっしゃいませ」の挨拶から始まり、お客様に寄り添った接客を心がけましょう。
                  様々なお客様に対応するため、臨機応変な対応力も必要です。
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="bg-white rounded-lg p-6 shadow-md mb-8">
          <h2 className="text-xl font-bold mb-4 text-blue-700">効率良く働くためのコツ</h2>
          <p className="mb-4">小売業のアルバイトを始めたばかりの方や、もっと効率良く働きたい方に向けたコツをご紹介します。</p>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start">
              <svg className="w-5 h-5 mr-2 text-blue-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <p>商品の陳列場所や価格帯をしっかり覚える</p>
            </li>
            <li className="flex items-start">
              <svg className="w-5 h-5 mr-2 text-blue-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <p>マニュアルをしっかり読み込み、わからないことは先輩に質問する</p>
            </li>
            <li className="flex items-start">
              <svg className="w-5 h-5 mr-2 text-blue-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <p>お客様の動線を意識して、効率よく商品を案内できるようにする</p>
            </li>
            <li className="flex items-start">
              <svg className="w-5 h-5 mr-2 text-blue-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <p>忙しくない時間を利用して、商品整理や在庫確認を積極的に行う</p>
            </li>
            <li className="flex items-start">
              <svg className="w-5 h-5 mr-2 text-blue-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <p>新商品や特売品についての情報をこまめにチェックしておく</p>
            </li>
          </ul>
        </div>

        <div className="bg-blue-50 rounded-lg p-6 shadow-sm">
          <h2 className="text-xl font-bold mb-4 text-blue-800">関連情報</h2>
          <ul className="space-y-2">
            <li>
              <Link href="/part-time/interview" className="text-blue-600 hover:underline">
                アルバイト面接対策ガイド
              </Link>
            </li>
            <li>
              <Link href="/part-time/category/restaurant" className="text-blue-600 hover:underline">
                飲食店アルバイト情報
              </Link>
            </li>
            <li>
              <Link href="/part-time/category/office" className="text-blue-600 hover:underline">
                オフィスワークアルバイト情報
              </Link>
            </li>
            <li>
              <Link href="/career/part-time-benefits" className="text-blue-600 hover:underline">
                就活に活かせるアルバイト経験
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
} 