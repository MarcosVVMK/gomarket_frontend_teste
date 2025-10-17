import React from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface CircularStoryProps {
  image: string;
  name: string;
  onClick?: () => void;
  className?: string;
}

export function CircularStory({ 
  image, 
  name, 
  onClick,
  className = '' 
}: CircularStoryProps) {
  return (
    <div 
      className={`flex flex-col items-center cursor-pointer ${className}`}
      onClick={onClick}
    >
      <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-[var(--bretas-blue)] p-1 mb-2">
        <div className="w-full h-full rounded-full overflow-hidden bg-gray-100">
          <ImageWithFallback
            src={image}
            alt={name}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      
      <span className="text-xs text-center text-[var(--bretas-dark-gray)] max-w-[70px] leading-tight">
        {name}
      </span>
    </div>
  );
}