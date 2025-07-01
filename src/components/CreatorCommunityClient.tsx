'use client';

import dynamic from 'next/dynamic';
import Image from 'next/image';
import { UnifiedButton } from '@/components/UnifiedButton';

// Dynamically import the CreatorChart component with loading indicator
const DynamicCreatorChart = dynamic(() => import('@/components/CreatorChart'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-80 flex flex-col items-center justify-center bg-gray-100 rounded-lg">
      <Image
        src="/images/logo/logo.png"
        alt="Loading chart..."
        width={100}
        height={27}
        className="animate-pulse mb-4"
      />
      <p className="text-sm text-gray-500">차트 로딩 중...</p>
    </div>
  ),
});

export default function CreatorCommunityClient() {
  const handleMembershipClick = () => {
    window.location.href = '/pricing';
  };

  return (
    <div className="space-y-8 flex flex-col items-center">
      <DynamicCreatorChart />
      <UnifiedButton
        variant="primary"
        size="base"
        onClick={handleMembershipClick}
        className="w-full md:w-auto mx-auto"
      >
        멤버십 자세히 보기
      </UnifiedButton>
    </div>
  );
}