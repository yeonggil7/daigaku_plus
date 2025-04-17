import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: '大学試験対策ガイド | 大学生活情報サイト',
  description: '大学の定期試験・期末試験を効率的に乗り切るための対策方法やテクニック、メンタル面での準備について解説します。',
};

export default function ExamPrepPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="mb-8">
        <Link href="/study" className="text-blue-500 hover:underline flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          学習情報に戻る
        </Link>
        <h1 className="text-3xl font-bold mt-4 mb-2">大学試験対策ガイド</h1>
        <p className="text-gray-600">効率的な試験勉強の方法と本番での実力発揮のコツを解説します。</p>
      </div>

      <div className="mb-8">
        <Image
          src="/images/campus-life.jpg"
          alt="試験勉強イメージ"
          width={800}
          height={400}
          className="rounded-lg shadow-md mb-4"
        />
      </div>

      <div className="bg-blue-50 p-6 rounded-lg shadow-md mb-10">
        <h2 className="text-2xl font-semibold mb-4">試験前の心構え</h2>
        <p className="mb-6">
          試験勉強は単なる暗記作業ではなく、計画的かつ戦略的に取り組むことが重要です。焦りや不安を感じるのは自然なことですが、
          適切な準備と心構えで試験を乗り越えましょう。
        </p>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="flex items-center mb-3">
              <div className="bg-blue-100 rounded-full p-2 mr-3">
                <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-lg">ポジティブマインド</h3>
            </div>
            <p className="text-gray-700 text-sm">
              「できない」ではなく「どうすればできるか」を考える姿勢を持ちましょう。
              試験は知識を確認する機会であり、成長するチャンスです。
            </p>
          </div>
          
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="flex items-center mb-3">
              <div className="bg-blue-100 rounded-full p-2 mr-3">
                <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-lg">十分な時間確保</h3>
            </div>
            <p className="text-gray-700 text-sm">
              試験直前の詰め込み勉強は効率が悪く、ストレスも増加します。
              少なくとも2週間前から計画的に勉強時間を確保しましょう。
            </p>
          </div>
          
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="flex items-center mb-3">
              <div className="bg-blue-100 rounded-full p-2 mr-3">
                <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="font-bold text-lg">自己理解</h3>
            </div>
            <p className="text-gray-700 text-sm">
              自分の得意・不得意科目を把握し、効率的な学習計画を立てましょう。
              不得意科目には多めの時間を割り当てることが重要です。
            </p>
          </div>
          
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="flex items-center mb-3">
              <div className="bg-blue-100 rounded-full p-2 mr-3">
                <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-lg">仲間との協力</h3>
            </div>
            <p className="text-gray-700 text-sm">
              一人で抱え込まず、友人と勉強会を開いたり、分からないことを質問し合ったりすることで、
              理解が深まり、モチベーションも維持できます。
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md mb-10">
        <h2 className="text-2xl font-semibold mb-6 border-b pb-2">効果的な試験勉強法</h2>
        
        <div className="space-y-6">
          <div className="flex">
            <div className="flex-shrink-0 h-10 w-10 bg-green-100 rounded-full flex items-center justify-center mr-4">
              <span className="text-green-600 font-bold">1</span>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-2">シラバスを徹底分析</h3>
              <p className="text-gray-700 mb-3">
                試験範囲、評価方法、過去の試験傾向などをシラバスから確認します。
                教員が重視しているポイントを把握することが効率的な勉強の第一歩です。
              </p>
              <div className="bg-gray-50 p-3 rounded text-sm">
                <strong>チェックポイント：</strong>
                <ul className="list-disc list-inside mt-1 space-y-1">
                  <li>試験の形式（記述式、選択式、持ち込み可否など）</li>
                  <li>出題範囲と配点の比重</li>
                  <li>教員が授業中に強調した内容</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="flex">
            <div className="flex-shrink-0 h-10 w-10 bg-green-100 rounded-full flex items-center justify-center mr-4">
              <span className="text-green-600 font-bold">2</span>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-2">学習計画を立てる</h3>
              <p className="text-gray-700 mb-3">
                試験日から逆算して計画を立てます。科目ごとに重要度と難易度を考慮し、
                バランスよく時間を配分しましょう。
              </p>
              <div className="bg-gray-50 p-3 rounded text-sm">
                <strong>計画例：</strong>
                <p className="mt-1">
                  試験2週間前：全体像の把握と重要概念の理解<br />
                  試験1週間前：問題演習と弱点の補強<br />
                  試験前日：最終確認と重要ポイントの復習
                </p>
              </div>
            </div>
          </div>
          
          <div className="flex">
            <div className="flex-shrink-0 h-10 w-10 bg-green-100 rounded-full flex items-center justify-center mr-4">
              <span className="text-green-600 font-bold">3</span>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-2">授業ノートの整理</h3>
              <p className="text-gray-700 mb-3">
                講義ノートを見直し、重要なポイントをマーカーでハイライトしたり、
                要約ノートを作成したりして情報を整理します。
              </p>
              <div className="bg-gray-50 p-3 rounded text-sm">
                <strong>効果的なノート整理法：</strong>
                <ul className="list-disc list-inside mt-1 space-y-1">
                  <li>コーネルノート法：ノートを「キーワード欄」「ノート欄」「サマリー欄」に分ける</li>
                  <li>マインドマップ：中心概念から枝分かれさせて関連性を可視化する</li>
                  <li>フラッシュカード：重要概念や用語を質問と回答の形でカード化する</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="flex">
            <div className="flex-shrink-0 h-10 w-10 bg-green-100 rounded-full flex items-center justify-center mr-4">
              <span className="text-green-600 font-bold">4</span>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-2">アクティブラーニング</h3>
              <p className="text-gray-700 mb-3">
                単なる暗記より、内容を自分の言葉で説明したり、応用問題に取り組んだりする
                アクティブな学習法が記憶の定着に効果的です。
              </p>
              <div className="bg-gray-50 p-3 rounded text-sm">
                <strong>アクティブラーニングの方法：</strong>
                <ul className="list-disc list-inside mt-1 space-y-1">
                  <li>フェインマン・テクニック：概念を小学生にも分かるように説明してみる</li>
                  <li>教え合い学習：友人に概念を教えることで自分の理解も深まる</li>
                  <li>問題作成：自分で問題を作成することで理解度が高まる</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="flex">
            <div className="flex-shrink-0 h-10 w-10 bg-green-100 rounded-full flex items-center justify-center mr-4">
              <span className="text-green-600 font-bold">5</span>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-2">過去問や模擬問題に挑戦</h3>
              <p className="text-gray-700 mb-3">
                過去の試験問題や類似の問題集に取り組むことで、出題傾向を把握し、
                実際の試験のシミュレーションができます。
              </p>
              <div className="bg-gray-50 p-3 rounded text-sm">
                <strong>過去問活用のコツ：</strong>
                <ul className="list-disc list-inside mt-1 space-y-1">
                  <li>時間を計って解くことで本番の時間感覚をつかむ</li>
                  <li>解答後は模範解答と比較し、不足している知識を補完する</li>
                  <li>大学の図書館やサークルの先輩から過去問を入手する</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md mb-10">
        <h2 className="text-2xl font-semibold mb-6 border-b pb-2">記憶の定着テクニック</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-yellow-50 p-4 rounded-lg">
            <h3 className="font-bold text-lg mb-3 text-yellow-700">間隔反復学習</h3>
            <p className="text-sm mb-2">
              学習内容を一定の間隔を空けて繰り返し復習することで、長期記憶への定着率が高まります。
            </p>
            <div className="bg-white p-3 rounded border border-yellow-200 text-xs">
              <strong>実践方法：</strong>
              <p>1日目→3日目→1週間後→2週間後と間隔を広げながら復習</p>
            </div>
          </div>
          
          <div className="bg-purple-50 p-4 rounded-lg">
            <h3 className="font-bold text-lg mb-3 text-purple-700">記憶術（ニーモニック）</h3>
            <p className="text-sm mb-2">
              語呂合わせやイメージ連想などの記憶術を活用して、覚えにくい内容を記憶しやすくします。
            </p>
            <div className="bg-white p-3 rounded border border-purple-200 text-xs">
              <strong>例：</strong>
              <p>「イオン、意思表示、移転、占有」を「いいいい（良い良い）取引」と覚える</p>
            </div>
          </div>
          
          <div className="bg-green-50 p-4 rounded-lg">
            <h3 className="font-bold text-lg mb-3 text-green-700">多感覚学習</h3>
            <p className="text-sm mb-2">
              視覚、聴覚、運動感覚など複数の感覚を使って学習することで、記憶の定着率が上がります。
            </p>
            <div className="bg-white p-3 rounded border border-green-200 text-xs">
              <strong>実践方法：</strong>
              <p>内容を声に出して読む、図解する、ジェスチャーを付けて覚えるなど</p>
            </div>
          </div>
          
          <div className="bg-red-50 p-4 rounded-lg">
            <h3 className="font-bold text-lg mb-3 text-red-700">チャンキング</h3>
            <p className="text-sm mb-2">
              情報を意味のあるまとまり（チャンク）に分けて整理することで、記憶の容量を増やします。
            </p>
            <div className="bg-white p-3 rounded border border-red-200 text-xs">
              <strong>例：</strong>
              <p>電話番号「0901234567」を「090-1234-567」のように区切って覚える</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md mb-10">
        <h2 className="text-2xl font-semibold mb-6 border-b pb-2">試験当日の心得</h2>
        
        <div className="space-y-4">
          <div className="flex">
            <div className="flex-shrink-0 mr-4">
              <svg className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-1">体調管理を優先</h3>
              <p className="text-sm">試験前日は十分な睡眠を取り、朝食をしっかり摂って体調を整えましょう。カフェイン摂取は程々に。</p>
            </div>
          </div>
          
          <div className="flex">
            <div className="flex-shrink-0 mr-4">
              <svg className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-1">時間に余裕を持って行動</h3>
              <p className="text-sm">試験会場には30分前に到着するようにし、持ち物の最終確認と心の準備をしましょう。</p>
            </div>
          </div>
          
          <div className="flex">
            <div className="flex-shrink-0 mr-4">
              <svg className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-1">試験の指示を注意深く読む</h3>
              <p className="text-sm">試験開始時に問題全体に目を通し、配点や制限時間、選択問題の有無などを確認しましょう。</p>
            </div>
          </div>
          
          <div className="flex">
            <div className="flex-shrink-0 mr-4">
              <svg className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-1">時間配分を意識</h3>
              <p className="text-sm">問題ごとの配点に応じて解答時間を配分し、一つの問題に固執せず、全体のバランスを考えましょう。</p>
            </div>
          </div>
          
          <div className="flex">
            <div className="flex-shrink-0 mr-4">
              <svg className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-1">リラックステクニック</h3>
              <p className="text-sm">緊張したら深呼吸を3回行い、肩の力を抜いてリラックスしましょう。過度な不安は思考力を低下させます。</p>
            </div>
          </div>
          
          <div className="flex">
            <div className="flex-shrink-0 mr-4">
              <svg className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-1">見直す時間を確保</h3>
              <p className="text-sm">試験終了前に5〜10分の見直し時間を確保し、計算ミスや書き忘れがないかチェックしましょう。</p>
            </div>
          </div>
        </div>
        
        <div className="mt-6 p-4 bg-red-50 rounded-lg border border-red-200">
          <h3 className="font-bold text-lg mb-2 text-red-700">試験でやってはいけないこと</h3>
          <ul className="space-y-2">
            <li className="flex items-start">
              <svg className="h-5 w-5 text-red-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
              <p className="text-sm">カンニング行為（不正行為）は絶対に避ける。発覚した場合、単位取消や停学などの厳しい処分を受けることがあります。</p>
            </li>
            <li className="flex items-start">
              <svg className="h-5 w-5 text-red-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
              <p className="text-sm">持ち込み不可の試験で参考書や電子機器を机の上に置かない。不用意に置いておくだけでも不正行為と見なされることがあります。</p>
            </li>
            <li className="flex items-start">
              <svg className="h-5 w-5 text-red-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
              <p className="text-sm">試験中の私語や他の受験者の解答を覗き込む行為。不正行為とみなされるだけでなく、周囲の迷惑にもなります。</p>
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-blue-50 p-6 rounded-lg shadow-sm mb-8">
        <h2 className="text-xl font-bold mb-4">関連リンク</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <Link href="/study/report-writing" className="block p-4 bg-white rounded-lg shadow-sm hover:bg-gray-50 transition-colors">
            <h3 className="font-bold mb-1">レポートの書き方</h3>
            <p className="text-sm text-gray-600">効果的なレポート作成の方法</p>
          </Link>
          <Link href="/study/learning-methods" className="block p-4 bg-white rounded-lg shadow-sm hover:bg-gray-50 transition-colors">
            <h3 className="font-bold mb-1">効率的な学習法</h3>
            <p className="text-sm text-gray-600">最新の学習科学に基づく効果的な勉強法</p>
          </Link>
          <Link href="/study/class-selection" className="block p-4 bg-white rounded-lg shadow-sm hover:bg-gray-50 transition-colors">
            <h3 className="font-bold mb-1">授業選択のコツ</h3>
            <p className="text-sm text-gray-600">自分に合った授業の選び方</p>
          </Link>
          <Link href="/study" className="block p-4 bg-white rounded-lg shadow-sm hover:bg-gray-50 transition-colors">
            <h3 className="font-bold mb-1">学習記事一覧</h3>
            <p className="text-sm text-gray-600">すべての学習関連記事をチェック</p>
          </Link>
        </div>
      </div>
    </div>
  );
} 