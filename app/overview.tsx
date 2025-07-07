// app/overview.tsx

'use client';

import { Card, CardContent } from '@/components/ui/card';
import { useState } from 'react';

export default function OverviewPage() {
  const [role, setRole] = useState<'buyer' | 'seller'>('buyer');

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
      'Reviewed Contract #1829 - Renewal Due',
      'Uploaded compliance certificate',
      'Added new collaborator: Alex Rivera',
    ],
  };

  return (
    <div className="p-6 space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Organization Overview</h1>
        <button
          className="text-sm underline text-blue-600"
          onClick={() => setRole(role === 'buyer' ? 'seller' : 'buyer')}
        >
          Switch to {role === 'buyer' ? 'Seller' : 'Buyer'} View
        </button>
      </div>

      <Card>
        <CardContent className="grid grid-cols-2 md:grid-cols-3 gap-4 p-4">
          <div>
            <div className="text-sm text-gray-500">Name</div>
            <div>{mockOrg.name}</div>
          </div>
          <div>
            <div className="text-sm text-gray-500">EIN</div>
            <div>{mockOrg.ein}</div>
          </div>
          <div>
            <div className="text-sm text-gray-500">Region</div>
            <div>{mockOrg.region}</div>
          </div>
          <div>
            <div className="text-sm text-gray-500">Mission</div>
            <div>{mockOrg.mission}</div>
          </div>
          <div>
            <div className="text-sm text-gray-500">Audit Status</div>
            <div>{mockOrg.auditStatus}</div>
          </div>
          <div>
            <div className="text-sm text-gray-500">Total Contracts</div>
            <div>{mockOrg.totalContracts}</div>
          </div>
          <div>
            <div className="text-sm text-gray-500">Portfolio Value</div>
            <div>{mockOrg.contractValue}</div>
          </div>
          <div>
            <div className="text-sm text-gray-500">Compliance</div>
            <div>{mockOrg.compliance}</div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-4">
          <div className="text-sm text-gray-500 mb-2">Recent Activity</div>
          <ul className="list-disc list-inside space-y-1">
            {mockOrg.recentActivity.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}

