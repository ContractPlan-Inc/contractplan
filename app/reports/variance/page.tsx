'use client';

import { Card, CardContent } from '@/components/ui/card';

const varianceNotes = [
  'Contract #1771 spend variance is 12% over plan — finance review scheduled.',
  'Contract #1994 is 9% under budget — opportunity to expand services.',
  'Grant #3002 is on track with variance under 3% for the quarter.',
] as const;

export default function VarianceReports() {
  return (
    <div className="space-y-6 p-6">
      <header className="space-y-1">
        <h1 className="text-2xl font-semibold text-white">Variance analysis</h1>
        <p className="text-sm text-slate-200/80">
          Monitor spend and compliance variance to understand where to intervene or reinvest.
        </p>
      </header>

      <Card className="bg-white text-slate-900">
        <CardContent className="space-y-3 p-6">
          <h2 className="text-lg font-semibold">Highlights</h2>
          <ul className="list-disc space-y-2 pl-5 text-sm text-slate-600">
            {varianceNotes.map((note) => (
              <li key={note}>{note}</li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
