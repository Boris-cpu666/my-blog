/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'www.notion.so',
      'notion.so',
      'images.unsplash.com',
      'vercel.com',
      's3.us-west-2.amazonaws.com',
      'prod-files-secure.s3.us-west-2.amazonaws.com',
      'secure.notion-static.com',
      'file.notion.so',
      'cdn.notion.so',
    ],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.notion.so',
        pathname: '/image/**',
      },
      {
        protocol: 'https',
        hostname: 'notion.so',
        pathname: '/image/**',
      },
      {
        protocol: 'https',
        hostname: 'cdn.notion.so',
        pathname: '/image/**',
      },
      {
        protocol: 'https',
        hostname: 'secure.notion-static.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: '**',
        pathname: '/image/**',
      },
    ],
  },
};

module.exports = nextConfig; 