import './globals.css'
import { ReactNode } from 'react'

export const metadata = {
  title: 'ContractPlan',
  description: 'Empowering local governments and nonprofits.',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-br from-midnight to-pacific text-white">
        {children}
      </body>
    </html>
  )
}

