import React from 'react';
import Link from 'next/link';

// Define LinkButton props based on Anchor attributes
interface LinkButtonProps extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> {
  variant?: 'primary' | 'secondary' | 'kakao' | 'naver' | 'outline' | 'outlineWhite' | 'ghost' | 'link'; // Added outlineWhite
  size?: 'sm' | 'base' | 'lg';
  href: string; // href is required for LinkButton
  children: React.ReactNode;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  className?: string;
  disabled?: boolean; // Use boolean for disabled state, will be converted to aria-disabled
}

// Remove React.FC and type props directly
const LinkButton = ({
  variant = 'primary',
  size = 'base',
  href,
  children,
  iconLeft,
  iconRight,
  className = '',
  disabled,
  ...props
}: LinkButtonProps): JSX.Element => { // Add return type JSX.Element
  // Base styles: Added hover transform and explicit focus offset color
  // Removed pointer-events-none from base, will be applied only to disabled span
  const baseStyles = "inline-flex items-center justify-center gap-2 font-bold rounded-lg transition duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-background-main disabled:opacity-50 disabled:cursor-not-allowed hover:-translate-y-px active:scale-95"; // Added active:scale-95

  // Size styles (same as Button)
  const sizeStyles = {
    sm: 'py-2 px-5 text-sm',
    base: 'py-3 px-8 text-base',
    lg: 'py-3 px-8 text-lg',
  };

  // Variant styles (Focus ring color remains variant-specific for now)
  const variantStyles = {
    primary: 'bg-primary hover:bg-orange-600 text-white focus:ring-primary', // Consistent with Button.tsx
    secondary: 'bg-gray-200 hover:bg-gray-300 text-text-primary focus:ring-gray-400', // Consistent with Button.tsx
    kakao: 'bg-kakao hover:opacity-90 text-black focus:ring-yellow-500',
    naver: 'bg-naver-green hover:bg-naver-green-dark text-white focus:ring-naver-green',
    outline: 'border border-border-light text-text-primary hover:bg-gray-100 focus:ring-primary',
    outlineWhite: 'border border-white text-white hover:bg-white hover:bg-opacity-10 focus:ring-white', // Added outlineWhite styles
    ghost: 'text-text-primary hover:bg-gray-100 focus:ring-primary',
    link: 'text-primary hover:underline focus:ring-primary',
  };

  // Adjust baseStyles for link variant to remove translate-y if desired
  const finalBaseStyles = variant === 'link' ? baseStyles.replace(' hover:-translate-y-px', '') : baseStyles;

  // Combine styles for active link (without disabled styles affecting pointer events)
  const activeClassName = `
    ${finalBaseStyles}
    ${sizeStyles[size]}
    ${variantStyles[variant]}
    ${className}
  `.trim().replace(/\s+/g, ' ');

  // Combine styles for disabled span (adding pointer-events-none here)
  const disabledClassName = `
    ${finalBaseStyles}
    ${sizeStyles[size]}
    ${variantStyles[variant]}
    ${className}
    opacity-50 cursor-not-allowed pointer-events-none
  `.trim().replace(/\s+/g, ' ');

  const content = (
    <>
      {iconLeft && <span className="mr-1" aria-hidden="true">{iconLeft}</span>}
      {children}
      {iconRight && <span className="ml-1" aria-hidden="true">{iconRight}</span>}
    </>
  );

  // If disabled, render a span with pointer-events-none
  if (disabled) {
    return (
      <span
        className={disabledClassName} // Use specific disabled class name
        aria-disabled="true"
        {...props}
      >
        {content}
      </span>
    );
  }

  // Render as Link component with active class name
  return (
    <Link
      href={href}
      className={activeClassName} // Use active class name
      aria-disabled={disabled} // aria-disabled is false here, but kept for consistency
      {...props}
    >
      {content}
    </Link>
  );
};

export default LinkButton;