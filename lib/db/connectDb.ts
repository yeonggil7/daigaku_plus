import mongoose from 'mongoose';

// 環境変数からMongoDBの接続文字列を取得
const MONGODB_URI = process.env.MONGODB_URI;

// MongoDBへの接続状態を管理
interface ConnectionState {
  isConnected: mongoose.ConnectionStates | undefined;
}

// グローバル状態として接続状態を管理
const state: ConnectionState = {
  isConnected: undefined,
};

/**
 * データベースに接続する関数
 */
export async function connectDB() {
  // 既に接続済みの場合はそのまま返す
  if (state.isConnected === 1) {
    return;
  }

  // Vercel環境で開発モードの場合はモックデータを使用（オプション）
  if (process.env.VERCEL_ENV === 'development' && !MONGODB_URI) {
    console.log('開発環境でモックデータを使用します');
    state.isConnected = 1;
    return;
  }

  // 接続文字列が設定されていない場合は警告を出すだけにする
  if (!MONGODB_URI) {
    console.warn('MongoDBの接続文字列が設定されていません。一部機能が制限されます。');
    return;
  }

  try {
    // 新しい接続を作成
    const conn = await mongoose.connect(MONGODB_URI);
    
    // 接続状態を更新
    state.isConnected = conn.connection.readyState;
    
    console.log(`MongoDB接続成功: ${conn.connection.host}`);
  } catch (error) {
    console.error('MongoDBへの接続に失敗しました', error);
    // エラーを投げると全体が停止するので、警告だけにする
    state.isConnected = 0;
  }
}

/**
 * データベース接続を切断する関数（主にテスト用）
 */
export async function disconnectDB() {
  if (state.isConnected !== undefined && state.isConnected === 1) {
    await mongoose.disconnect();
    state.isConnected = undefined;
    console.log('MongoDB接続を切断しました');
  }
}

/**
 * 接続状態を確認する関数
 */
export function isConnected() {
  return state.isConnected === 1;
} 