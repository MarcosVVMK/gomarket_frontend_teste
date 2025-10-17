import React, { useState } from 'react';
import { Input } from '../components/Input';
import { PrimaryButton } from '../components/PrimaryButton';

interface SignupScreenProps {
  onSignup: () => void;
  onLoginClick: () => void;
}

export function SignupScreen({ onSignup, onLoginClick }: SignupScreenProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    password: ''
  });

  const handleInputChange = (field: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, [field]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSignup();
  };

  return (
    <div className="min-h-screen bg-[var(--bretas-background)] px-6 py-8">
      <div className="max-w-md mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-[var(--bretas-blue)] mb-2">Bem-vindo!</h1>
          <p className="text-[var(--bretas-light-gray)]">
            Crie sua conta para começar suas compras
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-1">
          <Input
            label="Nome completo"
            placeholder="Digite seu nome"
            value={formData.name}
            onChange={handleInputChange('name')}
            required
          />

          <Input
            label="Telefone"
            type="tel"
            placeholder="(00) 00000-0000"
            value={formData.phone}
            onChange={handleInputChange('phone')}
            required
          />

          <Input
            label="E-mail"
            type="email"
            placeholder="seu@email.com"
            value={formData.email}
            onChange={handleInputChange('email')}
            required
          />

          <Input
            label="Senha"
            type="password"
            placeholder="Mínimo 6 caracteres"
            value={formData.password}
            onChange={handleInputChange('password')}
            required
          />

          <div className="pt-4">
            <PrimaryButton type="submit">
              Criar conta
            </PrimaryButton>
          </div>
        </form>

        <div className="text-center mt-6">
          <button
            onClick={onLoginClick}
            className="text-[var(--bretas-light-gray)] hover:text-[var(--bretas-blue)] transition-colors"
          >
            Já tenho conta
          </button>
        </div>
      </div>
    </div>
  );
}