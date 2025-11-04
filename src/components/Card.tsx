import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string; // Allow passing additional classes
  paddingSize?: 'base' | 'large'; // Control padding: 'base' = p-6, 'large' = p-8
}

const Card: React.FC<CardProps> = ({ children, className = '', paddingSize = 'base' }) => {
  // Select padding based on prop
  const padding = paddingSize === 'large' ? 'p-8' : 'p-6';

  // Define enhanced card styles with simplified hover effects
  const baseStyles = `bg-background-section ${padding} rounded-xl shadow-card border border-border-light transition-all duration-200 ease-out hover:shadow-md hover:border-gray-300 group`;

  // Combine base styles with any additional classes passed via props
  const combinedClassName = `${baseStyles} ${className}`;

  return (
    <div className={combinedClassName}>
      {children}
    </div>
  );
};

export default Card;
