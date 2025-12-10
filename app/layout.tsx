import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Analytics } from '@vercel/analytics/next';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'DeepOptimize | ML Model Optimization Agency',
  description: 'We optimize machine learning models for size and latency while maintaining accuracy. Deploy faster, save costs, and scale with confidence.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Analytics/>
        </body>
    </html>
  )
}
