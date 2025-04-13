import React from 'react';

interface SectionTitleProps {
  children: React.ReactNode;
  className?: string; // Allow passing additional classes for alignment etc.
}

const SectionTitle: React.FC<SectionTitleProps> = ({ children, className = '' }) => {
  // Define base title styles
  // Increased size, added bottom padding and primary border bottom
  const baseStyles = "text-4xl font-bold text-text-primary mb-12 pb-2 border-b-4 border-primary inline-block";

  // Combine base styles with any additional classes passed via props
  const combinedClassName = `${baseStyles} ${className}`;

  return (
    // Use a div wrapper for centering if needed via className prop (e.g., text-center)
    <div className={className ? (className.includes('text-center') ? 'text-center' : '') : ''}>
      <h2 className={combinedClassName}>
        {children}
      </h2>
    </div>
  );
};

export default SectionTitle;