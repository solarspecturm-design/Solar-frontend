'use client';

import React from 'react';
import styles from './EsySunhomeSpecs.module.css';

const EsySunhomeSpecs = () => {
    const products = [
        { model: 'HM5', power: '5kW', capacity: '5-30kWh', phase: 'Single Phase', type: 'All-in-One' },
        { model: 'HM6', power: '6kW', capacity: '5-30kWh', phase: 'Single Phase', type: 'All-in-One' },
        { model: 'HM10', power: '10kW', capacity: '5-30kWh', phase: 'Single Phase', type: 'All-in-One' },
        { model: 'HM12', power: '12kW', capacity: '5-30kWh', phase: 'Single Phase', type: 'All-in-One' },
        { model: 'HM10-H', power: '10kW', capacity: '10-90kWh', phase: 'Three Phase', type: 'All-in-One' },
        { model: 'HM20', power: '20kW', capacity: '10-90kWh', phase: 'Three Phase', type: 'All-in-One' },
    ];

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <h2 className={styles.title}>Technical Specifications</h2>
                <p className={styles.subtitle}>Discover the perfect fit for your home</p>

                <div className={styles.tableWrapper}>
                    <table className={styles.table}>
                        <thead>
                            <tr>
                                <th>Model</th>
                                <th>Nominal Power</th>
                                <th>Storage Capacity</th>
                                <th>Phase</th>
                                <th>System Type</th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.map((p) => (
                                <tr key={p.model}>
                                    <td>{p.model}</td>
                                    <td>{p.power}</td>
                                    <td>{p.capacity}</td>
                                    <td>{p.phase}</td>
                                    <td>{p.type}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className={styles.features}>
                    <div className={styles.featureCard}>
                        <h3>AI-Driven Optimization</h3>
                        <p>Intelligent algorithms predict your energy needs and optimize battery cycles for maximum efficiency and longevity.</p>
                    </div>
                    <div className={styles.featureCard}>
                        <h3>24/7 Security</h3>
                        <p>Continuous monitoring and fast backup switching ensure your home stays powered during grid outages.</p>
                    </div>
                    <div className={styles.featureCard}>
                        <h3>Seamless Integration</h3>
                        <p>Compact all-in-one design that fits beautifully into any home environment, with easy APP control.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default EsySunhomeSpecs;
