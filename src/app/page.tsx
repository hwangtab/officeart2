import type { Metadata } from 'next';
import ScrollAnimationWrapper from '@/components/ScrollAnimationWrapper'; // Import the wrapper
import PopupBannerWrapper from '@/components/PopupBannerWrapper';
// Import section components
import HeroSection from '@/components/HeroSection';
import LocationSelectionSection from '@/components/LocationSelectionSection';
import ServicesSection from '@/components/ServicesSection';
import CoreValuesSection from '@/components/CoreValuesSection';
import OccupancyCategoriesSection from '@/components/OccupancyCategoriesSection';
import AtAGlanceSection from '@/components/AtAGlanceSection';
import GallerySection from '@/components/GallerySection';
import InquirySection from '@/components/InquirySection';

// Define metadata for the Home page
// title is inherited from layout.tsx's default title
export const metadata: Metadata = {
  title: '오피스아트: 영등포•불광 프리미엄 공유오피스 | 비상주사무실',
  description: '영등포구청역 5분, 불광역 2분. 정기 이용권 월 25만원, 비상주사무실 월 3.3만원. 180만원 프리미엄 의자, L형 책상, 사업자등록 서비스까지 제공하는 창작자 특화 공유오피스입니다.',
  keywords: ['오피스아트', '영등포 공유오피스', '불광 공유오피스', '비상주사무실', '사업자등록', '프리미엄 의자', '공유오피스', '코워킹스페이스', '창작자'],
  openGraph: {
    title: '오피스아트 | 영등포•불광 프리미엄 공유오피스',
    description: '월 25만원 정기권, 월 3.3만원 비상주사무실. 프리미엄 시설과 사업자등록 서비스를 합리적인 가격으로 제공합니다.',
  },
};

export default function Home() {

  return (
    <>
      <PopupBannerWrapper />
      <main className="flex min-h-screen flex-col items-center">
      {/* 1. Hero Section */}
      <HeroSection /> {/* Hero section usually doesn't need scroll animation */}

      {/* 2. Location Selection Section */}
      <ScrollAnimationWrapper>
        <LocationSelectionSection />
      </ScrollAnimationWrapper>

      {/* 3. Services Section */}
      <ScrollAnimationWrapper>
        <ServicesSection />
      </ScrollAnimationWrapper>

      {/* 4. Core Values Section */}
      <ScrollAnimationWrapper>
        <CoreValuesSection />
      </ScrollAnimationWrapper>

      {/* 5. Occupancy Categories Section */}
      <ScrollAnimationWrapper>
        <OccupancyCategoriesSection />
      </ScrollAnimationWrapper>

      {/* 6. At-a-Glance Section */}
      <ScrollAnimationWrapper>
        <AtAGlanceSection />
      </ScrollAnimationWrapper>

      {/* 7. Gallery Section */}
      {/* Removed ScrollAnimationWrapper again */}
      <GallerySection />

      {/* 8. Inquiry Section */}
      <ScrollAnimationWrapper>
        <InquirySection />
      </ScrollAnimationWrapper>
      </main>
    </>
  );
}
