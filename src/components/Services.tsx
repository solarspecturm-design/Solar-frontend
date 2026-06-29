'use client';

import React from 'react';
import Link from 'next/link';
import styles from './Services.module.css';

const services = [
    {
        title: "Solar Panels",
        description: "Tailor-made solar panel installations for your property’s energy needs. Our specialist team creates tailor-made solar solutions to improve energy efficiency, reduce electricity bills and maximize renewable energy production.",
        image: "./services2.png",
        learnMoreLink: "/product"
    },
    {
        title: "Battery Pack Solar",
        description: "Premium solar battery storage systems for storing excess solar energy and increasing energy independence. We install proven battery systems designed for your power needs, helping you reduce your dependency on the grid and maximise your solar investment.",
        image: "services4.png",
        learnMoreLink: "/solar-battery"
    },
    {
        title: "Climate and the Atmosphere",
        description: "Intelligent solutions for climate and air for more comfort and energy efficiency Professionally designed and installed to the needs of your property, get us all moving to a more sustainable energy future.",
        image: "services3.png",
        learnMoreLink: "/heating-cooling"
    }
];

const Services = () => {
    return (
        <section className={styles.servicesSection}>
            <div className={styles.header}>
                <span className={styles.subtitle}>What We Offer</span>
                <h2 className={styles.title}>Customized Solar Solutions</h2>
                <p className={styles.intro}>
                    We provide full solar power solutions for homes and businesses including expert consultation, professional installation and reliable customer service.
                </p>
            </div>

            <div className={styles.grid}>
                {services.map((service, index) => (
                    <div key={index} className={styles.card}>
                        <div className={styles.imageContainer}>
                            <img
                                src={service.image}
                                alt={service.title}
                                className={styles.serviceImage}
                            />
                        </div>
                        <h3 className={styles.serviceTitle}>
                            {service.title}
                        </h3>

                        <p className={styles.description}>{service.description}</p>

                        <div className={styles.buttonGroup}>
                            <Link href="/contact">
                                <button className={styles.getStartedBtn}>Get Started</button>
                            </Link>
                            <Link href={service.learnMoreLink}>
                                <button className={styles.learnMoreBtn}>Learn More</button>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Services;
