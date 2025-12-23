'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import styles from './page.module.scss';

export default function Clients() {
  const { language } = useLanguage();

  return (
    <section className={styles.clients}>
      <div className={styles.container}>
        <h1 className={styles.title}>
          {language === 'en' ? 'Our Clients' : 'הלקוחות שלנו'}
        </h1>
        <div className={styles.grid}>
          <div className={styles.clientCard}>
            <h3 className={styles.clientName}>
              {language === 'en' ? 'Client 1' : 'לקוח 1'}
            </h3>
            <p className={styles.clientDescription}>
              {language === 'en'
                ? 'Technology Company'
                : 'חברת טכנולוגיה'}
            </p>
          </div>
          <div className={styles.clientCard}>
            <h3 className={styles.clientName}>
              {language === 'en' ? 'Client 2' : 'לקוח 2'}
            </h3>
            <p className={styles.clientDescription}>
              {language === 'en'
                ? 'E-commerce Platform'
                : 'פלטפורמת מסחר אלקטרוני'}
            </p>
          </div>
          <div className={styles.clientCard}>
            <h3 className={styles.clientName}>
              {language === 'en' ? 'Client 3' : 'לקוח 3'}
            </h3>
            <p className={styles.clientDescription}>
              {language === 'en'
                ? 'Startup Company'
                : 'חברת סטארט-אפ'}
            </p>
          </div>
          <div className={styles.clientCard}>
            <h3 className={styles.clientName}>
              {language === 'en' ? 'Client 4' : 'לקוח 4'}
            </h3>
            <p className={styles.clientDescription}>
              {language === 'en'
                ? 'Healthcare Provider'
                : 'ספק שירותי בריאות'}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

