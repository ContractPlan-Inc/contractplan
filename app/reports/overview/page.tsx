'use client';

import { Card, CardContent } from '@/components/ui/card';

const reportData = {
  totalValue: '$2.78M',
  activeContracts: 14,
  highRiskContracts: 2,
  avgDuration: '27 months',
} as const;

export default function ReportsOverview() {
  return (
    <div className="space-y-6 p-6">
      <header className="space-y-1">
        <h1 className="text-2xl font-semibold text-white">Reporting overview</h1>
        <p className="text-sm text-slate-200/80">
          Keep leadership informed with at-a-glance metrics for every contract, grant, and vendor relationship.
        </p>
      </header>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard title="Portfolio value" value={reportData.totalValue} />
        <StatCard title="Active contracts" value={reportData.activeContracts.toString()} />
        <StatCard title="High-risk flags" value={reportData.highRiskContracts.toString()} />
        <StatCard title="Average duration" value={reportData.avgDuration} />
      </div>
    </div>
  );
}

function StatCard({ title, value }: { title: string; value: string }) {
  return (
    <Card className="bg-white text-slate-900">
      <CardContent className="space-y-1 p-6">
        <p className="text-sm text-slate-500">{title}</p>
        <p className="text-2xl font-semibold text-slate-900">{value}</p>
      </CardContent>
    </Card>
  );
}
