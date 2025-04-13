import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import { Noto_Sans_KR } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer"; // Import the Footer component
import "./globals.css";

// Configure Noto Sans KR font with specified weights
const notoSansKr = Noto_Sans_KR({
  subsets: ["latin"], // Or ['korean'] if needed, often includes Latin
  weight: ["300", "400", "500", "700"], // Light, Regular, Medium, Bold
  variable: "--font-noto-sans-kr", // CSS variable name
});

// Define base URL for metadata resolution (Replace with actual URL)

// Define base URL for metadata resolution (Replace with actual URL)
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.officeart.co.kr'; // Example URL

export const metadata: Metadata = {
  // Define metadataBase for resolving relative paths
  metadataBase: new URL(siteUrl),
  title: {
    default: "오피스아트 | 웹툰/일러스트 작가를 위한 프리미엄 작업실", // Default title
    template: "%s | 오피스아트", // Template for page-specific titles
  },
  description: "영등포구청역 5분, 프리미엄 의자와 160cm L형 책상으로 집중력을 높이는 창작자 특화 공유오피스. 웹툰, 일러스트레이터에게 최적화된 환경을 제공합니다.",
  // Open Graph metadata for social sharing (Facebook, KakaoTalk, etc.)
  openGraph: {
    title: "오피스아트 | 웹툰/일러스트 작가를 위한 프리미엄 작업실",
    description: "영등포구청역 5분, 프리미엄 의자와 160cm L형 책상으로 집중력을 높이는 창작자 특화 공유오피스.",
    url: siteUrl,
    siteName: '오피스아트',
    // Add a default image for social sharing (Replace with actual image path)
    images: [
      {
        url: '/images/og-image.jpg', // Default Open Graph image
        width: 1200,
        height: 630,
        alt: '오피스아트 작업 공간',
      },
    ],
    locale: 'ko_KR',
    type: 'website',
  },
  // Twitter card metadata
  twitter: {
    card: 'summary_large_image',
    title: "오피스아트 | 웹툰/일러스트 작가를 위한 프리미엄 작업실",
    description: "영등포구청역 5분, 프리미엄 의자와 160cm L형 책상으로 집중력을 높이는 창작자 특화 공유오피스.",
    // Add the same default image for Twitter cards
    images: ['/images/og-image.jpg'],
    // Add Twitter handle if available
    // site: '@yourTwitterHandle',
    // creator: '@creatorTwitterHandle',
  },
  // Icons definition
  icons: {
    icon: '/favicon.ico', // Standard favicon
    shortcut: '/favicon-16x16.png', // Shortcut icon
    apple: '/apple-touch-icon.png', // Apple touch icon
    // Add other icons if needed (e.g., Android chrome icons)
  },
  // Add other relevant metadata fields
  keywords: ['공유오피스', '작업실', '웹툰', '일러스트', '창작자', '프리미엄 의자', '영등포구청역', '오피스아트'],
  robots: { // Control search engine crawling
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
  // Verification tags if needed (e.g., Google Search Console)
  // verification: {
  //   google: 'your-google-verification-code',
  // },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      {/* Apply flex layout to ensure footer stays at the bottom */}
      {/* Added bg-light-gray as default background */}
      <body className={`${notoSansKr.variable} font-sans antialiased text-medium-gray flex flex-col min-h-screen break-keep bg-light-gray`}> {/* Restored font-sans, kept medium-gray */}
        <Header />
        {/* Make main content grow to push footer down */}
        <main className="flex-grow">{children}</main>
        <Footer /> {/* Add the Footer component */}
      </body>
    </html>
  );
}
