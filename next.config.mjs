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
      }
    ],
  },
  env: {
    SITE_URL: process.env.NODE_ENV === 'production' 
      ? 'https://daigakuplus.jp' 
      : 'http://localhost:3000',
  },
  eslint: {
    // Warning: このオプションを有効にすると、ESLintによる検証がスキップされます
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Warning: このオプションを有効にすると、型チェックがスキップされます
    ignoreBuildErrors: true,
  }
};

export default nextConfig; 