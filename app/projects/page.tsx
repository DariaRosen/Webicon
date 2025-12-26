'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import styles from './page.module.scss';

export default function Projects() {
  const { language } = useLanguage();

  return (
    <section className={styles.projects}>
      <div className={styles.container}>
        <h1 className={styles.title}>
          {language === 'en' ? 'Our Projects' : 'הפרויקטים שלנו'}
        </h1>
        <div className={styles.grid}>
          <div className={styles.projectCard}>
            <div className={styles.devicesContainer}>
              <div className={`${styles.deviceWrapper} ${styles.deviceLaptop}`}>
                <img
                  src="/Devices/Laptop.png"
                  alt="Laptop"
                  className={styles.deviceImage}
                />
              </div>
              <div className={`${styles.deviceWrapper} ${styles.deviceTablet}`}>
                <img
                  src="/Devices/Tablet.png"
                  alt="Tablet"
                  className={styles.deviceImage}
                />
              </div>
              <div className={`${styles.deviceWrapper} ${styles.deviceSmartphone}`}>
                <img
                  src="/Devices/Smartphone.png"
                  alt="Smartphone"
                  className={styles.deviceImage}
                />
              </div>
            </div>
            <h3 className={styles.projectTitle}>
              {language === 'en' ? 'Project 1' : 'פרויקט 1'}
            </h3>
            <p className={styles.projectDescription}>
              {language === 'en'
                ? 'A modern web application built with cutting-edge technologies.'
                : 'אפליקציית אינטרנט מודרנית שנבנתה בטכנולוגיות מתקדמות.'}
            </p>
          </div>
          <div className={styles.projectCard}>
            <div className={styles.devicesContainer}>
              <div className={`${styles.deviceWrapper} ${styles.deviceLaptop}`}>
                <img
                  src="/Devices/Laptop.png"
                  alt="Laptop"
                  className={styles.deviceImage}
                />
              </div>
              <div className={`${styles.deviceWrapper} ${styles.deviceTablet}`}>
                <img
                  src="/Devices/Tablet.png"
                  alt="Tablet"
                  className={styles.deviceImage}
                />
              </div>
              <div className={`${styles.deviceWrapper} ${styles.deviceSmartphone}`}>
                <img
                  src="/Devices/Smartphone.png"
                  alt="Smartphone"
                  className={styles.deviceImage}
                />
              </div>
            </div>
            <h3 className={styles.projectTitle}>
              {language === 'en' ? 'Project 2' : 'פרויקט 2'}
            </h3>
            <p className={styles.projectDescription}>
              {language === 'en'
                ? 'An innovative mobile app that solves real-world problems.'
                : 'אפליקציה ניידת חדשנית הפותרת בעיות בעולם האמיתי.'}
            </p>
          </div>
          <div className={styles.projectCard}>
            <div className={styles.devicesContainer}>
              <div className={`${styles.deviceWrapper} ${styles.deviceLaptop}`}>
                <img
                  src="/Devices/Laptop.png"
                  alt="Laptop"
                  className={styles.deviceImage}
                />
              </div>
              <div className={`${styles.deviceWrapper} ${styles.deviceTablet}`}>
                <img
                  src="/Devices/Tablet.png"
                  alt="Tablet"
                  className={styles.deviceImage}
                />
              </div>
              <div className={`${styles.deviceWrapper} ${styles.deviceSmartphone}`}>
                <img
                  src="/Devices/Smartphone.png"
                  alt="Smartphone"
                  className={styles.deviceImage}
                />
              </div>
            </div>
            <h3 className={styles.projectTitle}>
              {language === 'en' ? 'Project 3' : 'פרויקט 3'}
            </h3>
            <p className={styles.projectDescription}>
              {language === 'en'
                ? 'A beautiful landing page that converts visitors into customers.'
                : 'דף נחיתה יפה שהופך מבקרים ללקוחות.'}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

