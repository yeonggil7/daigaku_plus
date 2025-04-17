import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '大学の文化系サークル・部活動情報 | 大学生活ガイド',
  description: '音楽、芸術、学術などの文化系サークル情報。初心者向けのサークル選びのポイントから、人気のサークル紹介、先輩の体験談まで幅広く紹介します。',
};

export default function CultureCommunityPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <nav className="flex mb-8" aria-label="Breadcrumb">
          <ol className="inline-flex items-center space-x-1 md:space-x-3">
            <li className="inline-flex items-center">
              <Link href="/" className="text-gray-700 hover:text-purple-600">
                ホーム
              </Link>
            </li>
            <li>
              <div className="flex items-center">
                <span className="mx-2 text-gray-400">/</span>
                <Link href="/community" className="text-gray-700 hover:text-purple-600">
                  コミュニティ
                </Link>
              </div>
            </li>
            <li aria-current="page">
              <div className="flex items-center">
                <span className="mx-2 text-gray-400">/</span>
                <span className="text-gray-500">文化系</span>
              </div>
            </li>
          </ol>
        </nav>

        <header className="bg-gradient-to-r from-purple-700 to-purple-500 rounded-lg p-8 mb-8 text-white shadow-lg">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">文化系サークル情報</h1>
          <p className="text-lg opacity-90 max-w-2xl">
            音楽、芸術、学術など多彩な文化系サークルの魅力と活動内容を紹介します。興味や特技を活かせる場所で、大学生活をより豊かなものにしましょう。
          </p>
        </header>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 border-b border-gray-200 pb-2">人気の文化系サークル</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-48">
                <div className="absolute inset-0 bg-purple-900 opacity-40"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 className="text-2xl font-bold text-white text-center">軽音楽サークル</h3>
                </div>
              </div>
              <div className="p-5">
                <p className="mb-4">
                  ポップス、ロック、ジャズなど様々なジャンルの音楽を演奏。定期的なライブやイベント出演など活動の場も多いです。
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
                  href="/community/articles/music-circle-guide" 
                  className="inline-block bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-lg transition duration-300"
                >
                  詳細を見る
                </Link>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-48">
                <div className="absolute inset-0 bg-purple-900 opacity-40"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 className="text-2xl font-bold text-white text-center">写真サークル</h3>
                </div>
              </div>
              <div className="p-5">
                <p className="mb-4">
                  風景や人物など様々な被写体を撮影。定期的な撮影会や展示会を開催し、技術向上と作品発表の機会が豊富です。
                </p>
                <div className="flex items-center text-sm text-gray-600 mb-4">
                  <div className="mr-4">
                    <span className="font-semibold">活動頻度:</span> 週1回+撮影会
                  </div>
                  <div>
                    <span className="font-semibold">初心者:</span> 大歓迎
                  </div>
                </div>
                <Link 
                  href="/community/articles/photo-circle-guide" 
                  className="inline-block bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-lg transition duration-300"
                >
                  詳細を見る
                </Link>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-48">
                <div className="absolute inset-0 bg-purple-900 opacity-40"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 className="text-2xl font-bold text-white text-center">演劇サークル</h3>
                </div>
              </div>
              <div className="p-5">
                <p className="mb-4">
                  脚本作りから演出、実演まで一貫して行う創作活動。年に数回の公演が活動の集大成となります。
                </p>
                <div className="flex items-center text-sm text-gray-600 mb-4">
                  <div className="mr-4">
                    <span className="font-semibold">活動頻度:</span> 週2回+公演前は増加
                  </div>
                  <div>
                    <span className="font-semibold">初心者:</span> 歓迎
                  </div>
                </div>
                <Link 
                  href="/community/articles/drama-circle-guide" 
                  className="inline-block bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-lg transition duration-300"
                >
                  詳細を見る
                </Link>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-48">
                <div className="absolute inset-0 bg-purple-900 opacity-40"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 className="text-2xl font-bold text-white text-center">茶道・華道サークル</h3>
                </div>
              </div>
              <div className="p-5">
                <p className="mb-4">
                  日本の伝統文化を学び、実践するサークル。お点前や生け花の基本から学べ、資格取得を目指す方も多いです。
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
                  href="/community/articles/traditional-arts-guide" 
                  className="inline-block bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-lg transition duration-300"
                >
                  詳細を見る
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12 bg-gray-50 p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-6">文化系サークル選びの視点</h2>
          
          <div className="space-y-4">
            <div className="flex items-start">
              <div className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                <span>1</span>
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-semibold mb-2">自分の興味関心と一致しているか</h3>
                <p>
                  長く続けるためには、自分が本当に興味を持てる活動かどうかが重要です。
                  体験入部などで実際の活動内容を確認し、想像と現実のギャップがないか確かめましょう。
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                <span>2</span>
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-semibold mb-2">サークルの目標や方向性</h3>
                <p>
                  コンテストや発表会を目指す真剣なサークルから、楽しく活動することを主眼とするサークルまで、
                  目標や方向性は様々です。自分のスタンスに合っているかを確認しましょう。
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                <span>3</span>
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-semibold mb-2">必要な道具や経費</h3>
                <p>
                  楽器や装備など、個人で用意する必要がある場合もあります。
                  また、合宿や遠征などにかかる費用も事前に確認しておくと安心です。
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                <span>4</span>
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-semibold mb-2">人間関係の雰囲気</h3>
                <p>
                  文化系サークルは比較的少人数で活動することが多く、メンバー同士の関係性が活動に大きく影響します。
                  先輩後輩関係や部内の雰囲気が自分に合っているかをチェックしましょう。
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 border-b border-gray-200 pb-2">主な文化系サークルの活動時期と行事</h2>
          
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-3">新歓期（4月〜5月）</h3>
              <p className="mb-2">
                各サークルの新入生勧誘が活発な時期。体験入部や新歓イベントが盛んに行われ、
                サークルの雰囲気を知るのに最適な時期です。
              </p>
              <Link href="/community/events/welcome-events" className="text-purple-600 hover:underline">
                新歓イベント情報 →
              </Link>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-3">学園祭（10月〜11月）</h3>
              <p className="mb-2">
                多くの文化系サークルにとって1年の集大成となる発表の場。
                展示、演奏、パフォーマンスなど、サークルの活動成果を広く公開します。
              </p>
              <Link href="/community/events/festival" className="text-purple-600 hover:underline">
                学園祭情報 →
              </Link>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-3">冬期公演・展示会（12月〜2月）</h3>
              <p className="mb-2">
                演劇サークルの冬公演や美術サークルの展示会など、
                サークル単独で開催するイベントが多い時期です。
              </p>
              <Link href="/community/events/winter-events" className="text-purple-600 hover:underline">
                冬期イベント情報 →
              </Link>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-3">合宿・研修（8月〜9月）</h3>
              <p className="mb-2">
                長期休暇を利用した集中的な活動期間。技術向上や作品制作に集中的に取り組みます。
                また、OB・OGとの交流の機会にもなります。
              </p>
              <Link href="/community/events/summer-camp" className="text-purple-600 hover:underline">
                合宿情報 →
              </Link>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 border-b border-gray-200 pb-2">先輩たちの体験談</h2>
          
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <div className="flex items-start">
              <div className="flex-shrink-0 mr-4">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center">
                  <span className="text-purple-600 font-bold">YM</span>
                </div>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">山田 美咲（写真サークル・3年生）</h3>
                <p className="mb-3">
                  「高校生の時から写真に興味はあったものの、本格的なカメラは持っていませんでした。サークルでは初心者でも基礎から教えてもらえ、先輩から機材を借りることもできました。展示会で自分の作品が展示された時は感動しました。今では趣味を超えて、将来のキャリアとして写真の道も考えています。」
                </p>
                <div className="text-sm text-gray-600">
                  おすすめポイント：技術的サポートが充実、作品発表の機会が多い
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <div className="flex items-start">
              <div className="flex-shrink-0 mr-4">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center">
                  <span className="text-purple-600 font-bold">KS</span>
                </div>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">木村 翔太（軽音楽サークル・4年生）</h3>
                <p className="mb-3">
                  「バンド経験はなかったのですが、大学で何か新しいことを始めたいと思い入部しました。最初はドラムの叩き方すら分からない状態でしたが、先輩方の熱心な指導のおかげで1年後には学園祭のステージに立つことができました。音楽を通じて知り合った仲間は一生の宝物です。」
                </p>
                <div className="text-sm text-gray-600">
                  おすすめポイント：初心者への丁寧な指導、発表の場が多い
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-start">
              <div className="flex-shrink-0 mr-4">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center">
                  <span className="text-purple-600 font-bold">AT</span>
                </div>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">安藤 智子（茶道サークル・2年生）</h3>
                <p className="mb-3">
                  「日本文化に興味があり入部しました。最初は敷居が高いイメージがありましたが、実際は和やかな雰囲気で楽しく学べています。茶道を通じて作法や礼儀、そして「一期一会」の心を学び、日常生活でも役立っています。就活でも日本文化への理解をアピールできそうです。」
                </p>
                <div className="text-sm text-gray-600">
                  おすすめポイント：伝統文化への理解が深まる、落ち着いた雰囲気
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="bg-purple-50 rounded-lg p-6 shadow-sm">
          <h2 className="text-xl font-bold mb-4 text-purple-800">関連コミュニティ情報</h2>
          <ul className="space-y-2">
            <li>
              <Link href="/community/category/sports" className="text-purple-600 hover:underline">
                スポーツ系サークル情報
              </Link>
            </li>
            <li>
              <Link href="/community/articles/circle-selection-guide" className="text-purple-600 hover:underline">
                サークル選びのポイント
              </Link>
            </li>
            <li>
              <Link href="/community/events" className="text-purple-600 hover:underline">
                イベントカレンダー
              </Link>
            </li>
            <li>
              <Link href="/community/student-council" className="text-purple-600 hover:underline">
                学生会情報
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
} 