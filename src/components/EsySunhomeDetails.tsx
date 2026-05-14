'use client';

import React from 'react';
import Image from 'next/image';
import styles from './EsySunhomeDetails.module.css';

const EsySunhomeDetails = () => {
    const datasheets = [
        'HM5', 'HM6', 'HM5-MAX', 'HM10', 'HM12', 'HM10-H', 'HM15', 'HM20'
    ];

    return (
        <div className={styles.wrapper}>
            {/* Intro Section */}
            <section className={styles.section}>
                <div className={styles.container}>
                    <h2 className={styles.mainTitle}>ESY Sunhome: The All-in-One Power Revolution for Your Home</h2>
                    <div className={styles.introContent}>
                        <p>At Salisbury Solar & Electrical, we believe in bringing the most advanced, reliable energy tech to our local community. That is why we are proud to offer the ESY Sunhome HM Range, a high-performance, all-in-one energy storage system.</p>
                        <p>Designed for homeowners who want to move beyond basic solar, the ESY Sunhome provides a complete “energy hub” for your property. By capturing your excess solar power during the day and storing it for evening use, you can significantly reduce your reliance on the grid and protect your household against rising electricity costs.</p>
                        <p>Unlike many battery systems that require separate inverter hardware or complex retrofit wiring, the ESY Sunhome combines inverter, battery, monitoring platform and safety systems into one vertically integrated energy solution.</p>
                    </div>
                </div>
            </section>

            {/* Three Phase Info */}
            <section className={`${styles.section} ${styles.grayBg}`}>
                <div className={styles.container}>
                    <div className={styles.flexRow}>
                        <div className={styles.flexText}>
                            <h2 className={styles.title}>ESY Sunhome Three Phase</h2>
                            <p>ESY has also released a new three-phase Sunhome range designed for larger homes and properties with higher electrical demand. Models including the HM10-H, HM15-H and HM20-H provide scalable storage up to approximately 90 kWh and are ideal for households planning EV charging, electrification upgrades or full-home backup capability.</p>
                            <button className={styles.primaryButton}>Contact Us</button>
                        </div>
                        <div className={styles.flexImage}>
                            <Image src="/esy-three-phase.png" alt="ESY Sunhome Three Phase" width={500} height={400} className={styles.roundedImage} />
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Stand Out */}
            <section className={styles.section}>
                <div className={styles.container}>
                    <h2 className={styles.titleCenter}>Why ESY Sunhome Stands Out</h2>
                    <div className={styles.benefitsGrid}>
                        <div className={styles.benefitCard}>
                            <h3>Sleek Integrated Design</h3>
                            <p>Unlike traditional systems that require separate inverters and battery boxes with messy external wiring, the ESY Sunhome houses everything in one high-end enclosure.</p>
                        </div>
                        <div className={styles.benefitCard}>
                            <h3>Modular Scalability</h3>
                            <p>The system is designed to grow with your needs. You can easily add battery modules to the stack over time, allowing you to increase your storage capacity.</p>
                        </div>
                        <div className={styles.benefitCard}>
                            <h3>Superior Environmental Protection</h3>
                            <p>Boasting an IP66 rating, ESY Sunhome systems offer industry-leading protection against dust and high-pressure water, ideal for the Australian climate.</p>
                        </div>
                        <div className={styles.benefitCard}>
                            <h3>Seamless Blackout Protection</h3>
                            <p>With an ultra-fast switchover time of just 20ms, the system provides near-instantaneous backup power during grid failures.</p>
                        </div>
                        <div className={styles.benefitCard}>
                            <h3>Advanced Safety Features</h3>
                            <p>Every unit utilises stable Lithium Iron Phosphate (LFP) chemistry and includes built-in fire suppression technology for maximum safety.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Rebate Section */}
            <section className={`${styles.section} ${styles.greenBg}`}>
                <div className={styles.container}>
                    <div className={styles.flexRowInverse}>
                        <div className={styles.flexText}>
                            <h2 className={styles.titleWhite}>Federal Battery Rebate</h2>
                            <p className={styles.textWhite}>Choosing an ESY Sunhome system allows you to take full advantage of the Federal Cheaper Home Batteries Program. We handle the entire rebate process for you.</p>
                            <ul className={styles.listWhite}>
                                <li><strong>Lock in Higher Rebates:</strong> Maximum rate of ~$311/kWh before May 1, 2026.</li>
                                <li><strong>Avoid Funding Drop:</strong> Incentive decreases to ~$252/kWh after May 1.</li>
                            </ul>
                            <button className={styles.whiteButton}>Calculate Your Rebate</button>
                        </div>
                        <div className={styles.flexImage}>
                            <Image src="/esy-rebate.png" alt="Australian Battery Rebate" width={500} height={400} className={styles.roundedImage} />
                        </div>
                    </div>
                </div>
            </section>

            {/* Intelligent Management */}
            <section className={styles.section}>
                <div className={styles.container}>
                    <div className={styles.flexRow}>
                        <div className={styles.flexText}>
                            <h2 className={styles.title}>Intelligent Energy Management</h2>
                            <p>The ESY Sunhome is more than just hardware; it is a smart energy manager. Through a dedicated mobile app, you gain total visibility.</p>
                            <div className={styles.featureItem}>
                                <strong>Real-Time Monitoring:</strong> View solar generation, usage, and battery levels instantly.
                            </div>
                            <div className={styles.featureItem}>
                                <strong>AI-Driven Optimisation:</strong> Predicts energy needs based on usage and weather forecasts.
                            </div>
                            <div className={styles.featureItem}>
                                <strong>VPP Enabled:</strong> Approved for participation with Origin Energy (Amber coming soon).
                            </div>
                        </div>
                        <div className={styles.flexImage}>
                            <Image src="/esy-app.png" alt="Energy Management App" width={500} height={400} className={styles.roundedImage} />
                        </div>
                    </div>
                </div>
            </section>

            {/* Technical Specifications */}
            <section className={`${styles.section} ${styles.grayBg}`}>
                <div className={styles.container}>
                    <h2 className={styles.titleCenter}>Technical Specifications</h2>
                    
                    <div className={styles.specsGrid}>
                        {/* HM6 */}
                        <div className={styles.specsTable}>
                            <h3>HM6 - Single Phase</h3>
                            <ul>
                                <li><span>Inverter Output:</span> 6 kW continuous AC</li>
                                <li><span>Module Capacity:</span> 5.12 kWh per unit</li>
                                <li><span>System Scaling:</span> 5.12 kWh to 30.72 kWh</li>
                                <li><span>Solar Input:</span> Up to 8 kW (2 MPPT)</li>
                                <li><span>Switchover:</span> &lt; 20 ms</li>
                                <li><span>Chemistry:</span> LiFePO4</li>
                                <li><span>Cycle Life:</span> 6,000+ cycles</li>
                                <li><span>IP Rating:</span> IP66</li>
                            </ul>
                        </div>

                        {/* HM10 */}
                        <div className={styles.specsTable}>
                            <h3>HM10-H - Three Phase</h3>
                            <ul>
                                <li><span>Inverter Output:</span> 10 kW continuous</li>
                                <li><span>Module Capacity:</span> 10 kWh per module</li>
                                <li><span>System Scaling:</span> 10 kWh to 90 kWh</li>
                                <li><span>Solar Input:</span> Dual MPPT (Hybrid)</li>
                                <li><span>Switchover:</span> &lt; 20 ms</li>
                                <li><span>Chemistry:</span> LiFePO4</li>
                                <li><span>Cooling:</span> Natural / Passive</li>
                                <li><span>Noise:</span> &lt; 25 dB</li>
                            </ul>
                        </div>
                    </div>

                    <div className={styles.productImagesShowcase}>
                        <div className={styles.productImageItem}>
                            <Image src="/esy-sunhome.png" alt="ESY Sunhome Product" width={400} height={500} className={styles.roundedImage} />
                            <p>ESY Sunhome All-in-One System</p>
                        </div>
                        <div className={styles.productImageItem}>
                            <Image src="/esy-three-phase.png" alt="ESY Sunhome Three Phase" width={400} height={500} className={styles.roundedImage} />
                            <p>ESY Sunhome Three Phase Range</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Product Datasheets */}
            <section className={styles.section}>
                <div className={styles.container}>
                    <h2 className={styles.titleCenter}>Product Datasheets</h2>
                    <div className={styles.datasheetGrid}>
                        <div className={styles.datasheetCard}>
                            <span>HM5</span>
                            <a href="https://salisburysolarandelectrical.com.au/wp-content/uploads/2026/04/ESYSUNHOME_HM56_Datasheet__AU_pdf.pdf" target="_blank" rel="noopener noreferrer" className={styles.downloadBtn}>Download PDF</a>
                        </div>
                        <div className={styles.datasheetCard}>
                            <span>HM6</span>
                            <a href="https://salisburysolarandelectrical.com.au/wp-content/uploads/2026/04/ESYSUNHOME_HM56_Datasheet__AU_pdf.pdf" target="_blank" rel="noopener noreferrer" className={styles.downloadBtn}>Download PDF</a>
                        </div>
                        <div className={styles.datasheetCard}>
                            <span>HM5-MAX</span>
                            <a href="https://salisburysolarandelectrical.com.au/wp-content/uploads/2026/04/ESYSUNHOME_HM5-MAX_HM10_Datasheet_AU_pdf.pdf" target="_blank" rel="noopener noreferrer" className={styles.downloadBtn}>Download PDF</a>
                        </div>
                        <div className={styles.datasheetCard}>
                            <span>HM10</span>
                            <a href="https://salisburysolarandelectrical.com.au/wp-content/uploads/2026/04/ESYSUNHOME_HM5-MAX_HM10_Datasheet_AU_pdf.pdf" target="_blank" rel="noopener noreferrer" className={styles.downloadBtn}>Download PDF</a>
                        </div>
                        <div className={styles.datasheetCard}>
                            <span>HM12</span>
                            <a href="https://salisburysolarandelectrical.com.au/wp-content/uploads/2026/04/ESYSUNHOME-HM12_datasheet.pdf" target="_blank" rel="noopener noreferrer" className={styles.downloadBtn}>Download PDF</a>
                        </div>
                        <div className={styles.datasheetCard}>
                            <span>HM10-H</span>
                            <a href="https://salisburysolarandelectrical.com.au/wp-content/uploads/2026/04/ESYSUNHOME_HM10-H_15_-20_Datasheet_AU.pdf" target="_blank" rel="noopener noreferrer" className={styles.downloadBtn}>Download PDF</a>
                        </div>
                        <div className={styles.datasheetCard}>
                            <span>HM15</span>
                            <a href="https://salisburysolarandelectrical.com.au/wp-content/uploads/2026/04/ESYSUNHOME_HM10-H_15_-20_Datasheet_AU.pdf" target="_blank" rel="noopener noreferrer" className={styles.downloadBtn}>Download PDF</a>
                        </div>
                        <div className={styles.datasheetCard}>
                            <span>HM20</span>
                            <a href="https://salisburysolarandelectrical.com.au/wp-content/uploads/2026/04/ESYSUNHOME_HM10-H_15_-20_Datasheet_AU.pdf" target="_blank" rel="noopener noreferrer" className={styles.downloadBtn}>Download PDF</a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default EsySunhomeDetails;
