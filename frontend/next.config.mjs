/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  basePath: process.env.GITHUB_PAGES === 'true' ? '/SentinelFlow-Copy' : '',
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_API_URL:
      process.env.NEXT_PUBLIC_API_URL ||
      'https://sentinelflow-ljlk.onrender.com/api/v1',
  },
};

export default nextConfig;
