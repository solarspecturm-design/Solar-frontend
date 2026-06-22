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
                        Renewable Energy Storage Solution
                    </h2>
                    <p className={styles.description}>
                        At Solar Spectrum, we're committed to transforming how Australians power their homes. With cutting-edge solar technology, battery storage solutions, and integrated smart systems, we make renewable energy accessible, affordable, and efficient. Our expert team has installed thousands of systems, delivering exceptional results and customer satisfaction across Australia.
                    </p>

                    <div className={styles.featureGrid}>
                        <div className={styles.featureItem}>
                            <div className={styles.checkCircle}>
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="4">
                                    <path d="M20 6L9 17l-5-5" />
                                </svg>
                            </div>
                            Solar Inverter Setup
                        </div>
                        <div className={styles.featureItem}>
                            <div className={styles.checkCircle}>
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="4">
                                    <path d="M20 6L9 17l-5-5" />
                                </svg>
                            </div>
                            Battery Storage Solutions
                        </div>
                        <div className={styles.featureItem}>
                            <div className={styles.checkCircle}>
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="4">
                                    <path d="M20 6L9 17l-5-5" />
                                </svg>
                            </div>
                            Solar Material Financing
                        </div>
                        <div className={styles.featureItem}>
                            <div className={styles.checkCircle}>
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="4">
                                    <path d="M20 6L9 17l-5-5" />
                                </svg>
                            </div>
                            24 X 7 Call & Chat Support
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
