import React from 'react';
import Link from 'next/link';

type ArticleFiltersProps = {
  currentCategory?: string;
  currentTag?: string;
  currentSearch?: string;
};

export default function ArticleFilters({
  currentCategory,
  currentTag,
  currentSearch
}: ArticleFiltersProps) {
  const categories = [
    { id: 'study', name: '勉強' },
    { id: 'career', name: 'キャリア' },
    { id: 'community', name: 'コミュニティ' },
    { id: 'part-time', name: 'アルバイト' }
  ];

  return (
    <div className="space-y-6">
      {/* カテゴリーフィルター */}
      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-3">カテゴリー</h3>
        <div className="flex flex-wrap gap-2">
          <Link
            href="/articles"
            className={`px-3 py-1 rounded-full text-sm ${
              !currentCategory
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
            }`}
          >
            すべて
          </Link>
          
          {categories.map((category) => (
            <Link
              key={category.id}
              href={`/articles?category=${category.id}`}
              className={`px-3 py-1 rounded-full text-sm ${
                currentCategory === category.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
              }`}
            >
              {category.name}
            </Link>
          ))}
        </div>
      </div>
      
      {/* 現在のフィルター表示 */}
      {(currentCategory || currentTag || currentSearch) && (
        <div className="flex items-center">
          <span className="text-gray-500 mr-2">適用中のフィルター:</span>
          <div className="flex flex-wrap gap-2">
            {currentCategory && (
              <div className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded flex items-center">
                <span>カテゴリー: {categories.find(c => c.id === currentCategory)?.name}</span>
                <Link 
                  href={`/articles${currentTag ? `?tag=${currentTag}` : ''}${currentSearch ? `${currentTag ? '&' : '?'}search=${currentSearch}` : ''}`}
                  className="ml-1 text-blue-600 hover:text-blue-800"
                >
                  ✕
                </Link>
              </div>
            )}
            
            {currentTag && (
              <div className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded flex items-center">
                <span>タグ: {currentTag}</span>
                <Link 
                  href={`/articles${currentCategory ? `?category=${currentCategory}` : ''}${currentSearch ? `${currentCategory ? '&' : '?'}search=${currentSearch}` : ''}`}
                  className="ml-1 text-blue-600 hover:text-blue-800"
                >
                  ✕
                </Link>
              </div>
            )}
            
            {currentSearch && (
              <div className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded flex items-center">
                <span>検索: {currentSearch}</span>
                <Link 
                  href={`/articles${currentCategory ? `?category=${currentCategory}` : ''}${currentTag ? `${currentCategory ? '&' : '?'}tag=${currentTag}` : ''}`}
                  className="ml-1 text-blue-600 hover:text-blue-800"
                >
                  ✕
                </Link>
              </div>
            )}
            
            <Link 
              href="/articles"
              className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded hover:bg-gray-200"
            >
              すべてクリア
            </Link>
          </div>
        </div>
      )}
      
      {/* 検索フォーム */}
      <div>
        <form
          action="/articles"
          method="get"
          className="flex items-center"
        >
          {currentCategory && (
            <input type="hidden" name="category" value={currentCategory} />
          )}
          {currentTag && (
            <input type="hidden" name="tag" value={currentTag} />
          )}
          <input
            type="text"
            name="search"
            placeholder="記事を検索..."
            defaultValue={currentSearch}
            className="flex-1 border border-gray-300 rounded-l-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded-r-md hover:bg-blue-700"
          >
            検索
          </button>
        </form>
      </div>
    </div>
  );
} 