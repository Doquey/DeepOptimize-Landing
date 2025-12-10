import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerContent}>
          <div className={styles.footerBrand}>
            <div className={styles.logo}>
              <span className={styles.logoDeep}>Deep</span>
              <span className={styles.logoOptimize}>Optimize</span>
            </div>
            <p className={styles.footerTagline}>MLOps Optimization Experts</p>
          </div>
          <div className={styles.footerLinks}>
            <a href="#services">Services</a>
            <a href="#case-study">Case Study</a>
            <a href="#process">Process</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
        <div className={styles.footerBottom}>
          <p>&copy; 2025 DeepOptimize. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
