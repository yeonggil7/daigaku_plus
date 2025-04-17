# ダイガク+ (大学生情報ポータル)

大学生活を充実させるための総合情報ポータルサイト。勉強、就職、コミュニティ、バイト情報など大学生に必要な情報を網羅的に提供します。

公式サイト: [https://daigakuplus.jp](https://daigakuplus.jp)

## 概要

ダイガク+は大学1-2年生をメインターゲットにした情報サイトです。大学生活の様々な側面をサポートする情報を集約し、学生生活を充実させるための手助けをします。

### 主な機能

- **勉強情報**: 効率的な学習方法、授業の選び方、テスト対策など
- **就職・キャリア情報**: インターンシップ、業界研究、就活準備など
- **コミュニティ情報**: サークル、イベント、学生コミュニティなど
- **バイト情報**: 求人ボックスAPI連携による大学生向けバイト情報

## 技術スタック

- **フロントエンド**: Next.js (React), TypeScript, Tailwind CSS
- **バックエンド**: Next.js (Server Components, App Router)
- **API連携**: 求人ボックスAPI (バイト情報)
- **デプロイ**: Vercel
- **ドメイン**: daigakuplus.jp

## 開発セットアップ

### 必要条件

- Node.js 18.0.0以上
- npm または yarn

### インストール手順

```bash
# リポジトリのクローン
git clone https://github.com/yourname/daigakusei_web.git
cd daigakusei_web

# 依存関係のインストール
npm install
# または
yarn install

# 開発サーバーの起動
npm run dev
# または
yarn dev
```

ブラウザで http://localhost:3000 を開いてアプリケーションを確認できます。

## プロジェクト構造

```
/
├── app/                  # Nextjsのアプリケーションディレクトリ
│   ├── page.tsx          # ホームページ
│   ├── study/            # 勉強情報ページ
│   ├── career/           # 就職情報ページ
│   ├── community/        # コミュニティ情報ページ
│   └── part-time/        # バイト情報ページ（API連携）
├── components/           # 再利用可能なUIコンポーネント
│   ├── ui/               # 基本UIコンポーネント
│   ├── layout/           # レイアウトコンポーネント
│   └── features/         # 機能別コンポーネント
├── lib/                  # ユーティリティ関数とAPIクライアント
│   ├── api/              # API連携コード
│   ├── ai/               # AI記事生成機能
│   └── db/               # データベース連携
├── content/              # コンテンツデータ
└── public/               # 静的ファイル
```

## バイト情報API連携

バイト情報セクションは求人ボックスAPIと連携して求人情報を表示します。本番環境で利用するには以下の手順が必要です：

1. 求人ボックスとの契約・審査
2. APIキーの取得
3. `lib/api/jobboxClient.ts` の更新
   - APIエンドポイントURLの設定
   - APIキーの設定
   - コメントアウトされているAPI呼び出しコードのアクティブ化

現在はダミーデータを使用してUIを構築しています。

## デプロイ

このプロジェクトはVercelへのデプロイを前提に設計されています。

```bash
# Vercelへのデプロイ
vercel
```

または、GitHubリポジトリをVercelと連携して自動デプロイすることも可能です。

デプロイ後は https://daigakuplus.jp でアクセスできます。

## ライセンス

このプロジェクトはMITライセンスの下で公開されています。

## 連絡先

質問や提案がある場合は、issueを作成するか、以下のメールアドレスにご連絡ください：
info@daigakuplus.jp

# 大学生向けWebサイト - AI記事自動生成システム

このプロジェクトは大学生向けWebサイトで、OpenAI APIを使用した記事の自動生成機能を備えています。

## 主な機能

- AI記事自動生成（OpenAI GPT-3.5/4.0）
- 記事の管理システム
- 自動スケジューリングと投稿
- 月間コスト管理

## セットアップ方法

1. リポジトリをクローンする
   ```
   git clone [リポジトリURL]
   cd daigakusei_web
   ```

2. 依存パッケージをインストール
   ```
   npm install
   ```

3. 環境変数の設定
   `.env.local.example`をコピーして`.env.local`を作成し、必要な環境変数を設定します：
   - `OPENAI_API_KEY` - OpenAI APIキー
   - `MONGODB_URI` - MongoDBの接続文字列
   - `CRON_SECRET` - Cronジョブのシークレットキー
   - `MAX_MONTHLY_COST` - 月間コスト上限（円）
   - `API_SECRET` - 記事API認証シークレット
   - `NEXT_PUBLIC_SITE_URL` - サイトURL（本番環境では"https://daigakuplus.jp"）

4. 開発サーバーを起動
   ```
   npm run dev
   ```

## 記事自動生成のカスタマイズ

`lib/ai/article-generator.ts`ファイルにあるプロンプトテンプレートを編集することで、生成される記事のスタイルや内容をカスタマイズできます。

## コスト管理

システムは`MAX_MONTHLY_COST`で設定された月間予算を超えないように自動的に調整されます。デフォルトのコスト計算はGPT-3.5-turboモデルに基づいています。

## ライセンス

[ライセンス情報]
