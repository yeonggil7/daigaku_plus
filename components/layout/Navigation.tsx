'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const [showStudyMenu, setShowStudyMenu] = useState(false);
  const pathname = usePathname();
  
  const isActive = (path: string) => {
    return pathname?.startsWith(path);
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex space-x-7">
            <div className="hidden md:flex items-center space-x-1">
              <div 
                className="relative"
                onMouseEnter={() => setShowStudyMenu(true)}
                onMouseLeave={() => setShowStudyMenu(false)}
              >
                <Link 
                  href="/study" 
                  className={`py-4 px-3 font-medium ${isActive('/study') ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'}`}
                >
                  勉強
                </Link>
                {showStudyMenu && (
                  <div className="absolute left-0 top-full mt-0 w-48 bg-white shadow-lg rounded-b-lg z-10">
                    <div className="py-2">
                      <Link href="/study/learning-methods" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">
                        効率的な学習方法
                      </Link>
                      <Link href="/study/exam-preparation" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">
                        試験対策ガイド
                      </Link>
                      <Link href="/study/certifications" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">
                        資格取得ガイド
                      </Link>
                      <Link href="/study/report-writing" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">
                        レポート作成ガイド
                      </Link>
                    </div>
                  </div>
                )}
              </div>
              
              <Link 
                href="/career" 
                className={`py-4 px-3 font-medium ${isActive('/career') ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'}`}
              >
                就職
              </Link>
              
              <Link 
                href="/community" 
                className={`py-4 px-3 font-medium ${isActive('/community') ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'}`}
              >
                コミュニティ
              </Link>
              
              <Link 
                href="/part-time" 
                className={`py-4 px-3 font-medium ${isActive('/part-time') ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'}`}
              >
                バイト
              </Link>
            </div>
          </div>
          
          <div className="md:hidden flex items-center">
            <button className="outline-none mobile-menu-button">
              <svg
                className="w-6 h-6 text-gray-500"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {/* モバイルメニュー - 実装予定 */}
      <div className="hidden mobile-menu">
        <ul>
          <li><Link href="/study" className="block text-sm px-2 py-4 hover:bg-blue-500 transition duration-300">勉強</Link></li>
          <li><Link href="/career" className="block text-sm px-2 py-4 hover:bg-blue-500 transition duration-300">就職</Link></li>
          <li><Link href="/community" className="block text-sm px-2 py-4 hover:bg-blue-500 transition duration-300">コミュニティ</Link></li>
          <li><Link href="/part-time" className="block text-sm px-2 py-4 hover:bg-blue-500 transition duration-300">バイト</Link></li>
        </ul>
      </div>
    </nav>
  );
} 