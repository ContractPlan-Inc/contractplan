'use client';

import { Card, CardContent } from '@/components/ui/card';

const automations = [
  'Generate invoices when a milestone is marked complete.',
  'Pause spend if payment is overdue by 15 days.',
  'Push payment receipts into ContractPlan and notify the project owner.',
] as const;

export default function StripeConnector() {
  return (
    <div className="space-y-6 p-6">
      <header className="space-y-1">
        <h1 className="text-2xl font-semibold text-white">Stripe integration</h1>
        <p className="text-sm text-slate-200/80">
          Automate billing and keep cash flow in lockstep with the contract lifecycle.
        </p>
      </header>

      <Card className="bg-white text-slate-900">
        <CardContent className="space-y-3 p-6">
          <h2 className="text-lg font-semibold">Automations</h2>
          <ul className="list-disc space-y-2 pl-5 text-sm text-slate-600">
            {automations.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
