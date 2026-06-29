'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './SolarSolution.module.css';

const SolarSolution = () => {
    return (
        <section className={styles.section}>
            {/* Background Image */}
            <Image
                src="/services2.png"
                alt="Solar panel field"
                fill
                className={styles.bgImg}
                priority
            />

            {/* Overlay — darkens edges, lighter center */}
            <div className={styles.overlay} />

            {/* Centered content */}
            <div className={styles.content}>

                {/* Heading */}
                <h2 className={styles.heading}>
                    Creative Solar{' '}
                    <span className={styles.green}>Battery Storage</span>{' '}
                    Solutions
                </h2>

                {/* Subtitle */}
                <p className={styles.subtitle}>
                    Add to that reliable technology of battery storage and the power of solar energy becomes even greater.
                    Solar Spectrum&apos;s leading edge solar battery storage solutions enable our customers to store excess energy generated during the day for use when needed.
                </p>
                <p className={styles.subtitle}>
                    Battery storage makes energy more efficient, more independent and less reliant on the traditional electricity grid.
                    It gives homeowners and businesses the opportunity to get the most out of their solar investment, by delivering clean energy when they need it.
                    Our team of experts will help you choose the right battery storage solution for your energy use, property needs and future goals.
                </p>

                {/* CTA */}
                <Link href="/contact" className={styles.cta}>
                    Consult Now
                </Link>

            </div>
        </section>
    );
};

export default SolarSolution;
