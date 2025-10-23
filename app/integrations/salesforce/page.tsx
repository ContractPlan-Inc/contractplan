'use client';

import { Card, CardContent } from '@/components/ui/card';

const setupSteps = [
  'Authenticate with your Salesforce workspace using OAuth.',
  'Map account and opportunity fields to ContractPlan programs.',
  'Choose which contract stages should sync back to Salesforce.',
  'Enable timeline updates to notify account owners automatically.',
] as const;

export default function SalesforceConnector() {
  return (
    <div className="space-y-6 p-6">
      <header className="space-y-1">
        <h1 className="text-2xl font-semibold text-white">Salesforce integration</h1>
        <p className="text-sm text-slate-200/80">
          Keep revenue and program teams aligned with a two-way sync between Salesforce and ContractPlan.
        </p>
      </header>

      <Card className="bg-white text-slate-900">
        <CardContent className="space-y-3 p-6">
          <h2 className="text-lg font-semibold">Setup checklist</h2>
          <ul className="list-disc space-y-2 pl-5 text-sm text-slate-600">
            {setupSteps.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
