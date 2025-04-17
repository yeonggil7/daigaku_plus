import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: '大学の授業選択のコツ | 大学生活ガイド',
  description: '大学での授業選択を成功させるためのポイント、おすすめの選び方、履修登録の注意点などを解説します。',
};

export default function ClassSelectionPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <h1 className="text-3xl font-bold mb-6 border-b pb-2">大学の授業選択のコツ</h1>
      
      <div className="bg-blue-50 p-6 rounded-lg mb-8">
        <p className="text-lg">
          大学では自分で授業を選ぶ自由がありますが、その選択によって学びの質や大学生活の充実度が大きく変わります。
          このページでは、授業選択を成功させるためのポイントや、履修登録の注意点を紹介します。
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4 text-blue-700">授業選択の重要性</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>専門知識の深さと幅を決定づける</li>
            <li>将来のキャリアに直結する可能性がある</li>
            <li>時間割が生活リズムを左右する</li>
            <li>単位取得の難易度が学生生活の充実度に影響</li>
            <li>興味のある分野を探求する機会になる</li>
          </ul>
        </div>
        
        <div className="relative h-60 md:h-full">
          <Image 
            src="/images/campus-life.jpg" 
            alt="大学での授業風景" 
            fill
            className="object-cover rounded-lg"
          />
        </div>
      </div>
      
      <h2 className="text-2xl font-bold mb-4 border-b pb-2">授業選択の基本ステップ</h2>
      
      <div className="bg-white p-6 rounded-lg shadow-md mb-12">
        <ol className="list-decimal pl-5 space-y-4">
          <li className="font-semibold">卒業要件を確認する
            <p className="font-normal text-sm mt-1">必修科目、選択必修科目、選択科目など、卒業に必要な単位数と科目区分を把握しましょう。</p>
          </li>
          <li className="font-semibold">シラバスを徹底的に読む
            <p className="font-normal text-sm mt-1">授業内容、評価方法、予習・復習の量、教員の教育スタイルなどを確認しましょう。</p>
          </li>
          <li className="font-semibold">時間割を考慮する
            <p className="font-normal text-sm mt-1">移動時間、集中力の持続性、サークル活動やアルバイトとの両立を考えて組みましょう。</p>
          </li>
          <li className="font-semibold">先輩や口コミを参考にする
            <p className="font-normal text-sm mt-1">実際に受講した先輩の意見や、学内の授業評価サイトなどを参考にしましょう。</p>
          </li>
          <li className="font-semibold">バランスを考える
            <p className="font-normal text-sm mt-1">専門科目と教養科目、難易度の高い科目と易しい科目などのバランスを取りましょう。</p>
          </li>
        </ol>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div>
          <h2 className="text-2xl font-bold mb-4 border-b pb-2">おすすめの選び方</h2>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-bold mb-2 text-blue-700">1. 将来のキャリアを見据えた選択</h3>
                <p className="text-sm">就きたい職業や業界に関連する科目を選ぶことで、専門性を高め、就職活動でもアピールできます。</p>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2 text-blue-700">2. 興味・関心を優先した選択</h3>
                <p className="text-sm">純粋に興味がある分野の授業を選ぶことで、学習のモチベーションが高まり、深い理解につながります。</p>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2 text-blue-700">3. スキルアップを目指した選択</h3>
                <p className="text-sm">プログラミング、統計、語学など、どの分野でも役立つスキルを身につけられる科目を選びましょう。</p>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2 text-blue-700">4. 教員の教え方で選ぶ</h3>
                <p className="text-sm">自分の学習スタイルに合った教え方をする教員の授業を選ぶことで、より効果的に学べます。</p>
              </div>
            </div>
          </div>
        </div>
        
        <div>
          <h2 className="text-2xl font-bold mb-4 border-b pb-2">避けるべき選び方</h2>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-bold mb-2 text-red-700">1. 「楽単」だけで選ぶ</h3>
                <p className="text-sm">単位が取りやすいだけの授業ばかり選ぶと、大学で学ぶ本来の意義が薄れてしまいます。</p>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2 text-red-700">2. 友達に合わせるだけ</h3>
                <p className="text-sm">友達と同じ授業を取ることは楽しいですが、自分の興味や将来のキャリアを犠牲にしないようにしましょう。</p>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2 text-red-700">3. 時間帯だけで決める</h3>
                <p className="text-sm">「朝が早い授業は避ける」などの理由だけで選ぶと、重要な授業を逃してしまう可能性があります。</p>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2 text-red-700">4. 計画性なく選ぶ</h3>
                <p className="text-sm">将来の履修計画を考えずに選ぶと、高学年になって必修科目が集中するなどの問題が生じることがあります。</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <h2 className="text-2xl font-bold mb-4 border-b pb-2">学年別の授業選択ポイント</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold mb-3 text-blue-700">1・2年生</h3>
          <ul className="list-disc pl-5 space-y-2 text-sm">
            <li><span className="font-semibold">幅広く学ぶ：</span>様々な分野の授業を受け、自分の興味・適性を探る</li>
            <li><span className="font-semibold">基礎を固める：</span>専門科目の土台となる基礎科目を確実に押さえる</li>
            <li><span className="font-semibold">語学を重視：</span>早い段階で語学力を高め、後の学習や留学に備える</li>
            <li><span className="font-semibold">必修科目を優先：</span>必修科目を計画的に履修し、留年リスクを減らす</li>
          </ul>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold mb-3 text-blue-700">3・4年生</h3>
          <ul className="list-disc pl-5 space-y-2 text-sm">
            <li><span className="font-semibold">専門性を深める：</span>将来のキャリアに関連する専門科目を集中的に学ぶ</li>
            <li><span className="font-semibold">研究・卒論に備える：</span>研究室配属や卒業論文に関連する科目を選ぶ</li>
            <li><span className="font-semibold">就活との両立：</span>就職活動のスケジュールを考慮した時間割を組む</li>
            <li><span className="font-semibold">不足単位の確認：</span>卒業要件を再確認し、不足している単位を補う</li>
          </ul>
        </div>
      </div>
      
      <h2 className="text-2xl font-bold mb-4 border-b pb-2">履修登録の注意点</h2>
      
      <div className="bg-white p-6 rounded-lg shadow-md mb-12">
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-bold mb-2">履修上限単位数を確認</h3>
            <p className="text-sm">多くの大学では学期ごとに履修できる単位数に上限があります。無理な履修計画を立てないようにしましょう。</p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-2">履修登録期間を守る</h3>
            <p className="text-sm">履修登録期間を過ぎると、原則として変更できなくなります。日程を確認し、余裕を持って登録しましょう。</p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-2">抽選科目に注意</h3>
            <p className="text-sm">人気の高い科目では抽選が行われることがあります。抽選に外れた場合の代替科目も考えておきましょう。</p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-2">前提条件を確認</h3>
            <p className="text-sm">「○○を履修済みであること」などの条件がある科目も多いので、シラバスで確認しましょう。</p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-2">時間割の重複に注意</h3>
            <p className="text-sm">同じ時間帯に複数の授業を登録することはできません。特に集中講義などは注意が必要です。</p>
          </div>
        </div>
      </div>
      
      <h2 className="text-2xl font-bold mb-4 border-b pb-2">学部・学科別のおすすめ履修パターン</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-bold mb-2 text-blue-700">文系学部</h3>
          <div className="space-y-3">
            <div>
              <h4 className="font-bold">文学部・人文学部</h4>
              <p className="text-sm">語学科目、文献読解、研究方法論、専門分野のゼミを重視</p>
            </div>
            <div>
              <h4 className="font-bold">経済学部・経営学部</h4>
              <p className="text-sm">統計学、ミクロ・マクロ経済学、会計学、情報処理科目を重視</p>
            </div>
            <div>
              <h4 className="font-bold">法学部</h4>
              <p className="text-sm">憲法・民法・刑法などの基本六法、法律英語、判例研究を重視</p>
            </div>
            <div>
              <h4 className="font-bold">教育学部</h4>
              <p className="text-sm">教育実習関連科目、教科専門科目、教職科目をバランス良く</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-bold mb-2 text-blue-700">理系学部</h3>
          <div className="space-y-3">
            <div>
              <h4 className="font-bold">理学部</h4>
              <p className="text-sm">数学・物理学の基礎科目、実験・実習、専門分野の先端科目を重視</p>
            </div>
            <div>
              <h4 className="font-bold">工学部</h4>
              <p className="text-sm">数学・物理の基礎、プログラミング、専門実験・実習、卒業研究を重視</p>
            </div>
            <div>
              <h4 className="font-bold">医学部・薬学部</h4>
              <p className="text-sm">基礎医学科目、実習・実験、臨床医学科目を段階的に履修</p>
            </div>
            <div>
              <h4 className="font-bold">農学部</h4>
              <p className="text-sm">生物学・化学の基礎、フィールドワーク、専門実験・実習を重視</p>
            </div>
          </div>
        </div>
      </div>
      
      <h2 className="text-2xl font-bold mb-4 border-b pb-2">授業選択でよくある質問</h2>
      
      <div className="bg-white p-6 rounded-lg shadow-md mb-12">
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-bold mb-1">Q: 1セメスターで何単位が適切ですか？</h3>
            <p className="text-sm">A: 大学によって異なりますが、一般的には20〜24単位程度が適切です。無理なく学習できる量を見極めましょう。</p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-1">Q: GPA（成績平均値）を上げるコツはありますか？</h3>
            <p className="text-sm">A: 確実に高評価が取れる科目と自分が得意な分野の科目をバランス良く選び、一科目一科目を大切にしましょう。</p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-1">Q: 朝一の授業は避けるべきですか？</h3>
            <p className="text-sm">A: 自分の生活リズムに合わせて判断しましょう。朝型の人は朝の授業で頭が冴えているメリットがあります。</p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-1">Q: オンライン授業と対面授業、どちらを選ぶべきですか？</h3>
            <p className="text-sm">A: 科目の性質と自分の学習スタイルに合わせて選びましょう。実習や討論が重要な科目は対面が効果的なことが多いです。</p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-1">Q: 履修登録後に授業を取り消すことはできますか？</h3>
            <p className="text-sm">A: 多くの大学では履修取消期間が設けられています。ただし、期間外の取り消しは原則としてできないことが多いです。</p>
          </div>
        </div>
      </div>
      
      <h2 className="text-2xl font-bold mb-4 border-b pb-2">関連情報</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        <Link href="/study/learning-methods" className="block p-4 bg-white rounded-lg shadow-md hover:bg-blue-50 transition-colors">
          <h3 className="font-bold text-lg mb-2 text-blue-700">効率的な学習法</h3>
          <p className="text-sm">大学での勉強を効率的に進めるための学習テクニック</p>
        </Link>
        <Link href="/study/exam-preparation" className="block p-4 bg-white rounded-lg shadow-md hover:bg-blue-50 transition-colors">
          <h3 className="font-bold text-lg mb-2 text-blue-700">試験対策ガイド</h3>
          <p className="text-sm">テスト前の効果的な勉強方法と当日のパフォーマンスを上げるコツ</p>
        </Link>
        <Link href="/study/report-writing" className="block p-4 bg-white rounded-lg shadow-md hover:bg-blue-50 transition-colors">
          <h3 className="font-bold text-lg mb-2 text-blue-700">レポート作成ガイド</h3>
          <p className="text-sm">大学のレポート・論文の書き方と評価されるポイント</p>
        </Link>
      </div>
    </div>
  );
} 