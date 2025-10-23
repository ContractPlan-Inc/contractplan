'use client';

import { Card, CardContent } from '@/components/ui/card';

const focusAreas = [
  {
    title: 'Renewal radar',
    description: 'Track expirations 90 days out and alert the right owner automatically.',
  },
  {
    title: 'Compliance checks',
    description: 'Monitor insurance certificates, progress reports, and audit deliverables.',
  },
  {
    title: 'Spend variance',
    description: 'Highlight contracts trending over or under budget with context from finance systems.',
  },
] as const;

export default function SuggestionsPage() {
  return (
    <div className="space-y-6 p-6">
      <header className="space-y-1">
        <h1 className="text-2xl font-semibold text-white">AI suggestions</h1>
        <p className="text-sm text-slate-200/80">
          Every morning, ContractPlan prioritizes the tasks that keep your programs on schedule and in compliance.
        </p>
      </header>

      <Card className="bg-white text-slate-900">
        <CardContent className="space-y-3 p-6">
          <h2 className="text-lg font-semibold">Focus areas</h2>
          <p className="text-sm text-slate-600">
            Suggestions roll up into three categories so teams can act quickly and close the loop.
          </p>
          <div className="grid gap-3 sm:grid-cols-3">
            {focusAreas.map((area) => (
              <div key={area.title} className="rounded-lg bg-slate-50 p-4">
                <h3 className="text-sm font-semibold text-slate-900">{area.title}</h3>
                <p className="mt-2 text-xs leading-5 text-slate-600">{area.description}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
