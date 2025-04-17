/**
 * 日付をフォーマットするユーティリティ関数
 */

/**
 * 日付を指定された形式でフォーマットする関数
 * @param date フォーマットする日付
 * @param includeTime 時間を含めるかどうか
 * @returns フォーマットされた日付文字列
 */
export function formatDate(date: Date | string | number, includeTime = false): string {
  const d = new Date(date);
  
  // 無効な日付の場合
  if (isNaN(d.getTime())) {
    return '日付なし';
  }
  
  // 日本語の日付形式 (YYYY年MM月DD日)
  const year = d.getFullYear();
  const month = d.getMonth() + 1;
  const day = d.getDate();
  
  let formatted = `${year}年${month}月${day}日`;
  
  // 時間を含める場合
  if (includeTime) {
    const hours = d.getHours().toString().padStart(2, '0');
    const minutes = d.getMinutes().toString().padStart(2, '0');
    formatted += ` ${hours}:${minutes}`;
  }
  
  return formatted;
}
