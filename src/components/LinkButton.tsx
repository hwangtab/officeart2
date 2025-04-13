import React from 'react';
import Link from 'next/link';

// Define LinkButton props based on Anchor attributes
interface LinkButtonProps extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> {
  variant?: 'primary' | 'secondary' | 'kakao' | 'naver' | 'outline' | 'ghost' | 'link';
  size?: 'sm' | 'base' | 'lg';
  href: string; // href is required for LinkButton
  children: React.ReactNode;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  className?: string;
  disabled?: boolean; // Use boolean for disabled state, will be converted to aria-disabled
}

const LinkButton: React.FC<LinkButtonProps> = ({
  variant = 'primary',
  size = 'base',
  href,
  children,
  iconLeft,
  iconRight,
  className = '',
  disabled,
  ...props
}) => {
  // Base styles (same as Button)
  const baseStyles = "inline-flex items-center justify-center gap-2 font-bold rounded-lg transition duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"; // Note: disabled styles might not work directly on <a>

  // Size styles (same as Button)
  const sizeStyles = {
    sm: 'py-2 px-5 text-sm',
    base: 'py-3 px-8 text-base',
    lg: 'py-3 px-8 text-lg', // Adjusted padding to px-8 for consistency
  };

  // Variant styles (same as Button)
  const variantStyles = {
    primary: 'bg-blue-700 hover:bg-blue-800 text-white focus:ring-primary-blue',
    secondary: 'bg-gray-600 hover:bg-gray-700 text-white focus:ring-gray-500',
    kakao: 'bg-yellow-400 hover:bg-yellow-500 text-black focus:ring-yellow-500',
    naver: 'bg-naver-green hover:bg-naver-green-dark text-white focus:ring-naver-green',
    outline: 'border border-gray-300 text-dark-gray hover:bg-gray-100 focus:ring-primary-blue',
    ghost: 'text-dark-gray hover:bg-gray-100 focus:ring-primary-blue',
    link: 'text-primary-blue hover:underline focus:ring-primary-blue',
  };

  // Combine styles
  const combinedClassName = `
    ${baseStyles}
    ${sizeStyles[size]}
    ${variantStyles[variant]}
    ${className}
    ${disabled ? 'opacity-50 cursor-not-allowed' : ''} // Manually apply disabled styles
  `;

  const content = (
    <>
      {iconLeft && <span className="mr-1" aria-hidden="true">{iconLeft}</span>}
      {children}
      {iconRight && <span className="ml-1" aria-hidden="true">{iconRight}</span>}
    </>
  );

  // If disabled, prevent click and don't wrap with Link
  if (disabled) {
    return (
      <span
        className={combinedClassName}
        aria-disabled="true"
        {...props} // Pass other props like target, rel if needed, though they might not be relevant when disabled
      >
        {content}
      </span>
    );
  }

  // Render as Link component (which now behaves like an anchor)
  return (
    <Link
      href={href}
      className={combinedClassName}
      aria-disabled={disabled} // Use aria-disabled for links
      {...props} // Pass remaining anchor attributes (target, rel, etc.)
    >
      {content}
    </Link>
  );
};

export default LinkButton;