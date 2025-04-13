import React from 'react';
import { ElementType } from 'react';

interface SectionTitleProps {
  children: React.ReactNode;
  as?: ElementType;
  size?: 'large' | 'xlarge' | 'medium';
  iconLeft?: React.ReactNode;
  className?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({
  children,
  as: Tag = 'h2',
  size = 'large',
  className = '',
  iconLeft,
}) => {
  // Base styles: font, color, margin, padding, border, inline-block
  const baseStyles = "font-bold text-text-primary mb-12 pb-2 border-b-4 border-orange-400 inline-block";

  // Size specific styles
  const sizeStyles = {
    large: "text-4xl",
    xlarge: "text-3xl",
    medium: "text-2xl",
  };

  // Check if centering is needed from className prop
  const isCentered = className.includes('text-center');
  // Remove text-center from className prop to avoid applying it to the Tag itself
  const remainingClassName = className.replace('text-center', '').trim();

  // Combine styles for the Tag component
  // Add inline-flex and items-center if icon is present
  const tagClassName = `${baseStyles} ${sizeStyles[size]} ${remainingClassName} ${iconLeft ? 'inline-flex items-center' : ''}`.trim();

  // Wrapper class for centering
  const wrapperClassName = isCentered ? 'text-center w-full' : '';

  return (
    // Use a div wrapper for centering if text-center was passed
    <div className={wrapperClassName}>
      <Tag className={tagClassName}>
        {iconLeft && <span className="mr-2">{iconLeft}</span>} {/* Render icon if provided */}
        {children}
      </Tag>
    </div>
  );
};

export default SectionTitle;