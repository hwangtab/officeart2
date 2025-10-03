import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string; // Allow passing additional classes
}

const Card: React.FC<CardProps> = ({ children, className = '' }) => {
  // Define enhanced card styles with improved depth and hover effects
  const baseStyles = "bg-background-section p-6 rounded-xl shadow-card border border-border-light transition-all duration-300 ease-out hover:shadow-card-hover hover:border-primary/30 transform hover:scale-[1.02] group";

  // Combine base styles with any additional classes passed via props
  const combinedClassName = `${baseStyles} ${className}`;

  return (
    <div className={combinedClassName}>
      {children}
    </div>
  );
};

export default Card;
