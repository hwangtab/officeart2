// src/app/pricing/page.tsx
import type { Metadata } from 'next';
import PricingClient from '@/components/PricingClient'; // Import the new client component

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.officeart.co.kr';

// Product Schema for 정기 이용권
const pricingSchema = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  'name': '오피스아트 정기 이용권',
  'description': '프리미엄 의자와 L형 책상을 갖춘 정기 이용권. 24시간 접근, 무제한 커피, 회의실 무료 이용 포함',
  'offers': {
    '@type': 'Offer',
    'price': '250000',
    'priceCurrency': 'KRW',
    'availability': 'https://schema.org/InStock',
    'url': `${siteUrl}/pricing`,
    'priceValidUntil': '2025-12-31',
  },
  'brand': {
    '@type': 'Brand',
    'name': '오피스아트',
  },
};

export const metadata: Metadata = {
  title: "가격 및 멤버십 | 오피스아트",
  description: "오피스아트 정기 이용권 월 25만원, 비상주 사무실 월 3.3만원. 프리미엄 의자, L형 책상, 무제한 커피, 24시간 접근 가능. 사업자등록 서비스까지! 지금 상담받기 →",
  keywords: ['오피스아트 가격', '공유오피스 가격', '비상주 사무실', '정기 이용권', '사업자등록', '영등포 공유오피스', '영등포구청역'],
  alternates: {
    canonical: `${siteUrl}/pricing`,
  },
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
      {/* JSON-LD for Product Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pricingSchema) }}
      />
      {/* Render the client component */}
      <PricingClient />
    </main>
  );
}
