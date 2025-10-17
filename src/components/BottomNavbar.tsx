import React from 'react';
import { Home, List, Search } from 'lucide-react';

interface BottomNavbarProps {
  activeTab: 'home' | 'list' | 'explore';
  onTabChange: (tab: 'home' | 'list' | 'explore') => void;
}

export function BottomNavbar({ activeTab, onTabChange }: BottomNavbarProps) {
  const tabs = [
    { id: 'home' as const, icon: Home, label: 'Home' },
    { id: 'list' as const, icon: List, label: 'Lista' },
    { id: 'explore' as const, icon: Search, label: 'Explorar' },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-2 safe-area-pb">
      <div className="flex justify-around items-center max-w-md mx-auto">
        {tabs.map(({ id, icon: Icon, label }) => (
          <button
            key={id}
            onClick={() => onTabChange(id)}
            className={`flex flex-col items-center py-2 px-4 rounded-lg transition-colors ${
              activeTab === id 
                ? 'text-[var(--bretas-blue)]' 
                : 'text-[var(--bretas-light-gray)]'
            }`}
          >
            <Icon size={24} />
            <span className="text-xs mt-1">{label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}