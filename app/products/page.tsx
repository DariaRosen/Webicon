'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import styles from './page.module.scss';

export default function Products() {
  const { language } = useLanguage();

  return (
    <section className={styles.products}>
      <div className={styles.container}>
        <h1 className={styles.title}>
          {language === 'en' ? 'Our Products' : 'המוצרים שלנו'}
        </h1>
        <div className={styles.grid}>
          <div className={styles.productCard}>
            <h3 className={styles.productTitle}>
              {language === 'en' ? 'Web Development' : 'פיתוח אתרים'}
            </h3>
            <p className={styles.productDescription}>
              {language === 'en'
                ? 'Custom websites tailored to your business needs.'
                : 'אתרים מותאמים אישית לצרכי העסק שלך.'}
            </p>
          </div>
          <div className={styles.productCard}>
            <h3 className={styles.productTitle}>
              {language === 'en' ? 'Mobile Apps' : 'אפליקציות ניידות'}
            </h3>
            <p className={styles.productDescription}>
              {language === 'en'
                ? 'Native and cross-platform mobile applications.'
                : 'אפליקציות ניידות מקוריות ובין-פלטפורמיות.'}
            </p>
          </div>
          <div className={styles.productCard}>
            <h3 className={styles.productTitle}>
              {language === 'en' ? 'Landing Pages' : 'דפי נחיתה'}
            </h3>
            <p className={styles.productDescription}>
              {language === 'en'
                ? 'High-converting landing pages for your campaigns.'
                : 'דפי נחיתה עם שיעור המרה גבוה לקמפיינים שלך.'}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

