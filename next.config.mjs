import withBundleAnalyzerFactory from '@next/bundle-analyzer';

const withBundleAnalyzer = withBundleAnalyzerFactory({
  enabled: process.env.ANALYZE === 'true',
});

const nextConfig = {
  /* config options here */
  output: 'export', // Add this line for static export
  images: {
    unoptimized: true, // Disable Image Optimization for static export
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