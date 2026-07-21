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
        <div className={styles.copy}>
          <p className={styles.title}>We value your privacy</p>
          <p className={styles.text}>
            We use cookies to enhance your browsing experience, serve personalised ads or content, and analyse our traffic. By clicking "Accept All", you consent to our use of cookies. Read our{' '}
            <Link href="/privacy-policy" className={styles.policyLink}>
              Cookie Policy
            </Link>{' '}
            for details.
          </p>
        </div>

        <div className={styles.actions}>
          <Link href="/privacy-policy" className={`${styles.btn} ${styles.customize}`}>
            Customise
          </Link>
          <button className={`${styles.btn} ${styles.reject}`} onClick={() => handleConsent('rejected')}>
            Reject All
          </button>
          <button className={`${styles.btn} ${styles.accept}`} onClick={() => handleConsent('accepted')}>
            Accept All
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
