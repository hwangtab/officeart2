'use client'; // This component uses client-side hooks and dynamic import

import dynamic from 'next/dynamic';
import Image from 'next/image';

// Dynamically import the CreatorChart component with loading indicator
const DynamicCreatorChart = dynamic(() => import('@/components/CreatorChart'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-80 flex flex-col items-center justify-center bg-gray-100 rounded-lg">
      <Image
        src="/images/logo/logo.png"
        alt="Loading chart..."
        width={100}
        height={27} // Adjust height based on logo aspect ratio (assuming 150x40)
        className="animate-pulse mb-4"
      />
      <p className="text-sm text-gray-500">차트 로딩 중...</p>
    </div>
  ),
});

export default function CreatorCommunityClient() {
  // This component only renders the dynamically imported chart
  return <DynamicCreatorChart />;
}