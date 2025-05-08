import React from 'react';
import Image from 'next/image';

const SplashScreen = () => {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-primary"> {/* Removed flex-col */}
      {/* Wrapper to group logo and bar, apply negative margin */}
      <div className="flex flex-col items-center -mt-8"> {/* Adjust negative margin as needed */}
        {/* Simple fade-in animation for the logo */}
        <div className="animate-pulse"> {/* Using pulse for simplicity, can be refined */}
        <Image
          src="/images/logo/logo.png"
          alt="오피스아트 로고"
          width={400} // Increased size by 2x
          height={106} // Increased size by 2x
          priority // Load logo quickly
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