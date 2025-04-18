import type { Metadata } from 'next';
// Import section components
import HeroSection from '@/components/HeroSection';
import CoreValuesSection from '@/components/CoreValuesSection';
import AtAGlanceSection from '@/components/AtAGlanceSection';
import GallerySection from '@/components/GallerySection';
import InquirySection from '@/components/InquirySection';

// Define metadata for the Home page
// title is inherited from layout.tsx's default title
export const metadata: Metadata = {
  title: '오피스아트: 웹툰/일러스트 작가를 위한 프리미엄 작업 공간', // Add specific title
  description: '웹툰, 일러스트 작가를 위한 최적의 작업 환경, 오피스아트입니다. 180만원대 프리미엄 의자, 넓은 L형 책상, 집중 환경, 크리에이터 커뮤니티를 경험하세요.', // Improved description
  // You can override Open Graph or Twitter details here if needed for this specific page
  // openGraph: {
  //   title: '오피스아트 홈페이지',
  //   description: 'Specific description for the home page share.',
  // },
};

export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center">
      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. Core Values Section */}
      <CoreValuesSection />

      {/* 3. At-a-Glance Section */}
      <AtAGlanceSection />

      {/* 4. Gallery Section */}
      <GallerySection />

      {/* 5. Inquiry Section */}
      <InquirySection />
    </main>
  );
}
