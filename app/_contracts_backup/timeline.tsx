// app/contracts/timeline.tsx

'use client';

import { Card, CardContent } from '@/components/ui/card';

const contractEvents = [
  {
    id: 1,
    date: '2023-01-15',
    title: 'Contract Signed',
    description: 'Executed contract with Baltimore Housing Authority.',
  },
  {
    id: 2,
    date: '2023-06-01',
    title: 'First Deliverable Submitted',
    description: 'Quarterly report submitted by vendor.',
  },
  {
    id: 3,
    date: '2024-01-05',
    title: 'Compliance Review Flagged',
    description: 'Missing OSHA Form 301.',
  },
  {
    id: 4,
    date: '2024-12-31',
    title: 'Contract Renewal Deadline',
    description: 'Start negotiation 90 days prior.',
  },
];

export default function ContractTimeline() {
  return (
    <div className="p-6 space-y-4">
      <h1 className="text-2xl font-semibold">Contract Timeline</h1>
      <div className="space-y-4">
        {contractEvents.map((event) => (
          <Card key={event.id}>
            <CardContent className="p-4">
              <div className="text-sm text-gray-500">{event.date}</div>
              <div className="font-medium">{event.title}</div>
              <div className="text-sm text-gray-600">{event.description}</div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

