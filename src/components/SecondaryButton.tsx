import React from 'react';

interface SecondaryButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  variant?: 'gray' | 'white';
}

export function SecondaryButton({ 
  children, 
  onClick, 
  disabled = false, 
  className = '',
  type = 'button',
  variant = 'white'
}: SecondaryButtonProps) {
  const baseClasses = 'w-full py-4 px-6 rounded-xl border transition-all duration-200 active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed';
  
  const variantClasses = variant === 'gray' 
    ? 'bg-[var(--bretas-dark-gray)] text-white border-[var(--bretas-dark-gray)] hover:bg-gray-800'
    : 'bg-white text-[var(--bretas-dark-gray)] border-gray-300 hover:bg-gray-50';

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${variantClasses} ${className}`}
    >
      {children}
    </button>
  );
}