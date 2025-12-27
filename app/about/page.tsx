'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import styles from './page.module.scss';

export default function About() {
  const { language } = useLanguage();

  return (
    <section className={styles.about}>
      <div className={styles.container}>
        <h1 className={styles.title}>
          {language === 'en' ? 'About Us' : 'אודות Webicon'}
        </h1>
        <div className={styles.content}>
          <div className={styles.intro}>
            <p className={styles.text}>
              {language === 'en'
                ? 'We are a team of passionate developers and designers dedicated to creating exceptional digital experiences. Our expertise spans across web development, mobile applications, and custom software solutions.'
                : 'נעים להכיר, Webicon. סטודיו לפיתוח ועיצוב מוצרים דיגיטליים, המתמחה ביצירת מערכות איכותיות, יציבות ומוכנות לצמיחה עתידית.'}
            </p>
            <p className={styles.text}>
              {language === 'en'
                ? 'With years of experience in the industry, we have helped numerous clients bring their ideas to life through innovative and user-friendly solutions.'
                : 'ב-Webicon אנחנו מפתחים אתרים, אפליקציות ומוצרים דיגיטליים תוך הקפדה על סטנדרטים גבוהים של ארכיטקטורה, אבטחה, ביצועים ועיצוב. כל פרויקט נבנה מתוך חשיבה מוצרית ומתוך הבנה מעמיקה של הצרכים העסקיים, הטכנולוגיים והחזותיים של הלקוח.'}
            </p>
          </div>

          <div className={styles.philosophy}>
            <p className={styles.text}>
              {language === 'en'
                ? 'We believe in building products that are not just functional, but also scalable, maintainable, and future-proof.'
                : 'אנו מאמינים שמוצר דיגיטלי איכותי הוא תוצאה של תהליך מדויק: איפיון נכון, עיצוב מודרני, פיתוח מתקדם ותשתית גמישה שמאפשרת תחזוקה, הרחבות ושינויים לאורך זמן. לכן אנו מלווים כל פרויקט מהשלב הראשוני ועד השקה, עם תיעוד מסודר, קוד נקי ופתרון יציב שנבנה לטווח ארוך.'}
            </p>
            <p className={styles.text}>
              {language === 'en'
                ? 'Our work combines meticulous design, advanced graphics, and cutting-edge technologies to deliver precise, secure, and high-quality digital products.'
                : 'העבודה ב-Webicon משלבת עיצוב מוקפד, גרפיקה מתקדמת – כולל שילוב אלמנטים בתלת־ממד – וטכנולוגיות עדכניות מהשורה הראשונה בשוק. התוצאה היא מוצר דיגיטלי מדויק, מאובטח ומותאם לסטנדרטים של ארגונים, סטארטאפים ולקוחות המחפשים איכות ללא פשרות.'}
            </p>
          </div>

          <div className={styles.benefits}>
            <h2 className={styles.subtitle}>
              {language === 'en' ? 'What You Get at Webicon' : 'מה תקבלו ב-Webicon'}
            </h2>
            <ul className={styles.benefitsList}>
              {language === 'en' ? (
                <>
                  <li>End-to-end digital solutions – from specification to launch</li>
                  <li>Combination of design, development, and product thinking</li>
                  <li>Clean, secure code built for maintenance and future expansion</li>
                  <li>Use of advanced technologies and modern standards</li>
                  <li>Contemporary design, including 3D graphics and elements</li>
                  <li>Professional support, clear communication, and high execution standards</li>
                  <li>Full adaptation to the product, organization, and its technological needs</li>
                </>
              ) : (
                <>
                  <li>פתרונות דיגיטליים מקצה לקצה – מאיפיון ועד השקה</li>
                  <li>שילוב של עיצוב, פיתוח וחשיבה מוצרית</li>
                  <li>קוד נקי, מאובטח ובנוי לתחזוקה ולהתרחבות עתידית</li>
                  <li>שימוש בטכנולוגיות מתקדמות וסטנדרטים מודרניים</li>
                  <li>עיצוב עכשווי, כולל שילוב גרפיקה ואלמנטים בתלת־ממד</li>
                  <li>ליווי מקצועי, תקשורת ברורה וסטנדרט ביצוע גבוה</li>
                  <li>התאמה מלאה למוצר, לארגון ולצרכים הטכנולוגיים שלו</li>
                </>
              )}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

