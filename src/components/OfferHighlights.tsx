'use client';

import styles from './OfferHighlights.module.css';

const OfferHighlights = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.card}>
          <div className={styles.cardBody}>
            <span className={styles.badge}>Special Offer</span>
            <h3 className={styles.heading}>
              <span className={styles.highlightText}>$0</span>
              <span>Upfront</span>
            </h3>
            <p className={styles.subheading}>Available on selected solar battery packages</p>
          </div>
          <p className={styles.note}>*Conditions apply.</p>
        </div>

        <div className={styles.card}>
          <div className={styles.cardBody}>
            <span className={styles.badge}>Warranty Plan</span>
            <h3 className={styles.heading}>
              <span className={styles.highlightText}>1 Year</span>
              <span>Warranty Available</span>
            </h3>
            <p className={styles.subheading}>Flexible coverage options built for your home energy needs</p>
          </div>
          <p className={styles.note}>*Conditions apply.</p>
        </div>
      </div>
    </section>
  );
};

export default OfferHighlights;
