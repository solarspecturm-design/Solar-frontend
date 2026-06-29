'use client';

import React, { useState, useEffect, useCallback, useRef } from 'react';
import Link from 'next/link';
import styles from './AdsSlider.module.css';

const adImages = [
    { src: '/ads/3.webp', alt: 'Solar Battery Deal 1' },
    { src: '/ads/4.webp', alt: 'Solar Battery Deal 2' },
    { src: '/ads/5.webp', alt: 'Solar Battery Deal 3' },
    { src: '/ads/6.webp', alt: 'Solar Battery Deal 4' },
];

const getVisibleCount = (width: number) => {
    if (width < 640) return 1;
    if (width < 980) return 2;
    return 3;
};

const AdsSlider = () => {
    const [current, setCurrent] = useState(0);
    const [visible, setVisible] = useState(3);
    const total = adImages.length;
    const maxIndex = Math.max(total - visible, 0);
    const touchStartX = useRef<number | null>(null);
    const touchEndX = useRef<number | null>(null);
    const minSwipeDistance = 50;

    const prev = useCallback(() => {
        setCurrent((c) => Math.max(c - 1, 0));
    }, []);

    const next = useCallback(() => {
        setCurrent((c) => Math.min(c + 1, maxIndex));
    }, [maxIndex]);

    const onTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
        touchStartX.current = event.touches[0].clientX;
    };

    const onTouchMove = (event: React.TouchEvent<HTMLDivElement>) => {
        touchEndX.current = event.touches[0].clientX;
    };

    const onTouchEnd = () => {
        if (touchStartX.current === null || touchEndX.current === null) {
            touchStartX.current = null;
            touchEndX.current = null;
            return;
        }

        const distance = touchStartX.current - touchEndX.current;

        if (distance > minSwipeDistance) {
            next();
        } else if (distance < -minSwipeDistance) {
            prev();
        }

        touchStartX.current = null;
        touchEndX.current = null;
    };

    useEffect(() => {
        const updateVisible = () => {
            setVisible(getVisibleCount(window.innerWidth));
        };

        updateVisible();
        window.addEventListener('resize', updateVisible);
        return () => window.removeEventListener('resize', updateVisible);
    }, []);

    useEffect(() => {
        setCurrent((currentIndex) => Math.min(currentIndex, maxIndex));
    }, [maxIndex]);

    // Auto-advance
    const dotCount = maxIndex + 1;

    return (
        <section className={styles.section}>
            {/* Header */}
            <div className={styles.header}>
                <div className={styles.badgeRow}>
                    <span className={styles.badge}>⚡ Limited Time Offers</span>
                </div>
                <h2 className={styles.title}>
                    Exclusive Solar Battery{' '}
                    <span className={styles.titleAccent}>Savings Deals</span>
                </h2>
                <p className={styles.subtitle}>
                    Upgrade to a premium solar battery system today and start saving on your energy bills.
                    <span className={styles.highlight}> Top-rated batteries at unbeatable prices — only for a limited time.</span>
                </p>
            </div>

            {/* Slider */}
            <div className={styles.sliderOuter}>
                {/* Left Arrow */}
                <button
                    className={`${styles.arrow} ${styles.arrowLeft}`}
                    onClick={prev}
                    disabled={current === 0}
                    aria-label="Previous"
                >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="15 18 9 12 15 6" />
                    </svg>
                </button>

                <div
                    className={styles.sliderWindow}
                    onTouchStart={onTouchStart}
                    onTouchMove={onTouchMove}
                    onTouchEnd={onTouchEnd}
                >
                    <div
                        className={styles.track}
                        style={{ transform: `translateX(calc(-${current} * (100% / ${visible})))` }}
                    >
                        {adImages.map((img, i) => (
                            <div
                                key={i}
                                className={styles.slide}
                                style={{ flex: `0 0 calc(100% / ${visible})` }}
                            >
                                <img
                                    src={img.src}
                                    alt={img.alt}
                                    className={styles.slideImg}
                                />
                                <Link href="/contact" className={styles.quoteBtn}>
                                    Get Quote
                                    <span className={styles.quoteArrow} aria-hidden="true">→</span>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Arrow */}
                <button
                    className={`${styles.arrow} ${styles.arrowRight}`}
                    onClick={next}
                    disabled={current >= maxIndex}
                    aria-label="Next"
                >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="9 18 15 12 9 6" />
                    </svg>
                </button>
            </div>

            {/* Dots */}
            <div className={styles.dots}>
                {Array.from({ length: dotCount }).map((_, i) => (
                    <button
                        key={i}
                        className={`${styles.dot} ${i === current ? styles.dotActive : ''}`}
                        onClick={() => setCurrent(i)}
                        aria-label={`Go to slide ${i + 1}`}
                    />
                ))}
            </div>
        </section>
    );
};

export default AdsSlider;
