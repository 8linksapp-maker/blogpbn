import React from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps {
  children?: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'; // Added ghost for header compatibility
  size?: 'sm' | 'md' | 'lg'; // Kept size for compatibility
  onClick?: () => void;
  className?: string;
  to?: string; // Kept to for compatibility
  type?: "button" | "submit" | "reset";
}

export function Button({ 
  children, 
  variant = 'primary',
  size = 'md', 
  onClick,
  className = '',
  to,
  type = "button"
}: ButtonProps) {
  
  const baseStyles = "inline-flex items-center justify-center rounded-lg font-medium transition-all";
  
  const variants = {
    primary: 'bg-primary text-white hover:opacity-90',
    secondary: 'bg-secondary text-primary hover:bg-gray-100 border border-gray-200', // Adjusted secondary for white theme
    outline: 'border-2 border-primary text-primary hover:bg-primary hover:text-white',
    ghost: 'bg-transparent text-gray-600 hover:bg-gray-100 hover:text-gray-900',
  };

  const sizes = {
    sm: "px-3 py-1 text-sm",
    md: "px-4 py-2",
    lg: "px-6 py-3 text-lg",
  };

  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={classes}
    >
      {children}
    </button>
  );
}