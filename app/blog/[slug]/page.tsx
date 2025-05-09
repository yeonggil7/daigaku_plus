import { connectDB } from '@/lib/db/connectDb';
import Article from '@/lib/db/models/Article';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { formatDate } from '@/lib/utils/date';
import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';

// カテゴリ名を日本語に変換
function getCategoryName(category: string): string {
  const names: Record<string, string> = {
    'study': '勉強',
    'career': '就職',
    'community': 'コミュニティ',
    'part-time': 'バイト'
  };
  return names[category] || category;
}

// カテゴリに応じたスタイルクラスを取得
function getCategoryStyle(category: string) {
  switch (category) {
    case 'study':
      return { bg: 'bg-blue-100', text: 'text-blue-800' };
    case 'career':
      return { bg: 'bg-green-100', text: 'text-green-800' };
    case 'community':
      return { bg: 'bg-purple-100', text: 'text-purple-800' };
    case 'part-time':
      return { bg: 'bg-yellow-100', text: 'text-yellow-800' };
    default:
      return { bg: 'bg-gray-100', text: 'text-gray-800' };
  }
}

// マークダウンもどきの簡易パース（見出しと段落を処理）
function parseContent(content: string): string {
  // 見出しの処理: # 見出し -> <h2>見出し</h2>
  let parsedContent = content.replace(/^##\s+(.+)$/gm, '<h3 class="text-xl font-bold mt-6 mb-3">$1</h3>');
  parsedContent = parsedContent.replace(/^#\s+(.+)$/gm, '<h2 class="text-2xl font-bold mt-8 mb-4">$1</h2>');
  
  // 箇条書きの処理: - 項目 -> <li>項目</li>
  parsedContent = parsedContent.replace(/^-\s+(.+)$/gm, '<li class="ml-5 list-disc mb-1">$1</li>');
  
  // 段落の処理: 連続した行 -> <p>段落</p>
  const paragraphs = parsedContent.split(/\n\s*\n/);
  parsedContent = paragraphs.map(p => {
    // 既にHTMLタグがある場合はそのまま
    if (p.trim().startsWith('<')) return p;
    // 箇条書きの場合はulで囲む
    if (p.includes('<li')) return `<ul class="my-4">${p}</ul>`;
    // それ以外は段落として扱う
    return `<p class="mb-4">${p}</p>`;
  }).join('\n');
  
  return parsedContent;
}

// 記事詳細ページ（サーバーコンポーネント）
export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  // awaitしてからスラッグを取得する
  const resolvedParams = await params;
  const { slug } = resolvedParams;
  
  // データベースに接続
  await connectDB();
  
  // スラッグから記事を取得
  const article = await Article.findOne({ slug, status: 'published' }).lean();
  
  // 記事が見つからない場合は404
  if (!article) {
    notFound();
  }
  
  // カテゴリスタイルを取得
  const categoryStyle = getCategoryStyle(article.category);
  
  // 記事コンテンツを解析
  const parsedContent = parseContent(article.content);
  
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto">
        <Link href="/blog" className="text-blue-600 hover:underline mb-6 inline-block">
          ← 記事一覧に戻る
        </Link>
        
        <article className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="h-64 bg-gray-200"></div>
          
          <div className="p-8">
            <div className="mb-6">
              <span className={`inline-block px-3 py-1 ${categoryStyle.bg} ${categoryStyle.text} text-xs font-medium rounded-full mb-3`}>
                {getCategoryName(article.category)}
              </span>
              <h1 className="text-3xl font-bold mb-4">{article.title}</h1>
              <div className="flex items-center text-gray-500 text-sm">
                <span>{formatDate(article.publishDate || article.createdAt, true)}</span>
                <span className="mx-2">•</span>
                <span>{article.author || 'AI編集部'}</span>
              </div>
            </div>
            
            <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: parsedContent }} />
            
            <div className="mt-8 p-4 bg-gray-50 rounded-lg">
              <h3 className="font-bold text-lg mb-2">この記事の要約</h3>
              <p className="text-gray-700">{article.summary}</p>
            </div>
            
            {article.tags && article.tags.length > 0 && (
              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="flex flex-wrap gap-2">
                  {article.tags.map((tag, index) => (
                    <span key={index} className="px-3 py-1 bg-gray-100 text-gray-800 text-xs rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </article>
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  // 静的生成時には空の配列を返して、動的にページを生成しないようにします
  return [];
}

// ページのメタデータを動的に生成
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  try {
    await connectDB();
    const article = await Article.findOne({ slug: params.slug, status: 'published' }).lean();
    
    if (!article) {
      return {
        title: 'ページが見つかりません',
        description: '指定された記事は存在しないか、削除された可能性があります。'
      };
    }

    return {
      title: `${article.title} | 大学生活ガイド`,
      description: article.summary || `${article.title}に関する詳細記事です。`,
      openGraph: {
        title: article.title,
        description: article.summary || `${article.title}に関する詳細記事です。`,
        type: 'article',
        publishedTime: article.publishDate?.toISOString() || article.createdAt.toISOString(),
        authors: [article.author || 'AI編集部'],
      },
    };
  } catch (error) {
    console.error('Metadata generation error:', error);
    return {
      title: '大学生活ガイド',
      description: '大学生向けの情報サイト'
    };
  }
}
