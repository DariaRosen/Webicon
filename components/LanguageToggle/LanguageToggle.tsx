'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import styles from './languageToggle.module.scss';

export const LanguageToggle = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className={styles.toggle}
      aria-label={language === 'en' ? 'Switch to Hebrew' : 'Switch to English'}
      type="button"
    >
      {language === 'en' ? (
        <span className={styles.flag} aria-hidden="true">
          {/* Israel flag */}
          <svg viewBox="0 0 640 480" xmlns="http://www.w3.org/2000/svg">
            <path fill="#fff" d="M0 0h640v480H0z" />
            <path fill="#0038b8" d="M0 72h640v72H0zM0 336h640v72H0z" />
            <path
              fill="none"
              stroke="#0038b8"
              strokeWidth="26"
              d="m320 184 42 72h-84zm0 112-42-72h84z"
            />
            <path
              fill="none"
              stroke="#0038b8"
              strokeWidth="26"
              d="m278 184 84 144m0-144-84 144"
            />
          </svg>
        </span>
      ) : (
        <span className={styles.flag} aria-hidden="true">
          {/* US flag (simplified, no namespaces) */}
          <svg viewBox="0 0 741 390" xmlns="http://www.w3.org/2000/svg">
            <rect width="741" height="390" fill="#b22234" />
            {[1,2,3,4,5,6].map((_,i)=>(
              <rect key={i} y={(i*65)+32.5} width="741" height="32.5" fill="#fff" />
            ))}
            <rect width="296" height="195" fill="#3c3b6e" />
            {Array.from({length:6}).map((_,row)=>(
              Array.from({length:5}).map((_,col)=>(
                <circle
                  key={`${row}-${col}`}
                  cx={30 + col*55 + (row%2)*27.5}
                  cy={22 + row*32}
                  r="6"
                  fill="#fff"
                />
              ))
            ))}
          </svg>
        </span>
      )}
    </button>
  );
};

