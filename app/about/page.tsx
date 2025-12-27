'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import styles from './page.module.scss';

export default function About() {
  const { language } = useLanguage();

  return (
    <section className={styles.about}>
      <div className={styles.container}>
        <h1 className={styles.title}>
          {language === 'en' ? 'About Webicon' : 'אודות Webicon'}
        </h1>
        <div className={styles.content}>
          <div className={styles.intro}>
            <p className={styles.text}>
              {language === 'en'
                ? 'Webicon is a digital product studio specializing in the design and development of high-quality, scalable, and future-ready digital solutions.'
                : 'נעים להכיר, Webicon. סטודיו לפיתוח ועיצוב מוצרים דיגיטליים, המתמחה ביצירת מערכות איכותיות, יציבות ומוכנות לצמיחה עתידית.'}
            </p>
            <p className={styles.text}>
              {language === 'en'
                ? 'We design and build websites, applications, and digital products with a strong emphasis on solid architecture, security, performance, and long-term maintainability. Every project is approached from a product-oriented perspective, combining technical excellence with modern design and a deep understanding of business and system requirements.'
                : 'ב-Webicon אנחנו מפתחים אתרים, אפליקציות ומוצרים דיגיטליים תוך הקפדה על סטנדרטים גבוהים של ארכיטקטורה, אבטחה, ביצועים ועיצוב. כל פרויקט נבנה מתוך חשיבה מוצרית ומתוך הבנה מעמיקה של הצרכים העסקיים, הטכנולוגיים והחזותיים של הלקוח.'}
            </p>
          </div>

          <div className={styles.philosophy}>
            <p className={styles.text}>
              {language === 'en'
                ? 'We believe that a strong digital product is the result of a precise and structured process: clear specification, thoughtful user experience, modern visual design, and robust end-to-end development. Our solutions are built to evolve — allowing for future growth, changes, and integrations without compromising stability or quality.'
                : 'אנו מאמינים שמוצר דיגיטלי איכותי הוא תוצאה של תהליך מדויק: איפיון נכון, עיצוב מודרני, פיתוח מתקדם ותשתית גמישה שמאפשרת תחזוקה, הרחבות ושינויים לאורך זמן. לכן אנו מלווים כל פרויקט מהשלב הראשוני ועד השקה, עם תיעוד מסודר, קוד נקי ופתרון יציב שנבנה לטווח ארוך.'}
            </p>
            <p className={styles.text}>
              {language === 'en'
                ? 'At Webicon, we work with advanced, industry-leading technologies and adhere to high engineering standards. Our work often incorporates refined visual elements, including advanced graphics and optional 3D components, resulting in digital products that are both technically sound and visually polished. We accompany our clients from early discovery stages through delivery and launch, providing professional guidance, clear communication, and solutions designed for long-term use.'
                : 'העבודה ב-Webicon משלבת עיצוב מוקפד, גרפיקה מתקדמת – כולל שילוב אלמנטים בתלת־ממד – וטכנולוגיות עדכניות מהשורה הראשונה בשוק. התוצאה היא מוצר דיגיטלי מדויק, מאובטח ומותאם לסטנדרטים של ארגונים, סטארטאפים ולקוחות המחפשים איכות ללא פשרות.'}
            </p>
          </div>

          <div className={styles.benefits}>
            <h2 className={styles.subtitle}>
              {language === 'en' ? 'What You Get with Webicon' : 'מה תקבלו ב-Webicon'}
            </h2>
            <ul className={styles.benefitsList}>
              {language === 'en' ? (
                <>
                  <li>End-to-end digital solutions — from specification to deployment</li>
                  <li>A balanced combination of design, engineering, and product thinking</li>
                  <li>Clean, secure, and maintainable codebases</li>
                  <li>Scalable architectures designed for future growth</li>
                  <li>Modern UI design, with optional advanced and 3D visual elements</li>
                  <li>Professional guidance and high execution standards</li>
                  <li>Solutions tailored to the product, organization, and technical requirements</li>
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

