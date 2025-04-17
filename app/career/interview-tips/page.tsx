import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: '就活面接対策ガイド | 大学生活情報サイト',
  description: '就職活動の面接対策について。面接の種類、事前準備、よくある質問とその回答例を紹介します。',
};

export default function InterviewTipsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="mb-8">
        <Link href="/career" className="text-blue-500 hover:underline flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          キャリア情報に戻る
        </Link>
        <h1 className="text-3xl font-bold mt-4 mb-2">就活面接対策ガイド</h1>
        <p className="text-gray-600">面接官に好印象を与え、自分の魅力を伝えるためのポイントを解説します。</p>
      </div>

      <div className="mb-8">
        <Image
          src="/images/part-time-job.jpg"
          alt="面接イメージ"
          width={800}
          height={400}
          className="rounded-lg shadow-md mb-4"
        />
      </div>

      <div className="mb-12 bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4 border-b pb-2">面接の種類を知る</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="border-l-4 border-blue-500 pl-4">
            <h3 className="font-bold text-lg mb-2">個人面接</h3>
            <p className="text-gray-700">面接官1〜3人に対して学生1人で行われる最も一般的な形式。自己PRや志望動機をじっくり話すことができます。</p>
          </div>
          <div className="border-l-4 border-green-500 pl-4">
            <h3 className="font-bold text-lg mb-2">グループ面接</h3>
            <p className="text-gray-700">複数の学生に対して同時に行われる面接。他の学生との差別化が重要になります。</p>
          </div>
          <div className="border-l-4 border-yellow-500 pl-4">
            <h3 className="font-bold text-lg mb-2">グループディスカッション</h3>
            <p className="text-gray-700">複数の学生でテーマについて議論する形式。協調性とリーダーシップのバランスが問われます。</p>
          </div>
          <div className="border-l-4 border-purple-500 pl-4">
            <h3 className="font-bold text-lg mb-2">Web面接</h3>
            <p className="text-gray-700">オンラインで行われる面接。通信環境の確認や背景の整理など、独自の準備が必要です。</p>
          </div>
        </div>
      </div>

      <div className="mb-12 bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4 border-b pb-2">面接前の準備</h2>
        <ul className="space-y-4">
          <li className="flex items-start">
            <svg className="h-6 w-6 text-green-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <div>
              <h3 className="font-bold">企業研究を徹底する</h3>
              <p className="text-gray-700">企業の事業内容、強み、課題、競合他社との違いなどを把握しておきましょう。</p>
            </div>
          </li>
          <li className="flex items-start">
            <svg className="h-6 w-6 text-green-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <div>
              <h3 className="font-bold">自己分析の内容を整理する</h3>
              <p className="text-gray-700">自分の強み・弱み、学生時代に力を入れたこと、志望動機を簡潔に説明できるようにしておきましょう。</p>
            </div>
          </li>
          <li className="flex items-start">
            <svg className="h-6 w-6 text-green-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <div>
              <h3 className="font-bold">想定質問への回答を準備する</h3>
              <p className="text-gray-700">よくある質問に対する回答を事前に準備し、練習しておきましょう。</p>
            </div>
          </li>
          <li className="flex items-start">
            <svg className="h-6 w-6 text-green-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <div>
              <h3 className="font-bold">身だしなみを整える</h3>
              <p className="text-gray-700">清潔感のあるスーツ、適切な髪型、爪の手入れなど、見た目の印象も重要です。</p>
            </div>
          </li>
        </ul>
      </div>

      <div className="mb-12 bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4 border-b pb-2">よくある質問と回答例</h2>
        
        <div className="mb-6">
          <h3 className="font-bold text-lg text-blue-600 mb-2">Q: 自己紹介をお願いします</h3>
          <div className="bg-gray-50 p-4 rounded">
            <p className="italic text-gray-700 mb-2">回答例：</p>
            <p>「○○大学△△学部の◇◇と申します。大学では主に経営学を専攻し、特にマーケティングについて研究しています。また、学生団体では広報担当として企業とのコラボイベントを企画・運営し、参加者数を前年比30%増加させました。この経験を通じて培った企画力とコミュニケーション能力を貴社で活かしたいと考えています。」</p>
          </div>
          <p className="mt-2 text-sm text-gray-600">ポイント：簡潔に自分の所属と特徴を述べ、学んだことや経験を具体的な成果とともに伝えましょう。</p>
        </div>
        
        <div className="mb-6">
          <h3 className="font-bold text-lg text-blue-600 mb-2">Q: 志望動機を教えてください</h3>
          <div className="bg-gray-50 p-4 rounded">
            <p className="italic text-gray-700 mb-2">回答例：</p>
            <p>「貴社の○○という製品が社会問題の解決に貢献していることに感銘を受けました。私自身、大学のゼミで環境問題について研究し、技術革新による解決策に関心を持っています。また、インターンシップで経験した△△業界での経験を活かし、貴社の■■プロジェクトに参画することで社会貢献したいと考えています。」</p>
          </div>
          <p className="mt-2 text-sm text-gray-600">ポイント：企業研究に基づいた具体的な志望理由と、自分の経験・スキルをどう活かせるかを関連付けて伝えましょう。</p>
        </div>
        
        <div className="mb-6">
          <h3 className="font-bold text-lg text-blue-600 mb-2">Q: あなたの強みは何ですか</h3>
          <div className="bg-gray-50 p-4 rounded">
            <p className="italic text-gray-700 mb-2">回答例：</p>
            <p>「私の強みは粘り強さと計画的に物事を進める力です。例えば、学生団体での企画では、最初は協賛企業が集まらず苦戦しましたが、企業研究を徹底し、提案内容を改善し続けた結果、最終的に5社からの協賛を獲得しました。また、常に期限の1週間前に作業を完了させる習慣があり、余裕を持ったスケジュール管理ができます。」</p>
          </div>
          <p className="mt-2 text-sm text-gray-600">ポイント：抽象的な表現を避け、具体的なエピソードで強みを証明することが重要です。</p>
        </div>
        
        <div className="mb-6">
          <h3 className="font-bold text-lg text-blue-600 mb-2">Q: 学生時代に力を入れたことは何ですか</h3>
          <div className="bg-gray-50 p-4 rounded">
            <p className="italic text-gray-700 mb-2">回答例：</p>
            <p>「私が学生時代に力を入れたのは合唱サークル活動です。週3回の練習に加え、パート練習のリーダーとして初心者メンバーへの指導も担当しました。特に困難だったのは、コンクール2ヶ月前にメンバーのモチベーションが低下した時です。個別面談を実施し、各メンバーの課題を把握した上で練習メニューを再構築しました。結果として全国大会で入賞することができ、リーダーシップとチームマネジメントの重要性を学びました。」</p>
          </div>
          <p className="mt-2 text-sm text-gray-600">ポイント：単なる活動内容だけでなく、その中で直面した課題と解決プロセス、そこから得た学びを伝えましょう。</p>
        </div>
      </div>

      <div className="mb-12 bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4 border-b pb-2">面接当日の注意点</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="font-bold text-lg mb-2 text-blue-700">時間管理</h3>
            <p>面接会場には15分前に到着するようにし、落ち着いて臨めるようにしましょう。</p>
          </div>
          <div className="bg-green-50 p-4 rounded-lg">
            <h3 className="font-bold text-lg mb-2 text-green-700">姿勢と表情</h3>
            <p>背筋を伸ばし、適度にアイコンタクトを取りながら、笑顔を心がけましょう。</p>
          </div>
          <div className="bg-yellow-50 p-4 rounded-lg">
            <h3 className="font-bold text-lg mb-2 text-yellow-700">話し方</h3>
            <p>ゆっくり明瞭に話し、専門用語は避け、相手に伝わりやすい言葉を選びましょう。</p>
          </div>
          <div className="bg-purple-50 p-4 rounded-lg">
            <h3 className="font-bold text-lg mb-2 text-purple-700">質問タイム</h3>
            <p>面接の最後に質問を求められた際は、事前に準備した質問をするようにしましょう。</p>
          </div>
        </div>
      </div>

      <div className="mb-8 bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4 border-b pb-2">関連リンク</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <Link href="/career/self-analysis" className="block p-4 border rounded-lg hover:bg-gray-50 transition-colors">
            <h3 className="font-bold mb-1">自己分析ガイド</h3>
            <p className="text-sm text-gray-600">自分の強みを発見するためのガイド</p>
          </Link>
          <Link href="/career/industry-research" className="block p-4 border rounded-lg hover:bg-gray-50 transition-colors">
            <h3 className="font-bold mb-1">業界研究ガイド</h3>
            <p className="text-sm text-gray-600">効果的な業界・企業研究の方法</p>
          </Link>
          <Link href="/career/entry-preparation" className="block p-4 border rounded-lg hover:bg-gray-50 transition-colors">
            <h3 className="font-bold mb-1">エントリーシート対策</h3>
            <p className="text-sm text-gray-600">採用担当者の目に留まるESの書き方</p>
          </Link>
          <Link href="/career" className="block p-4 border rounded-lg hover:bg-gray-50 transition-colors">
            <h3 className="font-bold mb-1">キャリア記事一覧</h3>
            <p className="text-sm text-gray-600">就活に関する記事をチェック</p>
          </Link>
        </div>
      </div>
    </div>
  );
} 