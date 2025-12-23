'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import styles from './page.module.scss';

export default function Contact() {
  const { language } = useLanguage();

  return (
    <section className={styles.contact}>
      <div className={styles.container}>
        <h1 className={styles.title}>
          {language === 'en' ? 'Contact Us' : 'צור קשר'}
        </h1>
        <div className={styles.content}>
          <div className={styles.info}>
            <h2 className={styles.infoTitle}>
              {language === 'en' ? 'Get in Touch' : 'צרו קשר'}
            </h2>
            <p className={styles.infoText}>
              {language === 'en'
                ? 'We would love to hear from you. Send us a message and we will respond as soon as possible.'
                : 'נשמח לשמוע מכם. שלחו לנו הודעה ואנו נגיב בהקדם האפשרי.'}
            </p>
            <div className={styles.contactDetails}>
              <p className={styles.detail}>
                <strong>{language === 'en' ? 'Email:' : 'אימייל:'}</strong>{' '}
                info@webicon.com
              </p>
              <p className={styles.detail}>
                <strong>{language === 'en' ? 'Phone:' : 'טלפון:'}</strong> +972
                50-123-4567
              </p>
            </div>
          </div>
          <form className={styles.form}>
            <div className={styles.formGroup}>
              <label htmlFor="name" className={styles.label}>
                {language === 'en' ? 'Name' : 'שם'}
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className={styles.input}
                required
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="email" className={styles.label}>
                {language === 'en' ? 'Email' : 'אימייל'}
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className={styles.input}
                required
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="message" className={styles.label}>
                {language === 'en' ? 'Message' : 'הודעה'}
              </label>
              <textarea
                id="message"
                name="message"
                className={styles.textarea}
                rows={5}
                required
              ></textarea>
            </div>
            <button type="submit" className={styles.submitButton}>
              {language === 'en' ? 'Send Message' : 'שלח הודעה'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

