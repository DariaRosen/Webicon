'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { Carousel3D } from '@/components/Carousel3D/Carousel3D';
import styles from './page.module.scss';

export default function Projects() {
  const { language } = useLanguage();

  return (
    <section className={styles.projects}>
      <div className={styles.container}>
        <h1 className={styles.title}>
          {language === 'en' ? 'Our Projects' : 'הפרויקטים שלנו'}
        </h1>
        <Carousel3D />
      </div>
    </section>
  );
}

