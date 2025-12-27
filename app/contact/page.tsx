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
  const [messageLength, setMessageLength] = useState(0);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus({ loading: true, success: false, error: null });

    const formData = new FormData(e.currentTarget);
    const name = (formData.get('name') as string)?.trim() || '';
    const email = (formData.get('email') as string)?.trim() || '';
    const message = (formData.get('message') as string)?.trim() || '';

    // Client-side validation
    if (name.length < 2) {
      setFormStatus({
        loading: false,
        success: false,
        error:
          language === 'en'
            ? 'Name must be at least 2 characters long'
            : 'השם חייב להכיל לפחות 2 תווים',
      });
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setFormStatus({
        loading: false,
        success: false,
        error:
          language === 'en'
            ? 'Please enter a valid email address'
            : 'אנא הזן כתובת אימייל תקינה',
      });
      return;
    }

    if (message.length < 10) {
      setFormStatus({
        loading: false,
        success: false,
        error:
          language === 'en'
            ? 'Message must be at least 10 characters long'
            : 'ההודעה חייבת להכיל לפחות 10 תווים',
      });
      return;
    }

    if (message.length > 5000) {
      setFormStatus({
        loading: false,
        success: false,
        error:
          language === 'en'
            ? 'Message must be less than 5000 characters'
            : 'ההודעה חייבת להיות פחות מ-5000 תווים',
      });
      return;
    }

    const data = {
      name,
      email,
      message,
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
        // Handle rate limiting with custom message
        if (response.status === 429) {
          const retryAfter = result.retryAfter
            ? Math.ceil(result.retryAfter / 60)
            : null;
          const errorMessage = retryAfter
            ? language === 'en'
              ? `Too many requests. Please try again in ${retryAfter} minute${retryAfter > 1 ? 's' : ''}.`
              : `יותר מדי בקשות. אנא נסה שוב בעוד ${retryAfter} דקות.`
            : result.error || 'Too many requests. Please try again later.';
          throw new Error(errorMessage);
        }
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
                maxLength={100}
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
                maxLength={254}
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
                maxLength={5000}
                onChange={(e) => setMessageLength(e.target.value.length)}
              ></textarea>
              <div className={styles.charCount}>
                {messageLength}/5000{' '}
                {language === 'en' ? 'characters' : 'תווים'}
              </div>
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


