import type { Metadata } from 'next';
import { Suspense } from 'react';
import Image from 'next/image';
import SearchResults from './SearchResults';

export const generateMetadata = (): Metadata => {
  return {
    openGraph: {
      images: [
        {
          url: '/og-image.png',
          width: 1200,
          height: 630,
        },
      ],
    },
  };
};

export default function SearchPage() {
  return (
    <main className="flex min-h-screen flex-col items-center py-20 px-4">
      {/* 썸네일 이미지 표시 */}
      <div className="relative mb-8 w-full max-w-3xl mx-auto h-48 rounded-lg overflow-hidden shadow-md">
        <Image
          src="/og-image.png"
          alt="오피스아트 썸네일 이미지"
          fill
          style={{ objectFit: 'cover' }}
          priority
        />
      </div>
      {/* Suspense로 감싸서 useSearchParams 사용 */}
      <Suspense fallback={<div className="text-center text-text-secondary">검색 결과 로딩 중...</div>}>
        <SearchResults />
      </Suspense>
    </main>
  );
}