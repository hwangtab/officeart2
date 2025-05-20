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
      // Add level variant for semantic styling
      level: {
        page: 'text-3xl md:text-4xl mb-12', // h1
        section: 'text-2xl md:text-3xl mb-8', // h2
        subsection: 'text-xl md:text-2xl mb-4', // h3
        card: 'text-lg md:text-xl mb-2', // h4 in cards
        footer: 'text-lg mb-2', // h4 in footer
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

// Define level options
type Level = 'page' | 'section' | 'subsection' | 'card' | 'footer';

// Define component props, extending cva variants
interface SectionTitleProps extends Omit<VariantProps<typeof sectionTitleVariants>, 'level'> { // Omit level from direct props
  children: ReactNode;
  icon?: ReactNode;
  as?: ElementType;
  level?: Level; // Add level prop
  underline?: boolean; // Keep underline as an optional override
  className?: string;
  verticalCenter?: boolean;
}

// Define default underline behavior based on level
const levelUnderlineDefaults: Record<Level, boolean> = {
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
  const shouldUnderline = underline === undefined ? levelUnderlineDefaults[level] : underline;

  // Generate the final className by merging cva variants and custom className
  const finalClassName = twMerge(
    sectionTitleVariants({ level, align, className }) // Pass level and align to cva
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