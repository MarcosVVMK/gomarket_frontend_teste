import React, { useState } from 'react';
import { BottomNavbar } from '../components/BottomNavbar';
import { MarketCard } from '../components/MarketCard';
import { MapPin, Navigation } from 'lucide-react';

interface ExploreScreenProps {
  activeTab: 'home' | 'list' | 'explore';
  onTabChange: (tab: 'home' | 'list' | 'explore') => void;
}

interface Market {
  id: number;
  name: string;
  distance: string;
  lat: number;
  lng: number;
}

export function ExploreScreen({ activeTab, onTabChange }: ExploreScreenProps) {
  const [selectedMarket, setSelectedMarket] = useState<Market | null>(null);
  
  const markets: Market[] = [
    { id: 1, name: 'Bretas - Centro', distance: '1.2 km', lat: -19.9208, lng: -43.9378 },
    { id: 2, name: 'Supermercado BH - Savassi', distance: '2.5 km', lat: -19.9350, lng: -43.9356 },
    { id: 3, name: 'EPA - Funcionários', distance: '3.1 km', lat: -19.9280, lng: -43.9420 },
    { id: 4, name: 'Verdemar - Lourdes', distance: '4.2 km', lat: -19.9180, lng: -43.9450 },
  ];

  const handleMarkerClick = (market: Market) => {
    setSelectedMarket(market);
  };

  const handleSelectRoute = () => {
    if (selectedMarket) {
      alert(`Rota selecionada para ${selectedMarket.name}`);
      setSelectedMarket(null);
    }
  };

  return (
    <div className="min-h-screen bg-[var(--bretas-background)] pb-20">
      {/* Header */}
      <div className="bg-[var(--bretas-blue)] px-6 py-4 text-white">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <MapPin size={24} className="mr-3" />
            <div>
              <h1 className="text-white">Explorar</h1>
              <p className="text-blue-100 text-sm">Mercados próximos</p>
            </div>
          </div>
          <Navigation size={24} />
        </div>
      </div>

      <div className="relative flex-1">
        {/* Mapa Simulado */}
        <div className="h-96 bg-gray-300 relative overflow-hidden">
          {/* Representação visual do mapa */}
          <div className="absolute inset-0 bg-gradient-to-br from-green-200 to-blue-200">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              {/* Localização atual do usuário */}
              <div className="w-4 h-4 bg-[var(--bretas-blue)] rounded-full border-2 border-white shadow-lg">
                <div className="w-8 h-8 bg-[var(--bretas-blue)] opacity-30 rounded-full absolute -top-2 -left-2 animate-ping"></div>
              </div>
            </div>

            {/* Pins dos mercados */}
            {markets.map((market, index) => (
              <button
                key={market.id}
                onClick={() => handleMarkerClick(market)}
                className="absolute w-6 h-6 bg-[var(--bretas-red)] rounded-full border-2 border-white shadow-lg hover:scale-110 transition-transform"
                style={{
                  top: `${30 + index * 15}%`,
                  left: `${25 + index * 20}%`,
                }}
              >
                <div className="w-full h-full rounded-full bg-[var(--bretas-red)] flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
              </button>
            ))}
          </div>

          {/* Overlay com informações */}
          <div className="absolute top-4 left-4 right-4">
            <div className="bg-white rounded-lg p-3 shadow-lg">
              <div className="flex items-center text-sm text-[var(--bretas-light-gray)]">
                <MapPin size={16} className="mr-2 text-[var(--bretas-blue)]" />
                <span>Sua localização atual</span>
              </div>
            </div>
          </div>
        </div>

        {/* Lista de Mercados */}
        <div className="px-6 py-6">
          <h2 className="text-[var(--bretas-dark-gray)] mb-4">Mercados próximos</h2>
          <div className="space-y-4">
            {markets.map((market) => (
              <MarketCard
                key={market.id}
                name={market.name}
                distance={market.distance}
                onSelectRoute={() => {
                  alert(`Rota selecionada para ${market.name}`);
                }}
              />
            ))}
          </div>
        </div>

        {/* Card do mercado selecionado */}
        {selectedMarket && (
          <div className="fixed inset-x-0 bottom-24 px-6 z-10">
            <MarketCard
              name={selectedMarket.name}
              distance={selectedMarket.distance}
              onSelectRoute={handleSelectRoute}
              className="border-2 border-[var(--bretas-blue)]"
            />
          </div>
        )}
      </div>

      <BottomNavbar activeTab={activeTab} onTabChange={onTabChange} />
    </div>
  );
}