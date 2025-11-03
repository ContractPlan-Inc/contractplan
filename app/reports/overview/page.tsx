'use client';

import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { demoComplianceChecklist, demoOverviewHighlights, demoPortfolioSummary, demoProgramHealth, demoVarianceAlerts } from '@/lib/demo-data';

const summaryStats = [
  { title: 'Portfolio value', value: demoPortfolioSummary.totalValue, detail: 'Committed funding under management' },
  { title: 'Active contracts', value: demoPortfolioSummary.activeContracts.toString(), detail: 'Across 6 departments' },
  { title: 'High-risk flags', value: demoPortfolioSummary.highRiskContracts.toString(), detail: 'Needing weekly review' },
  { title: 'Average duration', value: demoPortfolioSummary.avgDuration, detail: 'From award to closeout' },
  { title: 'Renewals next 90 days', value: demoPortfolioSummary.renewalsNextQuarter.toString(), detail: 'Prepped for leadership briefings' },
  { title: 'Response time', value: demoPortfolioSummary.teamResponseTime, detail: 'Median on compliance asks' },
];

export default function ReportsOverview() {
  return (
    <div className="space-y-6 p-6">
      <header className="space-y-1">
        <h1 className="text-2xl font-semibold text-white">Reporting overview</h1>
        <p className="text-sm text-slate-200/80">
          Keep leadership informed with at-a-glance metrics for every contract, grant, and vendor relationship.
        </p>
      </header>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {summaryStats.map((stat) => (
          <StatCard key={stat.title} title={stat.title} value={stat.value} detail={stat.detail} />
        ))}
      </div>

      <section className="grid gap-6 lg:grid-cols-[2fr_1fr]">
        <Card className="bg-white/10 text-white">
          <CardContent className="space-y-4 p-6">
            <div>
              <h2 className="text-lg font-semibold">Highlights</h2>
              <p className="text-sm text-slate-200/80">Insights your executive team will ask about first.</p>
            </div>
            <ul className="space-y-3 text-sm text-slate-200/80">
              {demoOverviewHighlights.map((highlight) => (
                <li key={highlight} className="rounded-lg bg-white/5 p-3">
                  {highlight}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-white text-slate-900">
          <CardContent className="space-y-4 p-6">
            <div>
              <h2 className="text-lg font-semibold">Compliance checklist</h2>
              <p className="text-sm text-slate-600">Track critical deliverables that keep grants and vendors audit-ready.</p>
            </div>
            <div className="space-y-3">
              {demoComplianceChecklist.map((item) => (
                <div key={item.item} className="rounded-lg border border-slate-200 p-3 text-sm">
                  <div className="flex items-center justify-between gap-2">
                    <p className="font-medium text-slate-900">{item.item}</p>
                    <Badge variant="secondary" className="bg-slate-100 text-slate-700">
                      Due {item.due}
                    </Badge>
                  </div>
                  <p className="mt-2 text-xs uppercase tracking-wide text-slate-400">{item.status}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="grid gap-6 lg:grid-cols-[3fr_2fr]">
        <Card className="bg-white/10 text-white">
          <CardContent className="space-y-4 p-6">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold">Program health</h2>
              <span className="text-xs uppercase tracking-wide text-slate-300">Scores refreshed daily</span>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {demoProgramHealth.map((program) => (
                <div key={program.program} className="space-y-3 rounded-xl border border-white/10 bg-white/5 p-4">
                  <div className="flex items-center justify-between gap-2">
                    <p className="font-semibold text-white">{program.program}</p>
                    <Badge
                      variant="secondary"
                      className={
                        program.status === 'On track'
                          ? 'bg-emerald-200/90 text-emerald-900'
                          : program.status === 'Watch'
                            ? 'bg-amber-100 text-amber-700'
                            : 'bg-rose-100 text-rose-700'
                      }
                    >
                      {program.status}
                    </Badge>
                  </div>
                  <p className="text-xs uppercase tracking-wide text-slate-300">Owner {program.owner}</p>
                  <div className="flex items-end justify-between">
                    <span className="text-3xl font-semibold text-white">{program.score}</span>
                    <span className="text-xs text-slate-300">Health score</span>
                  </div>
                </div>
              ))}
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
                      {(alert.variance * 100).toFixed(0)}% {alert.variance >= 0 ? 'over plan' : 'under plan'}
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
    </div>
  );
}

function StatCard({ title, value, detail }: { title: string; value: string; detail?: string }) {
  return (
    <Card className="bg-white text-slate-900">
      <CardContent className="space-y-2 p-6">
        <p className="text-sm text-slate-500">{title}</p>
        <p className="text-2xl font-semibold text-slate-900">{value}</p>
        {detail ? <p className="text-xs text-slate-500">{detail}</p> : null}
      </CardContent>
    </Card>
  );
}
