'use client';

import React from 'react';
import Link from 'next/link';
import styles from './About.module.css';

const About = () => {
    return (
        <section className={styles.aboutSection}>
            <div className={styles.container}>
                {/* Left Section: Image */}
                <div className={styles.imageContainer}>
                    <div className={styles.mainImageWrapper}>
                        <img
                            src="./about.png"
                            alt="Solar Professional Team"
                            className={styles.mainImage}
                        />
                    </div>
                </div>

                {/* Right Section: Content */}
                <div className={styles.content}>
                    <span className={styles.subtitle}>About Us</span>
                    <h2 className={styles.title}>
                        Building a Sustainable Future with Solar Power
                    </h2>
                    <p className={styles.description}>
                        Solar Spectrum believes the future of energy is clean, reliable and sustainable. We&apos;re an Australian renewable energy company passionate about helping homes and businesses get to their energy future by providing innovative, affordable, efficient solar solutions, built for durability.
                    </p>
                    <p className={styles.description}>
                        Solar Spectrum has designed and installed thousands of solar energy systems throughout Australia having worked for many years in the renewable energy industry. Our team of experts work with customers to develop renewable energy solutions that are right for a variety of property types, energy needs and budgets.
                    </p>
                    <p className={styles.description}>
                        We are the most experienced company in providing complete solar energy solutions — solar panel installations, battery storage systems, solar inverter solutions and smart energy management technologies — helping customers achieve maximum efficiency and lower electricity costs.
                    </p>

                    <div className={styles.featureGrid}>
                        <div className={styles.featureItem}>
                            <div className={styles.checkCircle}>
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="4">
                                    <path d="M20 6L9 17l-5-5" />
                                </svg>
                            </div>
                            Custom Solar Solutions
                        </div>
                        <div className={styles.featureItem}>
                            <div className={styles.checkCircle}>
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="4">
                                    <path d="M20 6L9 17l-5-5" />
                                </svg>
                            </div>
                            Battery Storage Systems
                        </div>
                        <div className={styles.featureItem}>
                            <div className={styles.checkCircle}>
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="4">
                                    <path d="M20 6L9 17l-5-5" />
                                </svg>
                            </div>
                            Flexible Finance Options
                        </div>
                        <div className={styles.featureItem}>
                            <div className={styles.checkCircle}>
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="4">
                                    <path d="M20 6L9 17l-5-5" />
                                </svg>
                            </div>
                            24/7 Call &amp; Chat Support
                        </div>
                    </div>

                    <Link href="/about">
                        <button className={styles.moreBtn}>More About</button>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default About;
