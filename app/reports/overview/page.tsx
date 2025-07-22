// app/reports/overview.tsx

'use client';

import { Card, CardContent } from '@/components/ui/card';

const reportData = {
  totalValue: '$2.78M',
  activeContracts: 14,
  highRiskContracts: 2,
  avgDuration: '27 months',
};

export default function ReportsOverview() {
  return (
    <div className="p-6 space-y-4">
      <h1 className="text-2xl font-semibold">Reporting Dashboard</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard title="Portfolio Value" value={reportData.totalValue} />
        <StatCard title="Active Contracts" value={reportData.activeContracts} />
        <StatCard title="High-Risk Flags" value={reportData.highRiskContracts} />
        <StatCard title="Avg Duration" value={reportData.avgDuration} />
      </div>
    </div>
  );
}

function StatCard({ title, value }: { title: string; value: string | number }) {
  return (
    <Card>
      <CardContent className="p-4 space-y-1">
        <div className="text-sm text-gray-500">{title}</div>
        <div className="text-xl font-medium text-gray-800">{value}</div>
      </CardContent>
    </Card>
  );
}

