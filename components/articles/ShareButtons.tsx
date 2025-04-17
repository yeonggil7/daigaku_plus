import React from 'react';

type ShareButtonsProps = {
  title: string;
  url?: string;
};

export default function ShareButtons({ title, url }: ShareButtonsProps) {
  // 現在のURLが提供されない場合はブラウザのURLを使用
  const shareUrl = url || (typeof window !== 'undefined' ? window.location.href : '');
  const encodedTitle = encodeURIComponent(title);
  const encodedUrl = encodeURIComponent(shareUrl);
  
  const shareLinks = [
    {
      name: 'Twitter',
      url: `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`,
      icon: (
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
        </svg>
      ),
      color: 'bg-blue-500 hover:bg-blue-600',
    },
    {
      name: 'Facebook',
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      icon: (
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
        </svg>
      ),
      color: 'bg-blue-700 hover:bg-blue-800',
    },
    {
      name: 'LINE',
      url: `https://social-plugins.line.me/lineit/share?url=${encodedUrl}`,
      icon: (
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12.001 2C6.47813 2 2.00098 5.5709 2.00098 9.99445C2.00098 13.9122 5.65811 17.1923 10.4381 17.8804C10.7608 17.9517 11.1717 18.0946 11.3133 18.3593C11.442 18.6053 11.4046 18.9637 11.3693 19.1887L11.1558 20.2293C11.0933 20.5305 10.8542 21.2648 12.001 20.7535C13.1478 20.2421 17.9292 17.3128 19.7103 14.0901C20.8244 12.1305 21.3681 10.3212 21.3681 8.63936V8.58851C21.3681 8.57872 21.3681 8.5689 21.3681 8.55911C21.3681 8.5398 21.3681 8.5205 21.3681 8.50119V8.45042C21.368 4.02687 16.8909 2 12.001 2Z"/>
        </svg>
      ),
      color: 'bg-green-500 hover:bg-green-600',
    },
  ];

  return (
    <div>
      <h4 className="text-lg font-medium mb-3">この記事をシェアする</h4>
      <div className="flex space-x-3">
        {shareLinks.map((link) => (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center justify-center rounded-full w-10 h-10 ${link.color} text-white transition-colors`}
            aria-label={`Share on ${link.name}`}
          >
            {link.icon}
            <span className="sr-only">{link.name}</span>
          </a>
        ))}
      </div>
    </div>
  );
} 