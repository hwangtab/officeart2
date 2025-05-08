'use client';

import React from 'react';
import Image from 'next/image';
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

// Define gallery images (adjust paths as needed based on public/images/gallery)
const galleryImages = [
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
  '/images/gallery/l-shape-desk.jpg', // Check if this double extension is correct
  '/images/gallery/value-focus.jpg', // Assuming .jpg is correct, not .jpeg
  // Add other relevant images from the gallery
];

export default function GallerySlider() {
  return (
    // Removed ScrollAnimationWrapper
    <div className="w-full rounded-lg overflow-hidden shadow-lg"> {/* Replaced ScrollAnimationWrapper with a simple div */}
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]} // Add EffectFade module
        effect="fade" // Set effect to fade
        fadeEffect={{ crossFade: true }} // Optional: smoother crossfade
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
        {galleryImages.map((src, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full">
              <Image
                src={src}
                alt={`오피스아트 갤러리 ${index + 1}: [${src.split('/').pop()?.split('.')[0] || '이미지 설명'}]`} // Improved alt text format
                fill
                style={{ objectFit: 'cover' }}
                sizes="100vw" // Adjust sizes as needed
                priority={index < 2} // Prioritize loading the first few images
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div> // Close the simple div
  );
}