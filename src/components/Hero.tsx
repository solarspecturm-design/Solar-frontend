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
        }, 5000); // Change image every 5 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <section className={styles.hero}>
            {images.map((img, index) => (
                <div
                    key={img}
                    className={`${styles.bgImage} ${index === currentImageIndex ? styles.active : ''}`}
                    style={{ backgroundImage: `url('${img}')` }}
                />
            ))}
        </section>
    );
};

export default Hero;
