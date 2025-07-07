// app/contracts/detail.tsx

'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useState } from 'react';

const mockDetail = {
  id: 'C-2025-0042',
  title: 'Community Revitalization Grant FY25',
  partner: 'Baltimore Housing Department',
  start: '2025-01-01',
  end: '2026-01-01',
  value: '$500,000',
  status: 'Active',
  complianceRate: '95%',
  summary:
    'A one-year grant supporting infrastructure improvements in underserved neighborhoods. Deliverables include quarterly compliance reports, disbursement schedules, and final impact assessment.',
  tags: ['Grant', 'Community Development', 'Infrastructure'],
};

export default function ContractDetailPage() {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="p-6 space-y-4">
      <h1 className="text-2xl font-semibold">Contract Detail</h1>

      <Card>
        <CardContent className="p-4 space-y-2">
          <div className="text-gray-500 text-sm">Contract ID</div>
          <div>{mockDetail.id}</div>

          <div className="text-gray-500 text-sm mt-4">Title</div>
          <div className="font-medium text-lg">{mockDetail.title}</div>

          <div className="text-sm text-gray-500 mt-4">Partner</div>
          <div>{mockDetail.partner}</div>

          <div className="grid grid-cols-2 gap-4 mt-4">
            <div>
              <div className="text-sm text-gray-500">Start</div>
              <div>{mockDetail.start}</div>
            </div>
            <div>
              <div className="text-sm text-gray-500">End</div>
              <div>{mockDetail.end}</div>
            </div>
            <div>
              <div className="text-sm text-gray-500">Contract Value</div>
              <div>{mockDetail.value}</div>
            </div>
            <div>
              <div className="text-sm text-gray-500">Status</div>
              <div>
                <Badge>{mockDetail.status}</Badge>
              </div>
            </div>
          </div>

          <div className="text-sm text-gray-500 mt-4">Compliance</div>
          <div>{mockDetail.complianceRate} of obligations met</div>

          <div className="text-sm text-gray-500 mt-4">Tags</div>
          <div className="flex gap-2 flex-wrap">
            {mockDetail.tags.map((tag, i) => (
              <Badge key={i} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>

          <button
            className="text-blue-600 text-sm underline mt-4"
            onClick={() => setExpanded(!expanded)}
          >
            {expanded ? 'Hide Summary' : 'Show Summary'}
          </button>

          {expanded && (
            <div className="mt-2 text-sm text-gray-800">
              {mockDetail.summary}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}

