'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import styles from './page.module.scss';

export default function Home() {
  const { language } = useLanguage();

  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <h1 className={styles.title}>
          {language === 'en'
            ? 'Welcome to Webicon'
            : 'ברוכים הבאים ל-Webicon'}
        </h1>
        <p className={styles.subtitle}>
          {language === 'en'
            ? 'We build amazing apps, websites, and landing pages'
            : 'אנו בונים אפליקציות, אתרים ודפי נחיתה מדהימים'}
        </p>
      </div>
    </section>
  );
}

