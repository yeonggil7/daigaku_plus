import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import Image from 'next/image';
import { Components } from 'react-markdown';

interface ArticleContentProps {
  content: string;
}

// 見出しと画像のマッピング
const headingImages: Record<string, string> = {
  'ポモドーロテクニック': '/images/study-methods/pomodoro.jpg',
  'コーネルノート術': '/images/study-methods/cornell-notes.jpg',
  'スペーシング効果': '/images/study-methods/spaced-repetition.jpg',
  'アクティブラーニング': '/images/study-methods/active-learning.jpg',
  'デジタルツール': '/images/study-methods/digital-tools.jpg',
};

const ArticleContent: React.FC<ArticleContentProps> = ({ content }) => {
  return (
    <div className="prose prose-lg max-w-none">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          h1: ({ children }) => (
            <h1 
              className="text-3xl md:text-4xl font-bold mt-8 mb-6 text-gray-900"
            >
              {children}
            </h1>
          ),
          h2: ({ children }) => {
            const title = String(children).replace(/^\d+\.\s/, '').trim();
            const imagePath = headingImages[title];
            
            return (
              <div className="mt-12 mb-6">
                {imagePath && (
                  <div className="mb-4 relative h-[250px] rounded-lg overflow-hidden">
                    <Image 
                      src={imagePath}
                      alt={title}
                      fill
                      style={{ objectFit: 'cover' }}
                      className="rounded-lg"
                    />
                  </div>
                )}
                <h2
                  className="text-2xl md:text-3xl font-bold mb-4 text-gray-800 border-b pb-2"
                >
                  {children}
                </h2>
              </div>
            );
          },
          h3: ({ children }) => (
            <h3
              className="text-xl md:text-2xl font-semibold mt-6 mb-3 text-gray-800"
            >
              {children}
            </h3>
          ),
          h4: ({ children }) => (
            <h4
              className="text-lg md:text-xl font-semibold mt-5 mb-3 text-gray-800"
            >
              {children}
            </h4>
          ),
          p: ({ children }) => (
            <p
              className="my-4 text-gray-700 text-lg leading-relaxed"
            >
              {children}
            </p>
          ),
          ul: ({ children }) => (
            <ul
              className="my-6 list-disc pl-6 space-y-2"
            >
              {children}
            </ul>
          ),
          ol: ({ children }) => (
            <ol
              className="my-6 list-decimal pl-6 space-y-2"
            >
              {children}
            </ol>
          ),
          li: ({ children }) => (
            <li
              className="text-gray-700 text-lg"
            >
              {children}
            </li>
          ),
          code: ({ className, children, ...props }) => {
            const match = /language-(\w+)/.exec(className || '');
            return match ? (
              <SyntaxHighlighter
                style={tomorrow as any}
                language={match[1]}
                PreTag="div"
                className="my-6 rounded-lg overflow-hidden"
              >
                {String(children).replace(/\n$/, '')}
              </SyntaxHighlighter>
            ) : (
              <code
                className={`${className} bg-gray-100 rounded px-1.5 py-0.5 text-sm font-mono`}
                {...props}
              >
                {children}
              </code>
            );
          },
          a: ({ href, children }) => (
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 underline"
            >
              {children}
            </a>
          ),
          img: ({ src, alt }) => (
            <div className="my-8">
              <img
                src={src}
                alt={alt}
                className="rounded-lg shadow-md max-w-full h-auto mx-auto"
              />
              {alt && alt !== src && (
                <p className="text-center text-sm text-gray-600 mt-2 italic">
                  {alt}
                </p>
              )}
            </div>
          ),
          blockquote: ({ children }) => (
            <blockquote
              className="border-l-4 border-gray-300 pl-4 my-6 italic text-gray-700"
            >
              {children}
            </blockquote>
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
};

export default ArticleContent; 