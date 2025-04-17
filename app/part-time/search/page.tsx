import Link from 'next/link';
import { searchJobs } from '@/lib/api/jobboxClient';

// Server Componentでの検索処理
export default async function SearchResultsPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  // 検索パラメータの取得
  const keyword = typeof searchParams.keyword === 'string' ? searchParams.keyword : '';
  const location = typeof searchParams.location === 'string' ? searchParams.location : '';
  const jobType = typeof searchParams.jobType === 'string' ? searchParams.jobType : '';
  const workTime = typeof searchParams.workTime === 'string' ? searchParams.workTime : '';
  const minWage = typeof searchParams.minWage === 'string' ? parseInt(searchParams.minWage, 10) || 0 : 0;
  const page = typeof searchParams.page === 'string' ? parseInt(searchParams.page, 10) || 1 : 1;
  
  // 検索実行（APIクライアントを使用）
  const searchResults = await searchJobs({
    keyword,
    location,
    jobType,
    workTime,
    minWage,
    page,
    limit: 10
  });
  
  // 職種名のマッピング
  const jobTypeNames: Record<string, string> = {
    'restaurant': '飲食',
    'retail': '販売',
    'office': '事務',
    'it': 'IT・Web',
    'tutor': '家庭教師・塾講師',
    'service': 'サービス業'
  };
  
  // 現在の検索条件を保持したURLを生成する関数
  const getPageUrl = (pageNum: number) => {
    const params = new URLSearchParams();
    if (keyword) params.append('keyword', keyword);
    if (location) params.append('location', location);
    if (jobType) params.append('jobType', jobType);
    if (workTime) params.append('workTime', workTime);
    if (minWage) params.append('minWage', minWage.toString());
    params.append('page', pageNum.toString());
    
    return `/part-time/search?${params.toString()}`;
  };
  
  return (
    <div className="container mx-auto px-4 py-8">
      {/* 検索結果ヘッダー */}
      <section className="mb-8">
        <h1 className="text-2xl md:text-3xl font-bold mb-4">
          {keyword ? `「${keyword}」の` : ''}バイト検索結果
        </h1>
        
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 flex flex-wrap items-center">
          <p className="mr-6 font-medium">
            <span className="text-yellow-600 font-bold">{searchResults.totalResults}</span> 件の求人が見つかりました
          </p>
          
          <div className="flex flex-wrap gap-2 mt-2 md:mt-0">
            {keyword && (
              <span className="bg-white border border-gray-300 rounded-full px-3 py-1 text-sm flex items-center">
                キーワード: {keyword}
                <Link href={getPageUrl(1).replace(`keyword=${keyword}`, '')}>
                  <span className="ml-1 text-gray-500 hover:text-gray-700">×</span>
                </Link>
              </span>
            )}
            
            {location && (
              <span className="bg-white border border-gray-300 rounded-full px-3 py-1 text-sm flex items-center">
                エリア: {location}
                <Link href={getPageUrl(1).replace(`location=${location}`, '')}>
                  <span className="ml-1 text-gray-500 hover:text-gray-700">×</span>
                </Link>
              </span>
            )}
            
            {jobType && (
              <span className="bg-white border border-gray-300 rounded-full px-3 py-1 text-sm flex items-center">
                職種: {jobTypeNames[jobType] || jobType}
                <Link href={getPageUrl(1).replace(`jobType=${jobType}`, '')}>
                  <span className="ml-1 text-gray-500 hover:text-gray-700">×</span>
                </Link>
              </span>
            )}
          </div>
        </div>
      </section>
      
      {/* フィルターと検索結果 */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* フィルターパネル */}
        <div className="md:col-span-1">
          <div className="bg-white rounded-lg shadow-md p-4 sticky top-4">
            <h2 className="font-bold text-lg mb-4 pb-2 border-b">検索条件</h2>
            
            <form className="space-y-4" action="/part-time/search" method="get">
              {/* 現在の検索条件を維持 */}
              {keyword && <input type="hidden" name="keyword" value={keyword} />}
              {location && <input type="hidden" name="location" value={location} />}
              
              <div>
                <label htmlFor="jobType" className="block text-sm font-medium text-gray-700 mb-1">職種</label>
                <select
                  id="jobType"
                  name="jobType"
                  className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  defaultValue={jobType}
                >
                  <option value="">全ての職種</option>
                  <option value="restaurant">飲食</option>
                  <option value="retail">販売</option>
                  <option value="office">事務</option>
                  <option value="it">IT・Web</option>
                  <option value="tutor">家庭教師・塾講師</option>
                  <option value="service">サービス業</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="workTime" className="block text-sm font-medium text-gray-700 mb-1">勤務時間帯</label>
                <select
                  id="workTime"
                  name="workTime"
                  className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  defaultValue={workTime}
                >
                  <option value="">全ての時間帯</option>
                  <option value="morning">朝（5:00〜9:00）</option>
                  <option value="daytime">日中（9:00〜17:00）</option>
                  <option value="evening">夕方（17:00〜22:00）</option>
                  <option value="night">夜（22:00〜5:00）</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="minWage" className="block text-sm font-medium text-gray-700 mb-1">最低時給</label>
                <select
                  id="minWage"
                  name="minWage"
                  className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  defaultValue={minWage.toString()}
                >
                  <option value="">指定なし</option>
                  <option value="900">900円〜</option>
                  <option value="1000">1,000円〜</option>
                  <option value="1100">1,100円〜</option>
                  <option value="1200">1,200円〜</option>
                  <option value="1300">1,300円〜</option>
                  <option value="1500">1,500円〜</option>
                </select>
              </div>
              
              <button
                type="submit"
                className="w-full bg-yellow-600 hover:bg-yellow-700 text-white px-4 py-2 rounded-lg font-medium transition-colors"
              >
                条件を適用
              </button>
            </form>
          </div>
        </div>
        
        {/* 検索結果リスト */}
        <div className="md:col-span-3">
          {searchResults.jobs.length > 0 ? (
            <div className="space-y-6">
              {searchResults.jobs.map(job => (
                <div key={job.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="p-6">
                    <div className="flex flex-wrap justify-between items-start mb-3">
                      <h3 className="text-xl font-bold text-gray-800 mb-1">{job.title}</h3>
                      <span className="bg-yellow-100 text-yellow-800 text-xs font-medium px-2.5 py-0.5 rounded">
                        {job.wage}
                      </span>
                    </div>
                    
                    <p className="text-gray-600 font-medium mb-2">{job.company}</p>
                    <p className="text-gray-500 text-sm mb-4">
                      <svg className="inline-block w-4 h-4 mr-1 -mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      {job.location}
                    </p>
                    
                    <p className="text-gray-600 mb-4">{job.description}</p>
                    
                    <div className="mb-4">
                      <p className="text-sm font-medium text-gray-700 mb-1">勤務時間</p>
                      <p className="text-gray-600">{job.workHours}</p>
                    </div>
                    
                    <div className="mb-4">
                      <p className="text-sm font-medium text-gray-700 mb-1">待遇・福利厚生</p>
                      <div className="flex flex-wrap gap-2">
                        {job.benefits.map((benefit, index) => (
                          <span key={index} className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded">
                            {benefit}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <p className="text-sm font-medium text-gray-700 mb-1">応募条件</p>
                      <div className="flex flex-wrap gap-2">
                        {job.requirements.map((requirement, index) => (
                          <span key={index} className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded">
                            {requirement}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex justify-end">
                      <a
                        href={job.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-yellow-600 hover:bg-yellow-700 text-white px-4 py-2 rounded-full font-medium transition-colors inline-flex items-center"
                      >
                        詳細を見る
                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
              
              {/* ページネーション */}
              {searchResults.totalPages > 1 && (
                <div className="flex justify-center mt-8">
                  <nav className="inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                    {/* 前のページボタン */}
                    <Link
                      href={page > 1 ? getPageUrl(page - 1) : '#'}
                      className={`relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium ${
                        page > 1 ? 'text-gray-500 hover:bg-gray-50' : 'text-gray-300 cursor-not-allowed'
                      }`}
                    >
                      <span className="sr-only">前のページ</span>
                      <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </Link>
                    
                    {/* ページ番号 */}
                    {Array.from({ length: Math.min(5, searchResults.totalPages) }, (_, i) => {
                      const pageNum = i + 1;
                      return (
                        <Link
                          key={pageNum}
                          href={getPageUrl(pageNum)}
                          className={`relative inline-flex items-center px-4 py-2 border text-sm font-medium ${
                            pageNum === page
                              ? 'z-10 bg-yellow-50 border-yellow-500 text-yellow-600'
                              : 'bg-white border-gray-300 text-gray-500 hover:bg-gray-50'
                          }`}
                        >
                          {pageNum}
                        </Link>
                      );
                    })}
                    
                    {/* 省略記号 */}
                    {searchResults.totalPages > 5 && (
                      <span className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700">
                        ...
                      </span>
                    )}
                    
                    {/* 最後のページ */}
                    {searchResults.totalPages > 5 && (
                      <Link
                        href={getPageUrl(searchResults.totalPages)}
                        className={`relative inline-flex items-center px-4 py-2 border text-sm font-medium ${
                          searchResults.totalPages === page
                            ? 'z-10 bg-yellow-50 border-yellow-500 text-yellow-600'
                            : 'bg-white border-gray-300 text-gray-500 hover:bg-gray-50'
                        }`}
                      >
                        {searchResults.totalPages}
                      </Link>
                    )}
                    
                    {/* 次のページボタン */}
                    <Link
                      href={page < searchResults.totalPages ? getPageUrl(page + 1) : '#'}
                      className={`relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium ${
                        page < searchResults.totalPages ? 'text-gray-500 hover:bg-gray-50' : 'text-gray-300 cursor-not-allowed'
                      }`}
                    >
                      <span className="sr-only">次のページ</span>
                      <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                      </svg>
                    </Link>
                  </nav>
                </div>
              )}
            </div>
          ) : (
            <div className="bg-white rounded-lg shadow-md p-8 text-center">
              <h3 className="text-xl font-bold text-gray-800 mb-2">検索条件に一致する求人が見つかりませんでした</h3>
              <p className="text-gray-600 mb-6">検索条件を変更してもう一度お試しください。</p>
              <Link
                href="/part-time"
                className="bg-yellow-600 hover:bg-yellow-700 text-white px-6 py-3 rounded-lg font-medium transition-colors inline-flex items-center"
              >
                バイト情報トップに戻る
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 