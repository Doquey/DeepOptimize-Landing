'use client'

import { useState, useEffect } from 'react'
import styles from './Navbar.module.css'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <div className={styles.navContent}>
          <div className={styles.logo}>
            <span className={styles.logoDeep}>Deep</span>
            <span className={styles.logoOptimize}>Optimize</span>
          </div>
          <ul className={styles.navLinks}>
            <li><a href="#services">Services</a></li>
            <li><a href="#case-study">Case Study</a></li>
            <li><a href="#process">Process</a></li>
            <li><a href="#contact" className={styles.ctaButton}>Get Started</a></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
