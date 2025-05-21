import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

interface SelectOption {
  value: string | number;
  label: string;
}

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  options: SelectOption[];
  error?: string;
  placeholder?: string;
}

const Select: React.FC<SelectProps> = ({ label, id, options, error, className = '', placeholder, ...restHtmlProps }) => {
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
      <select
        id={id}
        className={`block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm ${error ? 'border-red-500' : ''} ${dir === 'rtl' ? 'text-right' : 'text-left'} ${className}`}
        {...restHtmlProps}
      >
        {placeholder && <option value="" disabled selected={restHtmlProps.value === undefined || restHtmlProps.value === ""}>{placeholder}</option>}
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && <p className={`mt-1 text-xs text-red-600 ${dir === 'rtl' ? 'text-right' : 'text-left'}`}>{error}</p>}
    </div>
  );
};

export default Select;