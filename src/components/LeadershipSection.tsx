'use client';

import React from 'react';
import styles from './LeadershipSection.module.css';

const LeadershipSection = () => {
    return (
        <section className={styles.section}>
            <div className={styles.bgGlow}></div>
            <div className={styles.container}>
                <div className={styles.header}>
                    <span className={styles.subtitle}>Our Legacy</span>
                    <h2 className={styles.title}>Global Leadership In Energy Storage</h2>
                    <p className={styles.description}>
                        ESYsunhome is a leading high-tech enterprise and a Top 5 BMS provider in China. 
                        With over 20 years of lithium battery heritage, we deliver safe, simple, and efficient 
                        energy solutions to families across the globe. Our AI-driven technology ensures 
                        your home is always powered by the smartest energy management system available.
                    </p>
                </div>

                <div className={styles.statsGrid}>
                    <div className={styles.statCard}>
                        <div className={styles.statIcon}>
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                            </svg>
                        </div>
                        <div className={styles.statValue}>TOP 5</div>
                        <div className={styles.statLabel}>BMS Provider in China</div>
                    </div>

                    <div className={styles.statCard}>
                        <div className={styles.statIcon}>
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="12" cy="12" r="10"></circle>
                                <polyline points="12 6 12 12 16 14"></polyline>
                            </svg>
                        </div>
                        <div className={styles.statValue}>20+ Years</div>
                        <div className={styles.statLabel}>Battery Heritage</div>
                    </div>

                    <div className={styles.statCard}>
                        <div className={styles.statIcon}>
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                                <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                                <line x1="12" y1="22.08" x2="12" y2="12"></line>
                            </svg>
                        </div>
                        <div className={styles.statValue}>GLOBAL</div>
                        <div className={styles.statLabel}>Delivery Network</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LeadershipSection;
