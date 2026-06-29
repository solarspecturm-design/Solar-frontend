'use client';

import React from 'react';
import Image from 'next/image';
import styles from './HistoryJourneySection.module.css';

const HistoryJourneySection = () => {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                {/* Left Side - Visual Composition */}
                <div className={styles.visualContainer}>
                    <Image
                        src="/Solar Spectrum.png"
                        alt="Renewable Energy Evolution"
                        width={600}
                        height={700}
                        className={styles.mainImage}
                        priority
                    />
                </div>

                {/* Right Side - Content */}
                <div className={styles.content}>
                    <p className={styles.subtitle}>Our <span>Story</span></p>
                    <h2 className={styles.title}>Innovation at Every Step</h2>

                    <div className={styles.paragraphContainer}>
                        <p className={styles.mainDescription}>
                            Solar Spectrum wants to make clean energy more affordable and accessible to everyone. Over the years we have continued to grow, combining cutting edge solar technology with expert industry knowledge and helping thousands of customers transition towards a more sustainable energy future.
                        </p>
                        <p className={styles.secondaryDescription}>
                            Our experience in the renewable energy sector tells us that every property has different energy requirements. And this is the reason why we focus on building bespoke, not off-the-shelf solar systems. We’re with you from your initial consultation and system design through professional installation and ongoing support. We make sure each project is done with precision and care.
                        </p>
                        <p className={styles.secondaryDescription}>
                            We know that solar isn’t just about putting up panels, it’s about developing smarter energy solutions that deliver real value for years to come.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HistoryJourneySection;
