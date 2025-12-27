'use client';

import styles from './stickyWhatsApp.module.scss';

export const StickyWhatsApp = () => {
  const phoneNumber = '+972528395423';

  return (
    <a
      className={styles.stickyWhatsApp}
      href={`https://wa.me/${phoneNumber}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Open WhatsApp chat"
    >
      <img src="/whatsapp.webp" alt="WhatsApp" className={styles.icon} />
    </a>
  );
};

