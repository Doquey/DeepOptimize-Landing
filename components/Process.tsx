import styles from './Process.module.css'

export default function Process() {
  const steps = [
    {
      number: '01',
      title: 'Analysis & Benchmarking',
      description: 'We profile your model to identify bottlenecks and establish baseline metrics for size, latency, and accuracy.'
    },
    {
      number: '02',
      title: 'Optimization Strategy',
      description: 'Custom optimization plan combining quantization, pruning, distillation, and architectural improvements.'
    },
    {
      number: '03',
      title: 'Implementation',
      description: 'We apply cutting-edge optimization techniques while continuously monitoring accuracy and performance trade-offs.'
    },
    {
      number: '04',
      title: 'Validation & Deployment',
      description: 'Rigorous testing on target hardware followed by seamless deployment support and documentation.'
    }
  ]

  return (
    <section id="process" className={styles.process}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Our Optimization Process</h2>
          <p className={styles.sectionSubtitle}>A proven methodology for model optimization</p>
        </div>
        <div className={styles.processSteps}>
          {steps.map((step, index) => (
            <div key={index} className={styles.step}>
              <div className={styles.stepNumber}>{step.number}</div>
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.stepDescription}>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
