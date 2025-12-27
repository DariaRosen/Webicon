'use client';

import { LanguageToggle } from '@/components/LanguageToggle/LanguageToggle';
import { ThemeToggle } from '@/components/ThemeToggle/ThemeToggle';
import styles from './stickyToggles.module.scss';

export const StickyToggles = () => {
  return (
    <div className={styles.stickyToggles}>
      <LanguageToggle />
      <ThemeToggle />
    </div>
  );
};

