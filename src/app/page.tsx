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
  description: '오피스아트 메인 페이지입니다. 프리미엄 의자, 집중 환경, 크리에이터 커뮤니티 등 오피스아트의 핵심 가치를 확인하고 상담을 신청하세요.',
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
