'use client'
import Link from 'next/link'

export default function AppDashboard() {
  const nav = [
    { href: '/app/contracts', label: 'Contracts' },
    { href: '/app/files', label: 'Files' },
    { href: '/ai', label: 'AI Assistant' },
    { href: '/onboarding/bot', label: 'Walkthrough' },
  ]

  return (
    <div className="p-6 space-y-8">
      <h1 className="text-3xl font-semibold">ContractPlan Dashboard</h1>
      <ul className="space-y-2">
        {nav.map((item) => (
          <li key={item.href}>
            <Link className="text-blue-600 underline" href={item.href}>{item.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
