import React, { useState } from 'react';
import { BottomNavbar } from '../components/BottomNavbar';
import { PrimaryButton } from '../components/PrimaryButton';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Plus, Minus, Trash2, ShoppingCart } from 'lucide-react';

interface ShoppingListScreenProps {
  activeTab: 'home' | 'list' | 'explore';
  onTabChange: (tab: 'home' | 'list' | 'explore') => void;
}

interface ListItem {
  id: number;
  name: string;
  image: string;
  price: string;
  quantity: number;
}

export function ShoppingListScreen({ activeTab, onTabChange }: ShoppingListScreenProps) {
  const [items, setItems] = useState<ListItem[]>([
    {
      id: 1,
      name: 'Frutas e Vegetais Frescos',
      price: 'R$ 12,90',
      quantity: 2,
      image: 'https://images.unsplash.com/photo-1713073492755-a80c3c9efe72?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcnVpdHMlMjB2ZWdldGFibGVzJTIwZm9vZCUyMG1hcmtldHxlbnwxfHx8fDE3NTkwMDIyNzV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      id: 2,
      name: 'Produtos Lácteos',
      price: 'R$ 8,50',
      quantity: 1,
      image: 'https://images.unsplash.com/photo-1663566869071-6c926e373515?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYWlyeSUyMHByb2R1Y3RzJTIwbWlsayUyMGNoZWVzZXxlbnwxfHx8fDE3NTg5NDIxOTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      id: 3,
      name: 'Pães e Padaria',
      price: 'R$ 5,99',
      quantity: 3,
      image: 'https://images.unsplash.com/photo-1631799073388-f4c78d05b1f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmVhZCUyMGJha2VyeSUyMHByb2R1Y3RzfGVufDF8fHx8MTc1ODk3OTY4N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    }
  ]);

  const updateQuantity = (id: number, increment: boolean) => {
    setItems(items.map(item => 
      item.id === id 
        ? { ...item, quantity: increment ? item.quantity + 1 : Math.max(0, item.quantity - 1) }
        : item
    ).filter(item => item.quantity > 0));
  };

  const removeItem = (id: number) => {
    setItems(items.filter(item => item.id !== id));
  };

  const totalValue = items.reduce((sum, item) => {
    const price = parseFloat(item.price.replace('R$ ', '').replace(',', '.'));
    return sum + (price * item.quantity);
  }, 0);

  return (
    <div className="min-h-screen bg-[var(--bretas-background)] pb-20">
      {/* Header */}
      <div className="bg-[var(--bretas-blue)] px-6 py-4 text-white">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <ShoppingCart size={24} className="mr-3" />
            <div>
              <h1 className="text-white">Minha Lista</h1>
              <p className="text-blue-100 text-sm">{items.length} itens</p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-white">Total</p>
            <p className="text-blue-100">R$ {totalValue.toFixed(2).replace('.', ',')}</p>
          </div>
        </div>
      </div>

      <div className="px-6 py-6">
        {items.length === 0 ? (
          <div className="text-center py-16">
            <ShoppingCart size={64} className="mx-auto text-gray-400 mb-4" />
            <h3 className="text-[var(--bretas-dark-gray)] mb-2">Lista vazia</h3>
            <p className="text-[var(--bretas-light-gray)] mb-6">
              Adicione produtos à sua lista de compras
            </p>
            <PrimaryButton>
              Adicionar produto
            </PrimaryButton>
          </div>
        ) : (
          <>
            <div className="space-y-4 mb-6">
              {items.map((item) => (
                <div key={item.id} className="bg-white rounded-xl p-4 shadow-sm border border-gray-200">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 rounded-lg overflow-hidden bg-gray-100 flex-shrink-0">
                      <ImageWithFallback
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <h3 className="truncate mb-1">{item.name}</h3>
                      <p className="text-[var(--bretas-red)]">{item.price}</p>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <button
                        onClick={() => updateQuantity(item.id, false)}
                        className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50"
                      >
                        <Minus size={16} />
                      </button>
                      
                      <span className="w-8 text-center">{item.quantity}</span>
                      
                      <button
                        onClick={() => updateQuantity(item.id, true)}
                        className="w-8 h-8 rounded-full bg-[var(--bretas-blue)] text-white flex items-center justify-center hover:bg-blue-700"
                      >
                        <Plus size={16} />
                      </button>
                      
                      <button
                        onClick={() => removeItem(item.id)}
                        className="w-8 h-8 rounded-full text-[var(--bretas-red)] flex items-center justify-center hover:bg-red-50"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <PrimaryButton>
              Adicionar produto
            </PrimaryButton>
          </>
        )}
      </div>

      <BottomNavbar activeTab={activeTab} onTabChange={onTabChange} />
    </div>
  );
}