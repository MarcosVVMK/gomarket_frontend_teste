import React from 'react';
import { PrimaryButton } from './PrimaryButton';

interface PromoBannerProps {
  title: string;
  subtitle?: string;
  buttonText: string;
  onButtonClick?: () => void;
  className?: string;
}

export function PromoBanner({ 
  title, 
  subtitle, 
  buttonText, 
  onButtonClick,
  className = '' 
}: PromoBannerProps) {
  return (
    <div className={`bg-[var(--bretas-red)] text-white p-6 rounded-xl ${className}`}>
      <h2 className="text-white mb-2">{title}</h2>
      
      {subtitle && (
        <p className="text-red-100 mb-4">{subtitle}</p>
      )}
      
      <PrimaryButton 
        onClick={onButtonClick}
        className="bg-[var(--bretas-blue)] hover:bg-blue-700 text-white py-3"
      >
        {buttonText}
      </PrimaryButton>
    </div>
  );
}