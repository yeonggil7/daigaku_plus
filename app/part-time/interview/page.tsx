import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '大学生のためのアルバイト面接対策 | 大学生活ガイド',
  description: 'アルバイト面接での自己PR方法、よくある質問と回答例、面接マナー、服装や持ち物など、合格率を高めるための実践的なアドバイスを紹介します。',
};

export default function PartTimeInterviewPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <nav className="flex mb-8" aria-label="Breadcrumb">
          <ol className="inline-flex items-center space-x-1 md:space-x-3">
            <li className="inline-flex items-center">
              <Link href="/" className="text-gray-700 hover:text-yellow-600">
                ホーム
              </Link>
            </li>
            <li>
              <div className="flex items-center">
                <span className="mx-2 text-gray-400">/</span>
                <Link href="/part-time" className="text-gray-700 hover:text-yellow-600">
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

        <header className="bg-gradient-to-r from-yellow-600 to-yellow-400 rounded-lg p-8 mb-8 text-white shadow-lg">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">アルバイト面接対策ガイド</h1>
          <p className="text-lg opacity-90 max-w-2xl">
            アルバイト面接を成功させるためのポイントを解説します。初めての面接でも自信を持って臨めるよう、準備方法から当日の振る舞いまで詳しく紹介します。
          </p>
        </header>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <section className="mb-12 bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold mb-6 border-b border-gray-200 pb-2">面接前の準備</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3">1. 企業・店舗研究をしよう</h3>
                  <p className="mb-4">
                    応募する企業や店舗の特徴、サービス内容、客層などを事前に調べておきましょう。
                    公式サイトやSNS、実際に店舗に足を運ぶなどして情報収集することで、
                    志望動機や質問への回答がより具体的になります。
                  </p>
                  <div className="bg-yellow-50 p-4 rounded-lg">
                    <p className="text-sm font-medium text-yellow-800">
                      <span className="font-bold">Point:</span> 「なぜこの店舗を選んだのか」という質問は高確率で聞かれます。
                      単に「家から近いから」だけでなく、「貴店の〇〇というサービスに魅力を感じた」など、
                      調査した内容を盛り込むとアピールになります。
                    </p>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-3">2. 自己PRを準備する</h3>
                  <p className="mb-4">
                    自分の強みや特徴、アピールポイントを整理しておきましょう。
                    特にアルバイト先で活かせるスキルや経験、性格的な特徴などを具体的なエピソードと共に準備します。
                  </p>
                  <div className="bg-gray-100 p-5 rounded-lg">
                    <h4 className="font-bold mb-2">自己PR例（カフェスタッフの場合）</h4>
                    <p className="italic">
                      「私は高校の文化祭でクラスのカフェを企画・運営した経験があります。
                      接客係として多くのお客様に対応する中で、笑顔と丁寧な対応の大切さを学びました。
                      また、忙しい時間帯でも冷静に行動することができる点も強みだと思います。
                      この経験を活かして、貴店でもお客様に喜んでいただけるサービスを提供したいと考えています。」
                    </p>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-3">3. よくある質問への回答を考えておく</h3>
                  <p className="mb-4">
                    アルバイト面接でよく聞かれる質問への回答を事前に準備しておくと余裕を持って対応できます。
                  </p>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-bold">Q1: 志望動機は？</h4>
                      <p className="text-gray-700">
                        なぜその職場を選んだのか、具体的な理由を伝えましょう。
                        企業理念や店舗の雰囲気、提供しているサービスなど、リサーチした内容を踏まえて答えると良いでしょう。
                      </p>
                    </div>
                    <div>
                      <h4 className="font-bold">Q2: アルバイト可能な曜日・時間帯は？</h4>
                      <p className="text-gray-700">
                        学業との両立を考慮しつつ、できるだけ具体的に答えましょう。
                        「テスト期間は調整したい」など、条件があれば正直に伝えることが大切です。
                      </p>
                    </div>
                    <div>
                      <h4 className="font-bold">Q3: アルバイト経験はありますか？</h4>
                      <p className="text-gray-700">
                        経験がある場合は具体的な業務内容と学んだことを、
                        ない場合は「初めてですが、〇〇の経験を活かして頑張りたい」など前向きに答えましょう。
                      </p>
                    </div>
                    <div>
                      <h4 className="font-bold">Q4: 長所と短所を教えてください</h4>
                      <p className="text-gray-700">
                        長所はアルバイト先で活かせるものを、短所は改善しようと努力していることを伝えると良いでしょう。
                      </p>
                    </div>
                    <div>
                      <h4 className="font-bold">Q5: いつまで働けますか？</h4>
                      <p className="text-gray-700">
                        できるだけ長期間働ける方が採用されやすいですが、正直に答えましょう。
                        「少なくとも1年間は」など具体的な期間を示すと良いでしょう。
                      </p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-3">4. 服装と身だしなみを整える</h3>
                  <p className="mb-4">
                    アルバイトの面接では、清潔感のある服装が基本です。職種によって適切な服装は異なりますが、
                    基本的には以下のポイントを押さえておきましょう。
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-white border rounded-lg p-4">
                      <h4 className="font-bold mb-2">男性の場合</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>シャツ（白または淡い色）</li>
                        <li>チノパンやスラックス</li>
                        <li>清潔な靴</li>
                        <li>髪は整え、ヒゲは剃る</li>
                        <li>アクセサリーは控えめに</li>
                      </ul>
                    </div>
                    <div className="bg-white border rounded-lg p-4">
                      <h4 className="font-bold mb-2">女性の場合</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>ブラウスやシャツ</li>
                        <li>スカートやパンツ</li>
                        <li>清潔な靴</li>
                        <li>派手なメイクは避ける</li>
                        <li>長い髪は結ぶか整える</li>
                      </ul>
                    </div>
                  </div>
                  <p className="mt-4 text-sm text-gray-600">
                    ※飲食店やアパレル店など、応募先の雰囲気に合わせた服装選びも大切です。
                    迷った場合は、一般的なカジュアルでもきちんと感のある服装が無難です。
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-12 bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold mb-6 border-b border-gray-200 pb-2">面接当日のポイント</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3">1. 時間に余裕を持って行動する</h3>
                  <p>
                    面接開始時間の10〜15分前には到着するよう計画しましょう。
                    初めて行く場所の場合は、道に迷う可能性も考慮して余裕を持った計画を立てることが大切です。
                    遅刻は大きなマイナス評価になります。
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-3">2. 第一印象を大切に</h3>
                  <p className="mb-3">
                    入室時のノック、挨拶、姿勢、表情など、最初の印象はとても重要です。
                    明るく元気な挨拶を心がけ、面接官と目を合わせるようにしましょう。
                  </p>
                  <div className="bg-gray-100 p-4 rounded-lg">
                    <h4 className="font-bold mb-1">基本的な流れ</h4>
                    <ol className="list-decimal list-inside space-y-1 text-sm">
                      <li>ドアをノック（3回程度）</li>
                      <li>「失礼します」と言って入室</li>
                      <li>「〇〇大学の△△と申します。本日はよろしくお願いいたします」と挨拶</li>
                      <li>勧められたら着席</li>
                    </ol>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-3">3. 話し方と姿勢に注意</h3>
                  <p className="mb-4">
                    明るくハキハキとした話し方を心がけ、質問に対しては具体的に答えるようにしましょう。
                    また、姿勢よく座り、面接官の目を見て話すことも大切です。
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-white border rounded-lg p-4">
                      <h4 className="font-bold mb-2">良い例</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>背筋を伸ばして座る</li>
                        <li>適度に相づちを打つ</li>
                        <li>ゆっくり、はっきり話す</li>
                        <li>質問の意図を理解して回答</li>
                      </ul>
                    </div>
                    <div className="bg-white border rounded-lg p-4">
                      <h4 className="font-bold mb-2">避けるべき例</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>足を組む、猫背になる</li>
                        <li>腕を組む、ポケットに手を入れる</li>
                        <li>早口で話す、声が小さい</li>
                        <li>「えーと」「あの」を多用する</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-3">4. 前向きな姿勢をアピール</h3>
                  <p>
                    採用担当者は「意欲的に働いてくれるか」「長く続けてくれるか」を重視しています。
                    学びたい気持ちや成長意欲をアピールし、シフトの希望などについても
                    柔軟に対応できる姿勢を示すと良い印象を与えられます。
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-3">5. 質問を用意しておく</h3>
                  <p className="mb-3">
                    面接の最後に「何か質問はありますか？」と聞かれることが多いです。
                    この機会を活用して、職場環境や業務内容について具体的な質問をすることで、
                    仕事への関心と意欲をアピールできます。
                  </p>
                  <div className="bg-gray-100 p-4 rounded-lg">
                    <h4 className="font-bold mb-1">質問例</h4>
                    <ul className="list-disc list-inside space-y-1 text-sm">
                      <li>「研修はどのように行われますか？」</li>
                      <li>「1日の主な業務の流れを教えていただけますか？」</li>
                      <li>「先輩スタッフの方々はどのような方が多いですか？」</li>
                      <li>「繁忙期や特に忙しい時間帯はいつ頃ですか？」</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-12 bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold mb-6 border-b border-gray-200 pb-2">業種別面接対策</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3">飲食店での面接</h3>
                  <p className="mb-3">
                    接客態度、衛生観念、チームワーク力が重視されます。
                    忙しい時間帯でも笑顔を絶やさず対応できるか、
                    複数の業務を同時にこなせるかなどがポイントです。
                  </p>
                  <div className="bg-yellow-50 p-4 rounded-lg">
                    <p className="text-sm font-medium text-yellow-800">
                      <span className="font-bold">アピールポイント:</span> 
                      接客経験や体力に自信があること、衛生面への意識の高さ、チームで協力して働いた経験など。
                    </p>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-3">コンビニ・スーパーでの面接</h3>
                  <p className="mb-3">
                    正確さ、責任感、多様な業務に対応する柔軟性が問われます。
                    レジ、品出し、清掃など様々な業務に取り組む意欲が大切です。
                  </p>
                  <div className="bg-yellow-50 p-4 rounded-lg">
                    <p className="text-sm font-medium text-yellow-800">
                      <span className="font-bold">アピールポイント:</span> 
                      几帳面な性格、責任感の強さ、臨機応変な対応ができること、長期間働ける予定であることなど。
                    </p>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-3">アパレルショップでの面接</h3>
                  <p className="mb-3">
                    ファッションへの関心、接客スキル、販売意欲などが重視されます。
                    自分自身の服装や身だしなみも審査の対象になります。
                  </p>
                  <div className="bg-yellow-50 p-4 rounded-lg">
                    <p className="text-sm font-medium text-yellow-800">
                      <span className="font-bold">アピールポイント:</span> 
                      ファッションへの興味、コーディネート力、コミュニケーション能力、接客への意欲など。
                    </p>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-3">塾・家庭教師での面接</h3>
                  <p className="mb-3">
                    教科の知識、説明能力、生徒とのコミュニケーション力が問われます。
                    自分の学習経験や指導経験についても具体的に話せるようにしましょう。
                  </p>
                  <div className="bg-yellow-50 p-4 rounded-lg">
                    <p className="text-sm font-medium text-yellow-800">
                      <span className="font-bold">アピールポイント:</span> 
                      学業成績、教えることへの熱意、子どもとの接し方、自分の勉強法や学習経験など。
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-12 bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold mb-6 border-b border-gray-200 pb-2">面接後のフォローアップ</h2>
              
              <div className="space-y-4">
                <p>
                  面接が終わったら、次のステップを確認しておきましょう。
                  採用結果はいつ頃、どのような形（電話・メールなど）で連絡があるのか、
                  採用された場合はいつから勤務開始となるのかなどの情報を把握しておくと安心です。
                </p>
                
                <div>
                  <h3 className="text-xl font-semibold mb-3">不採用だった場合</h3>
                  <p>
                    落ち込むのは自然なことですが、次の面接に活かせるよう振り返りを行いましょう。
                    可能であれば不採用の理由を聞いてみることも、今後の改善につながります。
                    一度の不採用で諦めず、様々な求人に応募し続けることが大切です。
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-3">採用された場合</h3>
                  <p>
                    勤務開始日や必要書類、初日の持ち物などを確認しましょう。
                    また、学業との両立のため、授業やテスト期間のスケジュールを
                    事前に伝えておくと良いでしょう。
                  </p>
                </div>
              </div>
            </section>
          </div>

          <div className="md:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 mb-8 sticky top-20">
              <h2 className="text-xl font-bold mb-4 text-yellow-700">面接準備チェックリスト</h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="font-bold mb-2 text-yellow-600">持ち物</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <svg className="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                      </svg>
                      <span>履歴書（写真貼付済み）</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                      </svg>
                      <span>筆記用具</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                      </svg>
                      <span>学生証</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                      </svg>
                      <span>求人情報（メモ）</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                      </svg>
                      <span>面接場所の地図</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                      </svg>
                      <span>スケジュール帳・手帳</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-bold mb-2 text-yellow-600">準備事項</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <svg className="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                      </svg>
                      <span>志望動機を整理する</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                      </svg>
                      <span>自己PRを準備する</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                      </svg>
                      <span>勤務可能な曜日・時間を確認</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                      </svg>
                      <span>服装を準備する</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                      </svg>
                      <span>店舗・企業について調べる</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                      </svg>
                      <span>質問事項をメモしておく</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                      </svg>
                      <span>面接場所・所要時間を確認</span>
                    </li>
                  </ul>
                </div>
                
                <div className="mt-6 bg-yellow-50 p-4 rounded-lg">
                  <h3 className="font-bold mb-2 text-yellow-800">当日のリマインダー</h3>
                  <ul className="space-y-1 text-sm text-yellow-800">
                    <li>• 10〜15分前に到着する</li>
                    <li>• 明るく元気な挨拶を心がける</li>
                    <li>• 姿勢よく、目線を合わせる</li>
                    <li>• 質問に対して具体的に答える</li>
                    <li>• 最後に「よろしくお願いします」と締める</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-bold mb-4 text-yellow-700">関連情報</h2>
              <ul className="space-y-3">
                <li>
                  <Link href="/part-time/articles/part-time-guide" className="text-yellow-600 hover:underline block">
                    アルバイト選びと働き方ガイド
                  </Link>
                </li>
                <li>
                  <Link href="/part-time/search" className="text-yellow-600 hover:underline block">
                    アルバイト検索
                  </Link>
                </li>
                <li>
                  <Link href="/part-time/legal" className="text-yellow-600 hover:underline block">
                    アルバイトの法律知識
                  </Link>
                </li>
                <li>
                  <Link href="/part-time/experiences" className="text-yellow-600 hover:underline block">
                    先輩のバイト体験談
                  </Link>
                </li>
                <li>
                  <Link href="/career/resume" className="text-yellow-600 hover:underline block">
                    履歴書の書き方
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 