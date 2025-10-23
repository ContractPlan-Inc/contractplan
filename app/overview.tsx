// app/overview.tsx

'use client'

import { Card, CardContent } from '@/components/ui/card'
import { useState } from 'react'

export default function OverviewPage() {
  const [role, setRole] = useState<'buyer' | 'seller'>('buyer')

  const mockOrg = {
    name: 'GrantBridge Initiative',
    ein: '12-3456789',
    region: 'Mid-Atlantic',
    mission: 'Support underserved communities with equitable housing initiatives.',
    auditStatus: 'Compliant',
    totalContracts: 24,
    contractValue: '$3.2M',
    compliance: '91% fulfilled',
    recentActivity: [
      'Reviewed Contract #1829 - Renewal due',
      'Uploaded compliance certificate',
      'Added new collaborator: Alex Rivera',
    ],
  }

  return (
    <div className="min-h-screen bg-slate-950 px-6 py-8 text-slate-50">
      <div className="mx-auto max-w-6xl space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-semibold">Organization overview</h1>
            <p className="text-sm text-slate-300">A shared source of truth for funding, compliance, and performance.</p>
          </div>
          <button
            className="text-sm underline decoration-dotted underline-offset-4 hover:text-emerald-300"
            onClick={() => setRole(role === 'buyer' ? 'seller' : 'buyer')}
          >
            Switch to {role === 'buyer' ? 'seller' : 'buyer'} view
          </button>
        </div>

        <Card>
          <CardContent className="grid gap-6 p-6 sm:grid-cols-2 lg:grid-cols-3">
            <Info label="Name" value={mockOrg.name} />
            <Info label="EIN" value={mockOrg.ein} />
            <Info label="Region" value={mockOrg.region} />
            <Info label="Mission" value={mockOrg.mission} />
            <Info label="Audit status" value={mockOrg.auditStatus} />
            <Info label="Total contracts" value={String(mockOrg.totalContracts)} />
            <Info label="Portfolio value" value={mockOrg.contractValue} />
            <Info label="Compliance" value={mockOrg.compliance} />
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="text-sm font-medium text-slate-500">Recent activity</div>
            <ul className="mt-3 space-y-2 text-sm text-slate-700">
              {mockOrg.recentActivity.map((item) => (
                <li key={item} className="rounded-lg border border-slate-200/60 bg-slate-50 px-4 py-2">
                  {item}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

function Info({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="text-xs uppercase tracking-wide text-slate-500">{label}</div>
      <div className="text-base font-medium text-slate-900">{value}</div>
    </div>
  )
}
