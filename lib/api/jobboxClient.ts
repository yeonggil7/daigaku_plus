/**
 * 求人ボックスAPIクライアント
 * 
 * 求人ボックスAPIと連携して求人情報を取得するためのクライアント
 * 契約後にAPIキーを取得し、適切な設定を行う必要があります
 */

// APIのエンドポイントURL（契約後に正式なURLを設定）
const API_ENDPOINT = 'https://api.example.com/jobs';

// APIキー（契約後に正式なキーを設定）
const API_KEY = 'YOUR_API_KEY';

// 検索パラメータの型定義
export type JobSearchParams = {
  keyword?: string;       // 検索キーワード
  location?: string;      // 勤務地域
  jobType?: string;       // 職種
  workTime?: string;      // 勤務時間帯
  minWage?: number;       // 最低時給
  page?: number;          // ページ番号
  limit?: number;         // 1ページあたりの件数
};

// 求人情報の型定義
export type JobListing = {
  id: string;             // 求人ID
  title: string;          // 求人タイトル
  company: string;        // 企業名
  location: string;       // 勤務地
  description: string;    // 求人詳細
  wage: string;           // 時給・給与
  workHours: string;      // 勤務時間
  benefits: string[];     // 待遇・福利厚生
  requirements: string[]; // 応募条件
  url: string;            // 求人詳細ページURL
};

// 検索結果の型定義
export type JobSearchResult = {
  totalResults: number;   // 検索結果の総数
  totalPages: number;     // 総ページ数
  currentPage: number;    // 現在のページ番号
  jobs: JobListing[];     // 求人情報一覧
};

/**
 * 求人検索を実行する関数
 * @param params 検索パラメータ
 * @returns 検索結果
 */
export async function searchJobs(params: JobSearchParams): Promise<JobSearchResult> {
  try {
    // クエリパラメータの構築
    const queryParams = new URLSearchParams();
    
    if (params.keyword) queryParams.append('keyword', params.keyword);
    if (params.location) queryParams.append('location', params.location);
    if (params.jobType) queryParams.append('job_type', params.jobType);
    if (params.workTime) queryParams.append('work_time', params.workTime);
    if (params.minWage) queryParams.append('min_wage', params.minWage.toString());
    if (params.page) queryParams.append('page', params.page.toString());
    if (params.limit) queryParams.append('limit', params.limit.toString());
    
    // APIリクエスト（契約後に実装）
    // const response = await fetch(`${API_ENDPOINT}?${queryParams.toString()}`, {
    //   headers: {
    //     'Authorization': `Bearer ${API_KEY}`,
    //     'Content-Type': 'application/json'
    //   }
    // });
    
    // if (!response.ok) {
    //   throw new Error(`API request failed with status ${response.status}`);
    // }
    
    // const data = await response.json();
    // return data;
    
    // 開発用ダミーデータ（契約前のテスト用）
    return {
      totalResults: 156,
      totalPages: 8,
      currentPage: params.page || 1,
      jobs: [
        {
          id: 'job1',
          title: 'カフェスタッフ',
          company: 'カフェ&バー スマイル',
          location: '東京都渋谷区',
          description: '駅チカのおしゃれなカフェでのホール・キッチンスタッフを募集中！未経験者歓迎。シフト自由で学業との両立も可能です。',
          wage: '時給1,200円〜',
          workHours: '10:00〜22:00（シフト制）',
          benefits: ['交通費支給', '昇給あり', 'まかない付き'],
          requirements: ['高校生不可', '未経験者歓迎', 'シフト週2日〜OK'],
          url: 'https://example.com/job1'
        },
        {
          id: 'job2',
          title: 'コンビニスタッフ',
          company: 'ファミリーマート 大学前店',
          location: '東京都世田谷区',
          description: '大学のすぐ近くのコンビニでスタッフを募集中。授業の合間や放課後に働けます。研修制度あり。',
          wage: '時給1,050円〜',
          workHours: '24時間（シフト制）',
          benefits: ['交通費支給', '社員登用制度あり'],
          requirements: ['未経験者歓迎', '深夜勤務可能な方歓迎'],
          url: 'https://example.com/job2'
        },
        {
          id: 'job3',
          title: 'プログラミングアシスタント',
          company: 'テックスタート株式会社',
          location: '東京都千代田区',
          description: 'プログラミングスクールでのアシスタント業務。HTML/CSS/JavaScriptの基礎知識がある方歓迎。リモートワーク可能。',
          wage: '時給1,500円〜',
          workHours: '13:00〜21:00（シフト制）',
          benefits: ['交通費支給', 'スキルアップ支援', 'リモートワーク可'],
          requirements: ['プログラミングの基礎知識', '週3日以上勤務可能な方'],
          url: 'https://example.com/job3'
        }
      ]
    };
    
  } catch (error) {
    console.error('Error searching jobs:', error);
    throw error;
  }
}

/**
 * 求人の詳細情報を取得する関数
 * @param jobId 求人ID
 * @returns 求人詳細情報
 */
export async function getJobDetails(jobId: string): Promise<JobListing | null> {
  try {
    // APIリクエスト（契約後に実装）
    // const response = await fetch(`${API_ENDPOINT}/${jobId}`, {
    //   headers: {
    //     'Authorization': `Bearer ${API_KEY}`,
    //     'Content-Type': 'application/json'
    //   }
    // });
    
    // if (!response.ok) {
    //   throw new Error(`API request failed with status ${response.status}`);
    // }
    
    // const data = await response.json();
    // return data;
    
    // 開発用ダミーデータ（契約前のテスト用）
    const dummyJobs = [
      {
        id: 'job1',
        title: 'カフェスタッフ',
        company: 'カフェ&バー スマイル',
        location: '東京都渋谷区',
        description: '駅チカのおしゃれなカフェでのホール・キッチンスタッフを募集中！未経験者歓迎。シフト自由で学業との両立も可能です。',
        wage: '時給1,200円〜',
        workHours: '10:00〜22:00（シフト制）',
        benefits: ['交通費支給', '昇給あり', 'まかない付き'],
        requirements: ['高校生不可', '未経験者歓迎', 'シフト週2日〜OK'],
        url: 'https://example.com/job1'
      },
      {
        id: 'job2',
        title: 'コンビニスタッフ',
        company: 'ファミリーマート 大学前店',
        location: '東京都世田谷区',
        description: '大学のすぐ近くのコンビニでスタッフを募集中。授業の合間や放課後に働けます。研修制度あり。',
        wage: '時給1,050円〜',
        workHours: '24時間（シフト制）',
        benefits: ['交通費支給', '社員登用制度あり'],
        requirements: ['未経験者歓迎', '深夜勤務可能な方歓迎'],
        url: 'https://example.com/job2'
      },
      {
        id: 'job3',
        title: 'プログラミングアシスタント',
        company: 'テックスタート株式会社',
        location: '東京都千代田区',
        description: 'プログラミングスクールでのアシスタント業務。HTML/CSS/JavaScriptの基礎知識がある方歓迎。リモートワーク可能。',
        wage: '時給1,500円〜',
        workHours: '13:00〜21:00（シフト制）',
        benefits: ['交通費支給', 'スキルアップ支援', 'リモートワーク可'],
        requirements: ['プログラミングの基礎知識', '週3日以上勤務可能な方'],
        url: 'https://example.com/job3'
      }
    ];
    
    const job = dummyJobs.find(job => job.id === jobId);
    return job || null;
    
  } catch (error) {
    console.error('Error fetching job details:', error);
    throw error;
  }
} 