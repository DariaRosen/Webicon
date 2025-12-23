'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLanguage } from '@/contexts/LanguageContext';
import { ThemeToggle } from '@/components/ThemeToggle/ThemeToggle';
import { LanguageToggle } from '@/components/LanguageToggle/LanguageToggle';
import styles from './header.module.scss';
import { NavigationItem } from '@/types';

export const Header = () => {
  const { t, language } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const headerRef = useRef<HTMLElement>(null);

  const navigation: NavigationItem[] = [
    { label: t('home'), href: '/' },
    { label: t('about'), href: '/about' },
    { label: t('projects'), href: '/projects' },
    { label: t('products'), href: '/products' },
    { label: t('reviews'), href: '/reviews' },
    { label: t('clients'), href: '/clients' },
    { label: t('contact'), href: '/contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const updateHeaderHeight = () => {
      if (headerRef.current) {
        const height = headerRef.current.offsetHeight;
        document.documentElement.style.setProperty('--header-height', `${height}px`);
      }
    };

    updateHeaderHeight();
    window.addEventListener('resize', updateHeaderHeight);
    const timeoutId = setTimeout(updateHeaderHeight, 100);

    return () => {
      window.removeEventListener('resize', updateHeaderHeight);
      clearTimeout(timeoutId);
    };
  }, []);

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const handleNavClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      ref={headerRef}
      className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}
    >
      <div className={styles.container}>
        {/* Logo */}
        <Link href="/" className={styles.logo}>
          <img src="/Webicon_logo.PNG" alt="Webicon Logo" className={styles.logoImage} />
        </Link>

        {/* Navigation */}
        <nav className={styles.nav}>
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`${styles.navItem} ${
                pathname === item.href ? styles.active : ''
              }`}
              onClick={handleNavClick}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Controls */}
        <div className={styles.controls}>
          <LanguageToggle />
          <ThemeToggle />
        </div>

        {/* Mobile Menu Button */}
        <button
          className={`${styles.mobileMenuButton} ${
            isMobileMenuOpen ? styles.open : ''
          }`}
          onClick={handleMobileMenuToggle}
          aria-label="Toggle mobile menu"
          type="button"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${styles.mobileMenu} ${
          isMobileMenuOpen ? styles.open : ''
        }`}
      >
        <nav className={styles.mobileNav}>
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={styles.mobileNavItem}
              onClick={handleNavClick}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

