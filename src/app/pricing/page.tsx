// src/app/pricing/page.tsx
import type { Metadata } from 'next';
import PricingClient from '@/components/PricingClient'; // Import the new client component

export const metadata: Metadata = {
  title: "가격 및 멤버십 | 오피스아트",
  description: "오피스아트의 정기 이용권(월 25만원)과 비상주 사무실(월 3.3만원) 가격 안내. 프리미엄 의자, L형 책상, 무제한 커피, 사업자등록 서비스까지 합리적인 가격으로 제공합니다.",
  keywords: ['오피스아트 가격', '공유오피스 가격', '비상주 사무실', '정기 이용권', '사업자등록', '영등포 공유오피스', '불광 공유오피스'],
  openGraph: {
    title: "가격 및 멤버십 | 오피스아트",
    description: "정기 이용권 월 25만원, 비상주 사무실 월 3.3만원. 프리미엄 시설을 합리적인 가격으로 이용하세요.",
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
      }
    ]
  }
};

export default function PricingPage() {
  return (
    <main className="flex min-h-screen flex-col items-center py-20 px-4">
      {/* Render the client component */}
      <PricingClient />
    </main>
  );
}
