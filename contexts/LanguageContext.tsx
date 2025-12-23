'use client';

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { Language } from '@/types';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    home: 'Home',
    about: 'About Us',
    projects: 'Our Projects',
    products: 'Our Products',
    reviews: 'Reviews',
    clients: 'Our Clients',
    contact: 'Contact Us',
  },
  he: {
    home: 'בית',
    about: 'אודותינו',
    projects: 'הפרויקטים שלנו',
    products: 'המוצרים שלנו',
    reviews: 'ביקורות',
    clients: 'הלקוחות שלנו',
    contact: 'צור קשר',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('en');

  useEffect(() => {
    const storedLanguage = localStorage.getItem('language') as Language | null;
    const initialLanguage = storedLanguage || 'en';
    setLanguage(initialLanguage);
    document.documentElement.setAttribute('lang', initialLanguage);
    document.documentElement.setAttribute('dir', initialLanguage === 'he' ? 'rtl' : 'ltr');
  }, []);

  const toggleLanguage = () => {
    const newLanguage = language === 'en' ? 'he' : 'en';
    setLanguage(newLanguage);
    localStorage.setItem('language', newLanguage);
    document.documentElement.setAttribute('lang', newLanguage);
    document.documentElement.setAttribute('dir', newLanguage === 'he' ? 'rtl' : 'ltr');
  };

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

