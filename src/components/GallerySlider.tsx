'use client';

import React from 'react';
import OptimizedImage from './OptimizedImage';
// Removed ScrollAnimationWrapper import
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade'; // Import fade effect CSS
// import required modules
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules'; // Import EffectFade module

// Default gallery images
const defaultGalleryImages = [
  '/images/gallery/gallery-2.jpg',
  '/images/gallery/gallery-4.jpg',
  '/images/gallery/gallery-5.jpg',
  '/images/gallery/gallery-7.jpg',
  '/images/gallery/jura-x9.jpg',
  '/images/gallery/DSC07712.jpeg',
  '/images/gallery/IMG_4984.jpeg',
  '/images/gallery/networking-event.jpg',
  '/images/gallery/steelcase-think.jpg',
  '/images/gallery/humanscale-freedom.jpg',
  '/images/gallery/l-shape-desk.jpg',
  '/images/gallery/value-focus.jpg',
];

interface GallerySliderProps {
  images?: string[];
}

export default function GallerySlider({ images = defaultGalleryImages }: GallerySliderProps) {
  return (
    // Removed ScrollAnimationWrapper
    <div className="w-full rounded-lg overflow-hidden shadow-lg"> {/* Replaced ScrollAnimationWrapper with a simple div */}
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        speed={800} // Increase transition speed
        spaceBetween={0} // No space between slides
        slidesPerView={1} // Show one slide at a time
        navigation // Enable navigation arrows
        pagination={{ clickable: true }} // Enable clickable pagination dots
        loop={true} // Enable continuous loop
        autoplay={{
          delay: 5000, // Increased autoplay delay to 5000ms
          disableOnInteraction: false, // Keep autoplaying after user interaction
          pauseOnMouseEnter: true, // Pause autoplay on mouse enter
        }}
        className="h-96" // Set a fixed height for the slider container
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full overflow-hidden group">
              <OptimizedImage
                src={src}
                alt={`오피스아트 갤러리 ${index + 1}: [${src.split('/').pop()?.split('.')[0] || '이미지 설명'}]`}
                fill
                sizes="(min-width: 1920px) 1920px, 100vw"
                priority={index < 2}
                className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105 cursor-pointer"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div> // Close the simple div
  );
}