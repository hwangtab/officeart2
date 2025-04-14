import React from 'react';
import { ElementType } from 'react';

interface SectionTitleProps {
  children: React.ReactNode;
  as?: ElementType;
  size?: 'large' | 'xlarge' | 'medium';
  iconLeft?: React.ReactNode;
  className?: string;
}

const SectionTitle = ({
  children,
  as: Tag = 'h2',
  size = 'large',
  className = '',
  iconLeft,
}: SectionTitleProps): JSX.Element => {
  // Base styles for the Tag (removed border, padding, inline-block)
  const baseTagStyles = "font-bold text-text-primary";

  // Size specific styles for the Tag
  const sizeStyles = {
    large: "text-4xl",
    xlarge: "text-3xl",
    medium: "text-2xl",
  };

  // Check if centering is needed from className prop
  const isCentered = className.includes('text-center');
  // Remove text-center from className prop as it's handled differently now
  const remainingClassName = className.replace('text-center', '').trim();

  // Layout styles for the Tag: inline-flex with column direction
  // items-center is added for centered text alignment within the flex container
  const tagLayoutStyles = isCentered ? 'inline-flex flex-col items-center' : 'inline-flex flex-col';

  // Combine styles for the Tag component
  const tagClassName = `${baseTagStyles} ${sizeStyles[size]} ${remainingClassName} ${tagLayoutStyles}`.trim();

  // Styles for the text span inside the Tag
  const textSpanStyles = iconLeft ? 'inline-flex items-center' : '';

  // Styles for the underline span
  const underlineStyles = "block h-1 bg-orange-400 mt-2 w-full"; // w-full makes it match the parent (Tag) width

  // Wrapper class for centering the entire component block if needed
  // mb-12 is moved here to apply margin to the whole block
  const wrapperClassName = isCentered ? 'text-center w-full mb-12' : 'mb-12';

  return (
    // Wrapper div handles centering and bottom margin
    <div className={wrapperClassName}>
      {/* Tag now acts as a flex container for text and underline */}
      <Tag className={tagClassName}>
        {/* Span to wrap the text content */}
        <span className={textSpanStyles}>
          {iconLeft && <span className="mr-2">{iconLeft}</span>}
          {children}
        </span>
        {/* Span for the underline */}
        <span className={underlineStyles}></span>
      </Tag>
    </div>
  );
};

export default SectionTitle;