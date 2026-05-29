'use client';
import styles from './ContactLocations.module.css';

export default function ContactLocations() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.badge}>Our Presence</div>
          <h2 className={styles.title}>
            Serving You Across <span className={styles.highlight}>Melbourne</span>
          </h2>
          <p className={styles.subtitle}>
            We provide expert solar solutions across Melbourne. Our local experts are ready to assist you.
          </p>
        </div>

        <div className={styles.locationsGrid}>
          <div className={`${styles.locationCard} ${styles.selectedCard}`}>
            <div className={styles.cardHeader}>
              <div className={styles.iconWrapper}>📍</div>
              <h3 className={styles.locationName}>Melbourne</h3>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

