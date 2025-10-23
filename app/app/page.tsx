import Link from 'next/link';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

const metrics = [
  { label: 'Active contracts', value: '24', sublabel: '+3 this quarter' },
  { label: 'Upcoming renewals', value: '5', sublabel: 'Next 60 days' },
  { label: 'Tasks due this week', value: '8', sublabel: '2 high priority' },
  { label: 'Compliance score', value: '91%', sublabel: '↑ 4% vs last month' },
] as const;

const renewals = [
  { contract: 'Contract #2045', owner: 'Jordan Thomas', renewalDate: 'Jul 30', status: 'Missing certificate' },
  { contract: 'Grant #1889', owner: 'Priya Singh', renewalDate: 'Aug 12', status: 'Budget review' },
  { contract: 'Vendor MSA 2025', owner: 'Marcus Bell', renewalDate: 'Aug 25', status: 'On track' },
] as const;

const tasks = [
  { title: 'Upload EPA compliance report', due: 'Jul 18', owner: 'Sasha Kim' },
  { title: 'Finalize scope for Facility Upgrade', due: 'Jul 19', owner: 'Evergreen Partners' },
  { title: 'Send renewal outreach email', due: 'Jul 21', owner: 'Jordan Thomas' },
] as const;

const aiHighlights = [
  'ContractPlan AI drafted a renewal brief for Contract #2045.',
  'Variance alert: Contract #1771 is 12% over budget — review scheduled for Jul 17.',
  'Suggested task: invite finance reviewer to Grant #3002 before Q4 report.',
] as const;

export default function AppHome() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-midnight via-[#101d3b] to-pacific text-white">
      <header className="border-b border-white/10 bg-white/5 px-6 py-6 backdrop-blur md:px-10">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-2xl font-semibold">ContractPlan workspace</h1>
            <p className="text-sm text-slate-200/80">
              Morning briefing for the GrantBridge Initiative — everything you need to stay ahead of renewals.
            </p>
          </div>
          <nav className="flex flex-wrap items-center gap-3 text-sm text-slate-200/80">
            <Link className="hover:text-white" href="/overview">
              Overview
            </Link>
            <Link className="hover:text-white" href="/documents">
              Documents
            </Link>
            <Link className="hover:text-white" href="/workflows">
              Workflows
            </Link>
            <Link className="hover:text-white" href="/reports/overview">
              Reports
            </Link>
            <Link className="hover:text-white" href="/ai">
              AI hub
            </Link>
          </nav>
        </div>
      </header>

      <main className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-10">
        <section className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {metrics.map((metric) => (
            <Card key={metric.label} className="bg-white/10">
              <CardContent className="space-y-1 p-5">
                <p className="text-sm text-slate-200/80">{metric.label}</p>
                <p className="text-2xl font-semibold text-white">{metric.value}</p>
                <p className="text-xs text-slate-200/70">{metric.sublabel}</p>
              </CardContent>
            </Card>
          ))}
        </section>

        <section className="grid gap-6 lg:grid-cols-[2fr_1fr]">
          <Card className="bg-white text-slate-900">
            <CardContent className="space-y-4 p-6">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold">Renewals radar</h2>
                <Badge variant="secondary">Next 60 days</Badge>
              </div>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableHeader>Contract</TableHeader>
                    <TableHeader>Owner</TableHeader>
                    <TableHeader>Renewal</TableHeader>
                    <TableHeader>Status</TableHeader>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {renewals.map((item) => (
                    <TableRow key={item.contract}>
                      <TableCell>{item.contract}</TableCell>
                      <TableCell>{item.owner}</TableCell>
                      <TableCell>{item.renewalDate}</TableCell>
                      <TableCell>
                        <Badge variant="secondary">{item.status}</Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          <Card className="bg-white text-slate-900">
            <CardContent className="space-y-3 p-6">
              <h2 className="text-lg font-semibold">AI highlights</h2>
              <ul className="space-y-2 text-sm text-slate-600">
                {aiHighlights.map((item) => (
                  <li key={item} className="rounded-lg bg-slate-50 p-3">
                    {item}
                  </li>
                ))}
              </ul>
              <Button asChild className="w-full">
                <Link href="/ai/assistant">Open assistant</Link>
              </Button>
            </CardContent>
          </Card>
        </section>

        <section className="grid gap-6 lg:grid-cols-[2fr_1fr]">
          <Card className="bg-white text-slate-900">
            <CardContent className="space-y-4 p-6">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold">Tasks in progress</h2>
                <Button variant="outline" asChild className="border-slate-200 text-slate-700">
                  <Link href="/workflows">Manage workflows</Link>
                </Button>
              </div>
              <ul className="space-y-3 text-sm text-slate-700">
                {tasks.map((task) => (
                  <li key={task.title} className="rounded-lg border border-slate-200 p-3">
                    <p className="font-medium">{task.title}</p>
                    <p className="text-xs text-slate-500">Due {task.due} · Owner {task.owner}</p>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-white text-slate-900">
            <CardContent className="space-y-3 p-6">
              <h2 className="text-lg font-semibold">Quick actions</h2>
              <div className="flex flex-col gap-2">
                <Button asChild>
                  <Link href="/documents">Upload a document</Link>
                </Button>
                <Button asChild variant="outline" className="border-slate-200 text-slate-700">
                  <Link href="/reports/dashboard">View reports</Link>
                </Button>
                <Button asChild variant="outline" className="border-slate-200 text-slate-700">
                  <Link href="/onboarding/bot">Guide a teammate</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>
    </div>
  );
}
