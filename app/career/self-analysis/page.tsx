import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function SelfAnalysisPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* ヘッダーセクション */}
      <section className="bg-purple-100 rounded-xl p-8 md:p-12 mb-12">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-2/3 mb-6 md:mb-0 md:pr-8">
            <Link href="/career" className="text-purple-600 hover:underline mb-2 inline-block">
              ← キャリア情報に戻る
            </Link>
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-purple-800">自己分析ガイド</h1>
            <p className="text-lg text-purple-700 mb-6">
              あなたの強み、価値観、スキルを発見し、自分に合ったキャリアパスを見つけるための自己分析方法を紹介します。
            </p>
          </div>
          <div className="md:w-1/3 relative">
            <div className="w-full h-64 md:h-80 relative rounded-lg overflow-hidden">
              <Image 
                src="/images/blog-thumb.jpg" 
                alt="自己分析" 
                fill 
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 自己分析の重要性 */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6 text-center">自己分析が<span className="text-purple-600">重要な理由</span></h2>
        
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <p className="text-lg mb-4">
            自己分析は就職活動の土台となる重要なステップです。自分自身を深く理解することで、以下のようなメリットがあります：
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="flex items-start">
              <div className="bg-purple-100 rounded-full p-3 mr-4">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">志望動機が明確になる</h3>
                <p className="text-gray-600">自分の価値観や強みを理解することで、なぜその業界・企業を志望するのかの理由が明確になります。</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-purple-100 rounded-full p-3 mr-4">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">自分に合った企業選びができる</h3>
                <p className="text-gray-600">自分の価値観や働き方の希望を知ることで、企業文化や職場環境との相性を判断できます。</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-purple-100 rounded-full p-3 mr-4">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">面接での質問に具体的に答えられる</h3>
                <p className="text-gray-600">「あなたの強みは？」「学生時代に頑張ったことは？」などの質問に具体的なエピソードで答えられます。</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-purple-100 rounded-full p-3 mr-4">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">キャリアプランが明確になる</h3>
                <p className="text-gray-600">自分の長期的な目標や価値観を理解することで、将来のキャリアパスを描きやすくなります。</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 自己分析の方法 */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6">効果的な<span className="text-purple-600">自己分析方法</span></h2>
        
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-8">
            <div className="mb-12">
              <h3 className="text-xl font-bold mb-4 border-l-4 border-purple-500 pl-3">1. 過去の経験を振り返る</h3>
              <p className="mb-4">学生時代に力を入れたこと、アルバイト、サークル活動などの経験を振り返りましょう。</p>
              <div className="bg-purple-50 p-4 rounded-lg">
                <h4 className="font-bold mb-2">実践ワーク</h4>
                <ul className="list-disc pl-6 space-y-2">
                  <li>今までの人生で「楽しかったこと」「頑張ったこと」「評価されたこと」をそれぞれ5つずつ書き出してみましょう。</li>
                  <li>それぞれの経験で、あなたはどのような役割を担い、どのようなスキルを発揮しましたか？</li>
                  <li>その経験からあなたはどのような価値観や強みを見出しましたか？</li>
                </ul>
              </div>
            </div>
            
            <div className="mb-12">
              <h3 className="text-xl font-bold mb-4 border-l-4 border-purple-500 pl-3">2. 強み・弱みを分析する</h3>
              <p className="mb-4">自分の得意なことと苦手なことを客観的に分析しましょう。友人や家族の意見も参考になります。</p>
              <div className="bg-purple-50 p-4 rounded-lg">
                <h4 className="font-bold mb-2">実践ワーク</h4>
                <ul className="list-disc pl-6 space-y-2">
                  <li>自分の「強み」と「弱み」をそれぞれ10個ずつ書き出してみましょう。</li>
                  <li>それぞれの強みを活かした具体的なエピソードを書き出しましょう。</li>
                  <li>弱みをどのように克服しようとしたかのエピソードも書き出してみましょう。</li>
                  <li>友人や家族に「私の強みは何だと思いますか？」と質問し、客観的な意見を聞いてみましょう。</li>
                </ul>
              </div>
            </div>
            
            <div className="mb-12">
              <h3 className="text-xl font-bold mb-4 border-l-4 border-purple-500 pl-3">3. 価値観を明確にする</h3>
              <p className="mb-4">仕事や人生において何を大切にしたいのかを考えましょう。</p>
              <div className="bg-purple-50 p-4 rounded-lg">
                <h4 className="font-bold mb-2">実践ワーク</h4>
                <ul className="list-disc pl-6 space-y-2">
                  <li>「成長」「安定」「社会貢献」「挑戦」「経済的成功」「ワークライフバランス」など、様々な価値観のなかから、あなたが特に重視するもの5つを選びましょう。</li>
                  <li>なぜそれらを重視するのか、理由を考えてみましょう。</li>
                  <li>理想の働き方や職場環境について具体的に書き出してみましょう。</li>
                </ul>
              </div>
            </div>
            
            <div className="mb-12">
              <h3 className="text-xl font-bold mb-4 border-l-4 border-purple-500 pl-3">4. 興味・関心を整理する</h3>
              <p className="mb-4">あなたが興味を持っている分野や活動を書き出しましょう。</p>
              <div className="bg-purple-50 p-4 rounded-lg">
                <h4 className="font-bold mb-2">実践ワーク</h4>
                <ul className="list-disc pl-6 space-y-2">
                  <li>大学の授業で興味を持った科目とその理由を書き出しましょう。</li>
                  <li>普段の生活で「ついつい時間を忘れて熱中してしまうこと」は何ですか？</li>
                  <li>本、ニュース、SNSなどで特に関心を持って見る分野や話題は何ですか？</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* 自己分析ツール */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6 text-center">役立つ<span className="text-purple-600">自己分析ツール</span></h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="font-bold text-xl mb-3">SWOT分析</h3>
            <p className="text-gray-600 mb-4">
              Strengths（強み）、Weaknesses（弱み）、Opportunities（機会）、Threats（脅威）の4つの観点から自分自身を分析するフレームワークです。
            </p>
            <Link href="/career/tools/swot" className="text-purple-600 font-medium hover:underline inline-flex items-center">
              SWOT分析を試してみる
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="font-bold text-xl mb-3">自己PR作成ツール</h3>
            <p className="text-gray-600 mb-4">
              あなたの強みや経験から、効果的な自己PRを作成するのをサポートするツールです。面接やエントリーシートで使えます。
            </p>
            <Link href="/career/tools/self-pr" className="text-purple-600 font-medium hover:underline inline-flex items-center">
              自己PR作成ツールを使う
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
      
      {/* 関連リンク */}
      <section className="bg-purple-50 rounded-lg p-8 shadow-sm">
        <h2 className="text-xl font-bold mb-4">関連リンク</h2>
        <ul className="space-y-3">
          <li>
            <Link href="/career/entry-preparation" className="text-purple-600 hover:underline flex items-center">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              効果的なエントリーシートの書き方
            </Link>
          </li>
          <li>
            <Link href="/career/interview-tips" className="text-purple-600 hover:underline flex items-center">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              面接対策ガイド
            </Link>
          </li>
          <li>
            <Link href="/career/industry-research" className="text-purple-600 hover:underline flex items-center">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              業界研究の進め方
            </Link>
          </li>
          <li>
            <Link href="/articles?category=career" className="text-purple-600 hover:underline flex items-center">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              すべてのキャリア記事を見る
            </Link>
          </li>
        </ul>
      </section>
    </div>
  );
} 