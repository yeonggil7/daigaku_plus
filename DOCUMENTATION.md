# ダイガク+ AI記事自動生成システム ドキュメント

本ドキュメントは「ダイガク+」Webサイトの記事自動生成システムについて説明します。このシステムはOpenAI APIを使用して大学生向けの記事を自動生成し、定期的に公開する機能を提供します。

## 1. システム概要

### 目的

- 月額2,000円の予算内でOpenAI APIを活用し、高品質な記事を自動生成する
- 運営リソースを最小限に抑えながら、新鮮なコンテンツを定期的に提供する
- 大学生に役立つ情報を様々なカテゴリでバランス良く提供する

### 主な機能

- OpenAI APIを利用した記事の自動生成
- 生成記事の保存、管理、公開
- カテゴリごとの記事生成頻度の調整
- 月間コスト管理と上限設定
- 記事の自動スケジューリングと公開

## 2. システムアーキテクチャ

### 技術スタック

- **フロントエンド**: Next.js (React), TypeScript
- **バックエンド**: Next.js (App Router), API Routes
- **データベース**: MongoDB (Mongoose)
- **AI API**: OpenAI API (GPT-3.5, GPT-4)
- **定期実行**: Vercel Cron Jobs

### コンポーネント構成

- `lib/ai/article-generator.ts`: 記事生成エンジン
- `lib/db/models/Article.ts`: 記事データモデル
- `lib/db/services/articleService.ts`: 記事操作サービス
- `app/api/scheduler/cron/route.ts`: 定期実行APIエンドポイント
- `app/api/articles/**`: 記事管理APIエンドポイント

## 3. 記事生成の仕組み

### 生成プロセス

1. Vercel Cronが定期的に（毎週月曜と木曜の00:00に）`/api/scheduler/cron`エンドポイントを呼び出し
2. システムが当月のAPI利用コストをチェック
3. 予算内であれば、重み付けに基づいてランダムにカテゴリとトピックを選択
4. OpenAI APIを使用して記事を生成
5. 生成された記事を「予約済み」ステータスでデータベースに保存
6. 24時間後に公開されるようスケジュール

### カテゴリと生成頻度

記事は以下のカテゴリで生成され、それぞれの出現確率が設定されています：

- **勉強（Study）**: 40%
- **キャリア（Career）**: 25%
- **バイト（Part-time）**: 25%
- **コミュニティ（Community）**: 10%

### コスト管理

- GPT-3.5-turboモデル中心の利用で、低コストで質の高い記事を生成
- 記事の長さを「短い」「中程度」「長い」から選択可能
- 月間コスト上限（デフォルト2,000円）を超えると自動的に生成を停止
- 特別な記事のみGPT-4-turboを使用（コストが高い）

## 4. API仕様

### 記事生成API

#### 定期実行エンドポイント

- **URL**: `https://daigakuplus.jp/api/scheduler/cron?secret={CRON_SECRET}`
- **Method**: GET
- **認証**: CRONシークレットによる認証
- **動作**: 新しい記事の生成とスケジュール済み記事の公開

#### 記事管理API

- 記事一覧: `GET https://daigakuplus.jp/api/articles`
- 記事詳細: `GET https://daigakuplus.jp/api/articles/{id}`
- 記事作成: `POST https://daigakuplus.jp/api/articles`
- AI記事生成: `PUT https://daigakuplus.jp/api/articles`
- 記事更新: `PATCH https://daigakuplus.jp/api/articles/{id}`
- 記事公開: `PUT https://daigakuplus.jp/api/articles/{id}`
- 記事削除: `DELETE https://daigakuplus.jp/api/articles/{id}`
- 統計情報: `GET https://daigakuplus.jp/api/articles/stats`

### 認証

すべてのAPIエンドポイントは認証が必要です：

- `CRON_SECRET`: Vercel Cronジョブによる定期実行用
- `API_SECRET`: 記事管理API用の認証キー

## 5. 環境設定

本システムを利用するためには、以下の環境変数を設定する必要があります：

- `OPENAI_API_KEY`: OpenAI APIキー
- `MONGODB_URI`: MongoDBの接続文字列
- `CRON_SECRET`: Cronジョブの認証シークレット
- `MAX_MONTHLY_COST`: 月間コスト上限（円）
- `API_SECRET`: 記事API認証シークレット
- `NEXT_PUBLIC_SITE_URL`: サイトのURL（本番環境では"https://daigakuplus.jp"）

## 6. 使用方法

### 手動でAI記事を生成

```bash
curl -X PUT https://daigakuplus.jp/api/articles \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer {API_SECRET}" \
  -d '{
    "generationParams": {
      "category": "study",
      "topic": "効率的なノートの取り方",
      "targetLength": "medium",
      "useGpt4": false
    },
    "status": "draft"
  }'
```

### 記事を公開状態に変更

```bash
curl -X PUT https://daigakuplus.jp/api/articles/{記事ID} \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer {API_SECRET}" \
  -d '{
    "publishDate": "2024-08-01T12:00:00.000Z"
  }'
```

### 統計情報の確認

```bash
curl -X GET https://daigakuplus.jp/api/articles/stats \
  -H "Authorization: Bearer {API_SECRET}"
```

## 7. トラブルシューティング

### よくある問題と解決方法

- **生成記事が作成されない**: MAX_MONTHLY_COSTの上限に達していないか確認
- **API認証エラー**: 環境変数の設定を確認
- **OpenAI APIエラー**: APIキーの有効性とクレジット残高を確認
- **データベース接続エラー**: MONGODB_URIの設定を確認

### ログ確認方法

Vercelダッシュボードで以下を確認できます：

- Functionsログ: APIリクエストの処理状況
- Cronジョブログ: 定期実行の状況
- MongoDBログ: データベース操作の状況

## 8. カスタマイズ

システムは以下の点でカスタマイズ可能です：

- `article-generator.ts`のプロンプトを編集して、生成記事のスタイルを変更
- カテゴリごとの生成頻度の重み付けを調整
- 記事の長さ設定（トークン数）の調整
- スケジュール頻度の変更（vercel.jsonのcron設定）

---

本ドキュメントは随時更新されます。不明点や提案がありましたら、プロジェクト管理者にお問い合わせください。 