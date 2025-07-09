'use client';

import { useEffect } from 'react';

export default function PerformanceMetrics() {
  useEffect(() => {
    // Web Vitals 측정
    const measureWebVitals = () => {
      // CLS (Cumulative Layout Shift) 측정
      if ('PerformanceObserver' in window) {
        const observer = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            if (entry.entryType === 'layout-shift') {
              const layoutShiftEntry = entry as LayoutShift;
              if (!layoutShiftEntry.hadRecentInput) {
                console.log('CLS Score:', layoutShiftEntry.value);
              }
            }
            if (entry.entryType === 'largest-contentful-paint') {
              console.log('LCP:', entry.startTime);
            }
            if (entry.entryType === 'first-input') {
              const firstInputEntry = entry as PerformanceEventTiming;
              console.log('FID:', firstInputEntry.processingStart - firstInputEntry.startTime);
            }
          }
        });

        observer.observe({ entryTypes: ['layout-shift', 'largest-contentful-paint', 'first-input'] });
      }

      // 페이지 로드 성능 측정
      window.addEventListener('load', () => {
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        const paintEntries = performance.getEntriesByType('paint');
        
        // 주요 성능 지표 로깅
        console.log('페이지 로드 성능 지표:');
        console.log('- DOM 로드 완료:', navigation.domContentLoadedEventEnd);
        console.log('- 전체 로드 완료:', navigation.loadEventEnd);
        
        const fcp = paintEntries.find(entry => entry.name === 'first-contentful-paint');
        if (fcp) {
          console.log('- First Contentful Paint:', fcp.startTime);
        }
      });
    };

    measureWebVitals();
  }, []);

  return null; // 화면에 렌더링하지 않음
}