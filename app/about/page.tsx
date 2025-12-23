'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import styles from './page.module.scss';

export default function About() {
  const { language } = useLanguage();

  return (
    <section className={styles.about}>
      <div className={styles.container}>
        <h1 className={styles.title}>
          {language === 'en' ? 'About Us' : 'אודותינו'}
        </h1>
        <div className={styles.content}>
          <p className={styles.text}>
            {language === 'en'
              ? 'We are a team of passionate developers and designers dedicated to creating exceptional digital experiences. Our expertise spans across web development, mobile applications, and custom software solutions.'
              : 'אנו צוות של מפתחים ומעצבים נלהבים המחויבים ליצירת חוויות דיגיטליות יוצאות דופן. המומחיות שלנו משתרעת על פני פיתוח אתרים, אפליקציות ניידות ופתרונות תוכנה מותאמים אישית.'}
          </p>
          <p className={styles.text}>
            {language === 'en'
              ? 'With years of experience in the industry, we have helped numerous clients bring their ideas to life through innovative and user-friendly solutions.'
              : 'עם שנים של ניסיון בתעשייה, עזרנו ללקוחות רבים להפוך את הרעיונות שלהם למציאות באמצעות פתרונות חדשניים וידידותיים למשתמש.'}
          </p>
        </div>
      </div>
    </section>
  );
}

