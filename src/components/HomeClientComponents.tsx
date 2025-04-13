'use client'; // This component handles client-side dynamic imports for the Home page

import dynamic from 'next/dynamic';
import Image from 'next/image';

// Dynamically import GallerySlider with loading indicator
const GallerySlider = dynamic(() => import('@/components/GallerySlider'), {
  ssr: false, // ssr: false is allowed in Client Components
  loading: () => (
    <div className="relative w-full h-96 flex items-center justify-center bg-gray-100 rounded-lg"> {/* Match slider height */}
      <Image
        src="/images/logo/logo.png"
        alt="Loading gallery..."
        width={100}
        height={27} // Adjust height based on logo aspect ratio
        className="animate-pulse mb-4"
      />
      {/* Optional: Add loading text below logo */}
      {/* <p className="text-sm text-gray-500">갤러리 로딩 중...</p> */}
    </div>
  ),
});

export default function HomeClientComponents() {
  // This component renders the dynamically imported GallerySlider
  return <GallerySlider />;
}