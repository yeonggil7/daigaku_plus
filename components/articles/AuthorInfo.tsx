import React from 'react';
import Image from 'next/image';

type AuthorInfoProps = {
  author: string;
  avatar?: string;
  bio?: string;
};

export default function AuthorInfo({ author, avatar, bio }: AuthorInfoProps) {
  const defaultBio = '大学生活に関する情報を発信しています。大学生の皆さんが充実したキャンパスライフを送るためのお手伝いをします。';
  
  return (
    <div>
      <h4 className="text-lg font-medium mb-3">著者について</h4>
      <div className="flex items-start">
        {avatar ? (
          <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
            <Image 
              src={avatar} 
              alt={author} 
              width={64}
              height={64}
              className="object-cover w-full h-full"
            />
          </div>
        ) : (
          <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 text-xl flex-shrink-0">
            {author.charAt(0).toUpperCase()}
          </div>
        )}
        <div className="ml-4">
          <p className="font-medium text-lg">{author}</p>
          <p className="text-gray-600">{bio || defaultBio}</p>
        </div>
      </div>
    </div>
  );
} 