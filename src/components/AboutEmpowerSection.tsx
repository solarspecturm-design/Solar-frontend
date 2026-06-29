'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './AboutEmpowerSection.module.css';

const AboutEmpowerSection = () => {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                {/* Left Content */}
                <div className={styles.contentColumn}>
                    <span className={styles.subtitle}>About Us</span>
                    <h2 className={styles.heading}>
                        Smart Solar Energy Solutions For A Greener Tomorrow
                    </h2>

                    <p className={styles.description}>
                        At Solar Spectrum, we are dedicated to building a cleaner, smarter and more sustainable energy future for Australian homes and businesses. We are a trusted renewable energy company that deals in advanced solar energy solutions. Our services include solar panel installations, battery storage systems and smart energy management technologies that make renewable power more accessible, efficient and dependable.
                    </p>
                    <p className={styles.description}>
                        Our goal is simple – to help Australians take control of their energy future with high quality solar solutions that reduce electricity costs, increase energy independence and support a more sustainable way of living.
                    </p>
                    <p className={styles.description}>
                        Solar Spectrum is dedicated to supplying renewable energy solutions that are tailored to the needs of residential, commercial and industrial properties across Australia. We pride ourselves on our innovative approach, customer satisfaction and long term performance.
                    </p>

                    <div className={styles.metricsContainer}>
                        <div className={styles.ratingBlock}>
                            <svg className={styles.starIcon} fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                            <span className={styles.ratingText}>Excellent 4.8/5 Rating</span>
                        </div>
                    </div>

                    <Link href="/contact">
                        <button className={styles.button}>
                            Get Started
                            <svg className={styles.buttonArrow} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path d="M17 8l4 4m0 0l-4 4m4-4H3" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                    </Link>

                </div>

                {/* Right Image */}
                <div className={styles.imageColumn}>
                    {/* Background Image Container */}
                    <div className={styles.mainImageWrapper}>
                        <Image
                            src="/about.png"
                            alt="Solar Engineer"
                            fill
                            className={styles.mainImage}
                        />
                    </div>

                    {/* Floating Card - Success 89% */}
                    <div className={`${styles.card} ${styles.cardTop}`}>
                        <div className={styles.textContainer}>
                            <h3 className={styles.cardNumber}>100% <span className={styles.cardLabelSuccess}>Quality</span></h3>
                            <p className={styles.cardText}>
                                We guarantee you the best solar technology, installation standards and a smooth process from start to finish.
                            </p>
                        </div>
                    </div>

                    {/* Floating Card - Experience */}
                    <div className={`${styles.card} ${styles.cardBottom}`}>
                        <div className={styles.textContainer}>
                            <h3 className={styles.cardNumber}>24/7 <span className={styles.cardLabelExperience}>Support</span></h3>
                            <p className={styles.cardText}>
                                Dedicated customer support via telephone and live chat support for all customers.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default AboutEmpowerSection;
