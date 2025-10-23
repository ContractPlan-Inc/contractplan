// app/reports/overview.tsx

'use client'

import { Card, CardContent } from '@/components/ui/card'

const reportData = {
  totalValue: '$2.78M',
  activeContracts: 14,
  highRiskContracts: 2,
  avgDuration: '27 months',
}

export default function ReportsOverview() {
  return (
    <div className="min-h-screen bg-slate-950 px-6 py-8 text-slate-50">
      <div className="mx-auto max-w-5xl space-y-6">
        <div>
          <h1 className="text-2xl font-semibold">Reporting dashboard</h1>
          <p className="text-sm text-slate-300">Track value, risk, and performance across the contract portfolio.</p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <StatCard title="Portfolio value" value={reportData.totalValue} />
          <StatCard title="Active contracts" value={reportData.activeContracts} />
          <StatCard title="High-risk flags" value={reportData.highRiskContracts} />
          <StatCard title="Avg duration" value={reportData.avgDuration} />
        </div>
      </div>
    </div>
  )
}

function StatCard({ title, value }: { title: string; value: string | number }) {
  return (
    <Card>
      <CardContent className="space-y-2 p-6">
        <div className="text-xs uppercase tracking-wide text-slate-500">{title}</div>
        <div className="text-2xl font-semibold text-slate-900">{value}</div>
      </CardContent>
    </Card>
  )
}
