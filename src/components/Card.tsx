import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string; // Allow passing additional classes
}

const Card: React.FC<CardProps> = ({ children, className = '' }) => {
  // Define enhanced card styles with simplified hover effects
  const baseStyles = "bg-background-section p-6 rounded-xl shadow-card border border-border-light transition-all duration-200 ease-out hover:shadow-md hover:border-gray-300 group";

  // Combine base styles with any additional classes passed via props
  const combinedClassName = `${baseStyles} ${className}`;

  return (
    <div className={combinedClassName}>
      {children}
    </div>
  );
};

export default Card;
