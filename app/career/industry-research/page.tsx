import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function IndustryResearchPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* ヘッダーセクション */}
      <section className="bg-purple-100 rounded-xl p-8 md:p-12 mb-12">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-2/3 mb-6 md:mb-0 md:pr-8">
            <Link href="/career" className="text-purple-600 hover:underline mb-2 inline-block">
              ← キャリア情報に戻る
            </Link>
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-purple-800">業界研究ガイド</h1>
            <p className="text-lg text-purple-700 mb-6">
              自分に合った業界を見つけるための効果的な業界研究の方法やポイントを紹介します。
            </p>
          </div>
          <div className="md:w-1/3 relative">
            <div className="w-full h-64 md:h-80 relative rounded-lg overflow-hidden">
              <Image 
                src="/images/blog-thumb.jpg" 
                alt="業界研究" 
                fill 
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 業界研究の重要性 */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6 text-center">業界研究が<span className="text-purple-600">重要な理由</span></h2>
        
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <p className="text-lg mb-4">
            業界研究は就職活動において非常に重要なステップです。自分の将来の働く場所を選ぶために、各業界の特徴や動向を理解することで、以下のようなメリットがあります：
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="flex items-start">
              <div className="bg-purple-100 rounded-full p-3 mr-4">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">志望動機が具体的になる</h3>
                <p className="text-gray-600">業界の課題や将来性を理解することで、なぜその業界で働きたいのかの理由が明確になります。</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-purple-100 rounded-full p-3 mr-4">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">選考対策に役立つ</h3>
                <p className="text-gray-600">業界知識があることで、面接やエントリーシートでの質問に的確に答えることができます。</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-purple-100 rounded-full p-3 mr-4">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">ミスマッチを防げる</h3>
                <p className="text-gray-600">業界の実態を理解することで、入社後のギャップを減らし、早期離職を防ぐことができます。</p>
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
                <p className="text-gray-600">業界の将来性や成長性を理解することで、長期的なキャリア設計がしやすくなります。</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 業界研究の進め方 */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6">効果的な<span className="text-purple-600">業界研究の進め方</span></h2>
        
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-8">
            <div className="mb-12">
              <h3 className="text-xl font-bold mb-4 border-l-4 border-purple-500 pl-3">1. 興味のある業界をリストアップする</h3>
              <p className="mb-4">まずは自分が興味を持っている業界や職種を広く挙げてみましょう。この段階では可能性を狭めず、様々な選択肢を検討することが大切です。</p>
              <div className="bg-purple-50 p-4 rounded-lg">
                <h4 className="font-bold mb-2">実践ワーク</h4>
                <ul className="list-disc pl-6 space-y-2">
                  <li>自分の価値観や興味、強みを考慮して、気になる業界を最低5つリストアップしてみましょう。</li>
                  <li>それぞれの業界に対して、なぜ興味があるのか理由も書き出してみましょう。</li>
                </ul>
              </div>
            </div>
            
            <div className="mb-12">
              <h3 className="text-xl font-bold mb-4 border-l-4 border-purple-500 pl-3">2. 基本情報を収集する</h3>
              <p className="mb-4">選んだ業界について、基本的な情報を集めましょう。業界の規模、主要企業、市場動向などを調査します。</p>
              <div className="bg-purple-50 p-4 rounded-lg">
                <h4 className="font-bold mb-2">情報源</h4>
                <ul className="list-disc pl-6 space-y-2">
                  <li>業界専門の書籍や雑誌（『業界地図』『就職四季報』など）</li>
                  <li>経済産業省や総務省などの政府機関が発表する統計データ</li>
                  <li>日経新聞や業界専門誌などの記事</li>
                  <li>就職情報サイトの業界研究コンテンツ</li>
                </ul>
              </div>
            </div>
            
            <div className="mb-12">
              <h3 className="text-xl font-bold mb-4 border-l-4 border-purple-500 pl-3">3. 企業研究と比較</h3>
              <p className="mb-4">同じ業界内の複数の企業を比較研究することで、業界内の違いや特徴をより深く理解できます。</p>
              <div className="bg-purple-50 p-4 rounded-lg">
                <h4 className="font-bold mb-2">チェックポイント</h4>
                <ul className="list-disc pl-6 space-y-2">
                  <li>企業の事業内容や強み</li>
                  <li>経営理念や企業文化</li>
                  <li>市場シェアや業績推移</li>
                  <li>最近のニュースや取り組み</li>
                  <li>競合他社との違い</li>
                </ul>
              </div>
            </div>
            
            <div className="mb-12">
              <h3 className="text-xl font-bold mb-4 border-l-4 border-purple-500 pl-3">4. 業界の課題と将来性を分析</h3>
              <p className="mb-4">業界が直面している課題や今後の展望を理解することで、自分のキャリアプランとの相性を判断できます。</p>
              <div className="bg-purple-50 p-4 rounded-lg">
                <h4 className="font-bold mb-2">分析フレームワーク</h4>
                <ul className="list-disc pl-6 space-y-2">
                  <li>SWOT分析（強み・弱み・機会・脅威）</li>
                  <li>PEST分析（政治的・経済的・社会的・技術的要因）</li>
                  <li>5フォース分析（業界の競争要因）</li>
                </ul>
              </div>
            </div>
            
            <div className="mb-12">
              <h3 className="text-xl font-bold mb-4 border-l-4 border-purple-500 pl-3">5. 実際に話を聞く</h3>
              <p className="mb-4">業界で働く人からリアルな情報を得ることで、文献やWebだけでは分からない実態を知ることができます。</p>
              <div className="bg-purple-50 p-4 rounded-lg">
                <h4 className="font-bold mb-2">アプローチ方法</h4>
                <ul className="list-disc pl-6 space-y-2">
                  <li>OB・OG訪問</li>
                  <li>業界研究セミナーへの参加</li>
                  <li>インターンシップ</li>
                  <li>合同企業説明会</li>
                  <li>SNSでのつながり（LinkedIn等）</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* 主要業界の特徴 */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6 text-center">主要<span className="text-purple-600">業界の特徴</span></h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="font-bold text-xl mb-3">IT・通信業界</h3>
            <p className="text-gray-600 mb-4">
              デジタル化の加速により需要が高まり続けている業界。プログラミングやデータ分析などの専門スキルが求められる一方、技術の進化が速いため継続的な学習が必要。
            </p>
            <div className="flex justify-between items-center">
              <div>
                <span className="text-sm font-medium text-gray-500">成長性</span>
                <div className="w-32 h-2 bg-gray-200 rounded-full mt-1">
                  <div className="w-28 h-2 bg-green-500 rounded-full"></div>
                </div>
              </div>
              <div>
                <span className="text-sm font-medium text-gray-500">安定性</span>
                <div className="w-32 h-2 bg-gray-200 rounded-full mt-1">
                  <div className="w-24 h-2 bg-green-500 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="font-bold text-xl mb-3">金融業界</h3>
            <p className="text-gray-600 mb-4">
              銀行、証券、保険など幅広い分野があり、安定性が高い一方でフィンテックによる変革期を迎えている。論理的思考力やコミュニケーション能力が重視される。
            </p>
            <div className="flex justify-between items-center">
              <div>
                <span className="text-sm font-medium text-gray-500">成長性</span>
                <div className="w-32 h-2 bg-gray-200 rounded-full mt-1">
                  <div className="w-20 h-2 bg-green-500 rounded-full"></div>
                </div>
              </div>
              <div>
                <span className="text-sm font-medium text-gray-500">安定性</span>
                <div className="w-32 h-2 bg-gray-200 rounded-full mt-1">
                  <div className="w-28 h-2 bg-green-500 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="font-bold text-xl mb-3">メーカー・製造業</h3>
            <p className="text-gray-600 mb-4">
              日本の基幹産業であり、技術力や品質管理に強みがある。グローバル競争が激しく、海外展開やイノベーションが求められている。専門知識や課題解決能力が重要。
            </p>
            <div className="flex justify-between items-center">
              <div>
                <span className="text-sm font-medium text-gray-500">成長性</span>
                <div className="w-32 h-2 bg-gray-200 rounded-full mt-1">
                  <div className="w-16 h-2 bg-green-500 rounded-full"></div>
                </div>
              </div>
              <div>
                <span className="text-sm font-medium text-gray-500">安定性</span>
                <div className="w-32 h-2 bg-gray-200 rounded-full mt-1">
                  <div className="w-24 h-2 bg-green-500 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="font-bold text-xl mb-3">小売・サービス業</h3>
            <p className="text-gray-600 mb-4">
              消費者に直接接する業界で、顧客志向やトレンド感覚が求められる。EC化の影響を受けつつも、体験価値を提供する方向へ進化している。柔軟性と創造性が重要。
            </p>
            <div className="flex justify-between items-center">
              <div>
                <span className="text-sm font-medium text-gray-500">成長性</span>
                <div className="w-32 h-2 bg-gray-200 rounded-full mt-1">
                  <div className="w-20 h-2 bg-green-500 rounded-full"></div>
                </div>
              </div>
              <div>
                <span className="text-sm font-medium text-gray-500">安定性</span>
                <div className="w-32 h-2 bg-gray-200 rounded-full mt-1">
                  <div className="w-20 h-2 bg-green-500 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-6 text-center">
          <Link href="/career/industry-categories" className="text-purple-600 font-medium hover:underline inline-flex items-center">
            すべての業界カテゴリを見る
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>
      
      {/* 関連リンク */}
      <section className="bg-purple-50 rounded-lg p-8 shadow-sm">
        <h2 className="text-xl font-bold mb-4">関連リンク</h2>
        <ul className="space-y-3">
          <li>
            <Link href="/career/self-analysis" className="text-purple-600 hover:underline flex items-center">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              自己分析ガイド
            </Link>
          </li>
          <li>
            <Link href="/career/entry-preparation" className="text-purple-600 hover:underline flex items-center">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              エントリーシート対策
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