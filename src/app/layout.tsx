import AIChatWidget from '@/components/AIChatWidget';
import ErrorBoundary from '@/components/ErrorBoundary';
import PerformanceMetrics from '@/components/PerformanceMetrics';
// Server Component

// Removed useState, useEffect imports
import type { Metadata } from 'next'; // Import Metadata type
import { Noto_Sans_KR } from "next/font/google";

import localFont from 'next/font/local'; // Import localFont
// Removed SplashScreen import
import Header from "@/components/Header";
import Footer from "@/components/Footer"; // Import the Footer component
import "./globals.css";

// Configure Noto Sans KR font with specified weights
const notoSansKr = Noto_Sans_KR({
  subsets: ["latin"], // Or ['korean'] if needed, often includes Latin
  weight: ["300", "400", "500", "700"], // Light, Regular, Medium, Bold
  variable: "--font-noto-sans-kr", // CSS variable name
});

// Configure local Gmarket Sans font (loading multiple weights from public/fonts)
const gmarketSans = localFont({
  src: [
    {
      // Path relative to the root of the `src` directory OR the `app` directory
      // Since layout.tsx is in src/app/, the path starts from there.
      // To access public/, we need to go up two levels and then into public/
      // However, next/font/local expects paths relative to the project root when outside src/app
      // Let's try path relative to project root:
      path: '../../public/fonts/GmarketSansLight.otf', // Corrected path to Light font
      weight: '300', // Light weight
      style: 'normal',
    },
    {
      path: '../../public/fonts/GmarketSansMedium.otf', // Corrected path to Medium font
      weight: '500', // Medium weight
      style: 'normal',
    }
    // Add Bold font if needed and available locally
    // {
    //   path: '../../public/fonts/GmarketSansBold.woff',
    //   weight: '700', // Bold weight
    //   style: 'normal',
    // }
  ],
  variable: '--font-gmarket-sans', // CSS variable name
  display: 'swap', // Use swap for better performance
});

// Define siteUrl for metadata and JSON-LD
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.officeart.co.kr';

// Define Metadata for the application
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl), // Required for resolving relative image paths
  alternates: {
    canonical: siteUrl,
  },
  title: {
    default: '오피스아트 | 합리적 가격으로 즐기는 최고의 업무 환경', // Default title
    template: '%s | 오피스아트', // Title template for subpages
  },
  description: '프리랜서, 스타트업, 창작자를 위한 프리미엄 공유오피스. 영등포구청역 오피스아트에서 합리적인 가격으로 스틸케이스 프리미엄 의자, 넓은 L형 작업공간, 24시간 접근 가능한 최적의 집중 환경을 경험하세요.', // Updated description
  openGraph: {
    title: '오피스아트 | 합리적 가격으로 즐기는 프리미엄 작업 환경',
    description: '프리랜서, 스타트업, 창작자를 위한 프리미엄 공유오피스. 영등포구청역 오피스아트에서 합리적인 가격으로 스틸케이스 프리미엄 의자, 넓은 L형 작업공간, 24시간 접근 가능한 최적의 집중 환경을 경험하세요.', // Updated OG description
    url: siteUrl,
    siteName: '오피스아트',
    images: [
      {
        url: `${siteUrl}/og-image.png`, // Use absolute URL
        width: 1200,
        height: 630,
        alt: '오피스아트 로고와 작업 공간 이미지',
      },
    ],
    locale: 'ko_KR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '오피스아트 | 합리적 가격으로 즐기는 프리미엄 작업 환경',
    description: '프리랜서, 스타트업, 창작자를 위한 프리미엄 공유오피스. 영등포구청역 오피스아트에서 합리적인 가격으로 최적의 작업 환경을 경험하세요.', // Updated Twitter description
    images: [`${siteUrl}/og-image.png`], // Use absolute URL for Twitter card
  },
  // Add other relevant metadata fields
  keywords: ['공유오피스', '영등포 공유오피스', '당산 공유오피스', '프리랜서 오피스', '스타트업 오피스', '작업실', '집중 환경', '프리미엄 의자', 'L형 책상', '코워킹스페이스'],
  authors: [{ name: '오피스아트' }],
  robots: { // Basic robots configuration
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  // Icons configuration
  icons: {
    icon: '/favicon.ico',
  },
  // manifest: '/site.webmanifest', // Keep manifest commented for now
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        {/* JSON-LD script remains */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "오피스아트",
            "image": `${siteUrl}/og-image.png`, // Updated image to match OG image
            "@id": siteUrl,
            "url": siteUrl,
            "telephone": "0507-1335-3128",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "서울특별시 영등포구 양산로 96 A213호",
              "addressLocality": "서울특별시",
              "addressRegion": "영등포구",
              "postalCode": "07220",
              "addressCountry": "KR"
            },
            "description": "영등포구청역 5분, 프리미엄 의자와 160cm L형 책상으로 집중력을 높이는 공유오피스. 프리랜서, 스타트업, 창작자에게 최적화된 작업 환경을 제공합니다.",
            "openingHoursSpecification": [
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                "opens": "00:00",
                "closes": "23:59"
              },
            ],
          }) }}
        />
      </head>
      <body className={`${notoSansKr.variable} ${gmarketSans.variable} font-sans antialiased text-text-primary flex flex-col min-h-screen break-keep leading-relaxed bg-gradient-to-b from-[#FFFBF0] via-[#FFFFFF] to-slate-100`}>
        {/* Skip to main content link for keyboard accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-6 focus:py-3 focus:bg-primary focus:text-white focus:rounded-lg focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
        >
          본문으로 바로가기
        </a>
        {/* Removed loading conditional rendering */}
        <ErrorBoundary>
          <PerformanceMetrics />
          <Header />
          <main id="main-content" className="flex-grow">{children}</main>
          <Footer />
          <AIChatWidget />
        </ErrorBoundary>
      </body>
    </html>
  );
}
