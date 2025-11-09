'use client';

import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';
import { AiOutlineLoading } from 'react-icons/ai'; // react-icons 사용

// 1. CVA 정의 (스타일 가이드라인 기반)
const buttonVariants = cva(
  // Base styles (모든 버튼 공통)
  'inline-flex items-center justify-center font-bold rounded-lg transition duration-300 ease-in-out focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed',
  {
    variants: {
      // Variant 스타일 (disabled: 스타일 추가)
      variant: {
        primary: 'bg-primary text-text-on-primary hover:bg-orange-600 focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:bg-primary', // disabled:bg-primary 추가
        secondary: 'bg-gray-200 text-text-primary hover:bg-gray-300 focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 disabled:bg-gray-200', // disabled:bg-gray-200 추가
        outline: 'border border-border-light text-text-primary bg-transparent hover:bg-gray-100 focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:border-border-light disabled:bg-transparent', // disabled 스타일 추가
        outlineWhite: 'border border-white text-white bg-background-section hover:bg-gray-100 hover:text-text-primary focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-background-section disabled:border-white disabled:text-white/50 disabled:bg-background-section', // disabled 스타일 추가
        ghost: 'text-text-primary bg-transparent hover:bg-gray-100 focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:text-text-primary disabled:bg-transparent', // disabled 스타일 추가
        link: 'text-accent-blue bg-transparent underline underline-offset-4 font-medium hover:text-blue-600 hover:no-underline focus:ring-2 focus:ring-accent-blue focus:ring-offset-2 focus:rounded-sm disabled:text-accent-blue disabled:bg-transparent', // disabled 스타일 추가
        kakao: 'bg-kakao text-black hover:brightness-95 focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 disabled:bg-kakao', // disabled:bg-kakao 추가
        naver: 'bg-naver-green text-white hover:bg-naver-green-dark focus:ring-2 focus:ring-naver-green focus:ring-offset-2 disabled:bg-naver-green', // disabled:bg-naver-green 추가
      },
      // Size 스타일
      size: {
        sm: 'py-1.5 px-4 text-sm',
        base: 'py-2.5 px-6 text-base',
        lg: 'py-3 px-8 text-lg',
        xl: 'py-4 px-10 text-xl font-extrabold',
      },
      // Loading 상태
      isLoading: {
        true: 'cursor-wait', // 로딩 중일 때 커서 변경
      },
      // 아이콘 유무 (간격 조절용) - compoundVariants에서 사용
      hasIconLeft: { true: '' },
      hasIconRight: { true: '' },
    },
    // 복합 Variants (Compound Variants) - disabled 관련 항목 제거
    compoundVariants: [
      // 아이콘이 있을 때 gap 적용
      { hasIconLeft: true, className: 'gap-2' },
      { hasIconRight: true, className: 'gap-2' },
      // Loading 상태일 때 특정 variant 스타일 조정 (필요시 추가)
      // 예: { variant: 'primary', isLoading: true, className: 'bg-orange-700' }
      // Disabled 관련 compoundVariants 제거됨
    ],
    // 기본값 설정
    defaultVariants: {
      variant: 'primary',
      size: 'base',
    },
  }
);

// 2. 컴포넌트 Props 정의
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  isLoading?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

// 3. UnifiedButton 컴포넌트 구현
const UnifiedButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      isLoading,
      iconLeft,
      iconRight,
      children,
      disabled, // disabled prop 받기
      ...props
    },
    ref
  ) => {
    const actualIsLoading = isLoading ?? false; // isLoading이 undefined일 경우 false로 처리
    const actualDisabled = disabled || actualIsLoading; // 로딩 중일 때도 비활성화

    const buttonClasses = twMerge(
      buttonVariants({
        variant,
        size,
        isLoading: actualIsLoading,
        hasIconLeft: !!iconLeft, // 아이콘 유무를 boolean으로 전달
        hasIconRight: !!iconRight,
        // disabled 상태는 HTML 속성으로 처리되므로 cva variant에는 직접 전달하지 않음
        // compoundVariants에서 disabled:true 조건을 사용
        className, // 사용자 정의 클래스 병합
      })
    );

    return (
      <button
        ref={ref}
        className={buttonClasses}
        disabled={actualDisabled} // 실제 비활성화 상태 적용
        {...props}
      >
        {actualIsLoading && (
          <AiOutlineLoading className="animate-spin" aria-hidden="true" />
        )}
        {/* 로딩 중이 아닐 때만 아이콘과 자식 요소 렌더링 */}
        {!actualIsLoading && iconLeft && <span>{iconLeft}</span>}
        {!actualIsLoading && children && <span>{children}</span>}
        {!actualIsLoading && iconRight && <span>{iconRight}</span>}
      </button>
    );
  }
);

UnifiedButton.displayName = 'UnifiedButton';

export { UnifiedButton, buttonVariants };