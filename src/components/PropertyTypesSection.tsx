'use client';

import React from 'react';
import styles from './PropertyTypesSection.module.css';

const PropertyTypesSection = () => {
    const properties = [
        {
            icon: (
                <svg className={styles.icon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                    <polyline points="9 22 9 12 15 12 15 22" />
                </svg>
            ),
            title: "Solar for the Home",
            description: "Our home solar systems are designed to help Australian homeowners make their own clean energy and reduce their dependence on rising electricity prices. Specialist solar panel installation services to maximise energy production and improve household efficiency."
        },
        {
            icon: (
                <svg className={styles.icon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                </svg>
            ),
            title: "Commercial Solar Solutions",
            description: "Reliable energy solutions are a must for the day-to-day running of a business. We design commercial solar systems that help organizations reduce their energy costs, improve their sustainability and take more control over how they use power."
        },
        {
            icon: (
                <svg className={styles.icon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M2 20V9l4-2 4 2 4-2 6 3V20H2z" />
                    <path d="M17 13v4" />
                    <path d="M7 13v4" />
                    <path d="M12 13v4" />
                </svg>
            ),
            title: "ISS - Industrial Solar Solutions",
            description: "Solar Spectrum’s industrial-grade solar power solutions for industrial facilities with greater energy needs are built for performance, reliability and efficiency, enabling organisations to optimise energy consumption."
        }
    ];

    return (
        <section className={styles.section}>
            <div className={styles.header}>
                <h2 className={styles.headerTitle}>Made-to-Order Solar Solutions</h2>
                <p className={styles.headerIntro}>
                    Solar Spectrum is your one-stop source for solar energy solutions for homes, businesses and large facilities. Together we can design and install systems that suit your energy needs, the structure of your property and your budget.
                </p>
                <p className={styles.headerSub}>
                    Whether you want to reduce your electricity bills, increase your energy efficiency or become more independent from the traditional power grid, our solar solutions can help you achieve your goals.
                </p>
            </div>
            <div className={styles.container}>
                {properties.map((property, index) => (
                    <div key={index} className={styles.card}>
                        <div className={styles.iconCircle}>
                            {property.icon}
                        </div>
                        <div className={styles.content}>
                            <h3 className={styles.title}>{property.title}</h3>
                            <p className={styles.description}>{property.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default PropertyTypesSection;
