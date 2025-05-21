import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Footer: React.FC = () => {
  const { t } = useLanguage();
  return (
    <footer className="bg-neutral-dark text-white py-6 mt-auto">
      <div className="container mx-auto px-4 text-center">
        <p>{t('footerRights')}</p>
        <p className="text-sm text-neutral-DEFAULT mt-1">{t('footerSlogan')}</p>
      </div>
    </footer>
  );
};

export default Footer;