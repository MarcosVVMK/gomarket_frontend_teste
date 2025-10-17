import React from 'react';
import { MapPin } from 'lucide-react';
import { PrimaryButton } from './PrimaryButton';

interface MarketCardProps {
  name: string;
  distance: string;
  onSelectRoute?: () => void;
  className?: string;
}

export function MarketCard({ 
  name, 
  distance, 
  onSelectRoute,
  className = '' 
}: MarketCardProps) {
  return (
    <div className={`bg-white rounded-xl border border-gray-200 p-4 shadow-lg ${className}`}>
      <div className="flex items-start justify-between mb-3">
        <div className="flex-1">
          <h3 className="mb-1">{name}</h3>
          <div className="flex items-center text-[var(--bretas-light-gray)] text-sm">
            <MapPin size={14} className="mr-1" />
            <span>{distance}</span>
          </div>
        </div>
      </div>
      
      <PrimaryButton onClick={onSelectRoute} className="py-2 text-sm">
        Selecionar rota
      </PrimaryButton>
    </div>
  );
}