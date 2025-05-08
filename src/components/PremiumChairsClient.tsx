'use client'; // This component uses client-side hooks and dynamic import

import dynamic from 'next/dynamic';
import Image from 'next/image';

// Dynamically import the ChairComparisonChart component with loading indicator
const DynamicChairComparisonChart = dynamic(() => import('@/components/ChairComparisonChart'), {
  ssr: false,
  loading: () => (
    <div className="bg-white p-4 rounded shadow h-[300px] flex flex-col items-center justify-center"> {/* Match container style */}
      <Image
        src="/images/logo/logo.png"
        alt="Loading chart..."
        width={100}
        height={27} // Adjust height based on logo aspect ratio
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