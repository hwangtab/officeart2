import React from 'react';
import OptimizedImage from './OptimizedImage';

const SplashScreen = () => {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-primary"> {/* Removed flex-col */}
      {/* Wrapper to group logo and bar, apply negative margin */}
      <div className="flex flex-col items-center -mt-8"> {/* Adjust negative margin as needed */}
        {/* Simple fade-in animation for the logo */}
        <div className="animate-pulse"> {/* Using pulse for simplicity, can be refined */}
        <OptimizedImage
          src="/images/logo/logo.png"
          alt="오피스아트 로고 - 창의력과 집중력이 피어나는 작업 공간"
          width={400}
          height={106}
          priority
        />
      </div>
      {/* Loading Bar */}
        <div className="loading-bar-container">
          <div className="loading-bar"></div>
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;