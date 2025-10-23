import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ReactNode } from 'react'

import { cn } from '@/lib/utils'

import './globals.css'

const inter = Inter({ subsets: ['latin'], display: 'swap', variable: '--font-inter' })

export const metadata: Metadata = {
  metadataBase: new URL('https://contractplan.app'),
  title: 'ContractPlan | Modern contract & grant management',
  description: 'ContractPlan gives public sector and impact teams a shared workspace for contracts, renewals, and compliance.',
  openGraph: {
    title: 'ContractPlan | Modern contract & grant management',
    description:
      'ContractPlan gives public sector and impact teams a shared workspace for contracts, renewals, and compliance.',
    url: 'https://contractplan.app',
    siteName: 'ContractPlan',
    images: [
      {
        url: '/media/dashboard-screenshot.png',
        width: 1200,
        height: 630,
        alt: 'ContractPlan dashboard preview',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ContractPlan | Modern contract & grant management',
    description:
      'ContractPlan gives public sector and impact teams a shared workspace for contracts, renewals, and compliance.',
  },
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={cn('min-h-screen bg-slate-950 text-slate-50 antialiased font-sans', inter.variable)}>{children}</body>
    </html>
  )
}
