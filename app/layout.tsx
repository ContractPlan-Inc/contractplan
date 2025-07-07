import './globals.css'

export const metadata = {
  title: 'ContractPlan',
  description: 'Bring Order to Contract Chaos',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

