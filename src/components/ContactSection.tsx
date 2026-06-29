'use client';

import React, { useState, useEffect } from 'react';
import styles from './ContactSection.module.css';

const adImages = [
    '/ads/1.webp',
    '/ads/2.webp'
];

const ContactSection = () => {
    const [currentAdIndex, setCurrentAdIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentAdIndex((prev) => (prev + 1) % adImages.length);
        }, 4000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className={styles.contactSection}>
            <div className={styles.header}>
                <span className={styles.subtitle}>Contact Us</span>
                <h2 className={styles.title}>GET IN TOUCH WITH SOLAR SPECTRUM</h2>
                <p className={styles.intro}>
                    We're here to help you switch to clean, affordable solar energy. Contact our team today to start your journey toward a brighter future.
                </p>
            </div>

            <div className={styles.container}>
                {/* Left Area: Image Slider */}
                <div className={styles.imageArea}>
                    <div className={styles.sliderWrapper}>
                        {adImages.map((img, index) => (
                            <img
                                key={img}
                                src={img}
                                alt={`Solar ad ${index + 1}`}
                                className={`${styles.sliderImage} ${index === currentAdIndex ? styles.sliderImageActive : ''}`}
                            />
                        ))}
                    </div>
                </div>

                {/* Right Area: Contact Form */}
                <div className={styles.formArea}>
                    <h3 className={styles.formTitle}>
                        Your solar journey starts here. Enter your details and we'll take care of the rest.
                    </h3>

                    <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
                        <div className={styles.inputGroup}>
                            <input type="text" placeholder="Name" className={styles.input} required />
                        </div>
                        <div className={styles.inputGroup}>
                            <input type="email" placeholder="Email" className={styles.input} required />
                        </div>
                        <div className={styles.inputGroup}>
                            <input type="tel" placeholder="Phone No" className={styles.input} required />
                        </div>
                        <div className={styles.inputGroup}>
                            <textarea placeholder="Enter Your Address" className={styles.textarea} required></textarea>
                        </div>

                        <button type="submit" className={styles.submitBtn}>
                            Send request
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;

