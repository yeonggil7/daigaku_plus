import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '大学生のための効果的な勉強法ガイド | 大学生活ガイド',
  description: '大学での学習を成功させるための効果的な勉強法、時間管理のコツ、集中力を高めるテクニックなどを紹介します。',
};

export default function StudyMethodsPage() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-8">
      <section className="mb-12">
        <h1 className="text-3xl font-bold mb-4">効果的な勉強法ガイド</h1>
        <p className="text-lg text-gray-700 mb-6">
          大学での学習は高校までとは大きく異なります。自主性が求められ、膨大な量の情報を効率的に吸収する必要があります。
          このページでは、大学生活で役立つ効果的な勉強法をご紹介します。
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">おすすめの勉強法</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {/* ポモドーロテクニック */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative h-60">
              <Image 
                src="/images/study-methods/pomodoro.jpg" 
                alt="ポモドーロテクニック" 
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-3">ポモドーロテクニック</h3>
              <p className="text-gray-700 mb-4">
                25分の集中作業と5分の休憩を繰り返す時間管理法です。4セット終了後は、長めの休憩（15〜30分）を取ります。
                シンプルながら効果的で、脳の集中力を最大限に引き出し、疲労を防ぎます。
              </p>
              <div className="bg-blue-50 p-4 rounded-md">
                <h4 className="font-medium mb-2">実践のポイント：</h4>
                <ul className="list-disc pl-5 space-y-1">
                  <li>タイマーを使って厳密に時間を管理する</li>
                  <li>休憩中はしっかり脳を休ませる（SNSやメールは避ける）</li>
                  <li>1日のタスクリストと組み合わせて使うと効果的</li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* 間隔反復法 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative h-60">
              <Image 
                src="/images/study-methods/spaced-repetition.jpg" 
                alt="間隔反復法" 
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-3">間隔反復法（スペースド・レペティション）</h3>
              <p className="text-gray-700 mb-4">
                学習内容を一定の間隔をあけて繰り返し復習する方法です。時間の経過とともに間隔を徐々に広げていくことで、
                長期記憶への定着率が飛躍的に向上します。効率的な記憶術として科学的にも実証されています。
              </p>
              <div className="bg-blue-50 p-4 rounded-md">
                <h4 className="font-medium mb-2">実践のポイント：</h4>
                <ul className="list-disc pl-5 space-y-1">
                  <li>1日目→3日目→1週間後→2週間後→1ヶ月後と間隔を広げていく</li>
                  <li>AnkiなどのSRS（Spaced Repetition System）アプリを活用する</li>
                  <li>復習の度に自分で答えを思い出す努力をする（アクティブリコール）</li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* フラッシュカード学習法 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative h-60">
              <Image 
                src="/images/study-methods/flashcards.jpg" 
                alt="フラッシュカード学習法" 
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-3">フラッシュカード学習法</h3>
              <p className="text-gray-700 mb-4">
                カードの表に質問や単語、裏に答えや定義を書いて学習する方法です。反復学習に最適で、
                長期記憶の定着に効果的です。デジタルアプリ（AnkiやQuizletなど）も便利です。
              </p>
              <div className="bg-blue-50 p-4 rounded-md">
                <h4 className="font-medium mb-2">実践のポイント：</h4>
                <ul className="list-disc pl-5 space-y-1">
                  <li>難易度別に分類して効率的に学習する</li>
                  <li>間隔反復法を取り入れる（覚えやすいカードは出現頻度を下げる）</li>
                  <li>通学時間や待ち時間など隙間時間を活用する</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">効果的な学習環境の作り方</h2>
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-3">物理的環境</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="shrink-0 w-8 h-8 flex items-center justify-center bg-blue-100 rounded-full text-blue-600 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p><strong>適切な照明：</strong>自然光が理想的。夜は目が疲れない明るさの照明を。</p>
                </li>
                <li className="flex items-start">
                  <div className="shrink-0 w-8 h-8 flex items-center justify-center bg-blue-100 rounded-full text-blue-600 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p><strong>整理された机：</strong>必要なものだけを置き、集中の妨げになるものは排除。</p>
                </li>
                <li className="flex items-start">
                  <div className="shrink-0 w-8 h-8 flex items-center justify-center bg-blue-100 rounded-full text-blue-600 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p><strong>適切な温度：</strong>18〜22度が理想的。寒すぎず暑すぎない環境を。</p>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">デジタル環境</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="shrink-0 w-8 h-8 flex items-center justify-center bg-blue-100 rounded-full text-blue-600 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p><strong>通知オフ：</strong>勉強中はスマホの通知をオフにするか、別室に置く。</p>
                </li>
                <li className="flex items-start">
                  <div className="shrink-0 w-8 h-8 flex items-center justify-center bg-blue-100 rounded-full text-blue-600 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p><strong>集中アプリ：</strong>Forest、Focus Keeperなどの集中サポートアプリを活用。</p>
                </li>
                <li className="flex items-start">
                  <div className="shrink-0 w-8 h-8 flex items-center justify-center bg-blue-100 rounded-full text-blue-600 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p><strong>適切なBGM：</strong>歌詞のない音楽（ローファイやクラシック）が集中に効果的。</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">科目別学習アプローチ</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-3 text-blue-700">語学・外国語</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>定期的な少量学習（毎日15分〜30分）</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>実際の使用（会話、読書、映画鑑賞）を取り入れる</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>文脈の中で単語を覚える</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-3 text-green-700">数学・理系科目</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <span>概念理解を重視し、暗記に頼らない</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <span>問題を解く練習を多く取り入れる</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <span>図や図表で視覚化する</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-3 text-purple-700">文系科目・論文</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-purple-600 mr-2">•</span>
                <span>アクティブリーディング（要点をマークしながら読む）</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-2">•</span>
                <span>定期的に要約や概念マップを作成</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-2">•</span>
                <span>ディスカッションを通じて理解を深める</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">試験対策のコツ</h2>
        <div className="bg-white rounded-lg shadow-md p-6">
          <ol className="space-y-4">
            <li className="flex">
              <div className="shrink-0 w-8 h-8 flex items-center justify-center bg-indigo-100 rounded-full text-indigo-600 mr-3 font-semibold">1</div>
              <div>
                <h4 className="text-lg font-medium mb-1">計画を立てる</h4>
                <p className="text-gray-700">試験日から逆算して、科目ごとの学習時間を配分。苦手な分野により多くの時間を。</p>
              </div>
            </li>
            <li className="flex">
              <div className="shrink-0 w-8 h-8 flex items-center justify-center bg-indigo-100 rounded-full text-indigo-600 mr-3 font-semibold">2</div>
              <div>
                <h4 className="text-lg font-medium mb-1">過去問を解く</h4>
                <p className="text-gray-700">出題傾向や時間配分を把握。できれば複数年分の過去問に取り組むべき。</p>
              </div>
            </li>
            <li className="flex">
              <div className="shrink-0 w-8 h-8 flex items-center justify-center bg-indigo-100 rounded-full text-indigo-600 mr-3 font-semibold">3</div>
              <div>
                <h4 className="text-lg font-medium mb-1">アウトプットを重視</h4>
                <p className="text-gray-700">読むだけでなく、問題を解いたり、自分の言葉で説明したりする練習を。</p>
              </div>
            </li>
            <li className="flex">
              <div className="shrink-0 w-8 h-8 flex items-center justify-center bg-indigo-100 rounded-full text-indigo-600 mr-3 font-semibold">4</div>
              <div>
                <h4 className="text-lg font-medium mb-1">グループ学習を取り入れる</h4>
                <p className="text-gray-700">他の学生と一緒に勉強することで、新しい視点や理解が得られることも。</p>
              </div>
            </li>
            <li className="flex">
              <div className="shrink-0 w-8 h-8 flex items-center justify-center bg-indigo-100 rounded-full text-indigo-600 mr-3 font-semibold">5</div>
              <div>
                <h4 className="text-lg font-medium mb-1">健康管理を忘れない</h4>
                <p className="text-gray-700">十分な睡眠、バランスの取れた食事、適度な運動が脳の機能を高める。</p>
              </div>
            </li>
          </ol>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-6">学習ツールとリソース</h2>
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-3">無料のオンラインリソース</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span><strong>Coursera, edX:</strong> 世界トップ大学の無料講座</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span><strong>Khan Academy:</strong> 数学、科学などの分かりやすい解説動画</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span><strong>YouTube教育チャンネル:</strong> 分野別に解説する質の高いコンテンツ</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">おすすめアプリ</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span><strong>Notion:</strong> ノート作成、タスク管理、学習計画まで</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span><strong>Anki:</strong> フラッシュカードで効率的に暗記</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span><strong>Forest:</strong> スマホ依存から解放され集中力を高める</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <div className="bg-blue-50 rounded-lg p-6 mb-12">
        <h2 className="text-xl font-semibold mb-4">もっと詳しく知りたい方へ</h2>
        <p className="mb-4">
          効果的な勉強法について、さらに詳しく知りたい方は以下のリンクもご覧ください。
        </p>
        <div className="flex flex-wrap gap-4">
          <Link href="/study/certifications" className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
            資格取得ガイド
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Link>
          <Link href="/articles?category=study" className="inline-flex items-center px-4 py-2 bg-white border border-blue-600 text-blue-600 rounded-md hover:bg-blue-50 transition">
            勉強に関する記事
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>
      </div>
    </main>
  );
} 