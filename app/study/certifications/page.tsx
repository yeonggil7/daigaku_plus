import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: '大学生におすすめの資格取得ガイド | 大学生活ガイド',
  description: '大学生に役立つ資格情報、取得のコツ、おすすめの資格などを紹介します。就職やキャリアアップに活かせる資格取得ガイド。',
}

export default function CertificationsPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <h1 className="text-3xl font-bold mb-6 border-b pb-2">大学生におすすめの資格取得ガイド</h1>
      
      <div className="bg-blue-50 p-6 rounded-lg mb-8">
        <p className="text-lg">
          大学生のうちに資格を取得しておくと、就職活動での差別化やスキルアップにつながります。
          このページでは、大学生におすすめの資格や、効率的な勉強法、資格取得のメリットを紹介します。
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4 text-blue-700">資格取得のメリット</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>就職活動でのアピールポイントになる</li>
            <li>専門的な知識やスキルが身につく</li>
            <li>自己成長や自信につながる</li>
            <li>在学中に取得すると学割や特典が使える場合がある</li>
            <li>卒業後のキャリアの選択肢が広がる</li>
            <li>目標があることで学習習慣が身につく</li>
          </ul>
        </div>
        
        <div className="relative h-60 md:h-full">
          <Image 
            src="/images/campus-life.jpg" 
            alt="資格勉強をする大学生" 
            fill
            className="object-cover rounded-lg"
          />
        </div>
      </div>
      
      <h2 className="text-2xl font-bold mb-4 border-b pb-2">学部・専攻別おすすめ資格</h2>
      
      <div className="space-y-8 mb-12">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold mb-4 text-blue-700">文系学生におすすめの資格</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-bold text-lg mb-2">語学系</h4>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li><span className="font-semibold">TOEIC：</span>ビジネス英語の能力を証明する国際的な資格</li>
                <li><span className="font-semibold">英検：</span>日本の英語能力を測る伝統的な試験</li>
                <li><span className="font-semibold">IELTS/TOEFL：</span>留学や海外就職に必要な英語能力試験</li>
                <li><span className="font-semibold">中国語検定/HSK：</span>中国語能力を証明する試験</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-lg mb-2">ビジネス系</h4>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li><span className="font-semibold">日商簿記検定：</span>経理・財務の基礎知識を証明する資格</li>
                <li><span className="font-semibold">ファイナンシャルプランナー：</span>金融・保険・不動産などの知識を証明</li>
                <li><span className="font-semibold">宅地建物取引士：</span>不動産取引に関する国家資格</li>
                <li><span className="font-semibold">秘書検定：</span>ビジネスマナーやコミュニケーション能力を証明</li>
              </ul>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            <div>
              <h4 className="font-bold text-lg mb-2">法律・行政系</h4>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li><span className="font-semibold">行政書士：</span>官公署に提出する書類の作成を行う国家資格</li>
                <li><span className="font-semibold">法学検定：</span>法律の基礎知識を証明する民間資格</li>
                <li><span className="font-semibold">ビジネス実務法務検定：</span>企業活動に必要な法律知識を証明</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-lg mb-2">教育・心理系</h4>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li><span className="font-semibold">教員免許：</span>教育学部等で取得可能な教員資格</li>
                <li><span className="font-semibold">認定心理士：</span>心理学の基礎知識と技能を証明する資格</li>
                <li><span className="font-semibold">保育士：</span>子どもの保育・教育に関わる国家資格</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold mb-4 text-blue-700">理系学生におすすめの資格</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-bold text-lg mb-2">IT・情報系</h4>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li><span className="font-semibold">基本情報技術者：</span>ITエンジニアの登竜門となる国家資格</li>
                <li><span className="font-semibold">応用情報技術者：</span>より高度なIT知識を証明する国家資格</li>
                <li><span className="font-semibold">ITパスポート：</span>IT関連の基礎知識を証明する入門レベルの資格</li>
                <li><span className="font-semibold">Oracle認定資格：</span>データベース管理に関する国際資格</li>
                <li><span className="font-semibold">AWS認定資格：</span>クラウドコンピューティングの知識を証明</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-lg mb-2">工学・技術系</h4>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li><span className="font-semibold">技術士補：</span>技術者としての能力を証明する国家資格</li>
                <li><span className="font-semibold">電気工事士：</span>電気工事に関する国家資格</li>
                <li><span className="font-semibold">CAD利用技術者試験：</span>設計・製図のスキルを証明</li>
                <li><span className="font-semibold">危険物取扱者：</span>危険物を取り扱うための国家資格</li>
              </ul>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            <div>
              <h4 className="font-bold text-lg mb-2">理学・環境系</h4>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li><span className="font-semibold">環境計量士：</span>環境測定に関する国家資格</li>
                <li><span className="font-semibold">甲種危険物取扱者：</span>あらゆる危険物を取り扱える資格</li>
                <li><span className="font-semibold">気象予報士：</span>気象に関する専門的な国家資格</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-lg mb-2">医療・健康系</h4>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li><span className="font-semibold">臨床検査技師：</span>医療検査を行う国家資格</li>
                <li><span className="font-semibold">診療放射線技師：</span>放射線を用いた検査等を行う国家資格</li>
                <li><span className="font-semibold">健康管理士：</span>健康づくりの知識を持つ民間資格</li>
                <li><span className="font-semibold">栄養士/管理栄養士：</span>栄養指導等を行う国家資格</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      <h2 className="text-2xl font-bold mb-4 border-b pb-2">学年別・資格取得のロードマップ</h2>
      
      <div className="bg-white p-6 rounded-lg shadow-md mb-12">
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-bold mb-2 text-blue-700">1年生</h3>
            <p className="text-sm mb-2">大学生活にまず慣れつつ、基礎的な資格に挑戦しましょう。</p>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>英検、TOEIC（基礎レベル）</li>
              <li>ITパスポート</li>
              <li>秘書検定</li>
              <li>日商簿記3級</li>
              <li>MOS（Microsoft Office Specialist）</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-2 text-blue-700">2年生</h3>
            <p className="text-sm mb-2">専門分野の基礎が固まる時期に、より専門的な資格に挑戦しましょう。</p>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>TOEIC（600点以上を目指す）</li>
              <li>日商簿記2級</li>
              <li>基本情報技術者</li>
              <li>ビジネス実務法務検定3級</li>
              <li>ファイナンシャルプランナー3級</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-2 text-blue-700">3年生</h3>
            <p className="text-sm mb-2">就職活動を見据えて、業界特化型の資格取得を目指しましょう。</p>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>TOEIC（730点以上を目指す）</li>
              <li>日商簿記1級</li>
              <li>応用情報技術者</li>
              <li>行政書士</li>
              <li>宅地建物取引士</li>
              <li>ファイナンシャルプランナー2級</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-2 text-blue-700">4年生</h3>
            <p className="text-sm mb-2">卒業研究や就職活動と両立しつつ、業界に直結する資格を取得しましょう。</p>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>内定先の業界に特化した資格</li>
              <li>語学系資格の総仕上げ</li>
              <li>就職後すぐに活かせる実務系資格</li>
            </ul>
          </div>
        </div>
      </div>
      
      <h2 className="text-2xl font-bold mb-4 border-b pb-2">資格取得の効率的な勉強法</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-bold mb-3 text-blue-700">時間管理のコツ</h3>
          <ul className="list-disc pl-5 space-y-2 text-sm">
            <li><span className="font-semibold">定期的な学習時間の確保：</span>毎日同じ時間帯に勉強する習慣をつける</li>
            <li><span className="font-semibold">ポモドーロテクニック：</span>25分集中して5分休憩のサイクルで効率アップ</li>
            <li><span className="font-semibold">スキマ時間の活用：</span>通学時間や授業の合間に単語帳やアプリで学習</li>
            <li><span className="font-semibold">計画的な学習スケジュール：</span>試験日から逆算して学習計画を立てる</li>
            <li><span className="font-semibold">大学の授業と連動：</span>関連する授業の内容と資格勉強を連携させる</li>
          </ul>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-bold mb-3 text-blue-700">効果的な学習方法</h3>
          <ul className="list-disc pl-5 space-y-2 text-sm">
            <li><span className="font-semibold">過去問を徹底的に解く：</span>出題傾向を把握し、実践力を養う</li>
            <li><span className="font-semibold">アウトプット重視：</span>インプットだけでなく、問題を解く練習を重視</li>
            <li><span className="font-semibold">スタディグループの活用：</span>同じ資格を目指す仲間と一緒に勉強</li>
            <li><span className="font-semibold">オンライン学習リソースの活用：</span>YouTube動画や無料講座を活用</li>
            <li><span className="font-semibold">モチベーション管理：</span>小さな目標を設定し、達成感を味わう</li>
            <li><span className="font-semibold">記憶術の活用：</span>暗記が必要な内容はフラッシュカードやマインドマップを活用</li>
          </ul>
        </div>
      </div>
      
      <h2 className="text-2xl font-bold mb-4 border-b pb-2">資格取得の費用と支援制度</h2>
      
      <div className="bg-white p-6 rounded-lg shadow-md mb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-bold mb-3 text-blue-700">一般的な費用の目安</h3>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><span className="font-semibold">TOEIC：</span>約7,000円（公開テスト）</li>
              <li><span className="font-semibold">日商簿記検定3級：</span>約2,800円</li>
              <li><span className="font-semibold">基本情報技術者：</span>約5,700円</li>
              <li><span className="font-semibold">MOS：</span>約10,000円</li>
              <li><span className="font-semibold">ファイナンシャルプランナー3級：</span>約4,000円</li>
              <li><span className="font-semibold">宅地建物取引士：</span>約7,000円</li>
              <li><span className="font-semibold">行政書士：</span>約7,000円</li>
            </ul>
            <p className="mt-2 text-xs text-gray-600">※受験料のみの目安です。参考書や講座の費用は別途必要です。</p>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-3 text-blue-700">利用できる支援制度</h3>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><span className="font-semibold">大学の補助制度：</span>多くの大学では特定の資格に対して受験料補助や合格祝い金制度がある</li>
              <li><span className="font-semibold">学内講座の活用：</span>大学が開催する安価または無料の資格対策講座を利用する</li>
              <li><span className="font-semibold">教育訓練給付金：</span>一部の資格講座では厚生労働省の給付金制度が利用できる場合がある</li>
              <li><span className="font-semibold">大学生協の割引：</span>生協を通じて申し込むと割引が適用される場合がある</li>
              <li><span className="font-semibold">奨学金制度：</span>資格取得を条件とした奨学金制度を利用する</li>
            </ul>
            <p className="mt-2 text-sm font-semibold">自分の大学の支援制度は必ずキャリアセンターなどで確認しましょう！</p>
          </div>
        </div>
      </div>
      
      <h2 className="text-2xl font-bold mb-4 border-b pb-2">資格取得体験談</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-start mb-3">
            <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mr-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <div>
              <h3 className="font-bold text-lg">田中さん（経済学部3年）</h3>
              <p className="text-sm text-gray-600">TOEIC 850点、日商簿記2級取得</p>
            </div>
          </div>
          <p className="text-sm">
            「1年生の時からコツコツとTOEICの勉強を始め、3年生の今では850点まで伸ばすことができました。英語力が評価され、グローバル企業のインターンシップにも参加でき、就活でも武器になっています。大学の英語の授業と並行して勉強することで効率的に学習できました。」
          </p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-start mb-3">
            <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mr-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <div>
              <h3 className="font-bold text-lg">佐藤さん（情報工学部2年）</h3>
              <p className="text-sm text-gray-600">基本情報技術者、ITパスポート取得</p>
            </div>
          </div>
          <p className="text-sm">
            「プログラミングに興味があり、専門性を証明するために基本情報技術者試験に挑戦しました。大学の授業で学んだ内容が試験に直結していたので、授業をしっかり聞くことで効率よく勉強できました。資格取得後は自信がつき、アルバイトでもプログラミングの仕事を任せてもらえるようになりました。」
          </p>
        </div>
      </div>
      
      <h2 className="text-2xl font-bold mb-4 border-b pb-2">資格情報の調べ方</h2>
      
      <div className="bg-white p-6 rounded-lg shadow-md mb-12">
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-bold mb-2">公式サイトの活用</h3>
            <p className="text-sm">資格の正確な情報は、各試験の公式サイトで確認しましょう。試験日程、受験料、出題範囲などの最新情報が掲載されています。</p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-2">大学のキャリアセンター</h3>
            <p className="text-sm">多くの大学のキャリアセンターでは、資格に関する情報提供や相談を行っています。大学独自の支援制度についても確認できます。</p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-2">先輩や教授に相談</h3>
            <p className="text-sm">同じ学部・学科の先輩や教授に相談すると、専門分野に関連する有用な資格についてアドバイスがもらえます。</p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-2">就職情報サイト</h3>
            <p className="text-sm">マイナビやリクナビなどの就職情報サイトでは、業界別に求められる資格の情報が掲載されています。</p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-2">資格取得支援サービス</h3>
            <p className="text-sm">資格スクールやオンライン学習サービスでは、資格に関する情報や学習教材を提供しています。無料相談を活用しましょう。</p>
          </div>
        </div>
      </div>
      
      <h2 className="text-2xl font-bold mb-4 border-b pb-2">関連情報</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        <Link href="/study/learning-methods" className="block p-4 bg-white rounded-lg shadow-md hover:bg-blue-50 transition-colors">
          <h3 className="font-bold text-lg mb-2 text-blue-700">効率的な学習法</h3>
          <p className="text-sm">資格勉強にも役立つ効率的な学習テクニック</p>
        </Link>
        <Link href="/career/job-hunting" className="block p-4 bg-white rounded-lg shadow-md hover:bg-blue-50 transition-colors">
          <h3 className="font-bold text-lg mb-2 text-blue-700">就職活動ガイド</h3>
          <p className="text-sm">資格を活かした就職活動のポイント</p>
        </Link>
        <Link href="/study/class-selection" className="block p-4 bg-white rounded-lg shadow-md hover:bg-blue-50 transition-colors">
          <h3 className="font-bold text-lg mb-2 text-blue-700">授業選択のコツ</h3>
          <p className="text-sm">資格取得に役立つ授業の選び方</p>
        </Link>
      </div>
    </div>
  )
} 