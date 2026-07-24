'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import styles from './CookieBanner.module.css';

const COOKIE_CONSENT_KEY = 'solar-cookie-consent';

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const savedConsent = window.localStorage.getItem(COOKIE_CONSENT_KEY);
    if (!savedConsent) {
      setIsVisible(true);
    }
  }, []);

  const handleConsent = (value: 'accepted' | 'rejected') => {
    window.localStorage.setItem(COOKIE_CONSENT_KEY, value);
    setIsVisible(false);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className={styles.overlay} role="dialog" aria-modal="true" aria-label="Cookie consent popup">
      <div className={styles.modal}>
        <div className={styles.header}>
          <div className={styles.iconWrapper} aria-hidden="true">
            <svg className={styles.cookieIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5" />
              <circle cx="8.5" cy="8.5" r="1" fill="currentColor" />
              <circle cx="15.5" cy="15.5" r="1" fill="currentColor" />
              <circle cx="12" cy="12" r="1" fill="currentColor" />
              <circle cx="10" cy="16.5" r="1" fill="currentColor" />
              <circle cx="7" cy="13.5" r="1" fill="currentColor" />
            </svg>
          </div>
          <div className={styles.headerContent}>
            <h3 className={styles.title}>We value your privacy</h3>
          </div>
          <button 
            className={styles.closeBtn} 
            onClick={() => handleConsent('rejected')}
            aria-label="Close cookie consent banner"
          >
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        <div className={styles.copy}>
          <p className={styles.text}>
            We use cookies to enhance your browsing experience, serve personalised ads or content, and analyse our traffic. By clicking &quot;Accept All&quot;, you consent to our use of cookies. Read our{' '}
            <Link href="/privacy-policy" className={styles.policyLink}>
              Cookie Policy
            </Link>{' '}
            for details.
          </p>
        </div>

        <div className={styles.actions}>
          <button className={`${styles.btn} ${styles.accept}`} onClick={() => handleConsent('accepted')}>
            Accept All
          </button>
          <button className={`${styles.btn} ${styles.reject}`} onClick={() => handleConsent('rejected')}>
            Reject All
          </button>
          <Link href="/privacy-policy" className={`${styles.btn} ${styles.customize}`}>
            Customise
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
