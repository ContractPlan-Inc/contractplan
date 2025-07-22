import './globals.css'
import { ReactNode } from 'react'

export const metadata = {
  title: 'ContractPlan',
  description: 'Empowering local governments and nonprofits.',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-midnight">
        {children}
      </body>
    </html>
  )
}

