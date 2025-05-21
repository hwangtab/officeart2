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
  title: {
    default: '오피스아트 | 창작자를 위한 집중 공간', // Default title
    template: '%s | 오피스아트', // Title template for subpages
  },
  description: '웹툰/일러스트 작가를 위한 최고의 선택! 영등포구청역 오피스아트에서 프리미엄 의자, 160cm L형 책상과 함께 압도적인 집중 환경을 경험하세요.', // Updated description
  openGraph: {
    title: '오피스아트 | 창작자를 위한 집중 공간',
    description: '웹툰/일러스트 작가를 위한 최고의 선택! 영등포구청역 오피스아트에서 프리미엄 의자, 160cm L형 책상과 함께 압도적인 집중 환경을 경험하세요.', // Updated OG description
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
    title: '오피스아트 | 창작자를 위한 집중 공간',
    description: '웹툰/일러스트 작가를 위한 최고의 선택! 영등포구청역 오피스아트에서 프리미엄 의자, 160cm L형 책상과 함께 압도적인 집중 환경을 경험하세요.', // Updated Twitter description
    images: [`${siteUrl}/og-image.png`], // Use absolute URL for Twitter card
  },
  // Add other relevant metadata fields
  keywords: ['공유오피스', '영등포 공유오피스', '당산 공유오피스', '웹툰 작가', '일러스트레이터', '작업실', '집중 환경', '프리미엄 의자', 'L형 책상'],
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
  // Consider adding icons and manifest if needed
  // icons: {
  //   icon: '/favicon.ico',
  //   apple: '/apple-touch-icon.png',
  // },
  // manifest: '/site.webmanifest',
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Removed loading state and useEffect

  // console.log('[Debug] RootLayout rendering.'); // Simplified log

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
            "telephone": "+82-2-764-3114",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "서울특별시 영등포구 당산로 120 (당산동3가)",
              "addressLocality": "서울특별시",
              "addressRegion": "영등포구",
              "postalCode": "07220",
              "addressCountry": "KR"
            },
            "description": "영등포구청역 5분, 프리미엄 의자와 160cm L형 책상으로 집중력을 높이는 창작자 특화 공유오피스. 웹툰, 일러스트레이터에게 최적화된 환경을 제공합니다.",
            "openingHoursSpecification": [
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                "opens": "09:00",
                "closes": "18:00"
              },
            ],
          }) }}
        />
      </head>
      <body className={`${notoSansKr.variable} ${gmarketSans.variable} font-sans antialiased text-text-primary flex flex-col min-h-screen break-keep leading-relaxed bg-gradient-to-b from-[#FFFBF0] via-[#FFFFFF] to-slate-100`}>
        {/* Removed loading conditional rendering */}
        <>
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </>
      </body>
    </html>
  );
}
