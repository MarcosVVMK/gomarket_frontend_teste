import React, { useState } from 'react';
import { Input } from '../components/Input';
import { PrimaryButton } from '../components/PrimaryButton';
import { SecondaryButton } from '../components/SecondaryButton';
import { MapPin } from 'lucide-react';

interface AddressScreenProps {
  onSave: () => void;
  onSkip: () => void;
}

export function AddressScreen({ onSave, onSkip }: AddressScreenProps) {
  const [formData, setFormData] = useState({
    street: '',
    number: '',
    neighborhood: '',
    city: '',
    zipCode: ''
  });

  const handleInputChange = (field: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, [field]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave();
  };

  return (
    <div className="min-h-screen bg-[var(--bretas-background)] px-6 py-8">
      <div className="max-w-md mx-auto">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-[var(--bretas-blue)] rounded-full flex items-center justify-center mx-auto mb-4">
            <MapPin size={24} className="text-white" />
          </div>
          <h1 className="text-[var(--bretas-dark-gray)] mb-2">Cadastre seu endereço</h1>
          <p className="text-[var(--bretas-light-gray)]">
            Para encontrar ofertas próximas a você
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-1">
          <Input
            label="Rua"
            placeholder="Nome da rua"
            value={formData.street}
            onChange={handleInputChange('street')}
          />

          <Input
            label="Número"
            placeholder="Número"
            value={formData.number}
            onChange={handleInputChange('number')}
          />

          <Input
            label="Bairro"
            placeholder="Nome do bairro"
            value={formData.neighborhood}
            onChange={handleInputChange('neighborhood')}
          />

          <Input
            label="Cidade"
            placeholder="Nome da cidade"
            value={formData.city}
            onChange={handleInputChange('city')}
          />

          <Input
            label="CEP"
            placeholder="00000-000"
            value={formData.zipCode}
            onChange={handleInputChange('zipCode')}
          />

          <div className="pt-4 space-y-3">
            <PrimaryButton type="submit">
              Salvar endereço
            </PrimaryButton>
            
            <SecondaryButton onClick={onSkip}>
              Agora não
            </SecondaryButton>
          </div>
        </form>
      </div>
    </div>
  );
}