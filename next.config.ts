import type { NextConfig } from "next";
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const nextConfig: NextConfig = {
  /* config options here */
  images: {
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
