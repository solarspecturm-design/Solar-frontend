'use client';

import React, { useState, useEffect } from 'react';
import styles from './Hero.module.css';

const images = [
    '/hero-images/1.webp',
    '/hero-images/2.webp'
];

const Hero = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className={styles.hero}>
            <div className={styles.imageWrapper}>
                {images.map((img, index) => (
                    <img
                        key={img}
                        src={img}
                        alt={`hero banner ${index + 1}`}
                        className={`${styles.bgImage} ${index === currentImageIndex ? styles.active : ''}`}
                    />
                ))}
            </div>
        </section>
    );
};

export default Hero;
