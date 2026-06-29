'use client';

import React from 'react';
import styles from './Process.module.css';

const steps = [
    {
        number: 1,
        title: "Consulting and Site Assessment",
        desc: "Our process begins with an in-depth consultation to understand your energy needs and goals. Then our team takes the stage.",
        layout: "archedTop",
        textPosition: "bottom"
    },
    {
        number: 2,
        title: "Custom System Design & Planning",
        desc: "Developing tailored solutions to address your specific requirements, ensuring the system is perfectly matched to your property and energy goals.",
        layout: "archedBottom",
        textPosition: "top"
    },
    {
        number: 3,
        title: "Professional Solar Installation",
        desc: "We evaluate the roof space, tilt, and orientation for rooftop installations, along with ground space and shade assessment for optimal placement.",
        layout: "archedTop",
        textPosition: "bottom"
    },
    {
        number: 4,
        title: "Monitoring and Constant Support",
        desc: "Effective monitoring and ongoing support are essential for the best performance of your solar energy system, now and into the future.",
        layout: "archedBottom",
        textPosition: "top"
    }
];

const Process = () => {
    return (
        <section className={styles.processSection}>
            <div className={styles.bgDots}></div>

            <div className={styles.header}>
                <span className={styles.subtitle}>Our Process</span>
                <h2 className={styles.title}>Solar Spectrum Process</h2>
                <p className={styles.intro}>
                    We have an easy 4 step process to make sure our solar solutions are dependable and efficient.
                </p>
            </div>

            <div className={styles.grid}>
                {steps.map((step, index) => (
                    <div
                        key={index}
                        className={`${styles.stepBlock} ${step.textPosition === 'top' ? styles.textAboveImage : ''}`}
                    >
                        <div className={styles.content}>
                            <h3 className={styles.stepTitle}>{step.title}</h3>
                            <p className={styles.stepDesc}>{step.desc}</p>
                        </div>

                        <div className={`${styles.imageWrapper} ${styles[step.layout]}`}>
                            <div className={styles.stepImageWrapper}>
                                <img
                                    src={
                                        step.number === 1 ? "services1.png" :
                                            step.number === 2 ? "https://images.pexels.com/photos/19895872/pexels-photo-19895872.jpeg" :
                                                step.number === 3 ? "https://images.pexels.com/photos/8853505/pexels-photo-8853505.jpeg" :
                                                    "https://images.pexels.com/photos/4254165/pexels-photo-4254165.jpeg"
                                    }
                                    alt={step.title}
                                    className={styles.stepImage}
                                />
                            </div>
                            <div className={styles.numberBadge}>{step.number}</div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Process;
