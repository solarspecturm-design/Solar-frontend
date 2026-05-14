'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './EsySunhomeHero.module.css';

const EsySunhomeHero = () => {
    return (
        <section className={styles.hero}>
            <Image
                src="/bg.png"
                alt="Solar Energy Background"
                fill
                priority
                className={styles.bgImage}
            />

            <div className={styles.container}>
                <div className={styles.textContent}>
                    <p className={styles.subtitle}>
                        <span className={styles.subtitleGreen}>ESY Sunhome</span>
                        <span className={styles.subtitleDivider}>|</span>
                        <span className={styles.subtitleOrange}>AI-Driven Energy Storage</span>
                    </p>

                    <h1 className={styles.heading}>
                        REVOLUTIONIZE YOUR HOME ENERGY WITH HM6
                    </h1>

                    <p className={styles.description}>
                        Experience the next generation of energy storage. The ESY Sunhome HM series combines 20 years of lithium battery expertise with advanced AI to give you complete energy independence.
                    </p>

                    <div className={styles.cta}>
                        <Link href="/contact" className={styles.primaryButton}>
                            Get a Quote
                        </Link>
                    </div>
                </div>

                <div className={styles.imageContent}>
                    <div className={styles.imageWrapper}>
                        <Image
                            src="/esy-sunhome.png"
                            alt="ESY Sunhome HM6"
                            fill
                            className={styles.productImage}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default EsySunhomeHero;
