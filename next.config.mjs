import withBundleAnalyzerFactory from '@next/bundle-analyzer';

const withBundleAnalyzer = withBundleAnalyzerFactory({
  enabled: process.env.ANALYZE === 'true',
});

const nextConfig = {
  /* config options here */
  output: 'standalone', // Vercel 최적화 모드
  experimental: {
    serverActions: {
      allowedOrigins: ['officeart.co.kr', 'localhost:3000']
    }
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  // basePath: '/officeart2', // Removed for custom domain
  images: {
    unoptimized: true, // Disable Image Optimization temporarily for debugging
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'via.placeholder.com', // Keep this for now, just in case
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos', // Add new placeholder host
        port: '',
        pathname: '/**',
      },
      // TODO: Add other necessary hostnames later (e.g., for actual images)
    ],
  },
};

export default withBundleAnalyzer(nextConfig);