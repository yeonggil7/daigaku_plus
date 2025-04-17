import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: '大学レポートの書き方ガイド | 大学生活情報サイト',
  description: '大学のレポート・論文の効果的な書き方や構成、研究方法、引用のルールなどを解説します。',
};

export default function ReportWritingPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="mb-8">
        <Link href="/study" className="text-blue-500 hover:underline flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          学習情報に戻る
        </Link>
        <h1 className="text-3xl font-bold mt-4 mb-2">大学レポートの書き方ガイド</h1>
        <p className="text-gray-600">高評価を得るレポート・論文の作成方法と実践的なテクニックを解説します。</p>
      </div>

      <div className="mb-8">
        <Image
          src="/images/campus-life.jpg"
          alt="レポート作成イメージ"
          width={800}
          height={400}
          className="rounded-lg shadow-md mb-4"
        />
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md mb-12">
        <h2 className="text-2xl font-semibold mb-6 border-b pb-2">レポートの基本構成</h2>
        
        <div className="space-y-6">
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="font-bold text-xl mb-3 text-blue-700">1. 表紙・タイトル</h3>
            <p>
              レポートのタイトル、提出日、学部・学科、学籍番号、氏名、担当教員名などを記載します。
              タイトルは内容を適切に表現し、簡潔かつ具体的なものにしましょう。
            </p>
          </div>
          
          <div className="bg-indigo-50 p-4 rounded-lg">
            <h3 className="font-bold text-xl mb-3 text-indigo-700">2. 序論（はじめに）</h3>
            <p className="mb-3">
              研究テーマの紹介と選んだ理由、レポートの目的、問題提起などを記述します。
              読者が「なぜこのテーマが重要か」「どのような問いに答えようとしているのか」を理解できるようにします。
            </p>
            <div className="bg-white p-3 rounded border border-indigo-200">
              <p className="text-sm italic">例：</p>
              <p className="text-sm">
                「本レポートでは、リモート学習が大学生のメンタルヘルスに与える影響について検討する。
                コロナ禍において急速に普及したオンライン授業だが、学生の精神的健康への長期的影響は
                十分に研究されていない。本研究では特に...」
              </p>
            </div>
          </div>
          
          <div className="bg-purple-50 p-4 rounded-lg">
            <h3 className="font-bold text-xl mb-3 text-purple-700">3. 本論</h3>
            <p className="mb-3">
              テーマに関する先行研究や理論の紹介、調査・分析結果、考察などを論理的に展開します。
              主張とそれを裏付ける根拠を明確に示すことが重要です。
            </p>
            <ul className="list-disc list-inside space-y-2 mb-3">
              <li>複数の段落やセクションに分けて整理する</li>
              <li>各段落は一つの主題を扱い、トピックセンテンスから始める</li>
              <li>論理の流れを意識し、接続詞を効果的に使用する</li>
              <li>客観的な事実と自分の意見・解釈を区別する</li>
            </ul>
          </div>
          
          <div className="bg-green-50 p-4 rounded-lg">
            <h3 className="font-bold text-xl mb-3 text-green-700">4. 結論（おわりに）</h3>
            <p className="mb-3">
              レポート全体のまとめと、問いに対する自分なりの答え、今後の課題などを記述します。
              新しい情報を追加するのではなく、本論で述べた内容を簡潔にまとめましょう。
            </p>
            <div className="bg-white p-3 rounded border border-green-200">
              <p className="text-sm italic">例：</p>
              <p className="text-sm">
                「本研究では、リモート学習とメンタルヘルスの関係について分析した結果、
                適切なサポート体制があれば精神的負担を軽減できることが示唆された。
                しかし、長期的な影響については更なる研究が必要である...」
              </p>
            </div>
          </div>
          
          <div className="bg-red-50 p-4 rounded-lg">
            <h3 className="font-bold text-xl mb-3 text-red-700">5. 参考文献リスト</h3>
            <p>
              レポート作成に使用した書籍、論文、ウェブサイトなどの出典情報を一定の形式に従って
              リスト化します。引用方法は指定された形式（APA形式、MLA形式など）に従いましょう。
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md mb-12">
        <h2 className="text-2xl font-semibold mb-6 border-b pb-2">効果的なレポート作成のポイント</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="flex">
            <div className="flex-shrink-0 h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
              <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-2">計画を立てる</h3>
              <p className="text-gray-700">締切までの時間を考慮し、リサーチ、執筆、校正のスケジュールを作成しましょう。余裕を持った計画が質の高いレポートにつながります。</p>
            </div>
          </div>
          
          <div className="flex">
            <div className="flex-shrink-0 h-12 w-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
              <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
              </svg>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-2">テーマを絞り込む</h3>
              <p className="text-gray-700">広すぎるテーマは浅い内容になりがち。具体的な問いを設定し、深く掘り下げることで説得力のあるレポートになります。</p>
            </div>
          </div>
          
          <div className="flex">
            <div className="flex-shrink-0 h-12 w-12 bg-yellow-100 rounded-full flex items-center justify-center mr-4">
              <svg className="h-6 w-6 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-2">徹底的な文献調査</h3>
              <p className="text-gray-700">大学の図書館データベースや学術ジャーナルを活用し、信頼性の高い情報源からデータを収集しましょう。</p>
            </div>
          </div>
          
          <div className="flex">
            <div className="flex-shrink-0 h-12 w-12 bg-red-100 rounded-full flex items-center justify-center mr-4">
              <svg className="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
              </svg>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-2">アウトラインを作成</h3>
              <p className="text-gray-700">本格的な執筆前に、レポートの骨組みとなるアウトラインを作成。論理構成を整理し、執筆の効率を高めます。</p>
            </div>
          </div>
          
          <div className="flex">
            <div className="flex-shrink-0 h-12 w-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
              <svg className="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-2">適切に引用・参照</h3>
              <p className="text-gray-700">他者の意見や研究結果を引用する際は、出典を明記。剽窃は学術的不正行為であり、厳しく罰せられます。</p>
            </div>
          </div>
          
          <div className="flex">
            <div className="flex-shrink-0 h-12 w-12 bg-indigo-100 rounded-full flex items-center justify-center mr-4">
              <svg className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
              </svg>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-2">推敲と校正</h3>
              <p className="text-gray-700">完成後は時間を置いて読み直し。文法・表現のミスだけでなく、論理の一貫性や説得力も確認しましょう。</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md mb-12">
        <h2 className="text-2xl font-semibold mb-6 border-b pb-2">引用と参考文献の書き方</h2>
        
        <div className="space-y-6">
          <div>
            <h3 className="font-bold text-lg mb-3">本文中での引用方法</h3>
            <div className="bg-gray-50 p-4 rounded mb-4">
              <h4 className="font-semibold mb-2">直接引用</h4>
              <p className="text-sm mb-2">原文をそのまま引用する場合は、引用符（「」や"")で囲み、出典を明記します。</p>
              <div className="bg-white p-3 rounded border">
                <p className="text-sm">例：田中（2020）によれば、「大学生のレポート作成能力は卒業後のキャリアにも大きく影響する」とされている。</p>
              </div>
            </div>
            
            <div className="bg-gray-50 p-4 rounded">
              <h4 className="font-semibold mb-2">間接引用（言い換え）</h4>
              <p className="text-sm mb-2">内容を自分の言葉で要約・言い換える場合も、出典を明記する必要があります。</p>
              <div className="bg-white p-3 rounded border">
                <p className="text-sm">例：田中（2020）の研究では、レポート作成スキルが卒業後のキャリア形成に重要な役割を果たすことが示されている。</p>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-3">参考文献リストの書き方</h3>
            <p className="mb-4">レポートの最後に参考文献リストを作成します。代表的な形式として以下のようなものがあります。</p>
            
            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded">
                <h4 className="font-semibold mb-2">書籍の場合（APA形式）</h4>
                <div className="bg-white p-3 rounded border">
                  <p className="text-sm">著者名（出版年）. 『書籍名』. 出版社.</p>
                  <p className="text-sm mt-2">例：田中太郎（2020）. 『大学生のためのアカデミックライティング入門』. 学術出版社.</p>
                </div>
              </div>
              
              <div className="bg-gray-50 p-4 rounded">
                <h4 className="font-semibold mb-2">論文の場合（APA形式）</h4>
                <div className="bg-white p-3 rounded border">
                  <p className="text-sm">著者名（出版年）. 論文タイトル. 『掲載誌名』, 巻(号), 開始ページ-終了ページ.</p>
                  <p className="text-sm mt-2">例：田中太郎（2020）. 大学生のレポート作成能力とキャリア形成の関連性. 『高等教育研究』, 15(2), 121-135.</p>
                </div>
              </div>
              
              <div className="bg-gray-50 p-4 rounded">
                <h4 className="font-semibold mb-2">ウェブサイトの場合（APA形式）</h4>
                <div className="bg-white p-3 rounded border">
                  <p className="text-sm">著者名（公開年月日）. 記事タイトル. ウェブサイト名. URL（閲覧日）</p>
                  <p className="text-sm mt-2">例：文部科学省（2021年4月1日）. 高等教育機関におけるアカデミックライティング教育の推進について. 文部科学省ウェブサイト. https://www.mext.go.jp/example （2023年5月10日閲覧）</p>
                </div>
              </div>
            </div>
            
            <p className="mt-4 text-sm text-gray-600">※ 引用形式は学部や教員の指示に従ってください。指定がない場合は、一般的なAPA形式やMLA形式などの標準的な形式を使用しましょう。</p>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md mb-12">
        <h2 className="text-2xl font-semibold mb-6 border-b pb-2">よくある失敗と対策</h2>
        
        <div className="space-y-4">
          <div className="flex bg-red-50 p-4 rounded-lg">
            <div className="flex-shrink-0 mr-4">
              <svg className="h-6 w-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-1">課題の要件を無視する</h3>
              <p className="text-sm">対策：課題の指示（文字数、形式、テーマなど）を確認し、チェックリストを作成して要件を満たしているか確認しましょう。</p>
            </div>
          </div>
          
          <div className="flex bg-red-50 p-4 rounded-lg">
            <div className="flex-shrink-0 mr-4">
              <svg className="h-6 w-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-1">論理的一貫性の欠如</h3>
              <p className="text-sm">対策：アウトラインを作成し、各段落がメインテーマに沿っているか確認。また、段落間の接続を意識して書きましょう。</p>
            </div>
          </div>
          
          <div className="flex bg-red-50 p-4 rounded-lg">
            <div className="flex-shrink-0 mr-4">
              <svg className="h-6 w-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-1">根拠不足の主張</h3>
              <p className="text-sm">対策：主張には必ず証拠（データ、研究結果、例など）を添えましょう。「なぜそう言えるのか」を常に意識してください。</p>
            </div>
          </div>
          
          <div className="flex bg-red-50 p-4 rounded-lg">
            <div className="flex-shrink-0 mr-4">
              <svg className="h-6 w-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-1">剽窃（盗用）</h3>
              <p className="text-sm">対策：他者の意見や文章を使用する際は必ず引用し、出典を明記しましょう。剽窃チェックツールを利用するのも効果的です。</p>
            </div>
          </div>
          
          <div className="flex bg-red-50 p-4 rounded-lg">
            <div className="flex-shrink-0 mr-4">
              <svg className="h-6 w-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-1">締切間際の執筆</h3>
              <p className="text-sm">対策：計画的に進め、締切の1週間前には完成させ、推敲・修正の時間を確保しましょう。</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-blue-50 p-6 rounded-lg shadow-sm mb-8">
        <h2 className="text-xl font-bold mb-4">関連リンク</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <Link href="/study/exam-prep" className="block p-4 bg-white rounded-lg shadow-sm hover:bg-gray-50 transition-colors">
            <h3 className="font-bold mb-1">試験対策ガイド</h3>
            <p className="text-sm text-gray-600">効果的な試験勉強方法と当日の心構え</p>
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