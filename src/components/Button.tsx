import React from 'react';
// Removed unused Link import

// Define Button props
// Define Button props for <button> element
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'kakao' | 'naver' | 'outline' | 'ghost'; // Removed 'link' variant
  size?: 'sm' | 'base' | 'lg';
  children: React.ReactNode;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  className?: string;
  // href, target, rel removed as this is for <button> only
}

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'base',
  children,
  iconLeft,
  iconRight,
  className = '',
  disabled,
  type = 'button', // Default type remains 'button'
  ...props
}) => {
  // Base styles
  const baseStyles = "inline-flex items-center justify-center gap-2 font-bold rounded-lg transition duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed active:scale-95 hover:-translate-y-px"; // Added active:scale-95 and hover:-translate-y-px

  // Size styles
  const sizeStyles = {
    sm: 'py-2 px-5 text-sm',
    base: 'py-3 px-8 text-base', // Default size
    lg: 'py-3 px-8 text-lg', // Adjusted padding to px-8 for consistency
  };

  // Variant styles
  const variantStyles = {
    primary: 'bg-primary hover:bg-primary/90 text-white focus:ring-primary', // Use primary color from config
    secondary: 'bg-background-section hover:bg-background-main text-text-primary focus:ring-primary border border-border-light', // Use theme colors
    kakao: 'bg-kakao hover:opacity-90 text-black focus:ring-kakao',
    naver: 'bg-naver-green hover:bg-naver-green-dark text-white focus:ring-naver-green',
    outline: 'border border-border-light text-text-primary hover:bg-background-main focus:ring-primary',
    ghost: 'text-text-primary hover:bg-background-main focus:ring-primary',
  };

  // Combine styles
  const combinedClassName = `
    ${baseStyles}
    ${sizeStyles[size]}
    ${variantStyles[variant]}
    ${className}
  `;

  const content = (
    <>
      {iconLeft && <span className="mr-1">{iconLeft}</span>}
      {children}
      {iconRight && <span className="ml-1">{iconRight}</span>}
    </>
  );

  // Removed the logic for rendering as an anchor tag

  return (
    // Always render as a button element
    // Removed extra return statement
      <button
        type={type}
        className={combinedClassName}
        disabled={disabled}
        {...props} // Pass all remaining props compatible with button
      >
        {content}
      </button>
  );
};

export default Button;