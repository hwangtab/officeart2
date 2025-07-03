import React, { ElementType, ReactNode } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';

// Define variants using cva
const sectionTitleVariants = cva(
  'font-bold', // Base style
  {
    variants: {
      align: {
        left: 'text-left',
        center: 'text-center',
        right: 'text-right',
      },
      // Add level variant for semantic styling (새 타이포그래피 토큰 적용)
      level: {
        page: 'text-display mb-12', // h1 - 히어로 제목용
        section: 'text-heading-1 mb-8', // h2 - 섹션 제목용
        subsection: 'text-heading-2 mb-4', // h3 - 서브섹션 제목용
        card: 'text-heading-3 mb-2', // h4 - 카드 제목용
        footer: 'text-heading-4 mb-2', // h4 - 푸터 제목용
        // Add more levels if needed
      },
      // underline is now an optional override, handled separately
    },
    // Default variants
    defaultVariants: {
      align: 'left',
      level: 'section', // Default to section level
    },
  }
);


// Define component props, extending cva variants directly
interface SectionTitleProps extends VariantProps<typeof sectionTitleVariants> {
  children: ReactNode;
  icon?: ReactNode;
  as?: ElementType;
  underline?: boolean; // Keep underline as an optional override
  className?: string;
  verticalCenter?: boolean;
}

// Define default underline behavior based on level
const levelUnderlineDefaults = {
  page: false,
  section: true, // Sections have underline by default
  subsection: false,
  card: false,
  footer: false,
};

const SectionTitle = ({
  children,
  icon,
  as: Tag = 'h2', // Default tag remains h2, but should often match level
  level = 'section', // Default level prop
  align,
  underline, // Keep underline prop
  className,
  verticalCenter,
  ...props
}: SectionTitleProps): JSX.Element => {

  // Determine if underline should be applied
  const shouldUnderline = underline === undefined ? levelUnderlineDefaults[level || 'section'] : underline;

  // Generate the final className by merging cva variants and custom className
  const finalClassName = twMerge(
    sectionTitleVariants({ level, align }), // Only pass level and align to cva
    className // Merge additional className separately
  );

  return (
    // Note: The 'as' prop should ideally match the semantic level,
    // e.g., level='page' -> as='h1', level='section' -> as='h2' etc.
    // This needs to be handled correctly in the usage sites.
    <Tag className={finalClassName} {...props}>
      <span className="inline-flex items-center gap-2"> {/* Layout wrapper */}
        {icon} {/* Render icon */}
        {/* Apply underline and vertical centering styles conditionally */}
        <span className={twMerge(
          shouldUnderline ? 'border-b-4 border-primary' : '', // Apply underline based on logic
          verticalCenter ? 'flex items-center h-full' : ''
        )}>
          {children}
        </span>
      </span>
    </Tag>
  );
};

export default SectionTitle;