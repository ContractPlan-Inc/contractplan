'use client';

import { useMemo, useState } from 'react';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const profiles = {
  buyer: {
    name: 'GrantBridge Initiative',
    ein: '12-3456789',
    region: 'Mid-Atlantic',
    mission: 'Support underserved communities with equitable housing initiatives.',
    auditStatus: 'Compliant',
    totalContracts: 24,
    contractValue: '$3.2M',
    compliance: '91% fulfilled',
    risk: '2 open findings',
    recentActivity: [
      'Reviewed Contract #1829 – renewal due in 30 days',
      'Uploaded compliance certificate for FY25',
      'Added new collaborator: Alex Rivera',
    ],
  },
  seller: {
    name: 'Evergreen Partners',
    ein: '98-7654321',
    region: 'Pacific Northwest',
    mission: 'Deliver inclusive workforce training across the region.',
    auditStatus: 'Monitoring',
    totalContracts: 18,
    contractValue: '$2.1M',
    compliance: '84% fulfilled',
    risk: '4 upcoming expirations',
    recentActivity: [
      'Submitted Q2 performance report',
      'Flagged milestone variance on Contract #1742',
      'Invited finance reviewer Priya Singh',
    ],
  },
} satisfies Record<string, {
  name: string;
  ein: string;
  region: string;
  mission: string;
  auditStatus: string;
  totalContracts: number;
  contractValue: string;
  compliance: string;
  risk: string;
  recentActivity: string[];
}>;

export default function OverviewPage() {
  const [role, setRole] = useState<'buyer' | 'seller'>('buyer');

  const profile = useMemo(() => profiles[role], [role]);

  return (
    <div className="space-y-6 p-6">
      <header className="flex flex-col gap-4 justify-between md:flex-row md:items-start">
        <div className="space-y-1">
          <h1 className="text-2xl font-semibold text-white">Organization overview</h1>
          <p className="text-sm text-slate-200/80">
            Review key identifiers, audit readiness, and recent collaboration activity for your {role} workspace.
          </p>
        </div>
        <Button
          variant="outline"
          className="border-white/20 bg-white/10 text-white hover:bg-white/20"
          onClick={() => setRole((previous) => (previous === 'buyer' ? 'seller' : 'buyer'))}
        >
          Switch to {role === 'buyer' ? 'Seller' : 'Buyer'} view
        </Button>
      </header>

      <Card className="bg-white/10 text-white">
        <CardContent className="grid gap-6 p-6 md:grid-cols-3">
          <div className="space-y-1">
            <p className="text-sm text-slate-200/80">Organization</p>
            <p className="text-lg font-semibold">{profile.name}</p>
            <p className="text-sm text-slate-200/70">EIN {profile.ein}</p>
          </div>
          <div className="space-y-1">
            <p className="text-sm text-slate-200/80">Mission</p>
            <p className="text-sm leading-6 text-slate-100">{profile.mission}</p>
          </div>
          <div className="space-y-2">
            <p className="text-sm text-slate-200/80">Status</p>
            <div className="flex flex-wrap gap-2">
              <Badge>{profile.auditStatus}</Badge>
              <Badge variant="secondary" className="bg-white/15 text-white">
                {profile.risk}
              </Badge>
            </div>
          </div>
        </CardContent>
      </Card>

      <section className="grid gap-4 md:grid-cols-2">
        <Card className="bg-white/10 text-white">
          <CardContent className="grid gap-4 p-6 sm:grid-cols-2">
            <Metric label="Active contracts" value={profile.totalContracts.toString()} />
            <Metric label="Portfolio value" value={profile.contractValue} />
            <Metric label="Compliance" value={profile.compliance} />
            <Metric label="Region" value={profile.region} />
          </CardContent>
        </Card>

        <Card className="bg-white/10 text-white">
          <CardContent className="space-y-3 p-6">
            <p className="text-sm font-medium text-slate-200">Recent activity</p>
            <ul className="space-y-2 text-sm text-slate-100/90">
              {profile.recentActivity.map((item) => (
                <li key={item} className="rounded-lg bg-white/5 px-3 py-2">
                  {item}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg bg-white/5 p-4">
      <p className="text-xs uppercase tracking-wide text-slate-200/70">{label}</p>
      <p className="mt-2 text-xl font-semibold text-white">{value}</p>
    </div>
  );
}
