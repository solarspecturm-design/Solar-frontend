'use client';

import React from 'react';
import Link from 'next/link';
import styles from './ValuesShowcaseSection.module.css';

const ValuesShowcaseSection = () => {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                {/* Left Side Info */}
                <div className={styles.leftContent}>
                    <p className={styles.subtitle}>Our Guarantee</p>
                    <h2 className={styles.title}>
                        Quality and Customer Satisfaction
                    </h2>
                    <p className={styles.description}>
                        Quality is the heart of what we do at Solar Spectrum. We believe every customer deserves a reliable solar system, professional service, and expert advice. Our experienced team uses high quality solar technology and professional installation standards on each project for long lasting performance.
                    </p>
                    <p className={styles.description}>
                        Our goal is to make it a simple, clear experience for our customers, from initial consultation to support post-installation. Our number one priority is customer satisfaction and we are dedicated to providing dependable renewable energy solutions that our customers can count on.
                    </p>
                    <Link href="/contact">
                        <button className={styles.btn}>Consult Now</button>
                    </Link>
                </div>

                {/* Right Side Cards */}
                <div className={styles.cardsContainer}>
                    {/* Our Vision Card - White */}
                    <div className={`${styles.cardBase} ${styles.whiteCard}`}>
                        <div className={`${styles.iconCircle} ${styles.greenCircle}`}>
                            <svg className={`${styles.icon} ${styles.iconWhite}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="12" cy="12" r="10" />
                                <line x1="2" y1="12" x2="22" y2="12" />
                                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                            </svg>
                        </div>
                        <div className={styles.cardContent}>
                            <h3 className={`${styles.cardTitle} ${styles.textBlack}`}>Our Vision</h3>
                            <p className={`${styles.cardText} ${styles.textGray}`}>
                                We are Australia’s leading renewable energy provider, providing smarter, cleaner and more efficient solar solutions that empower homes and businesses to achieve energy independence.
                            </p>
                        </div>
                    </div>

                    {/* Our Mission Card - White */}
                    <div className={`${styles.cardBase} ${styles.whiteCard}`}>
                        <div className={`${styles.iconCircle} ${styles.greenCircle}`}>
                            <svg className={`${styles.icon} ${styles.iconWhite}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="12" cy="12" r="10" />
                                <path d="M16 12l-4-4-4 4M12 8v9" />
                            </svg>
                        </div>
                        <div className={styles.cardContent}>
                            <h3 className={`${styles.cardTitle} ${styles.textBlack}`}>Our Mission</h3>
                            <p className={`${styles.cardText} ${styles.textGray}`}>
                                We’re dedicated to making renewable energy affordable and accessible through innovative solar technology, professional installation, and customer-centric solutions that provide lasting value.
                            </p>
                        </div>
                    </div>

                    {/* Our Motto Card - White */}
                    <div className={`${styles.cardBase} ${styles.whiteCard}`}>
                        <div className={`${styles.iconCircle} ${styles.greenCircle}`}>
                            <svg className={`${styles.icon} ${styles.iconWhite}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5l6.74-6.76z" />
                                <line x1="16" y1="8" x2="2" y2="22" />
                                <line x1="17.5" y1="15" x2="9" y2="15" />
                            </svg>
                        </div>
                        <div className={styles.cardContent}>
                            <h3 className={`${styles.cardTitle} ${styles.textBlack}`}>Our Motto</h3>
                            <p className={`${styles.cardText} ${styles.textGray}`}>
                                Brighter tomorrow with smarter solar solutions today.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ValuesShowcaseSection;
