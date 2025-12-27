'use client';

import { useState, FormEvent } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import styles from './page.module.scss';

export default function Contact() {
  const { language } = useLanguage();
  const [formStatus, setFormStatus] = useState<{
    loading: boolean;
    success: boolean;
    error: string | null;
  }>({
    loading: false,
    success: false,
    error: null,
  });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus({ loading: true, success: false, error: null });

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      message: formData.get('message') as string,
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Failed to send message');
      }

      setFormStatus({ loading: false, success: true, error: null });
      e.currentTarget.reset();

      // Reset success message after 5 seconds
      setTimeout(() => {
        setFormStatus((prev) => ({ ...prev, success: false }));
      }, 5000);
    } catch (error) {
      setFormStatus({
        loading: false,
        success: false,
        error:
          error instanceof Error
            ? error.message
            : language === 'en'
              ? 'Failed to send message. Please try again later.'
              : 'שליחת ההודעה נכשלה. אנא נסה שוב מאוחר יותר.',
      });
    }
  };

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
                contact@webicon.com
              </p>
              <p className={styles.detail}>
                <strong>{language === 'en' ? 'Phone:' : 'טלפון:'}</strong> +972
                052-8395423
              </p>
            </div>
          </div>
          <form className={styles.form} onSubmit={handleSubmit}>
            {formStatus.success && (
              <div className={styles.formMessage} style={{ color: 'green' }}>
                {language === 'en'
                  ? 'Message sent successfully! We will get back to you soon.'
                  : 'ההודעה נשלחה בהצלחה! נחזור אליך בהקדם.'}
              </div>
            )}
            {formStatus.error && (
              <div className={styles.formMessage} style={{ color: 'red' }}>
                {formStatus.error}
              </div>
            )}
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
                disabled={formStatus.loading}
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
                disabled={formStatus.loading}
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
                disabled={formStatus.loading}
              ></textarea>
            </div>
            <button
              type="submit"
              className={styles.submitButton}
              disabled={formStatus.loading}
            >
              {formStatus.loading
                ? language === 'en'
                  ? 'Sending...'
                  : 'שולח...'
                : language === 'en'
                  ? 'Send Message'
                  : 'שלח הודעה'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}


