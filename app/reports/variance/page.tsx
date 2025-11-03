'use client';

import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { demoMonthlySpend, demoSpendByCategory, demoVarianceAlerts, demoVarianceHighlights } from '@/lib/demo-data';

const currencyFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  maximumFractionDigits: 0,
});

const percentFormatter = new Intl.NumberFormat('en-US', {
  style: 'percent',
  maximumFractionDigits: 0,
});

export default function VarianceReports() {
  const maxMonthlyValue = Math.max(...demoMonthlySpend.map((item) => Math.max(item.actual, item.plan))) || 1;

  return (
    <div className="space-y-6 p-6">
      <header className="space-y-1">
        <h1 className="text-2xl font-semibold text-white">Variance analysis</h1>
        <p className="text-sm text-slate-200/80">
          Monitor spend and compliance variance to understand where to intervene or reinvest.
        </p>
      </header>

      <section className="grid gap-6 lg:grid-cols-[2fr_1fr]">
        <Card className="bg-white text-slate-900">
          <CardContent className="space-y-4 p-6">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold">Spend by category</h2>
              <span className="text-xs uppercase tracking-wide text-slate-400">Actual vs plan</span>
            </div>
            <Table>
              <TableHead>
                <TableRow>
                  <TableHeader>Category</TableHeader>
                  <TableHeader>Plan</TableHeader>
                  <TableHeader>Actual</TableHeader>
                  <TableHeader>Variance</TableHeader>
                </TableRow>
              </TableHead>
              <TableBody>
                {demoSpendByCategory.map((category) => {
                  const diff = category.actual - category.plan;
                  const diffTone = diff >= 0 ? 'text-amber-600' : 'text-emerald-600';
                  const diffLabel = `${diff >= 0 ? '+' : '−'}${currencyFormatter.format(Math.abs(diff))}`;

                  return (
                    <TableRow key={category.category}>
                      <TableCell>{category.category}</TableCell>
                      <TableCell>{currencyFormatter.format(category.plan)}</TableCell>
                      <TableCell>{currencyFormatter.format(category.actual)}</TableCell>
                      <TableCell className={diffTone}>{diffLabel}</TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <Card className="bg-white/10 text-white">
          <CardContent className="space-y-4 p-6">
            <h2 className="text-lg font-semibold">Highlights</h2>
            <ul className="list-disc space-y-2 pl-5 text-sm text-slate-200/80">
              {demoVarianceHighlights.map((note) => (
                <li key={note}>{note}</li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </section>

      <section className="grid gap-6 lg:grid-cols-[2fr_1fr]">
        <Card className="bg-white text-slate-900">
          <CardContent className="space-y-4 p-6">
            <h2 className="text-lg font-semibold">Variance watchlist</h2>
            <div className="space-y-3">
              {demoVarianceAlerts.map((alert) => (
                <div key={alert.contract} className="rounded-lg border border-slate-200 p-3 text-sm">
                  <div className="flex items-center justify-between gap-2">
                    <p className="font-medium text-slate-900">{alert.contract}</p>
                    <Badge
                      variant="secondary"
                      className={alert.variance >= 0 ? 'bg-amber-100 text-amber-700' : 'bg-emerald-100 text-emerald-700'}
                    >
                      {percentFormatter.format(Math.abs(alert.variance))} {alert.variance >= 0 ? 'over plan' : 'under plan'}
                    </Badge>
                  </div>
                  <p className="mt-1 text-slate-600">{alert.nextStep}</p>
                  <p className="mt-1 text-xs text-slate-400">Owner {alert.owner}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white text-slate-900">
          <CardContent className="space-y-4 p-6">
            <h2 className="text-lg font-semibold">Monthly trend</h2>
            <div className="space-y-3">
              {demoMonthlySpend.map((month) => {
                const actualPercent = Math.round((month.actual / maxMonthlyValue) * 100);
                const diff = month.actual - month.plan;
                const tone = diff >= 0 ? 'text-amber-600' : 'text-emerald-600';

                return (
                  <div key={month.month} className="space-y-2 rounded-lg bg-slate-50 p-3">
                    <div className="flex items-center justify-between">
                      <p className="font-medium text-slate-900">{month.month}</p>
                      <span className="text-xs text-slate-500">Plan {currencyFormatter.format(month.plan)}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="flex-1">
                        <div className="h-2 w-full rounded-full bg-slate-200" aria-hidden>
                          <div
                            className="h-2 rounded-full bg-blue-500"
                            style={{ width: `${actualPercent}%` }}
                          />
                        </div>
                      </div>
                      <span className="text-sm font-semibold text-slate-900">
                        {currencyFormatter.format(month.actual)}
                      </span>
                    </div>
                    <p className={`text-xs ${tone}`}>
                      {diff >= 0 ? 'Over plan by ' : 'Under plan by '}
                      {currencyFormatter.format(Math.abs(diff))}
                    </p>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
