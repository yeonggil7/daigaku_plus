import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function EntryPreparationPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* ヘッダーセクション */}
      <section className="bg-purple-100 rounded-xl p-8 md:p-12 mb-12">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-2/3 mb-6 md:mb-0 md:pr-8">
            <Link href="/career" className="text-purple-600 hover:underline mb-2 inline-block">
              ← キャリア情報に戻る
            </Link>
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-purple-800">エントリーシート対策ガイド</h1>
            <p className="text-lg text-purple-700 mb-6">
              採用担当者の心をつかむ、効果的なエントリーシートの書き方とポイントを紹介します。
            </p>
          </div>
          <div className="md:w-1/3 relative">
            <div className="w-full h-64 md:h-80 relative rounded-lg overflow-hidden">
              <Image 
                src="/images/blog-thumb.jpg" 
                alt="エントリーシート対策" 
                fill 
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* エントリーシートの基本 */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6 text-center">エントリーシートの<span className="text-purple-600">基本</span></h2>
        
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <p className="text-lg mb-6">
            エントリーシート（ES）は、就職活動における最初の関門です。多くの企業では、ESの内容をもとに選考を行い、面接対象者を決定します。つまり、ESは面接の機会を得るための重要なツールであり、自分の魅力を伝える貴重な機会なのです。
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="bg-purple-50 p-6 rounded-lg">
              <div className="bg-purple-100 rounded-full p-3 w-12 h-12 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-lg mb-2">ESの役割</h3>
              <p className="text-gray-600">採用担当者が応募者を理解するための基本情報源。あなたの人柄、スキル、経験、志望動機を伝える重要な手段です。</p>
            </div>
            
            <div className="bg-purple-50 p-6 rounded-lg">
              <div className="bg-purple-100 rounded-full p-3 w-12 h-12 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-lg mb-2">提出時期</h3>
              <p className="text-gray-600">多くの場合、企業説明会後や応募時に提出します。提出期限には余裕をもって取り組みましょう。</p>
            </div>
            
            <div className="bg-purple-50 p-6 rounded-lg">
              <div className="bg-purple-100 rounded-full p-3 w-12 h-12 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-lg mb-2">準備のポイント</h3>
              <p className="text-gray-600">企業研究と自己分析をしっかり行い、各企業に合わせた内容にカスタマイズすることが重要です。</p>
            </div>
          </div>
        </div>
      </section>

      {/* 効果的なエントリーシートの書き方 */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6">効果的な<span className="text-purple-600">エントリーシートの書き方</span></h2>
        
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-8">
            <div className="mb-12">
              <h3 className="text-xl font-bold mb-4 border-l-4 border-purple-500 pl-3">1. 志望動機</h3>
              <p className="mb-4">
                志望動機は、「なぜこの企業なのか」「なぜこの職種なのか」を明確に伝える部分です。単なる企業の魅力の羅列ではなく、あなた自身との接点を示しましょう。
              </p>
              
              <div className="bg-green-50 p-5 rounded-lg mb-4">
                <h4 className="font-bold mb-2 text-green-700">良い例</h4>
                <p className="text-gray-700">
                  御社のAIを活用した教育サービスに興味を持ちました。私は大学で教育工学を専攻し、特にテクノロジーを活用した学習効果の向上について研究しています。プログラミングスキルを持ちながら教育に貢献できる環境で、これまでの研究成果とスキルを活かして、より多くの人が効率的に学べるサービス開発に携わりたいと考えています。
                </p>
              </div>
              
              <div className="bg-red-50 p-5 rounded-lg">
                <h4 className="font-bold mb-2 text-red-700">悪い例</h4>
                <p className="text-gray-700">
                  御社は大手企業で安定していて、福利厚生も充実しているため志望しました。また、友人からも評判が良いと聞き、ぜひ働きたいと思いました。仕事内容についてはまだ詳しくありませんが、入社後に頑張って覚えていきたいと思います。
                </p>
              </div>
            </div>
            
            <div className="mb-12">
              <h3 className="text-xl font-bold mb-4 border-l-4 border-purple-500 pl-3">2. 自己PR</h3>
              <p className="mb-4">
                自己PRでは、あなたの強みや特徴を、具体的なエピソードを交えて伝えましょう。「結論→具体例→結論」の構成が効果的です。
              </p>
              
              <div className="bg-green-50 p-5 rounded-lg mb-4">
                <h4 className="font-bold mb-2 text-green-700">良い例</h4>
                <p className="text-gray-700">
                  私の強みは、困難に直面しても粘り強く取り組む継続力です。大学2年次に挑戦したプログラミングコンテストでは、初め全く理解できずに挫折しかけましたが、毎日3時間の学習を3ヶ月間継続し、最終的に学内予選を突破しました。この経験から、新しい課題に対しても諦めず、着実に成果を出すための方法を模索する姿勢が身につきました。御社でも、この継続力を活かして難しい問題にも粘り強く取り組みたいと考えています。
                </p>
              </div>
              
              <div className="bg-red-50 p-5 rounded-lg">
                <h4 className="font-bold mb-2 text-red-700">悪い例</h4>
                <p className="text-gray-700">
                  私は責任感が強く、コミュニケーション能力があります。また、リーダーシップも発揮できます。大学ではゼミのリーダーを務め、チームをまとめました。将来は御社でリーダーになりたいと考えています。
                </p>
              </div>
            </div>
            
            <div className="mb-12">
              <h3 className="text-xl font-bold mb-4 border-l-4 border-purple-500 pl-3">3. ガクチカ（学生時代に力を入れたこと）</h3>
              <p className="mb-4">
                学生時代に力を入れた経験を通じて、あなたの価値観や行動特性を伝えましょう。具体的な行動とその結果、そこから得た学びを明確に書きます。
              </p>
              
              <div className="bg-green-50 p-5 rounded-lg mb-4">
                <h4 className="font-bold mb-2 text-green-700">良い例</h4>
                <p className="text-gray-700">
                  私は3年間、大学のボランティアサークルで地域の子ども向け学習支援に取り組みました。特に力を入れたのは、不登校の子どもたちのための学習プログラム開発です。月2回の会議で意見がまとまらず停滞していた際、私は各メンバーに個別ヒアリングを行い、意見を整理したうえで、具体的な学習計画案を3つ提案しました。結果、全員の合意を得られ、10名の不登校児童に対して週1回の学習支援を1年間継続できました。この経験から、多様な意見がある中での合意形成と、目標に向けて具体的なアクションを起こす重要性を学びました。
                </p>
              </div>
              
              <div className="bg-red-50 p-5 rounded-lg">
                <h4 className="font-bold mb-2 text-red-700">悪い例</h4>
                <p className="text-gray-700">
                  私は大学時代、テニスサークルに所属していました。週3回の練習に参加し、サークル内の試合では準優勝しました。テニスを通じて忍耐力と協調性を身につけることができました。
                </p>
              </div>
            </div>
            
            <div className="mb-12">
              <h3 className="text-xl font-bold mb-4 border-l-4 border-purple-500 pl-3">4. 自己分析と企業研究の活かし方</h3>
              <p className="mb-4">
                エントリーシートを書く前に、自己分析と企業研究を徹底的に行いましょう。それぞれの企業の求める人材像と、自分の強みがどう合致するかを明確に示すことが重要です。
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div className="bg-purple-50 p-5 rounded-lg">
                  <h4 className="font-bold mb-2">自己分析のポイント</h4>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>自分の強み・弱みを5つ以上挙げる</li>
                    <li>学生時代の具体的なエピソードをリストアップ</li>
                    <li>あなたが大切にしている価値観は何か考える</li>
                    <li>友人や家族に自分の特徴を聞いてみる</li>
                    <li>将来どのように働きたいかビジョンを明確にする</li>
                  </ul>
                </div>
                
                <div className="bg-purple-50 p-5 rounded-lg">
                  <h4 className="font-bold mb-2">企業研究のポイント</h4>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>企業理念や事業内容を理解する</li>
                    <li>企業が直面している課題を調査する</li>
                    <li>競合他社との違いを把握する</li>
                    <li>募集要項から求められる人材像を読み取る</li>
                    <li>企業のニュースや業績をチェックする</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* エントリーシート提出前のチェックリスト */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6 text-center">提出前の<span className="text-purple-600">チェックリスト</span></h2>
        
        <div className="bg-white rounded-lg shadow-md p-8">
          <p className="text-lg mb-6">
            エントリーシートを提出する前に、以下のポイントを確認しましょう。小さなミスが選考に影響することもあります。
          </p>
          
          <div className="space-y-4">
            <div className="flex items-start">
              <div className="flex-shrink-0 mt-1">
                <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div className="ml-3">
                <h4 className="font-medium">誤字脱字や文法ミスがないか</h4>
                <p className="text-gray-600 text-sm">細かいミスでも印象が大きく下がります。文章作成ツールや第三者に確認してもらいましょう。</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="flex-shrink-0 mt-1">
                <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div className="ml-3">
                <h4 className="font-medium">指定された文字数制限を守っているか</h4>
                <p className="text-gray-600 text-sm">少なすぎても多すぎても印象が悪くなります。指定文字数の90〜100%を目安にしましょう。</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="flex-shrink-0 mt-1">
                <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div className="ml-3">
                <h4 className="font-medium">企業名の間違いはないか</h4>
                <p className="text-gray-600 text-sm">コピペによる企業名の誤りは致命的です。提出前に必ず確認しましょう。</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="flex-shrink-0 mt-1">
                <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div className="ml-3">
                <h4 className="font-medium">質問の意図に沿った回答になっているか</h4>
                <p className="text-gray-600 text-sm">質問の本質を理解し、求められていることに的確に答えているか確認します。</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="flex-shrink-0 mt-1">
                <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div className="ml-3">
                <h4 className="font-medium">具体的なエピソードや数字を入れているか</h4>
                <p className="text-gray-600 text-sm">抽象的な表現ではなく、具体的なエピソードや定量的な成果を示すと説得力が増します。</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="flex-shrink-0 mt-1">
                <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div className="ml-3">
                <h4 className="font-medium">結論が明確か</h4>
                <p className="text-gray-600 text-sm">特に志望動機では、「だから御社で働きたい」という結論が明確に示されているか確認します。</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="flex-shrink-0 mt-1">
                <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div className="ml-3">
                <h4 className="font-medium">提出締切と提出方法を確認したか</h4>
                <p className="text-gray-600 text-sm">締切を過ぎると選考対象外になる場合があります。余裕をもって提出しましょう。</p>
              </div>
            </div>
          </div>
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
            <Link href="/career/industry-research" className="text-purple-600 hover:underline flex items-center">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              業界研究ガイド
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