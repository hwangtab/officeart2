'use client'; // This component handles client-side dynamic imports for the Home page

import dynamic from 'next/dynamic';
import React from 'react'; // Import React for JSX

// Skeleton UI Component
const GallerySkeleton = () => (
  <div className="relative w-full h-96 bg-gray-200 rounded-lg overflow-hidden animate-pulse">
    <div className="absolute inset-0 flex items-center justify-center">
      <svg className="w-12 h-12 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    </div>
  </div>
);

// Dynamically import GallerySlider with the Skeleton UI as loading indicator
const GallerySlider = dynamic(() => import('@/components/GallerySlider'), {
  ssr: false, // ssr: false is allowed in Client Components
  loading: () => <GallerySkeleton />, // Use the Skeleton component here
});

interface HomeClientComponentsProps {
  images?: string[];
}

export default function HomeClientComponents({ images }: HomeClientComponentsProps) {
  // This component renders the dynamically imported GallerySlider
  return <GallerySlider images={images} />; // Removed ScrollAnimationWrapper from here
}