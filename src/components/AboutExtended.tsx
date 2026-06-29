'use client';

import React from 'react';
import styles from './AboutExtended.module.css';

const cards = [
    {
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="7" width="20" height="14" rx="2" />
                <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
                <line x1="12" y1="12" x2="12" y2="16" />
                <line x1="10" y1="14" x2="14" y2="14" />
            </svg>
        ),
        heading: 'Next-Generation Solar Battery Storage & Energy Solutions',
        paragraphs: [
            'Our battery storage solutions allow customers to store excess solar energy generated during the day for use when it\'s most needed — giving you energy independence, efficiency and greater control over your energy use.',
            'We have selected our solar inverter and storage systems with great care so you can be assured of reliable performance, helping Australian homes and businesses develop smarter, more resilient energy solutions for the future.',
        ],
    },
    {
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
            </svg>
        ),
        heading: 'Taking Your Energy Needs Seriously',
        paragraphs: [
            'Each property is unique, and so Solar Spectrum concentrates on creating custom solar solutions, not a one-size-fits-all approach. From the initial consultation and system design to professional installation and ongoing support, our specialists handle each project with care and precision.',
            'We guarantee you the best solar technology, installation standards and a smooth process from start to finish.',
        ],
    },
    {
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="12" y1="1" x2="12" y2="23" />
                <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
            </svg>
        ),
        heading: 'Powering Renewable Energy for Everyone',
        paragraphs: [
            'We at Solar Spectrum believe that clean energy should be accessible to everyone. We offer flexible finance solutions to Australian homeowners and businesses to transition to renewable energy, removing financial barriers.',
            'We want to make it easier for more people to switch to sustainable energy solutions and to enjoy the benefits of lower energy costs, more efficiency and more energy independence.',
        ],
    },
    {
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.77 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.84a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
        ),
        heading: 'Dependable Help When You Need It',
        paragraphs: [
            'Installation isn\'t the end of our commitment to you. At Solar Spectrum we understand the importance of dedicated customer support, which is why we provide 24/7 telephone and live chat support to give our customers expert guidance when they need it.',
            'Solar Spectrum is committed to innovation, reliability and customer satisfaction and continues to lead the way in smarter renewable energy solutions for Australia.',
        ],
    },
];

const AboutExtended = () => {
    return (
        <section className={styles.section}>
            <div className={styles.inner}>
                <div className={styles.grid}>
                    {cards.map((card, i) => (
                        <div key={i} className={styles.card}>
                            <div className={styles.iconWrapper}>
                                {card.icon}
                            </div>
                            <h3 className={styles.cardHeading}>{card.heading}</h3>
                            {card.paragraphs.map((p, j) => (
                                <p key={j} className={styles.cardText}>{p}</p>
                            ))}
                        </div>
                    ))}
                </div>

                <p className={styles.closing}>
                    Together we are creating a cleaner, brighter and more sustainable energy future.
                </p>
            </div>
        </section>
    );
};

export default AboutExtended;
