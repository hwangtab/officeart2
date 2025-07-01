import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string; // Allow passing additional classes
}

const Card: React.FC<CardProps> = ({ children, className = '' }) => {
  // Define base card styles
  // Add hover effects: increased shadow and primary color border
  const baseStyles = "bg-background-section p-6 rounded-lg shadow border border-border-light transition duration-300 hover:shadow-xl hover:border-primary transform hover:-translate-y-1"; // Added transform and hover:translate-y

  // Combine base styles with any additional classes passed via props
  const combinedClassName = `${baseStyles} ${className}`;

  return (
    <div className={combinedClassName}>
      {children}
    </div>
  );
};

export default Card;