import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import localFont from 'next/font/local'; // Import localFont
import Header from "@/components/Header";
import Footer from "@/components/Footer"; // Import the Footer component
import "./globals.css";

// Configure Noto Sans KR font with specified weights
const notoSansKr = Noto_Sans_KR({
  subsets: ["latin"], // Or ['korean'] if needed, often includes Latin
  weight: ["300", "400", "500", "700"], // Light, Regular, Medium, Bold
  variable: "--font-noto-sans-kr", // CSS variable name
});

// Configure local GmarketSansMedium font
const gmarketSans = localFont({
  src: '../../src/fonts/GmarketSansMedium.woff', // Adjust path relative to layout.tsx
  weight: '500', // Specify the weight for this file
  variable: '--font-gmarket-sans', // CSS variable name
  display: 'swap', // Use font-display: swap
});


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
    // Use logo image for social sharing
    // TODO: 더 적합한 고해상도 이미지(1200x630 권장)로 교체 고려
    images: [
      {
        url: '/images/gallery/main-hero-bg.jpg', // Use a more representative image
        width: 1200, // Specify actual width (adjust if needed)
        height: 630, // Specify actual height (adjust for 1.91:1 ratio if needed)
        alt: '오피스아트 작업 공간 전경',
      },
    ],
    locale: 'ko_KR',
    type: 'website',
  },
  // Twitter card metadata
  twitter: {
    card: 'summary_large_image', // Use summary_large_image for better visibility if image is suitable
    title: "오피스아트 | 웹툰/일러스트 작가를 위한 프리미엄 작업실",
    description: "영등포구청역 5분, 프리미엄 의자와 160cm L형 책상으로 집중력을 높이는 창작자 특화 공유오피스.",
    // Use logo image for Twitter cards
    images: [`${siteUrl}/images/gallery/main-hero-bg.jpg`], // Use the same representative image URL
    // Add Twitter handle if available
    // site: '@yourTwitterHandle',
    // creator: '@creatorTwitterHandle',
  },
  // Icons definition
  // Ensure these icon files exist in the /public folder
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any', type: 'image/x-icon' }, // Standard favicon
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png', // Apple touch icon (e.g., 180x180)
    other: [
      // Android Chrome Icons (ensure files exist)
      { rel: 'icon', url: '/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { rel: 'icon', url: '/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
      // Consider adding a manifest.json link here as well if you have one
      // { rel: 'manifest', url: '/site.webmanifest' },
    ],
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
      {/* Note: Next.js automatically handles the <head> tag.
          Metadata object properties are injected into the head.
          For custom tags like JSON-LD script, place them directly inside RootLayout or use the Head component from next/head if needed in specific pages/components,
          but for global application, placing it here ensures it's included.
          Next.js might optimize this placement further. */}
      <head>
        {/* Add JSON-LD structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness", // Or potentially "OfficeEquipmentStore", "ProfessionalService" depending on specifics
            "name": "오피스아트",
            "image": `${siteUrl}/images/gallery/main-hero-bg.jpg`, // Use a representative image URL
            "@id": siteUrl, // Use the site URL as the unique ID
            "url": siteUrl,
            "telephone": "+82-2-764-3114", // Use the provided phone number
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "서울특별시 영등포구 당산로 120 (당산동3가)", // TODO: Verify exact address
              "addressLocality": "서울특별시",
              "addressRegion": "영등포구",
              "postalCode": "07220", // TODO: Verify postal code
              "addressCountry": "KR"
            },
            "description": metadata.description, // Reuse description from metadata
            "openingHoursSpecification": [ // TODO: Verify actual opening hours
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday"
                ],
                "opens": "09:00", // Example
                "closes": "18:00"  // Example
              },
              // Add Saturday/Sunday if applicable
            ],
            // "priceRange": "₩₩", // Optional: Indicate price range (e.g., $, $$, $$$)
            // "geo": { // Optional: Add coordinates for better map integration
            //   "@type": "GeoCoordinates",
            //   "latitude": 37.5260, // TODO: Add actual latitude
            //   "longitude": 126.8960 // TODO: Add actual longitude
            // },
          }) }}
        />
      </head>
      {/* Apply font variables to the body */}
      <body className={`${notoSansKr.variable} ${gmarketSans.variable} font-sans antialiased text-text-primary flex flex-col min-h-screen break-keep bg-background-main`}>
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer /> {/* Add the Footer component */}
      </body>
    </html>
  );
}
