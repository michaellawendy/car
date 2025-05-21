import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

const Input: React.FC<InputProps> = ({ label, id, error, className = '', ...props }) => {
  const { dir } = useLanguage();
  return (
    <div className="w-full">
      {label && (
        <label 
          htmlFor={id} 
          className={`block text-sm font-medium text-gray-700 mb-1 ${dir === 'rtl' ? 'text-right' : 'text-left'}`}
        >
          {label}
        </label>
      )}
      <input
        id={id}
        className={`block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm ${error ? 'border-red-500' : ''} ${dir === 'rtl' ? 'text-right' : 'text-left'} ${className}`}
        {...props}
      />
      {error && <p className={`mt-1 text-xs text-red-600 ${dir === 'rtl' ? 'text-right' : 'text-left'}`}>{error}</p>}
    </div>
  );
};

export default Input;