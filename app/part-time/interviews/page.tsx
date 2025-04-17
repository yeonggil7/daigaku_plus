import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '大学生のアルバイト面接対策ガイド | 大学生活ガイド',
  description: 'アルバイト面接で成功するためのポイント、よくある質問と回答例、面接マナー、業種別のアドバイスを紹介。大学生の面接不安を解消し、志望するバイトに合格するための完全ガイド。',
};

export default function PartTimeInterviewsPage() {
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
            <li aria-current="page">
              <div className="flex items-center">
                <span className="mx-2 text-gray-400">/</span>
                <span className="text-gray-500">面接対策</span>
              </div>
            </li>
          </ol>
        </nav>

        <header className="bg-gradient-to-r from-blue-600 to-blue-400 rounded-lg p-8 mb-8 text-white shadow-lg">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">アルバイト面接対策ガイド</h1>
          <p className="text-lg opacity-90 max-w-2xl">
            初めてのアルバイト面接でも自信を持って臨めるよう、準備から本番までをサポート。
            面接官が求める回答や業種別のポイントを押さえて、志望するバイトに合格しましょう。
          </p>
        </header>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 border-b border-gray-200 pb-2">面接前の準備</h2>
          
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-3">企業研究をしよう</h3>
              <p className="mb-4">
                応募先の店舗やチェーンについて基本的な情報を調べておきましょう。公式サイトやSNSをチェックし、
                店舗のコンセプトやサービス内容、企業理念などを把握しておくと面接で好印象を与えられます。
              </p>
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="font-semibold text-blue-700">チェックポイント</p>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>企業・店舗の基本情報（創業年、店舗数など）</li>
                  <li>主なサービスや商品</li>
                  <li>ターゲット層や店舗の雰囲気</li>
                  <li>企業理念やモットー</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-3">自己分析をしておこう</h3>
              <p className="mb-4">
                自分の強み、弱み、志望動機、学業との両立方法など、面接でよく聞かれる質問への回答を
                事前に整理しておきましょう。具体的なエピソードを交えると説得力が増します。
              </p>
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="font-semibold text-blue-700">準備しておくべきポイント</p>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>自分の強み・弱み（具体例とともに）</li>
                  <li>アルバイトを希望する理由</li>
                  <li>なぜその業種・企業を選んだのか</li>
                  <li>学業との両立をどう図るか</li>
                  <li>将来の目標と、それにこのバイトがどう関連するか</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-3">身だしなみを整える</h3>
              <p className="mb-4">
                業種によって求められる身だしなみは異なりますが、清潔感は共通して重要です。
                面接当日に慌てないよう、服装や持ち物を前日までに準備しておきましょう。
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="font-semibold text-blue-700">基本的な身だしなみ</p>
                  <ul className="list-disc pl-5 mt-2 space-y-1">
                    <li>清潔感のある服装（シンプルで清潔な私服）</li>
                    <li>髪は整え、派手な色は避ける</li>
                    <li>爪は短く切り、清潔に</li>
                    <li>香水は控えめに、または使用しない</li>
                  </ul>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="font-semibold text-blue-700">持ち物チェックリスト</p>
                  <ul className="list-disc pl-5 mt-2 space-y-1">
                    <li>履歴書（提出済みでも予備を1部）</li>
                    <li>筆記用具</li>
                    <li>スケジュール帳（シフトの相談用）</li>
                    <li>携帯電話（マナーモード）</li>
                    <li>店舗の場所と連絡先</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 border-b border-gray-200 pb-2">よくある質問と回答例</h2>
          
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-3 text-blue-600">志望動機</h3>
              <div className="mb-4">
                <p className="font-semibold mb-2">質問例：「なぜ当店でアルバイトしたいと思ったのですか？」</p>
                <div className="pl-4 border-l-4 border-blue-400">
                  <p className="italic mb-2">良い回答例：</p>
                  <p>
                    「御店の接客スタイルに魅力を感じました。実際に何度か利用させていただき、スタッフの方々の丁寧な接客に
                    いつも気持ちよく過ごせていたので、自分もそのような接客ができるようになりたいと思い志望しました。
                    また、将来は接客業に就きたいと考えているので、学生のうちからしっかりとした接客の基本を身につけたいという思いもあります。」
                  </p>
                </div>
                <div className="pl-4 border-l-4 border-red-400 mt-4">
                  <p className="italic mb-2">避けるべき回答：</p>
                  <p>
                    「家から近いからです」「時給が高いので」といった、どの店舗でも同じような理由や、
                    自分の都合だけを優先した理由は避けましょう。
                  </p>
                </div>
              </div>
              
              <h3 className="text-xl font-bold mb-3 text-blue-600">アピールポイント</h3>
              <div className="mb-4">
                <p className="font-semibold mb-2">質問例：「あなたの長所は何ですか？」</p>
                <div className="pl-4 border-l-4 border-blue-400">
                  <p className="italic mb-2">良い回答例：</p>
                  <p>
                    「私の長所は、最後まであきらめずに取り組む粘り強さです。大学のゼミでグループプロジェクトを担当した際、
                    途中で困難にぶつかりましたが、メンバーと協力して様々な角度から解決策を模索し、最終的に良い成果を出すことができました。
                    このような粘り強さと協調性を活かして、忙しい時間帯でも笑顔で接客し、お客様に満足していただけるよう努力します。」
                  </p>
                </div>
                <div className="pl-4 border-l-4 border-red-400 mt-4">
                  <p className="italic mb-2">避けるべき回答：</p>
                  <p>
                    具体的なエピソードがない抽象的な長所や、仕事に関連しない長所のみを述べるのは避けましょう。
                    また、「特にない」という回答は自己分析不足と判断されます。
                  </p>
                </div>
              </div>
              
              <h3 className="text-xl font-bold mb-3 text-blue-600">シフトと学業の両立</h3>
              <div className="mb-4">
                <p className="font-semibold mb-2">質問例：「学業との両立はどのように考えていますか？」</p>
                <div className="pl-4 border-l-4 border-blue-400">
                  <p className="italic mb-2">良い回答例：</p>
                  <p>
                    「基本的に授業のない週3日の午後と土日を中心に働きたいと考えています。テスト期間中は事前に
                    シフトを調整させていただければと思います。日々の学習管理としては、授業後の時間を効率的に使って
                    課題を進めるよう心がけ、計画的に学業とアルバイトを両立していきます。」
                  </p>
                </div>
                <div className="pl-4 border-l-4 border-red-400 mt-4">
                  <p className="italic mb-2">避けるべき回答：</p>
                  <p>
                    「いつでも働けます」「学業より優先します」といった極端な回答は避けましょう。
                    学生の本分は学業であることを忘れないようにしましょう。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 border-b border-gray-200 pb-2">業種別の面接ポイント</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-3 flex items-center">
                <span className="bg-blue-100 text-blue-700 p-1 rounded mr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                  </svg>
                </span>
                飲食業
              </h3>
              <p className="mb-3">
                お客様と直接接する機会が多く、コミュニケーション能力とホスピタリティが重視されます。
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>笑顔で話せるか、明るい印象を与えられるかがポイント</li>
                <li>忙しい時間帯でも冷静に対応できる精神力をアピール</li>
                <li>衛生面への意識の高さを示す</li>
                <li>チームワークを重視した回答を心がける</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-3 flex items-center">
                <span className="bg-blue-100 text-blue-700 p-1 rounded mr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                </span>
                販売・アパレル
              </h3>
              <p className="mb-3">
                ファッションや商品知識、接客マナーが重視されます。
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>身だしなみと清潔感に特に気を配る</li>
                <li>その店舗・ブランドが好きな理由を具体的に伝える</li>
                <li>おすすめの商品や季節のアイテムについて話せるとなお良い</li>
                <li>接客経験がなくても、人と話すことが好きという点をアピール</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-3 flex items-center">
                <span className="bg-blue-100 text-blue-700 p-1 rounded mr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </span>
                事務・コールセンター
              </h3>
              <p className="mb-3">
                正確さ、丁寧さ、問題解決能力が重視されます。
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>落ち着いた話し方と正確な言葉遣いを心がける</li>
                <li>PCスキルがあれば具体的なソフト名とスキルレベルを伝える</li>
                <li>複数の作業を同時に進められる能力をアピール</li>
                <li>電話応対の経験や敬語の使い方に自信があることを伝える</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-3 flex items-center">
                <span className="bg-blue-100 text-blue-700 p-1 rounded mr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </span>
                塾・家庭教師
              </h3>
              <p className="mb-3">
                知識だけでなく、教えるスキルとコミュニケーション能力が重視されます。
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>自分の得意科目と成績をアピール</li>
                <li>子どもや生徒とどのように接するかの考えを伝える</li>
                <li>分かりやすく説明する能力や工夫について話す</li>
                <li>自分自身の学習法や受験経験を具体的に話せるとなお良い</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 border-b border-gray-200 pb-2">面接当日のマナーと注意点</h2>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-bold mb-3">時間管理</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li className="font-semibold">10分前には到着する</li>
                  <li>遅刻は絶対に避ける（交通機関の遅延などの場合はすぐに連絡）</li>
                  <li>場所が分からない場合は前日までに確認しておく</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-3">入室時のマナー</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>ノックは3回が基本</li>
                  <li>「失礼します」と挨拶してから入室</li>
                  <li>ドアの開閉は静かに</li>
                  <li>面接官の前で一礼してから着席</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-3">話し方のポイント</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>明るくハキハキと、適切な声の大きさで話す</li>
                  <li>敬語を正しく使う（「っす」「〜じゃないですか」などの略語は避ける）</li>
                  <li>質問は最後まで聞いてから回答する</li>
                  <li>分からないことは正直に「分かりません」と答える</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-3">退室時のマナー</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>「ありがとうございました」と挨拶</li>
                  <li>席を立ってから一礼</li>
                  <li>ドアの前で再度一礼してから退室</li>
                  <li>結果連絡の時期を確認しておく</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 border-b border-gray-200 pb-2">先輩たちの面接体験談</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-lg mr-4">
                  Y
                </div>
                <div>
                  <p className="font-bold">山田さん（3年生）</p>
                  <p className="text-sm text-gray-600">カフェスタッフ</p>
                </div>
              </div>
              <p className="italic mb-3">
                「緊張しすぎて自己PRがうまく言えなかったけど、『失敗してもまた挑戦できる環境を作りたい』と言ったら、
                面接官から『素直でいいね』と言ってもらえました。素直さと前向きさをアピールするのが大事だと思います。」
              </p>
              <p>
                <span className="font-semibold">面接のポイント：</span> 
                失敗を恐れず素直に自分の考えを伝えることが大切。経験がなくても、前向きな姿勢を評価されることが多い。
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-lg mr-4">
                  T
                </div>
                <div>
                  <p className="font-bold">田中さん（2年生）</p>
                  <p className="text-sm text-gray-600">アパレルショップスタッフ</p>
                </div>
              </div>
              <p className="italic mb-3">
                「普段から好きでよく利用していたお店だったので、自分が気に入っている商品や接客について具体的に話すことができました。
                お店についての知識や熱意が伝わったようで、その場で採用が決まりました。」
              </p>
              <p>
                <span className="font-semibold">面接のポイント：</span> 
                応募先についての知識や熱意を具体的に伝えることで、採用担当者に良い印象を与えられる。
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-lg mr-4">
                  S
                </div>
                <div>
                  <p className="font-bold">佐藤さん（4年生）</p>
                  <p className="text-sm text-gray-600">塾講師</p>
                </div>
              </div>
              <p className="italic mb-3">
                「面接では『どのように生徒に教えるか』という質問があり、実際に問題を解説するようなロールプレイがありました。
                事前に塾のテキストを見せてもらい、教え方を練習していたので自信を持って対応できました。」
              </p>
              <p>
                <span className="font-semibold">面接のポイント：</span> 
                業種によっては実技試験やロールプレイがあることも。事前に想定して準備することが重要。
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-lg mr-4">
                  M
                </div>
                <div>
                  <p className="font-bold">松本さん（1年生）</p>
                  <p className="text-sm text-gray-600">コンビニスタッフ</p>
                </div>
              </div>
              <p className="italic mb-3">
                「初めてのバイト面接で緊張しましたが、『学生のうちから接客業を経験して社会勉強したい』という
                素直な気持ちを伝えました。特に専門的なスキルはなくても、真摯な姿勢が評価されたようです。」
              </p>
              <p>
                <span className="font-semibold">面接のポイント：</span> 
                経験やスキルがなくても、学ぶ意欲と誠実さをアピールすることで好印象を与えられる。
              </p>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-6 border-b border-gray-200 pb-2">面接後のフォローアップ</h2>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <p className="mb-4">
              面接が終わったら、結果を待つだけではなく、適切なフォローアップをすることで採用の可能性を高めることができます。
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                  <span>1</span>
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold mb-2">お礼メールの送信</h3>
                  <p>
                    面接当日または翌日に、面接の機会をいただいたことへのお礼メールを送ると好印象です。
                    簡潔に「面接の機会をいただきありがとうございました。引き続きよろしくお願いいたします」
                    といった内容で構いません。
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                  <span>2</span>
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold mb-2">連絡を待つ姿勢</h3>
                  <p>
                    結果連絡の目安となる日にちを過ぎても連絡がない場合は、1週間程度経ってから
                    丁寧に問い合わせをしても構いません。ただし、しつこく連絡するのは避けましょう。
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                  <span>3</span>
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold mb-2">不採用の場合</h3>
                  <p>
                    不採用の場合でも、丁寧にお礼と今後の改善のためのフィードバックをお願いするのも
                    一つの方法です。社会人としての対応力が評価され、次の機会につながることもあります。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <div className="bg-gray-50 rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4">関連情報</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <Link href="/part-time/category/restaurant" className="block p-4 bg-white rounded-lg shadow hover:shadow-md transition">
              <h3 className="font-bold text-blue-600">飲食バイト特集</h3>
              <p className="text-sm mt-1">カフェ、レストラン、居酒屋など業態別の特徴と働き方</p>
            </Link>
            <Link href="/part-time/resume" className="block p-4 bg-white rounded-lg shadow hover:shadow-md transition">
              <h3 className="font-bold text-blue-600">履歴書の書き方</h3>
              <p className="text-sm mt-1">アルバイト応募に使える履歴書テンプレートと記入例</p>
            </Link>
            <Link href="/part-time/rights" className="block p-4 bg-white rounded-lg shadow hover:shadow-md transition">
              <h3 className="font-bold text-blue-600">学生の労働権利</h3>
              <p className="text-sm mt-1">知っておくべき労働法規と学生アルバイトの権利</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 