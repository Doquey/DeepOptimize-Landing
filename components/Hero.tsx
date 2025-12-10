'use client'

import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroBackground}>
        <div className={styles.glowEffect}></div>
      </div>
      <div className={styles.container}>
        <div className={styles.heroContent}>
          <div className={styles.heroBadge}>MLOps Optimization Experts</div>
          <h1 className={styles.heroTitle}>
            Make Your ML Models<br/>
            <span className="gradient-text">Faster. Smaller. Better.</span>
          </h1>
          <p className={styles.heroDescription}>
            We optimize machine learning models for size and latency while maintaining accuracy.
            Deploy faster, save costs, and scale with confidence.
          </p>
          <div className={styles.heroCta}>
            <a href="#contact" className={styles.primaryButton}>Start Optimizing</a>
            <a href="#case-study" className={styles.secondaryButton}>See Results</a>
          </div>
          <div className={styles.heroStats}>
            <div className={styles.stat}>
              <div className={styles.statNumber}>93%+</div>
              <div className={styles.statLabel}>Accuracy Retained</div>
            </div>
            <div className={styles.stat}>
              <div className={styles.statNumber}>15x</div>
              <div className={styles.statLabel}>Size Reduction</div>
            </div>
            <div className={styles.stat}>
              <div className={styles.statNumber}>Real-time</div>
              <div className={styles.statLabel}>Inference Speed</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
