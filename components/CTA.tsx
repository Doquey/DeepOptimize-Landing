import styles from './CTA.module.css'

export default function CTA() {
  return (
    <section id="contact" className={styles.ctaSection}>
      <div className={styles.glowEffect}></div>
      <div className={styles.container}>
        <div className={styles.ctaContent}>
          <h2 className={styles.ctaTitle}>Ready to Optimize Your ML Models?</h2>
          <p className={styles.ctaDescription}>
            Let&apos;s discuss how we can make your models faster, smaller, and more cost-effective
            without sacrificing performance.
          </p>
          <div className={styles.ctaButtons}>
            <a href="mailto:fortropptech@gmail.com" className={styles.primaryButton}>Get in Touch</a>
            <a href="#services" className={styles.secondaryButton}>Learn More</a>
          </div>
        </div>
      </div>
    </section>
  )
}
