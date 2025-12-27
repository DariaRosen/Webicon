'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import styles from './footer.module.scss';

export const Footer = () => {
  const { language } = useLanguage();

  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.logoSection}>
            <img
              src="/Webicon_logo-removebg-preview.png"
              alt="Webicon Logo"
              className={styles.logo}
            />
            <p className={styles.tagline}>
              {language === 'en'
                ? 'Building amazing apps, websites, and landing pages'
                : 'בונים אפליקציות, אתרים ודפי נחיתה מדהימים'}
            </p>
          </div>

          <div className={styles.linksSection}>
            <div className={styles.linksColumn}>
              <h3 className={styles.columnTitle}>
                {language === 'en' ? 'Quick Links' : 'קישורים מהירים'}
              </h3>
              <ul className={styles.linksList}>
                <li>
                  <a href="/">{language === 'en' ? 'Home' : 'בית'}</a>
                </li>
                <li>
                  <a href="/#about">{language === 'en' ? 'About Us' : 'אודותינו'}</a>
                </li>
                <li>
                  <a href="/#projects">
                    {language === 'en' ? 'Our Projects' : 'הפרויקטים שלנו'}
                  </a>
                </li>
                <li>
                  <a href="/#products">
                    {language === 'en' ? 'Our Products' : 'המוצרים שלנו'}
                  </a>
                </li>
              </ul>
            </div>

            <div className={styles.linksColumn}>
              <h3 className={styles.columnTitle}>
                {language === 'en' ? 'More' : 'עוד'}
              </h3>
              <ul className={styles.linksList}>
                <li>
                  <a href="/#reviews">{language === 'en' ? 'Reviews' : 'ביקורות'}</a>
                </li>
                <li>
                  <a href="/#clients">
                    {language === 'en' ? 'Our Clients' : 'הלקוחות שלנו'}
                  </a>
                </li>
                <li>
                  <a href="/#contact">
                    {language === 'en' ? 'Contact Us' : 'צור קשר'}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <p className={styles.copyright}>
            © {currentYear} Webicon.{' '}
            {language === 'en'
              ? 'All rights reserved.'
              : 'כל הזכויות שמורות.'}
          </p>
        </div>
      </div>
    </footer>
  );
};

