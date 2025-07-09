'use client';

import Image from 'next/image';
import { useState, SyntheticEvent } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  fill?: boolean;
  sizes?: string;
  quality?: number;
}

export default function OptimizedImage({
  src,
  alt,
  width,
  height,
  className = '',
  priority = false,
  fill = false,
  sizes,
  quality = 85,
  ...props
}: OptimizedImageProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const handleLoad = () => {
    console.log('이미지 로딩 성공:', src);
    setIsLoading(false);
  };

  const handleError = (error: SyntheticEvent<HTMLImageElement, Event>) => {
    console.error('이미지 로딩 실패:', src, error);
    setIsLoading(false);
    setHasError(true);
  };

  if (hasError) {
    return (
      <div 
        className={`flex items-center justify-center bg-gray-200 text-gray-500 ${className}`}
        style={fill ? undefined : { width, height }}
        role="img"
        aria-label={`이미지 로딩 실패: ${alt}`}
      >
        <div className="text-center">
          <div className="text-2xl mb-2">📷</div>
          <p className="text-sm">이미지를 불러올 수 없습니다</p>
        </div>
      </div>
    );
  }

  // fill 모드일 때는 부모 컨테이너가 크기를 결정해야 함
  if (fill) {
    return (
      <>
        {isLoading && (
          <div 
            className="absolute inset-0 flex items-center justify-center bg-gray-100 animate-pulse z-10"
            aria-label="이미지 로딩 중"
          >
            <div className="text-gray-400">
              <svg className="animate-spin h-8 w-8" viewBox="0 0 24 24">
                <circle 
                  className="opacity-25" 
                  cx="12" 
                  cy="12" 
                  r="10" 
                  stroke="currentColor" 
                  strokeWidth="4"
                />
                <path 
                  className="opacity-75" 
                  fill="currentColor" 
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
              </svg>
            </div>
          </div>
        )}
        <Image
          src={src}
          alt={alt}
          fill={true}
          priority={priority}
          quality={quality}
          sizes={sizes || "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"}
          onLoad={handleLoad}
          onError={handleError}
          className={`transition-opacity duration-300 ${isLoading ? 'opacity-0' : 'opacity-100'} ${className}`}
          {...props}
        />
      </>
    );
  }

  // fill이 아닌 경우 일반적인 래퍼 사용
  return (
    <div className="relative" style={{ width, height }}>
      {isLoading && (
        <div 
          className="absolute inset-0 flex items-center justify-center bg-gray-100 animate-pulse z-10"
          aria-label="이미지 로딩 중"
        >
          <div className="text-gray-400">
            <svg className="animate-spin h-8 w-8" viewBox="0 0 24 24">
              <circle 
                className="opacity-25" 
                cx="12" 
                cy="12" 
                r="10" 
                stroke="currentColor" 
                strokeWidth="4"
              />
              <path 
                className="opacity-75" 
                fill="currentColor" 
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
          </div>
        </div>
      )}
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        quality={quality}
        sizes={sizes}
        onLoad={handleLoad}
        onError={handleError}
        className={`transition-opacity duration-300 ${isLoading ? 'opacity-0' : 'opacity-100'} ${className}`}
        {...props}
      />
    </div>
  );
}