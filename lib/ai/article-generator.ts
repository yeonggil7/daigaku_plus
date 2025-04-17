/**
 * 記事自動生成モジュール
 * 
 * OpenAI APIを使用して大学生向けの記事を自動生成するための機能を提供します。
 * 月額予算2000円を考慮し、効率的な利用ができるよう設計しています。
 */

import axios from 'axios';

// 環境変数からAPIキーを取得
const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
const API_URL = 'https://api.openai.com/v1/chat/completions';

// 記事カテゴリの定義
export type ArticleCategory = 'study' | 'career' | 'community' | 'part-time';

// 記事生成のためのパラメータ
export type ArticleGenerationParams = {
  category: ArticleCategory;
  topic?: string;
  keywords?: string[];
  targetLength?: 'short' | 'medium' | 'long'; // 記事の長さ（コスト調整用）
  useGpt4?: boolean; // 特別な記事のみGPT-4を使用
};

// 記事生成の結果
export type GeneratedArticle = {
  title: string;
  content: string;
  summary: string;
  estimatedTokens: number;
  estimatedCost: number; // 日本円での概算コスト
};

/**
 * OpenAI APIを使って記事を生成する関数
 */
export async function generateArticle(params: ArticleGenerationParams): Promise<GeneratedArticle> {
  if (!OPENAI_API_KEY) {
    throw new Error('OpenAI APIキーが設定されていません。環境変数OPENAI_API_KEYを設定してください。');
  }

  // カテゴリ別のプロンプトテンプレート
  const categoryPrompts = {
    study: '大学生向けの効果的な勉強法や学習のコツについての記事',
    career: '大学生の就職活動やキャリア形成に役立つ情報記事',
    community: '大学のサークルやコミュニティ活動に関する情報記事',
    'part-time': '大学生におすすめのアルバイト情報や両立のコツに関する記事'
  };

  // 記事の長さ設定（トークン数の調整）
  const lengthSettings = {
    short: 600, // 約800-1000文字程度
    medium: 1000, // 約1500-2000文字程度
    long: 1500 // 約2500-3000文字程度
  };

  const maxTokens = params.targetLength ? lengthSettings[params.targetLength] : lengthSettings.medium;
  
  // モデル選択（コスト調整）
  const model = params.useGpt4 ? 'gpt-4o' : 'gpt-3.5-turbo';
  
  // 記事のトピックとキーワードを組み合わせたプロンプト
  const basePrompt = categoryPrompts[params.category];
  const topicPrompt = params.topic ? `特に「${params.topic}」について` : '';
  const keywordsPrompt = params.keywords?.length 
    ? `以下のキーワードを含めてください: ${params.keywords.join(', ')}` 
    : '';

  // リクエストデータの構築
  const requestData = {
    model,
    messages: [
      {
        role: 'system',
        content: `あなたは大学生向けWebサイト「ダイガク+」(daigakuplus.jp)のコンテンツ作成AIです。
日本の大学生（18-22歳）をターゲットにした、役立つ情報記事を作成してください。
文体は親しみやすく、わかりやすい表現を使い、敬語と友達言葉を適度に混ぜて、読みやすさを重視してください。
見出しを適切に使い、箇条書きや具体例を含めると良いでしょう。
記事には必ず魅力的なタイトルをつけてください。`
      },
      {
        role: 'user',
        content: `${basePrompt}${topicPrompt}を作成してください。
${keywordsPrompt}
記事には以下の要素を含めてください：
1. 魅力的な導入部
2. 読者が得られるメリット
3. 具体的なアドバイスや情報
4. まとめや次のステップ

また、最後に100文字程度の記事概要も提供してください。`
      }
    ],
    max_tokens: maxTokens,
    temperature: 0.7
  };

  try {
    // OpenAI APIへリクエスト
    const response = await axios.post(API_URL, requestData, {
      headers: {
        'Authorization': `Bearer ${OPENAI_API_KEY}`,
        'Content-Type': 'application/json'
      }
    });

    // レスポンスから記事内容を取得
    const content = response.data.choices[0].message.content;
    
    // タイトルと本文と概要を分離（特定のフォーマットを想定）
    const titleMatch = content.match(/^#\s+(.+)$/m) || ['', '自動生成記事'];
    const title = titleMatch[1];
    
    // 概要部分を抽出（最後の「概要:」以降）
    const summaryMatch = content.match(/概要[:：](.+)$/s);
    const summary = summaryMatch ? summaryMatch[1].trim() : '';
    
    // 概要を除いた本文
    const mainContent = summaryMatch 
      ? content.replace(/概要[:：](.+)$/s, '').trim() 
      : content;
    
    // 使用されたトークン数とコスト計算
    const estimatedTokens = response.data.usage.total_tokens;
    // GPT-3.5は0.002ドル/1Kトークン、GPT-4は0.03ドル/1Kトークン、1ドル=150円と仮定
    const costPerThousandTokens = params.useGpt4 ? 4.5 : 0.3; // 日本円
    const estimatedCost = (estimatedTokens / 1000) * costPerThousandTokens;
    
    return {
      title,
      content: mainContent,
      summary,
      estimatedTokens,
      estimatedCost
    };
  } catch (error) {
    console.error('記事生成中にエラーが発生しました:', error);
    throw new Error('記事の生成に失敗しました');
  }
} 