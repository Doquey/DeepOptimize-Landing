import styles from './CaseStudy.module.css'

export default function CaseStudy() {
  return (
    <section id="case-study" className={styles.caseStudy}>
      <div className={styles.container}>
        <div className={styles.caseStudyContent}>
          <div className={styles.caseStudyText}>
            <div className={styles.caseBadge}>Success Story</div>
            <h2 className={styles.caseStudyTitle}>CLIP Model Optimization</h2>
            <p className={styles.caseStudyDescription}>
              A computer vision company needed to deploy OpenAI&apos;s CLIP model on edge devices
              but faced memory and latency constraints.
            </p>
            <div className={styles.caseMetrics}>
              <div className={styles.metric}>
                <div className={styles.metricValue}>200MB → 13MB</div>
                <div className={styles.metricLabel}>Model Size Reduction</div>
              </div>
              <div className={styles.metric}>
                <div className={styles.metricValue}>93%</div>
                <div className={styles.metricLabel}>Accuracy Maintained</div>
              </div>
              <div className={styles.metric}>
                <div className={styles.metricValue}>Jetson 8GB</div>
                <div className={styles.metricLabel}>Real-time Inference</div>
              </div>
            </div>
            <div className={styles.caseOutcome}>
              <h4>Outcome</h4>
              <p>
                The optimized CLIP image encoder now runs with real-time latency on resource-constrained
                hardware, enabling the company to scale their edge deployment without compromising accuracy.
              </p>
            </div>
          </div>
          <div className={styles.caseStudyVisual}>
            <div className={styles.comparisonBox}>
              <div className={styles.before}>
                <div className={styles.label}>Before</div>
                <div className={styles.modelSize}>200MB</div>
                <div className={styles.accuracy}>100% Accuracy</div>
                <div className={styles.device}>High-end GPU</div>
              </div>
              <div className={styles.arrow}>→</div>
              <div className={styles.after}>
                <div className={styles.label}>After</div>
                <div className={styles.modelSize}>13MB</div>
                <div className={styles.accuracy}>93% Accuracy</div>
                <div className={styles.device}>Jetson 8GB</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
