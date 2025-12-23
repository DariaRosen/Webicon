'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import styles from './page.module.scss';

export default function Home() {
  const { language } = useLanguage();

  return (
    <>
      <section className={styles.hero}>
        <div className={styles.container}>
          <h1 className={styles.title}>
            {language === 'en'
              ? 'Welcome to Webicon'
              : 'ברוכים הבאים ל-Webicon'}
          </h1>
          <p className={styles.subtitle}>
            {language === 'en'
              ? 'We build amazing apps, websites, and landing pages'
              : 'אנו בונים אפליקציות, אתרים ודפי נחיתה מדהימים'}
          </p>
        </div>
      </section>

      <section className={styles.section} id="about">
        <div className={styles.sectionContainer}>
          <h2 className={styles.sectionTitle}>
            {language === 'en' ? 'About Us' : 'אודותינו'}
          </h2>
          <p className={styles.sectionText}>
            {language === 'en'
              ? 'We are a team of passionate developers and designers dedicated to creating exceptional digital experiences across web, mobile, and product strategy.'
              : 'אנחנו צוות של מפתחים ומעצבים נלהבים, שמקדישים את עצמם ליצירת חוויות דיגיטליות יוצאות דופן – אתרים, אפליקציות ואסטרטגיית מוצר.'}
          </p>
          <p className={styles.sectionText}>
            {language === 'en'
              ? 'From discovery to launch, we help you ship fast, look great, and perform even better.'
              : 'משלב המחקר ועד ההשקה – אנחנו עוזרים לכם לצאת מהר, להיראות מצוין ולבצע בצורה מיטבית.'}
          </p>
        </div>
      </section>

      <section className={styles.section} id="projects">
        <div className={styles.sectionContainer}>
          <h2 className={styles.sectionTitle}>
            {language === 'en' ? 'Our Projects' : 'הפרויקטים שלנו'}
          </h2>
          <div className={styles.cardGrid}>
            {[
              {
                enTitle: 'Project 1',
                heTitle: 'פרויקט 1',
                enDesc: 'A modern web app built with cutting-edge tech.',
                heDesc: 'אפליקציית ווב מודרנית שנבנתה בטכנולוגיות מתקדמות.',
              },
              {
                enTitle: 'Project 2',
                heTitle: 'פרויקט 2',
                enDesc: 'An innovative mobile experience solving real problems.',
                heDesc: 'חוויית מובייל חדשנית שפותרת בעיות אמיתיות.',
              },
              {
                enTitle: 'Project 3',
                heTitle: 'פרויקט 3',
                enDesc: 'A high-converting landing page for campaigns.',
                heDesc: 'דף נחיתה עם המרה גבוהה לקמפיינים.',
              },
            ].map((item) => (
              <div key={item.enTitle} className={styles.card}>
                <h3 className={styles.cardTitle}>
                  {language === 'en' ? item.enTitle : item.heTitle}
                </h3>
                <p className={styles.cardText}>
                  {language === 'en' ? item.enDesc : item.heDesc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.section} id="products">
        <div className={styles.sectionContainer}>
          <h2 className={styles.sectionTitle}>
            {language === 'en' ? 'Our Products' : 'המוצרים שלנו'}
          </h2>
          <div className={styles.cardGrid}>
            {[
              {
                enTitle: 'Web Development',
                heTitle: 'פיתוח אתרים',
                enDesc: 'Custom websites tailored to your business needs.',
                heDesc: 'אתרים מותאמים אישית לצרכי העסק שלך.',
              },
              {
                enTitle: 'Mobile Apps',
                heTitle: 'אפליקציות ניידות',
                enDesc: 'Native and cross-platform mobile applications.',
                heDesc: 'אפליקציות ניידות מקוריות ובין-פלטפורמיות.',
              },
              {
                enTitle: 'Landing Pages',
                heTitle: 'דפי נחיתה',
                enDesc: 'High-converting landing pages for your campaigns.',
                heDesc: 'דפי נחיתה עם שיעור המרה גבוה לקמפיינים שלך.',
              },
            ].map((item) => (
              <div key={item.enTitle} className={styles.card}>
                <h3 className={styles.cardTitle}>
                  {language === 'en' ? item.enTitle : item.heTitle}
                </h3>
                <p className={styles.cardText}>
                  {language === 'en' ? item.enDesc : item.heDesc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.section} id="reviews">
        <div className={styles.sectionContainer}>
          <h2 className={styles.sectionTitle}>
            {language === 'en' ? 'Reviews' : 'ביקורות'}
          </h2>
          <div className={styles.cardGrid}>
            {[
              {
                enText:
                  '"Webicon delivered an outstanding website that exceeded our expectations. Highly recommended!"',
                heText:
                  '"Webicon סיפקו אתר מעולה שעבר את הציפיות שלנו. מומלץ מאוד!"',
                enAuthor: '- John Doe',
                heAuthor: '- יוחנן כהן',
              },
              {
                enText:
                  '"The mobile app they built for us is intuitive and user-friendly. Great work!"',
                heText:
                  '"האפליקציה הניידת שהם בנו עבורנו אינטואיטיבית וידידותית למשתמש. עבודה מצוינת!"',
                enAuthor: '- Jane Smith',
                heAuthor: '- שרה לוי',
              },
              {
                enText:
                  '"Professional service and excellent communication throughout the project."',
                heText:
                  '"שירות מקצועי ותקשורת מעולה לאורך כל הפרויקט."',
                enAuthor: '- David Brown',
                heAuthor: '- דוד ישראלי',
              },
            ].map((item) => (
              <div key={item.enAuthor} className={styles.card}>
                <p className={styles.cardText}>
                  {language === 'en' ? item.enText : item.heText}
                </p>
                <p className={styles.cardMeta}>
                  {language === 'en' ? item.enAuthor : item.heAuthor}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.section} id="clients">
        <div className={styles.sectionContainer}>
          <h2 className={styles.sectionTitle}>
            {language === 'en' ? 'Our Clients' : 'הלקוחות שלנו'}
          </h2>
          <div className={styles.cardGrid}>
            {[
              { en: 'Tech Company', he: 'חברת טכנולוגיה' },
              { en: 'E-commerce Platform', he: 'פלטפורמת מסחר אלקטרוני' },
              { en: 'Startup', he: 'סטארט-אפ' },
              { en: 'Healthcare Provider', he: 'ספק שירותי בריאות' },
            ].map((item) => (
              <div key={item.en} className={styles.card}>
                <h3 className={styles.cardTitle}>
                  {language === 'en' ? item.en : item.he}
                </h3>
                <p className={styles.cardText}>
                  {language === 'en'
                    ? 'Trusted partner'
                    : 'שותף אמין'}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.section} id="contact">
        <div className={styles.sectionContainer}>
          <h2 className={styles.sectionTitle}>
            {language === 'en' ? 'Contact Us' : 'צור קשר'}
          </h2>
          <p className={styles.sectionText}>
            {language === 'en'
              ? 'We would love to hear from you. Send us a message and we will respond as soon as possible.'
              : 'נשמח לשמוע מכם. שלחו לנו הודעה ונחזור אליכם בהקדם.'}
          </p>
          <form className={styles.form}>
            <label className={styles.label}>
              {language === 'en' ? 'Name' : 'שם'}
              <input className={styles.input} type="text" required />
            </label>
            <label className={styles.label}>
              {language === 'en' ? 'Email' : 'אימייל'}
              <input className={styles.input} type="email" required />
            </label>
            <label className={styles.label}>
              {language === 'en' ? 'Message' : 'הודעה'}
              <textarea className={styles.textarea} rows={4} required />
            </label>
            <button type="submit" className={styles.button}>
              {language === 'en' ? 'Send Message' : 'שלח הודעה'}
            </button>
          </form>
        </div>
      </section>
    </>
  );
}

