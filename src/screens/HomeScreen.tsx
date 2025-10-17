import React from 'react';
import { CircularStory } from '../components/CircularStory';
import { PromoBanner } from '../components/PromoBanner';
import { ProductCard } from '../components/ProductCard';
import { BottomNavbar } from '../components/BottomNavbar';
import { Bell, User } from 'lucide-react';

interface HomeScreenProps {
  activeTab: 'home' | 'list' | 'explore';
  onTabChange: (tab: 'home' | 'list' | 'explore') => void;
}

export function HomeScreen({ activeTab, onTabChange }: HomeScreenProps) {
  const markets = [
    { name: 'Bretas', image: 'https://images.unsplash.com/photo-1742812118009-87fe8cf4ebe2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXBlcm1hcmtldCUyMGxvZ28lMjBncm9jZXJ5JTIwc3RvcmV8ZW58MXx8fHwxNzU5MDAyMjMxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral' },
    { name: 'Supermercado BH', image: 'https://images.unsplash.com/photo-1742812118009-87fe8cf4ebe2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXBlcm1hcmtldCUyMGxvZ28lMjBncm9jZXJ5JTIwc3RvcmV8ZW58MXx8fHwxNzU5MDAyMjMxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral' },
    { name: 'EPA', image: 'https://images.unsplash.com/photo-1742812118009-87fe8cf4ebe2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXBlcm1hcmtldCUyMGxvZ28lMjBncm9jZXJ5JTIwc3RvcmV8ZW58MXx8fHwxNzU5MDAyMjMxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral' },
    { name: 'Verdemar', image: 'https://images.unsplash.com/photo-1742812118009-87fe8cf4ebe2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXBlcm1hcmtldCUyMGxvZ28lMjBncm9jZXJ5JTIwc3RvcmV8ZW58MXx8fHwxNzU5MDAyMjMxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral' },
  ];

  const regionalOffers = [
    {
      name: 'Frutas e Vegetais Frescos',
      price: 'R$ 12,90',
      date: 'Válido até 30/09',
      image: 'https://images.unsplash.com/photo-1713073492755-a80c3c9efe72?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcnVpdHMlMjB2ZWdldGFibGVzJTIwZm9vZCUyMG1hcmtldHxlbnwxfHx8fDE3NTkwMDIyNzV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      name: 'Produtos Lácteos',
      price: 'R$ 8,50',
      date: 'Válido até 28/09',
      image: 'https://images.unsplash.com/photo-1663566869071-6c926e373515?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYWlyeSUyMHByb2R1Y3RzJTIwbWlsayUyMGNoZWVzZXxlbnwxfHx8fDE3NTg5NDIxOTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    }
  ];

  const personalizedOffers = [
    {
      name: 'Pães e Padaria',
      price: 'R$ 5,99',
      date: 'Válido até 29/09',
      image: 'https://images.unsplash.com/photo-1631799073388-f4c78d05b1f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmVhZCUyMGJha2VyeSUyMHByb2R1Y3RzfGVufDF8fHx8MTc1ODk3OTY4N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      name: 'Produtos de Limpeza',
      price: 'R$ 15,90',
      date: 'Válido até 01/10',
      image: 'https://images.unsplash.com/photo-1626379481874-3dc5678fa8ca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGVhbmluZyUyMHByb2R1Y3RzJTIwaG91c2Vob2xkfGVufDF8fHx8MTc1ODkxMTY5MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    }
  ];

  return (
    <div className="min-h-screen bg-[var(--bretas-background)] pb-20">
      {/* Header */}
      <div className="bg-[var(--bretas-blue)] px-6 py-4 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-white">Olá, João!</h1>
            <p className="text-blue-100 text-sm">Bom dia</p>
          </div>
          <div className="flex items-center space-x-4">
            <Bell size={24} />
            <User size={24} />
          </div>
        </div>
      </div>

      <div className="px-6">
        {/* Stories */}
        <div className="py-6">
          <h2 className="text-[var(--bretas-dark-gray)] mb-4">Mercados na sua região</h2>
          <div className="flex space-x-4 overflow-x-auto pb-2">
            {markets.map((market, index) => (
              <CircularStory
                key={index}
                name={market.name}
                image={market.image}
                className="flex-shrink-0"
              />
            ))}
          </div>
        </div>

        {/* Banner de Promoção */}
        <PromoBanner
          title="Super Ofertas da Semana!"
          subtitle="Até 50% off em produtos selecionados"
          buttonText="Ver ofertas"
          className="mb-6"
        />

        {/* Ofertas na Região */}
        <div className="mb-6">
          <h2 className="text-[var(--bretas-dark-gray)] mb-4">Ofertas na sua região</h2>
          <div className="flex space-x-4 overflow-x-auto pb-2">
            {regionalOffers.map((product, index) => (
              <ProductCard
                key={index}
                name={product.name}
                price={product.price}
                date={product.date}
                image={product.image}
                className="w-48 flex-shrink-0"
              />
            ))}
          </div>
        </div>

        {/* Ofertas Personalizadas */}
        <div className="mb-6">
          <h2 className="text-[var(--bretas-dark-gray)] mb-4">Ofertas para você</h2>
          <div className="flex space-x-4 overflow-x-auto pb-2">
            {personalizedOffers.map((product, index) => (
              <ProductCard
                key={index}
                name={product.name}
                price={product.price}
                date={product.date}
                image={product.image}
                className="w-48 flex-shrink-0"
              />
            ))}
          </div>
        </div>
      </div>

      <BottomNavbar activeTab={activeTab} onTabChange={onTabChange} />
    </div>
  );
}