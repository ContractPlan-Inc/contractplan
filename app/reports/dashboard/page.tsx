'use client';

import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import {
  demoDashboardKpis,
  demoMonthlySpend,
  demoRenewals,
  demoSpendByCategory,
  demoVarianceAlerts,
} from '@/lib/demo-data';

const currencyFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  maximumFractionDigits: 0,
});

const percentFormatter = new Intl.NumberFormat('en-US', {
  style: 'percent',
  maximumFractionDigits: 0,
});

export default function ReportsDashboard() {
  const maxCategoryValue =
    Math.max(...demoSpendByCategory.map((item) => Math.max(item.actual, item.plan))) || 1;
  const maxMonthlyValue = Math.max(...demoMonthlySpend.map((item) => Math.max(item.actual, item.plan))) || 1;

  return (
    <div className="space-y-6 p-6">
      <header className="space-y-1">
        <h1 className="text-2xl font-semibold text-white">Reporting dashboard</h1>
        <p className="text-sm text-slate-200/80">
          Use the dashboard to track renewal readiness, spend variance, and compliance workload week over week.
        </p>
      </header>

      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {demoDashboardKpis.map((kpi) => (
          <Card key={kpi.label} className="bg-white text-slate-900">
            <CardContent className="space-y-1 p-6">
              <p className="text-sm text-slate-500">{kpi.label}</p>
              <p className="text-2xl font-semibold text-slate-900">{kpi.value}</p>
              <p className="text-xs text-slate-500">{kpi.helper}</p>
            </CardContent>
          </Card>
        ))}
      </section>

      <section className="grid gap-6 lg:grid-cols-[2fr_1fr]">
        <Card className="bg-white text-slate-900">
          <CardContent className="space-y-5 p-6">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold">Spend by category</h2>
              <span className="text-xs uppercase tracking-wide text-slate-400">Plan vs actual</span>
            </div>
            <div className="space-y-4">
              {demoSpendByCategory.map((category) => {
                const planPercent = Math.round((category.plan / maxCategoryValue) * 100);
                const actualPercent = Math.round((category.actual / maxCategoryValue) * 100);
                const diff = category.actual - category.plan;
                const diffLabel = `${diff >= 0 ? '+' : '−'}${currencyFormatter.format(Math.abs(diff))}`;
                const diffTone = diff >= 0 ? 'text-amber-600' : 'text-emerald-600';

                return (
                  <div key={category.category} className="space-y-2 rounded-lg bg-slate-50 p-4">
                    <div className="flex items-center justify-between gap-2">
                      <p className="font-medium text-slate-900">{category.category}</p>
                      <span className="text-xs text-slate-500">Plan {currencyFormatter.format(category.plan)}</span>
                    </div>
                    <div className="flex h-2 items-center gap-1">
                      <div className="h-2 flex-1 rounded-full bg-slate-200" aria-hidden>
                        <div
                          className="h-2 rounded-full bg-slate-300"
                          style={{ width: `${planPercent}%` }}
                        />
                      </div>
                      <div className="h-2 flex-1 rounded-full bg-blue-500" style={{ width: `${actualPercent}%` }} aria-hidden />
                    </div>
                    <div className="flex items-center justify-between text-xs text-slate-600">
                      <span>Actual {currencyFormatter.format(category.actual)}</span>
                      <span className={diffTone}>{diff >= 0 ? 'Over plan ' : 'Under plan '} {diffLabel}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>

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
                      {percentFormatter.format(Math.abs(alert.variance))} {alert.variance >= 0 ? 'over' : 'under'}
                    </Badge>
                  </div>
                  <p className="mt-1 text-slate-600">{alert.nextStep}</p>
                  <p className="mt-1 text-xs text-slate-400">Owner {alert.owner}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="grid gap-6 lg:grid-cols-[2fr_1fr]">
        <Card className="bg-white text-slate-900">
          <CardContent className="space-y-4 p-6">
            <h2 className="text-lg font-semibold">Monthly spend trend</h2>
            <div className="grid gap-3">
              {demoMonthlySpend.map((month) => {
                const actualPercent = Math.round((month.actual / maxMonthlyValue) * 100);
                const diff = month.actual - month.plan;
                const diffTone = diff >= 0 ? 'text-amber-600' : 'text-emerald-600';
                const diffLabel = `${diff >= 0 ? 'Over plan by ' : 'Under plan by '}${currencyFormatter.format(Math.abs(diff))}`;

                return (
                  <div key={month.month} className="space-y-2 rounded-lg bg-slate-50 p-4">
                    <div className="flex items-center justify-between">
                      <p className="font-medium text-slate-900">{month.month}</p>
                      <span className="text-xs text-slate-500">Plan {currencyFormatter.format(month.plan)}</span>
                    </div>
                    <div className="flex items-center gap-3">
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
                    <p className={`text-xs ${diffTone}`}>{diffLabel}</p>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white text-slate-900">
          <CardContent className="space-y-4 p-6">
            <h2 className="text-lg font-semibold">Upcoming renewals</h2>
            <Table>
              <TableHead>
                <TableRow>
                  <TableHeader>Contract</TableHeader>
                  <TableHeader>Owner</TableHeader>
                  <TableHeader>Renewal date</TableHeader>
                  <TableHeader>Risk</TableHeader>
                </TableRow>
              </TableHead>
              <TableBody>
                {demoRenewals.map((item) => (
                  <TableRow key={item.contract}>
                    <TableCell>{item.contract}</TableCell>
                    <TableCell>{item.owner}</TableCell>
                    <TableCell>{item.renewalDate}</TableCell>
                    <TableCell>{item.risk}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
