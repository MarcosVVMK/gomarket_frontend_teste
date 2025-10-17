import React from 'react';

interface InputProps {
  label: string;
  type?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  className?: string;
}

export function Input({ 
  label, 
  type = 'text', 
  placeholder, 
  value, 
  onChange, 
  required = false,
  className = '' 
}: InputProps) {
  return (
    <div className={`mb-4 ${className}`}>
      <label className="block text-[var(--bretas-dark-gray)] mb-2">
        {label}
        {required && <span className="text-[var(--bretas-red)] ml-1">*</span>}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        className="w-full p-4 border border-gray-300 rounded-xl bg-[var(--input-background)] focus:outline-none focus:border-[var(--bretas-blue)] focus:ring-2 focus:ring-blue-100 transition-all"
      />
    </div>
  );
}