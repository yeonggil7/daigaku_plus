import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '大学生活を彩るスポーツサークル情報 | 大学生活ガイド',
  description: '大学のスポーツサークル選びのポイント、人気競技の紹介、サークル活動の魅力など、充実したキャンパスライフのためのスポーツコミュニティ情報',
};

export default function SportsCommunityPage() {
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
                <Link href="/community" className="text-gray-700 hover:text-blue-600">
                  コミュニティ
                </Link>
              </div>
            </li>
            <li aria-current="page">
              <div className="flex items-center">
                <span className="mx-2 text-gray-400">/</span>
                <span className="text-gray-500">スポーツ</span>
              </div>
            </li>
          </ol>
        </nav>

        <header className="bg-gradient-to-r from-blue-700 to-blue-500 rounded-lg p-8 mb-8 text-white shadow-lg">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">スポーツサークル情報</h1>
          <p className="text-lg opacity-90 max-w-2xl">
            運動を通じて仲間と絆を深め、充実した大学生活を送りましょう。ここでは様々なスポーツサークルの情報や活動内容を紹介します。
          </p>
        </header>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 border-b border-gray-200 pb-2">人気のスポーツサークル</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-48">
                <div className="absolute inset-0 bg-blue-900 opacity-40"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 className="text-2xl font-bold text-white text-center">テニスサークル</h3>
                </div>
              </div>
              <div className="p-5">
                <p className="mb-4">
                  初心者から経験者まで楽しめる人気のサークル。定期的な練習と交流試合、合宿などのイベントも充実。
                </p>
                <div className="flex items-center text-sm text-gray-600 mb-4">
                  <div className="mr-4">
                    <span className="font-semibold">活動頻度:</span> 週2〜3回
                  </div>
                  <div>
                    <span className="font-semibold">初心者:</span> 歓迎
                  </div>
                </div>
                <Link 
                  href="/community/articles/tennis-circle-guide" 
                  className="inline-block bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition duration-300"
                >
                  詳細を見る
                </Link>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-48">
                <div className="absolute inset-0 bg-blue-900 opacity-40"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 className="text-2xl font-bold text-white text-center">フットサルサークル</h3>
                </div>
              </div>
              <div className="p-5">
                <p className="mb-4">
                  少人数でも楽しめるフットサル。大学内の施設や近隣の体育館で活動し、他大学との交流も活発です。
                </p>
                <div className="flex items-center text-sm text-gray-600 mb-4">
                  <div className="mr-4">
                    <span className="font-semibold">活動頻度:</span> 週1〜2回
                  </div>
                  <div>
                    <span className="font-semibold">初心者:</span> 歓迎
                  </div>
                </div>
                <Link 
                  href="/community/articles/futsal-circle-guide" 
                  className="inline-block bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition duration-300"
                >
                  詳細を見る
                </Link>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-48">
                <div className="absolute inset-0 bg-blue-900 opacity-40"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 className="text-2xl font-bold text-white text-center">バスケットボールサークル</h3>
                </div>
              </div>
              <div className="p-5">
                <p className="mb-4">
                  男女混合で活動することも多く、練習から本格的な試合まで楽しめるサークル。運動不足解消にも最適です。
                </p>
                <div className="flex items-center text-sm text-gray-600 mb-4">
                  <div className="mr-4">
                    <span className="font-semibold">活動頻度:</span> 週2回
                  </div>
                  <div>
                    <span className="font-semibold">初心者:</span> 要相談
                  </div>
                </div>
                <Link 
                  href="/community/articles/basketball-circle-guide" 
                  className="inline-block bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition duration-300"
                >
                  詳細を見る
                </Link>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-48">
                <div className="absolute inset-0 bg-blue-900 opacity-40"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 className="text-2xl font-bold text-white text-center">ヨガ・ピラティスサークル</h3>
                </div>
              </div>
              <div className="p-5">
                <p className="mb-4">
                  心身のリラックスと健康維持に人気のヨガ・ピラティス。特に女子学生に人気で、資格取得を目指す方も多いです。
                </p>
                <div className="flex items-center text-sm text-gray-600 mb-4">
                  <div className="mr-4">
                    <span className="font-semibold">活動頻度:</span> 週1回
                  </div>
                  <div>
                    <span className="font-semibold">初心者:</span> 大歓迎
                  </div>
                </div>
                <Link 
                  href="/community/articles/yoga-circle-guide" 
                  className="inline-block bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition duration-300"
                >
                  詳細を見る
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12 bg-gray-50 p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-6">スポーツサークル選びのポイント</h2>
          
          <div className="space-y-4">
            <div className="flex items-start">
              <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                <span>1</span>
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-semibold mb-2">本気度をチェック</h3>
                <p>
                  サークルによって、競技志向の強いものから、友達作りがメインのものまで様々です。自分の求める活動レベルに合った場所を選びましょう。
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                <span>2</span>
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-semibold mb-2">活動頻度を確認</h3>
                <p>
                  週に何回活動があるのか、授業や他の予定と両立できるか確認しましょう。特に就活が始まる3年生以降は時間の使い方が重要です。
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                <span>3</span>
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-semibold mb-2">費用を把握</h3>
                <p>
                  部費や合宿費、ユニフォーム代など、どのくらいのコストがかかるのか事前に確認しておくことが大切です。思わぬ出費で困らないようにしましょう。
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                <span>4</span>
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-semibold mb-2">先輩や雰囲気をチェック</h3>
                <p>
                  新歓イベントや体験入部などで実際の雰囲気を確かめましょう。先輩との関係性や部内の人間関係は、サークル生活を左右する重要な要素です。
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 border-b border-gray-200 pb-2">季節のイベント・大会情報</h2>
          
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-3">春季スポーツ大会（4〜5月）</h3>
              <p className="mb-2">
                新入生歓迎の意味も込めて開催される大会です。多くのサークルが参加し、新たな仲間との絆を深める機会となります。
              </p>
              <Link href="/community/events/spring-sports" className="text-blue-600 hover:underline">
                詳細を見る →
              </Link>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-3">夏合宿（8〜9月）</h3>
              <p className="mb-2">
                長期休暇を利用して行われる合宿。技術向上はもちろん、メンバー間の親睦を深める絶好の機会です。
              </p>
              <Link href="/community/events/summer-camp" className="text-blue-600 hover:underline">
                詳細を見る →
              </Link>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-3">学園祭スポーツ大会（10〜11月）</h3>
              <p className="mb-2">
                学園祭に合わせて開催される大会。他大学や地域の方々との交流の場としても貴重です。
              </p>
              <Link href="/community/events/festival-sports" className="text-blue-600 hover:underline">
                詳細を見る →
              </Link>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-3">冬季インドア大会（12〜2月）</h3>
              <p className="mb-2">
                寒い季節に室内で開催される大会。バスケやバレー、卓球など様々な競技が行われます。
              </p>
              <Link href="/community/events/winter-indoor" className="text-blue-600 hover:underline">
                詳細を見る →
              </Link>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 border-b border-gray-200 pb-2">先輩たちの体験談</h2>
          
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <div className="flex items-start">
              <div className="flex-shrink-0 mr-4">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-bold">TK</span>
                </div>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">田中 健太（テニスサークル・3年生）</h3>
                <p className="mb-3">
                  「テニスは全くの初心者でしたが、先輩方が基礎から丁寧に教えてくれました。今では週末の活動が楽しみで仕方ありません。サークル内のミニ大会では準優勝することもできました！」
                </p>
                <div className="text-sm text-gray-600">
                  おすすめポイント：初心者でも安心して始められる環境、アットホームな雰囲気
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <div className="flex items-start">
              <div className="flex-shrink-0 mr-4">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-bold">MY</span>
                </div>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">宮本 悠子（バスケサークル・4年生）</h3>
                <p className="mb-3">
                  「大学の4年間でバスケを続けられたことで、精神的にも体力的にも成長できました。特に主将を務めた経験は、就職活動でもアピールポイントになりました。何より一生の友達ができたことが最大の財産です。」
                </p>
                <div className="text-sm text-gray-600">
                  おすすめポイント：リーダーシップを発揮できる機会、生涯の友人関係
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-start">
              <div className="flex-shrink-0 mr-4">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-bold">SK</span>
                </div>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">佐藤 光（ヨガサークル・2年生）</h3>
                <p className="mb-3">
                  「授業や課題で疲れた心と体をリフレッシュするために始めたヨガですが、今では週1回の活動が心の支えになっています。先輩から教わった呼吸法は試験前の緊張をほぐすのにも役立っています。」
                </p>
                <div className="text-sm text-gray-600">
                  おすすめポイント：心身のリフレッシュ、生活に活かせる技術習得
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="bg-blue-50 rounded-lg p-6 shadow-sm">
          <h2 className="text-xl font-bold mb-4 text-blue-800">関連コミュニティ情報</h2>
          <ul className="space-y-2">
            <li>
              <Link href="/community/category/culture" className="text-blue-600 hover:underline">
                文化系サークル情報
              </Link>
            </li>
            <li>
              <Link href="/community/articles/circle-selection-guide" className="text-blue-600 hover:underline">
                サークル選びのポイント
              </Link>
            </li>
            <li>
              <Link href="/community/events" className="text-blue-600 hover:underline">
                イベントカレンダー
              </Link>
            </li>
            <li>
              <Link href="/community/student-council" className="text-blue-600 hover:underline">
                学生会情報
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
} 