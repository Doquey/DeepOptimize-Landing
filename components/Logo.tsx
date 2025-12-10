'use client'

import { useState } from 'react'
import Image from 'next/image'
import styles from './Logo.module.css'

interface LogoProps {
  size?: 'small' | 'medium' | 'large'
  showText?: boolean
}

export default function Logo({ size = 'medium', showText = true }: LogoProps) {
  const [hasLogo, setHasLogo] = useState(true)

  const sizeMap = {
    small: 32,
    medium: 40,
    large: 60
  }

  const imageSize = sizeMap[size]

  return (
    <div className={`${styles.logo} ${styles[size]}`}>
      {/* Logo Image - coloque sua logo em /public/logo.png */}
      {hasLogo && (
        <div className={styles.logoImage}>
          <Image
            src="/logo.png"
            alt="DeepOptimize Logo"
            width={imageSize}
            height={imageSize}
            className={styles.image}
            priority
            onError={() => setHasLogo(false)}
          />
        </div>
      )}

      {/* Text Logo (sempre mostrado ou como fallback) */}
      {showText && (
        <div className={styles.logoText}>
          <span className={styles.logoDeep}>Deep</span>
          <span className={styles.logoOptimize}>Optimize</span>
        </div>
      )}
    </div>
  )
}
