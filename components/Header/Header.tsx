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
  const [activeSection, setActiveSection] = useState('');
  const pathname = usePathname();
  const headerRef = useRef<HTMLElement>(null);

  const phoneNumber = '+972528395423';
  const phoneDisplay = '052-8395423';

  const navigation: NavigationItem[] = [
    { label: t('home'), href: '/' },
    { label: t('about'), href: '#about' },
    { label: t('projects'), href: '#projects' },
    { label: t('products'), href: '#products' },
    { label: t('reviews'), href: '#reviews' },
    { label: t('clients'), href: '#clients' },
    { label: t('contact'), href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      // Update active section based on scroll position
      if (pathname === '/') {
        const sections = ['about', 'projects', 'products', 'reviews', 'clients', 'contact'];
        const headerHeight = headerRef.current?.offsetHeight || 100;
        const scrollPosition = window.scrollY + headerHeight + 50;
        
        for (let i = sections.length - 1; i >= 0; i--) {
          const section = document.getElementById(sections[i]);
          if (section && section.offsetTop <= scrollPosition) {
            setActiveSection(`#${sections[i]}`);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on mount
    
    // Handle hash navigation on page load
    if (pathname === '/' && window.location.hash) {
      const hash = window.location.hash;
      setTimeout(() => {
        const section = document.getElementById(hash.substring(1));
        if (section) {
          const headerHeight = headerRef.current?.offsetHeight || 100;
          const sectionTop = section.offsetTop - headerHeight;
          window.scrollTo({
            top: sectionTop,
            behavior: 'smooth',
          });
          setActiveSection(hash);
        }
      }, 100);
    }
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [pathname]);

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

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    setIsMobileMenuOpen(false);
    
    // If it's an anchor link (starts with #)
    if (href.startsWith('#')) {
      e.preventDefault();
      
      // If we're not on the home page, navigate there first
      if (pathname !== '/') {
        window.location.href = `/${href}`;
        return;
      }
      
      // Scroll to the section
      const sectionId = href.substring(1);
      const section = document.getElementById(sectionId);
      if (section) {
        const headerHeight = headerRef.current?.offsetHeight || 100;
        const sectionTop = section.offsetTop - headerHeight;
        window.scrollTo({
          top: sectionTop,
          behavior: 'smooth',
        });
      }
    }
  };

  return (
    <header
      ref={headerRef}
      className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}
    >
      <div className={styles.container}>
        {/* Logo */}
        <Link href="/" className={styles.logo}>
          <img src="/Webicon_logo-removebg-preview.png" alt="Webicon Logo" className={styles.logoImage} />
        </Link>

        {/* Navigation */}
        <nav className={styles.nav}>
          {navigation.map((item) => (
            item.href === '/' ? (
              <Link
                key={item.href}
                href={item.href}
                className={`${styles.navItem} ${
                  pathname === item.href ? styles.active : ''
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ) : (
              <a
                key={item.href}
                href={item.href}
                className={`${styles.navItem} ${
                  pathname === '/' && activeSection === item.href ? styles.active : ''
                }`}
                onClick={(e) => handleNavClick(e, item.href)}
              >
                {item.label}
              </a>
            )
          ))}
        </nav>

        {/* Contacts + Controls */}
        <div className={styles.controls}>
          <div className={styles.contacts}>
            <a
              className={styles.whatsapp}
              href="https://wa.me/972528395423"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open WhatsApp chat"
            >
              <img src="/whatsapp.webp" alt="WhatsApp" className={styles.whatsappIcon} />
            </a>
            <a
              className={styles.phone}
              href={`tel:${phoneNumber}`}
              aria-label={language === 'en' ? 'Call us' : 'התקשרו אלינו'}
            >
              {phoneDisplay}
            </a>
          </div>
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
            item.href === '/' ? (
              <Link
                key={item.href}
                href={item.href}
                className={styles.mobileNavItem}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ) : (
              <a
                key={item.href}
                href={item.href}
                className={styles.mobileNavItem}
                onClick={(e) => handleNavClick(e, item.href)}
              >
                {item.label}
              </a>
            )
          ))}
        </nav>
      </div>
    </header>
  );
};

