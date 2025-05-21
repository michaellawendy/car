import React from 'react';
// Removed: import { WrenchScrewdriverIcon } from '../constants';
import { useLanguage, Language } from '../contexts/LanguageContext';
import Button from './Button';

const Header: React.FC = () => {
  const { language, setLanguage, t, dir } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === Language.EN ? Language.AR : Language.EN);
  };

  return (
    <header className="bg-primary shadow-md">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center text-white">
          {/* Icon removed from here */}
          <span className={`text-2xl font-bold ${dir === 'rtl' ? 'me-0' : 'ms-0'}`}>{t('appName')}</span> {/* Adjusted margin if icon was the only thing providing space */}
        </div>
        <Button onClick={toggleLanguage} variant="ghost" className="text-white hover:bg-primary-light">
          {language === Language.EN ? t('languageAR') : t('languageEN')}
        </Button>
      </div>
    </header>
  );
};

export default Header;