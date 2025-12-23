'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import styles from './languageToggle.module.scss';

export const LanguageToggle = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className={styles.toggle}
      aria-label={language === 'en' ? 'Switch to Hebrew' : 'Switch to English'}
      type="button"
    >
      {language === 'en' ? 'עב' : 'EN'}
    </button>
  );
};

