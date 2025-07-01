'use client';

import React, { ReactNode } from 'react';
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
  const { ref, inView } = useInView({
    triggerOnce: triggerOnce,
    threshold: 0.1, // Trigger when 10% of the element is visible
    // Optionally add rootMargin if needed
  });

  const delayStyle = delay > 0 ? { transitionDelay: `${delay}ms` } : {};

  return (
    <div
      ref={ref}
      className={`scroll-animate ${inView ? 'scroll-animate-visible' : ''} ${className}`}
      style={delayStyle}
    >
      {children}
    </div>
  );
};

export default ScrollAnimationWrapper;