

import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';
import { translations, AppTranslationKeys } from '../translations'; // Adjust path as necessary, import AppTranslationKeys
import { Language } from '../types'; // Import Language from the shared types.ts

// Fix: Re-export the Language enum so it can be imported by other modules from this file.
export { Language };

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: keyof AppTranslationKeys, replacements?: Record<string, string | number>) => string; // Use AppTranslationKeys
  dir: 'ltr' | 'rtl';
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useLocalStorage<Language>('appLanguage', Language.EN);
  const [dir, setDir] = useState<'ltr' | 'rtl'>(language === Language.AR ? 'rtl' : 'ltr');

  useEffect(() => {
    const newDir = language === Language.AR ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
    document.documentElement.dir = newDir;
    setDir(newDir);
    // Add/remove font family for Arabic
    if (language === Language.AR) {
      document.body.style.fontFamily = "'Cairo', 'Inter', sans-serif";
    } else {
      document.body.style.fontFamily = "'Inter', sans-serif";
    }
  }, [language]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  const t = (key: keyof AppTranslationKeys, replacements?: Record<string, string | number>): string => { // Use AppTranslationKeys
    // Fallback to English if translation is missing for the current language
    // Ensure translations and translations[Language.EN] are defined before accessing keys
    const defaultLangTranslations = translations[Language.EN] || {} as AppTranslationKeys; // Cast for safety
    let translation = translations[language]?.[key] || defaultLangTranslations[key] || String(key);
    
    if (replacements) {
      Object.keys(replacements).forEach(rKey => {
        const regex = new RegExp(`{{${rKey}}}`, 'g');
        translation = translation.replace(regex, String(replacements[rKey]));
      });
    }
    return translation;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, dir }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
