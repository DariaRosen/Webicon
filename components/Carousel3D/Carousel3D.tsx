'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import styles from './carousel3D.module.scss';

interface Project {
  id: string;
  enTitle: string;
  heTitle: string;
  enDesc: string;
  heDesc: string;
}

const projects: Project[] = [
  {
    id: '1',
    enTitle: 'Project 1',
    heTitle: 'פרויקט 1',
    enDesc: 'A modern web app built with cutting-edge tech.',
    heDesc: 'אפליקציית ווב מודרנית שנבנתה בטכנולוגיות מתקדמות.',
  },
  {
    id: '2',
    enTitle: 'Project 2',
    heTitle: 'פרויקט 2',
    enDesc: 'An innovative mobile experience solving real problems.',
    heDesc: 'חוויית מובייל חדשנית שפותרת בעיות אמיתיות.',
  },
  {
    id: '3',
    enTitle: 'Project 3',
    heTitle: 'פרויקט 3',
    enDesc: 'A high-converting landing page for campaigns.',
    heDesc: 'דף נחיתה עם המרה גבוהה לקמפיינים.',
  },
  {
    id: '4',
    enTitle: 'Project 4',
    heTitle: 'פרויקט 4',
    enDesc: 'E-commerce platform with advanced features.',
    heDesc: 'פלטפורמת מסחר אלקטרוני עם תכונות מתקדמות.',
  },
  {
    id: '5',
    enTitle: 'Project 5',
    heTitle: 'פרויקט 5',
    enDesc: 'Mobile app with seamless user experience.',
    heDesc: 'אפליקציה ניידת עם חוויית משתמש חלקה.',
  },
  {
    id: '6',
    enTitle: 'Project 6',
    heTitle: 'פרויקט 6',
    enDesc: 'Enterprise solution for modern businesses.',
    heDesc: 'פתרון ארגוני לעסקים מודרניים.',
  },
  {
    id: '7',
    enTitle: 'Project 7',
    heTitle: 'פרויקט 7',
    enDesc: 'Creative portfolio website with stunning design.',
    heDesc: 'אתר תיק עבודות יצירתי עם עיצוב מרהיב.',
  },
];

export const Carousel3D = () => {
  const { language } = useLanguage();

  return (
    <div className={styles.carouselWrapper}>
      <Swiper
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView="auto"
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        navigation={true}
        modules={[EffectCoverflow, Navigation, Pagination, Autoplay]}
        className={styles.carousel}
      >
        {projects.map((project) => (
          <SwiperSlide key={project.id} className={styles.slide}>
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
                {language === 'en' ? project.enTitle : project.heTitle}
              </h3>
              <p className={styles.projectDescription}>
                {language === 'en' ? project.enDesc : project.heDesc}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

