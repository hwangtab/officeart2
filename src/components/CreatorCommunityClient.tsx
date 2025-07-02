'use client';

import dynamic from 'next/dynamic';
import OptimizedImage from '@/components/OptimizedImage';
import { UnifiedButton } from '@/components/UnifiedButton';

// Dynamically import the CreatorChart component with loading indicator
const DynamicCreatorChart = dynamic(() => import('@/components/CreatorChart'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-80 flex flex-col items-center justify-center bg-gray-100 rounded-lg">
      <OptimizedImage
        src="/images/logo/logo.png"
        alt="오피스아트 로고 - 창작자 커뮤니티 차트 로딩 중"
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
    <div className="flex flex-col items-center">
      <DynamicCreatorChart />
      <div className="mt-6">
        <UnifiedButton
          variant="primary"
          size="lg"
          onClick={handleMembershipClick}
          className="px-8 py-3 shadow-lg hover:shadow-xl transition-shadow duration-300"
        >
          멤버십 자세히 보기
        </UnifiedButton>
      </div>
    </div>
  );
}