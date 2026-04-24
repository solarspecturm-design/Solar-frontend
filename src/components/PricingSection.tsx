'use client';

import React from 'react';
import Link from 'next/link';
import styles from './PricingSection.module.css';

const PricingSection = () => {
    return (
        <section className={styles.section}>
            {/* Header */}
            <div className={styles.header}>
                <span className={styles.subtitle}>Best Solar Deals</span>
                <h2 className={styles.title}>Melbourne’s Leading Destination for Premium Solar & Battery Solutions across Victoria</h2>
                <p className={styles.description}>
                    Choose from our most popular energy solutions tailored for Victorian homes.
                </p>
            </div>

            {/* Pricing Cards */}
            <div className={styles.cardsContainer}>
                {/* Card 1 - Premium 10kWh */}

                  <div className={styles.card}>
                    <div className={styles.cardHeaderOrange}>
                        <h3 className={styles.productTitle}>Signenergy 8kWh</h3>
                        <p className={styles.productSubtitle}>Complete Home Energy Solution</p>
                    </div>                    <div className={styles.pricingBody}>
                        <div className={styles.powerSecurity}>
                            <div><strong>24/7 power security</strong><br />with blackout protection.</div>
                        </div>
                    </div>
                    <div className={styles.features}>
                        <ul className={styles.featuresList}>
                            <li className={styles.featureItem}>
                                <div><strong>24/7 power security</strong>With blackout protection</div>
                            </li>
                            <li className={styles.featureItem}>
                                <div><strong>Zero Power Bills</strong>Potential to eliminate bills</div>
                            </li>
                            <li className={styles.featureItem}>
                                <div><strong>Smart Features</strong>App monitoring included</div>
                            </li>
                        </ul>
                        <div className={styles.warrantyBox}>✓ $0 Interest-free finance available</div>
                        <div className={styles.warrantyBox}>✓ Best-rated solar battery in Victoria</div>
                        <Link href="/contact" className="mt-auto">
                            <button className={styles.orangeButton}>Get Your Free Quote →</button>
                        </Link>
                    </div>
                </div>
               
                {/* Card 2 - Smart Start */}
                <div className={`${styles.card} ${styles.cardFeatured}`}>
                    <div className={styles.popularBadge}>MOST POPULAR</div>
                    <div className={styles.cardHeaderOrange}>
                        <h3 className={styles.productTitle}>Smart Start Solar Package</h3>
                        <p className={styles.productSubtitle}>Ideal for Small to Medium Homes</p>
                    </div>

                    <div className={styles.pricingBody}>
                        <div className={styles.priceContainer}>
                            <div className={styles.priceWrapper}>
                                <span className={styles.currentPrice}>$1,300</span>
                                <span className={styles.originalPrice}>$2,999</span>
                            </div>
                            <span className={styles.payNothing}>Pay nothing upfront</span>
                        </div>
                        <span className={styles.idealFor}>Perfect for first-time solar buyers.</span>
                    </div>

                    <div className={styles.features}>
                        <ul className={styles.featuresList}>
                            <li className={styles.featureItem}>
                                <div><strong>Save $2,200 Yearly</strong>Average household savings</div>
                            </li>
                            <li className={styles.featureItem}>
                                <div><strong>21kWh Daily Output</strong>Covers most daily power needs</div>
                            </li>
                            <li className={styles.featureItem}>
                                <div><strong>Free Panel Upgrade</strong>440W high-efficiency panels</div>
                            </li>
                        </ul>
                        <div className={styles.warrantyBox}>✓ $0 Interest-free finance available</div>
                        <Link href="/contact" className="mt-auto">
                            <button className={styles.orangeButton}>Get Your Free Quote →</button>
                        </Link>
                    </div>
                </div>

                {/* Card 3 - Signenergy 8kWh */}
               <div className={styles.card}>
                    <div className={styles.cardHeaderOrange}>
                        <h3 className={styles.productTitle}>Premium 10kWh Solar System</h3>
                        <p className={styles.productSubtitle}>Perfect for Large Family Homes</p>
                    </div>

                    <div className={styles.pricingBody}>
                        <div className={styles.priceContainer}>
                            <div className={styles.priceWrapper}>
                                <span className={styles.currentPrice}>$4,990*</span>
                                <span className={styles.originalPrice}>$7,790</span>
                            </div>
                            <span className={styles.savingsBadge}>Save $2,800 today</span>
                        </div>
                        <span className={styles.idealFor}>Ideal for 4+ bedroom homes with high energy usage.</span>
                    </div>

                    <div className={styles.features}>
                        <ul className={styles.featuresList}>
                            <li className={styles.featureItem}>
                                <div><strong>Save $3,300 Yearly</strong>Typical annual savings on power bills</div>
                            </li>
                            <li className={styles.featureItem}>
                                <div><strong>VIC Rebate Included</strong>$1,400 rebate & $1,400 Solar Victoria Loan Applied</div>
                            </li>
                            <li className={styles.featureItem}>
                                <div><strong>High Performance</strong>Powers AC, pool & large appliances</div>
                            </li>
                        </ul>
                        <div className={styles.warrantyBox}>✓ 25-year performance warranty included</div>
                        <Link href="/contact" className="mt-auto">
                            <button className={styles.orangeButton}>Get Your Free Quote →</button>
                        </Link>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default PricingSection;
