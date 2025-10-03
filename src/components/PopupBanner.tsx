'use client';

import { useState, useEffect, useMemo } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import LinkButton from './LinkButton';

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}


interface PopupBannerProps {
  onClose: () => void;
}

const PopupBanner = ({ onClose }: PopupBannerProps) => {
  
  const [isVisible, setIsVisible] = useState(false);
  const [dontShowAgain, setDontShowAgain] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    const hideUntil = localStorage.getItem('popupBannerHideUntil');
    if (hideUntil && new Date(hideUntil) > new Date()) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
  }, []);

  const trackEvent = (action: string, params: Record<string, string>) => {
    if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
      window.gtag('event', action, params);
    }
  };

  const handleClose = () => {
    if (dontShowAgain) {
      const hideUntil = new Date();
      hideUntil.setHours(hideUntil.getHours() + 24);
      localStorage.setItem('popupBannerHideUntil', hideUntil.toISOString());
    }
    setIsVisible(false);
    setTimeout(onClose, 300); // 애니메이션 완료 후 onClose 호출
  };

  const handleApplyClick = () => {
    trackEvent('popup_apply_click', { location: 'hero_promo', label: 'support_program' });
  };

  const handleKakaoClick = () => {
    trackEvent('popup_kakao_click', { location: 'hero_promo', label: 'kakao_consult' });
  };

  const openSupportProgram = () => {
    handleApplyClick();
    window.open('https://docs.google.com/forms/d/e/1FAIpQLSfGOotSqq_eXu-atuxNb06tyAYGG3DDkQrp5MUm99PFKikENw/viewform?usp=header', '_blank');
  };

  const containerClassName = useMemo(
    () =>
      'fixed inset-x-4 bottom-6 md:bottom-auto md:top-20 md:left-10 md:right-auto z-50 w-auto md:max-w-md rounded-2xl bg-white/80 md:bg-white/70 backdrop-blur-lg shadow-xl border border-white/40 md:border-transparent',
    []
  );

  if (!isVisible) return null;

  return (
      <AnimatePresence>
        <motion.div
          drag
          dragConstraints={{
            top: -100,
            left: -100,
            right: 100,
            bottom: 100
          }}
          dragElastic={0.1}
          onDragStart={() => setIsDragging(true)}
          onDragEnd={() => setIsDragging(false)}
          className={containerClassName}
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
          transition={{ duration: 0.3 }}
          role="banner"
          aria-labelledby="popup-title"
        >
          <div className="p-6 space-y-5">
            <div className="mt-2 text-center">
              <motion.div
                onClick={() => {
                  if (!isDragging) {
                    openSupportProgram();
                  }
                }}
                className="cursor-pointer"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
            <h2 id="popup-title" className="text-2xl font-bold text-gray-800 mb-2">
              2025 지역 예술인 창작환경 지원사업
            </h2>
                        <p className="text-lg text-gray-600 font-medium">
              영등포·마포·구로·동작·양천구 등 인근 예술가 대상
              <br />
              프리미엄 작업 공간, 참가비 전액 환급 혜택
              <br />
              <strong>선착순 10명 (마감시 공지)</strong>
            </p>
              </motion.div>
            </div>

          <div className="flex flex-col gap-3">
            <LinkButton
              href="https://docs.google.com/forms/d/e/1FAIpQLSfGOotSqq_eXu-atuxNb06tyAYGG3DDkQrp5MUm99PFKikENw/viewform?usp=header"
              onClick={handleApplyClick}
              variant="primary"
              size="base"
              className="w-full"
              target="_blank"
              rel="noopener noreferrer"
            >
              지원 프로그램 신청하기
            </LinkButton>
            <LinkButton
              href="https://open.kakao.com/me/offceart"
              variant="kakao"
              size="base"
              className="w-full"
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleKakaoClick}
            >
              카카오톡으로 상담 받기
            </LinkButton>
          </div>

          <div className="mt-6 flex justify-center items-center space-x-4">
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={dontShowAgain}
                onChange={(e) => setDontShowAgain(e.target.checked)}
                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
              />
              <span className="text-sm text-gray-500">24시간 동안 보지 않기</span>
            </label>
            
            <button
              onClick={handleClose}
              className="rounded-full bg-gray-100 p-1 text-gray-500 hover:bg-gray-200 hover:text-gray-700"
              aria-label="팝업 닫기"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
        </motion.div>
      </AnimatePresence>
  );
};

export default PopupBanner;
