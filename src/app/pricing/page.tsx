// src/app/pricing/page.tsx
import type { Metadata } from 'next';
import PricingClient from '@/components/PricingClient'; // Import the new client component

export const metadata: Metadata = {
  title: "가격 및 멤버십 | 오피스아트",
  description: "오피스아트의 정기 이용권(오픈 특가 월 25만원, 정가 45만원)과 일일 이용권 가격, 포함된 서비스(프리미엄 의자, 커피, 출력 등) 및 결제 방법을 안내합니다. 인터랙티브 계산기로 예상 비용을 확인해보세요.",
  openGraph: {
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
