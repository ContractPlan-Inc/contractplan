// app/contracts/summary.tsx

'use client';

import { Card, CardContent } from '@/components/ui/card';
import { useState } from 'react';
import { Button } from '@/components/ui/button';

export default function ContractSummary() {
  const [expanded, setExpanded] = useState(false);

  const contract = {
    title: 'Affordable Housing Grant 2023',
    id: 'CH-0423-889',
    counterparty: 'City of Baltimore',
    startDate: '2023-01-15',
    endDate: '2026-01-14',
    amount: '$1.2M',
    status: 'Active',
    category: 'Housing Support',
    description:
      'This contract provides funding for affordable housing development in underserved neighborhoods, requiring quarterly reporting and annual audits.',
    obligations: [
      'Submit quarterly impact reports',
      'Maintain 85% fund utilization threshold',
      'Conduct annual independent audit',
    ],
  };

  return (
    <div className="p-6 space-y-4">
      <h1 className="text-2xl font-semibold">Contract Summary</h1>

      <Card>
        <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
          <div>
            <div className="text-sm text-gray-500">Title</div>
            <div>{contract.title}</div>
          </div>
          <div>
            <div className="text-sm text-gray-500">Contract ID</div>
            <div>{contract.id}</div>
          </div>
          <div>
            <div className="text-sm text-gray-500">Counterparty</div>
            <div>{contract.counterparty}</div>
          </div>
          <div>
            <div className="text-sm text-gray-500">Start / End Date</div>
            <div>{contract.startDate} → {contract.endDate}</div>
          </div>
          <div>
            <div className="text-sm text-gray-500">Amount</div>
            <div>{contract.amount}</div>
          </div>
          <div>
            <div className="text-sm text-gray-500">Status</div>
            <div>{contract.status}</div>
          </div>
          <div>
            <div className="text-sm text-gray-500">Category</div>
            <div>{contract.category}</div>
          </div>
          <div className="col-span-full">
            <Button variant="ghost" className="text-blue-600 text-sm px-0" onClick={() => setExpanded(!expanded)}>
              {expanded ? 'Hide Details' : 'View Description & Obligations'}
            </Button>
          </div>

          {expanded && (
            <div className="col-span-full space-y-2">
              <div>
                <div className="text-sm text-gray-500">Description</div>
                <div>{contract.description}</div>
              </div>
              <div>
                <div className="text-sm text-gray-500">Obligations</div>
                <ul className="list-disc list-inside">
                  {contract.obligations.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}

