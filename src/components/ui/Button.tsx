import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  children, 
  ...props 
}) => {
  const baseClasses = 'font-light tracking-wide transition-all duration-500 rounded-full border focus:outline-none focus:ring-2 focus:ring-amber-400/50 relative overflow-hidden group';
  
  const variants = {
    primary: 'bg-gradient-to-r from-amber-400 to-amber-600 text-black border-transparent hover:from-amber-300 hover:to-amber-500 hover:shadow-lg hover:shadow-amber-400/25 transform hover:scale-105',
    secondary: 'bg-transparent text-white border-slate-600 hover:border-amber-400 hover:text-amber-400'
  };
  
  const sizes = {
    sm: 'px-6 py-2 text-sm',
    md: 'px-8 py-3 text-base',
    lg: 'px-12 py-4 text-lg'
  };

  return (
    <button 
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      <span className="relative z-10">{children}</span>
      {variant === 'primary' && (
        <div className="absolute inset-0 bg-gradient-to-r from-amber-300 to-amber-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      )}
    </button>
  );
};

export default Button;