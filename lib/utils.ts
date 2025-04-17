/**
 * スラッグ（URL用の文字列）を生成する関数
 * 日本語を含む文字列からもURLに適した文字列を生成します
 */
export function slugify(text: string): string {
  return text
    .toString()
    .normalize('NFKD')
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]+/g, '')
    .replace(/_/g, '-')
    .replace(/--+/g, '-')
    .replace(/-$/g, '');
}

/**
 * 日付をフォーマットする関数
 * @param date 日付オブジェクト
 * @param locale ロケール（デフォルトは日本語）
 * @returns フォーマットされた日付文字列
 */
export function formatDate(date: Date, locale: string = 'ja-JP'): string {
  return date.toLocaleDateString(locale, {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

/**
 * 文字列を指定した長さで切り詰める関数
 * @param text 元の文字列
 * @param maxLength 最大長
 * @returns 切り詰められた文字列
 */
export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength) + '...';
}

/**
 * 指定した範囲のランダムな整数を生成する
 * @param min 最小値（含む）
 * @param max 最大値（含む）
 * @returns ランダムな整数
 */
export function getRandomInt(min: number, max: number): number {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
} 