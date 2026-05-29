'use client';
import { useState } from 'react';
import styles from './ContactLocations.module.css';

export default function ContactLocations() {
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header} style={{ marginBottom: 0 }}>
          <div className={styles.badge}>Our Presence</div>
          <h2 className={styles.title}>
            Serving You Across <span className={styles.highlight}>Melbourne</span>
          </h2>
          <p className={styles.subtitle}>
            {selectedLocation
              ? `Currently showing our availability for ${selectedLocation}. Our local experts are ready to assist you.`
              : "We provide expert solar solutions across  Melbourne citie. Select a location to see our local availability."
            }
          </p>
        </div>
      </div>
    </section>
  );
}

