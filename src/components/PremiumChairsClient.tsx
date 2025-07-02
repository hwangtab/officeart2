'use client'; // This component uses client-side hooks and dynamic import

import dynamic from 'next/dynamic';
import OptimizedImage from '@/components/OptimizedImage';

// Dynamically import the ChairComparisonChart component with loading indicator
const DynamicChairComparisonChart = dynamic(() => import('@/components/ChairComparisonChart'), {
  ssr: false,
  loading: () => (
    <div className="bg-white p-4 rounded shadow h-[300px] flex flex-col items-center justify-center"> {/* Match container style */}
      <OptimizedImage
        src="/images/logo/logo.png"
        alt="오피스아트 로고 - 프리미엄 의자 비교 차트 로딩 중"
        width={100}
        height={27}
        className="animate-pulse mb-4"
      />
      <p className="text-sm text-gray-500">차트 로딩 중...</p>
    </div>
  ),
});

export default function PremiumChairsClient() {
  // This component only renders the dynamically imported chart
  return <DynamicChairComparisonChart />;
}