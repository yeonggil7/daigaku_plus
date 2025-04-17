/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'source.unsplash.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: '**.pexels.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: '**.vercel.app',
        pathname: '/**',
      }
    ],
    unoptimized: process.env.NODE_ENV === 'development',
  },
  env: {
    SITE_URL: process.env.VERCEL_URL 
      ? `https://${process.env.VERCEL_URL}` 
      : process.env.NODE_ENV === 'production'
        ? 'https://daigakuplus.vercel.app'
        : 'http://localhost:3000',
  },
  // MongoDB接続エラーを許容する
  onError: (err) => {
    console.error('Next.js build error:', err);
    // 重大なエラーではない限り、ビルドを続行
    return err.code === 'MONGODB_CONNECTION_ERROR' ? null : err;
  }
};

export default nextConfig; 