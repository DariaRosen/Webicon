'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import styles from './page.module.scss';

export default function Reviews() {
  const { language } = useLanguage();

  return (
    <section className={styles.reviews}>
      <div className={styles.container}>
        <h1 className={styles.title}>
          {language === 'en' ? 'Reviews' : 'ביקורות'}
        </h1>
        <div className={styles.grid}>
          <div className={styles.reviewCard}>
            <p className={styles.reviewText}>
              {language === 'en'
                ? '"Webicon delivered an outstanding website that exceeded our expectations. Highly recommended!"'
                : '"Webicon סיפקו אתר מעולה שעבר את הציפיות שלנו. מומלץ מאוד!"'}
            </p>
            <p className={styles.reviewAuthor}>
              {language === 'en' ? '- John Doe' : '- יוחנן כהן'}
            </p>
          </div>
          <div className={styles.reviewCard}>
            <p className={styles.reviewText}>
              {language === 'en'
                ? '"The mobile app they built for us is intuitive and user-friendly. Great work!"'
                : '"האפליקציה הניידת שהם בנו עבורנו היא אינטואיטיבית וידידותית למשתמש. עבודה מצוינת!"'}
            </p>
            <p className={styles.reviewAuthor}>
              {language === 'en' ? '- Jane Smith' : '- שרה לוי'}
            </p>
          </div>
          <div className={styles.reviewCard}>
            <p className={styles.reviewText}>
              {language === 'en'
                ? '"Professional service and excellent communication throughout the project."'
                : '"שירות מקצועי ותקשורת מעולה לאורך כל הפרויקט."'}
            </p>
            <p className={styles.reviewAuthor}>
              {language === 'en' ? '- David Brown' : '- דוד ישראלי'}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

