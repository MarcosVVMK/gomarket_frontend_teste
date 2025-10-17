import React from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { PrimaryButton } from './PrimaryButton';

interface ProductCardProps {
  image: string;
  name: string;
  price: string;
  date?: string;
  onAddToList?: () => void;
  className?: string;
}

export function ProductCard({ 
  image, 
  name, 
  price, 
  date, 
  onAddToList,
  className = '' 
}: ProductCardProps) {
  return (
    <div className={`bg-white rounded-xl border border-gray-200 p-4 shadow-sm ${className}`}>
      <div className="w-full h-32 mb-3 rounded-lg overflow-hidden bg-gray-100">
        <ImageWithFallback
          src={image}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>
      
      <h3 className="mb-2 line-clamp-2">{name}</h3>
      
      <p className="text-[var(--bretas-red)] mb-1">{price}</p>
      
      {date && (
        <p className="text-[var(--bretas-light-gray)] text-sm mb-3">{date}</p>
      )}
      
      <PrimaryButton onClick={onAddToList} className="py-2 text-sm">
        Adicionar à lista
      </PrimaryButton>
    </div>
  );
}