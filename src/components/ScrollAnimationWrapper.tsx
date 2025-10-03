'use client';

import React, { ReactNode, useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

interface ScrollAnimationWrapperProps {
  children: ReactNode;
  className?: string;
  delay?: number; // Optional delay in milliseconds
  triggerOnce?: boolean; // Trigger animation only once
}

const ScrollAnimationWrapper: React.FC<ScrollAnimationWrapperProps> = ({
  children,
  className = '',
  delay = 0,
  triggerOnce = true,
}) => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);

    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const setPreference = (matches: boolean) => setPrefersReducedMotion(matches);
    const handleChange = (event: MediaQueryListEvent) => setPreference(event.matches);

    // Initialize with the current user preference
    setPreference(mediaQuery.matches);

    if (typeof mediaQuery.addEventListener === 'function') {
      mediaQuery.addEventListener('change', handleChange);
      return () => mediaQuery.removeEventListener('change', handleChange);
    }

    mediaQuery.addListener(handleChange);
    return () => mediaQuery.removeListener(handleChange);
  }, []);

  const { ref, inView } = useInView({
    triggerOnce: triggerOnce,
    threshold: 0.1, // Trigger when 10% of the element is visible
    // Optionally add rootMargin if needed
  });

  const shouldAnimate = hasMounted && !prefersReducedMotion;
  const delayStyle = shouldAnimate && delay > 0 ? { transitionDelay: `${delay}ms` } : undefined;
  const animationClasses = [
    shouldAnimate ? 'scroll-animate' : '',
    shouldAnimate && inView ? 'scroll-animate-visible' : '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div
      ref={ref}
      className={`${animationClasses} ${className}`.trim()}
      style={delayStyle}
    >
      {children}
    </div>
  );
};

export default ScrollAnimationWrapper;
