'use client';

import React from 'react';
import Link from 'next/link';
import Logo from './Logo';
import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footerSection}>

            {/* Main Footer Content */}
            <div className={styles.footerMain}>
                {/* Column 1: Info */}
                <div className={styles.logoArea}>
                    <Logo width={150} height={40} className={styles.footerLogo} />
                    <p className={styles.logoDesc}>
                        Melbourne, Australia's leading provider of smart energy solutions. Powering your home with premium solar, battery, and climate control systems.
                    </p>
                    <div className={styles.socials}>
                        <Link href="https://www.facebook.com/profile.php?id=61563632881652" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
                            <svg width="18" height="18" fill="white" viewBox="0 0 24 24"><path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.383 14.392 5 15.358 5H18V0h-4.261C10.038 0 9 2.1 9 4.333V8z" /></svg>
                        </Link>
                        <Link href="https://www.instagram.com/solarspectrumau/" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
                            <svg width="18" height="18" fill="white" viewBox="0 0 24 24"><path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zm8.8 1.9a1.1 1.1 0 1 1 0 2.2 1.1 1.1 0 0 1 0-2.2zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 1.5A3.5 3.5 0 1 0 12 15.5 3.5 3.5 0 0 0 12 8.5z" /></svg>
                        </Link>
                    </div>
                </div>

                {/* Column 2: Quick Links */}
                <div className={styles.linksArea}>
                    <h3 className={styles.columnTitle}>Quick Link</h3>
                    <div className={styles.links}>
                        <Link href="/" className={styles.linkItem}><span className={styles.linkIcon}>›</span> Home</Link>
                        <Link href="/about" className={styles.linkItem}><span className={styles.linkIcon}>›</span> About</Link>
                        <Link href="/services" className={styles.linkItem}><span className={styles.linkIcon}>›</span> Services</Link>
                        <Link href="/contact" className={styles.linkItem}><span className={styles.linkIcon}>›</span> Contact Us</Link>
                    </div>
                </div>

                {/* Column 3: Our Service */}
                <div className={styles.linksArea}>
                    <h3 className={styles.columnTitle}>Our Service</h3>
                    <div className={styles.links}>
                        <Link href="/product" className={styles.linkItem}><span className={styles.linkIcon}>›</span> Solar Panels</Link>
                        <Link href="/solar-battery" className={styles.linkItem}><span className={styles.linkIcon}>›</span> Solar Battery</Link>
                        <Link href="/heating-cooling" className={styles.linkItem}><span className={styles.linkIcon}>›</span> Heating & Cooling</Link>
                        <Link href="/ev-chargers" className={styles.linkItem}><span className={styles.linkIcon}>›</span> Heat Pump</Link>
                        <Link href="/ev-chargers" className={styles.linkItem}><span className={styles.linkIcon}>›</span> EV Chargers</Link>
                    </div>
                </div>

                {/* Column 4: Contact Us */}
                <div className={styles.contactArea}>
                    <h3 className={styles.columnTitle}>Contact Us</h3>
                    <div className={styles.contactInfo}>
                        <div className={styles.contactItem}>
                            <div className={styles.contactIcon}>
                                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" /></svg>
                            </div>
                            <a href="tel:1300367909" className={styles.contactLink}>1300 367 909</a>
                        </div>
                        <div className={styles.contactItem}>
                            <div className={styles.contactIcon}>
                                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" /></svg>
                            </div>
                            <a href="mailto:sales@solarspectrum.com.au" className={styles.contactLink}>sales@solarspectrum.com.au</a>
                        </div>
                        <div className={styles.contactItem}>
                            <div className={styles.contactIcon}>
                                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" /></svg>
                            </div>
                            <span>404/87 Overton Rd,<br />Williams Landing, Melbourne, VIC 3027, Australia</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className={styles.bottomBar}>
                <div className={styles.bottomContainer}>
                    <span>© 2025 Solar Spectrum. All rights reserved.</span>
                    <div className={styles.legalLinks}>
                            <Link href="/privacy-policy" className={styles.legalLink}>Privacy Policy</Link>
                        <Link href="#" className={styles.legalLink}>Terms of Service</Link>
                    </div>
                </div>
            </div>

        </footer>
    );
};

export default Footer;
