'use client';

import dynamic from 'next/dynamic';

const KakaoMap = dynamic(() => import('@/app/location/KakaoMap'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[350px] md:h-[400px] rounded-lg bg-gray-200 flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-2"></div>
        <p className="text-gray-600 text-sm">지도를 불러오는 중...</p>
      </div>
    </div>
  ),
});

interface KakaoMapWrapperProps {
  officeAddress: string;
  apiKey: string;
  coordinates?: {
    lat: number;
    lng: number;
  };
}

export default function KakaoMapWrapper(props: KakaoMapWrapperProps) {
  return <KakaoMap {...props} />;
}
