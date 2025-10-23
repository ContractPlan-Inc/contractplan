'use client'

import { useMemo, useState } from 'react'
import Link from 'next/link'
import {
  AlertTriangle,
  Bell,
  CalendarDays,
  CheckCircle2,
  Filter,
  Menu,
  PlugZap,
  Plus,
  Search,
  ShieldCheck,
  Sparkles,
} from 'lucide-react'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { cn } from '@/lib/utils'

const contracts = [
  {
    name: 'Evergreen Parks Revitalization',
    counterparty: 'City of Evergreen',
    value: '$420K',
    owner: 'Alex Johnson',
    status: 'Active',
    stage: 'Monitoring',
    renewal: 'Aug 12, 2025',
  },
  {
    name: 'Community Housing Initiative',
    counterparty: 'Housing Forward',
    value: '$1.1M',
    owner: 'Jordan Thomas',
    status: 'Renewal',
    stage: 'Renewal review',
    renewal: 'Jul 30, 2025',
  },
  {
    name: 'STEM After-School Program',
    counterparty: 'Bright Futures',
    value: '$280K',
    owner: 'Sasha Kim',
    status: 'At Risk',
    stage: 'Compliance hold',
    renewal: 'Aug 22, 2025',
  },
  {
    name: 'River Cleanup Initiative',
    counterparty: 'GreenState',
    value: '$520K',
    owner: 'Amelia West',
    status: 'Active',
    stage: 'Execution',
    renewal: 'Oct 10, 2025',
  },
]

const statusStyles: Record<string, string> = {
  Active: 'bg-emerald-500/15 text-emerald-300',
  Renewal: 'bg-amber-500/15 text-amber-200',
  'At Risk': 'bg-rose-500/20 text-rose-200',
}

const metrics = [
  { label: 'Active contracts', value: '38', detail: '+6 vs. last quarter' },
  { label: 'In-flight renewals', value: '9', detail: '3 require leadership review' },
  { label: 'Average cycle time', value: '14 days', detail: 'Down 21% with automation' },
  { label: 'Data completeness', value: '97%', detail: 'Documents verified and tagged' },
]

const renewalTimeline = [
  {
    contract: 'Community Housing Initiative',
    due: 'Jul 30',
    status: 'Finance review',
    tone: 'warning',
  },
  {
    contract: 'STEM After-School Program',
    due: 'Aug 22',
    status: 'Awaiting compliance docs',
    tone: 'alert',
  },
  {
    contract: 'River Cleanup Initiative',
    due: 'Oct 10',
    status: 'On track for signature',
    tone: 'success',
  },
]

const actionItems = [
  {
    title: 'Upload vendor diversity report',
    owner: 'Jordan Thomas',
    due: 'Jul 18',
  },
  {
    title: 'Confirm insurance certificates for Evergreen Parks',
    owner: 'Alex Johnson',
    due: 'Jul 21',
  },
  {
    title: 'Review AI clause update recommendations',
    owner: 'Priya Desai',
    due: 'Jul 24',
  },
]

const integrationHealth = [
  { name: 'Salesforce', status: 'Synced 2h ago', tone: 'success' },
  { name: 'Stripe', status: 'Invoice automation enabled', tone: 'success' },
  { name: 'Document vault', status: 'Re-authentication required', tone: 'warning' },
]

const navItems = [
  { label: 'Overview', href: '/app' },
  { label: 'Documents', href: '/documents' },
  { label: 'Workflows', href: '/workflows' },
  { label: 'Reports', href: '/reports/overview' },
  { label: 'Integrations', href: '/integrations' },
  { label: 'AI assistant', href: '/ai' },
]

export default function AppWorkspace() {
  const [searchTerm, setSearchTerm] = useState('')
  const [filter, setFilter] = useState<'all' | 'renewals'>('all')

  const filteredContracts = useMemo(() => {
    const query = searchTerm.toLowerCase().trim()
    return contracts.filter((contract) => {
      const matchesQuery =
        query.length === 0 ||
        contract.name.toLowerCase().includes(query) ||
        contract.counterparty.toLowerCase().includes(query)
      const matchesFilter = filter === 'all' ? true : contract.status !== 'Active'
      return matchesQuery && matchesFilter
    })
  }, [filter, searchTerm])

  return (
    <div className="flex min-h-screen bg-slate-950 text-slate-50">
      <aside className="hidden w-64 flex-col border-r border-white/10 bg-slate-950/80 px-6 py-8 lg:flex">
        <div className="flex items-center justify-between text-sm text-slate-300">
          <span className="font-semibold text-white">ContractPlan</span>
          <Badge className="bg-emerald-500/20 text-emerald-200">GA</Badge>
        </div>
        <nav className="mt-8 space-y-2 text-sm text-slate-300">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'flex items-center justify-between rounded-xl px-3 py-2 transition-colors hover:bg-white/10 hover:text-white',
                item.href === '/app' && 'bg-white/10 text-white'
              )}
            >
              <span>{item.label}</span>
              {item.href === '/reports/overview' && (
                <Badge className="bg-white/0 text-emerald-200">New</Badge>
              )}
            </Link>
          ))}
        </nav>
        <div className="mt-auto space-y-3 text-xs text-slate-400">
          <div className="rounded-xl border border-white/10 bg-white/5 p-4">
            <p className="font-medium text-white">This week</p>
            <p className="mt-2 text-slate-300">3 renewals in review · 2 compliance tasks due</p>
          </div>
          <p>
            Need help? <Link href="/support" className="text-emerald-300 hover:text-emerald-200">Open support</Link>
          </p>
        </div>
      </aside>

      <div className="flex flex-1 flex-col">
        <header className="flex items-center justify-between border-b border-white/10 bg-slate-950/70 px-6 py-5 backdrop-blur">
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="icon" className="lg:hidden">
              <Menu className="h-5 w-5" aria-hidden="true" />
              <span className="sr-only">Open navigation</span>
            </Button>
            <div>
              <p className="text-xs uppercase tracking-wide text-slate-400">Operations workspace</p>
              <h1 className="text-2xl font-semibold text-white">Contract overview</h1>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="ghost" className="hidden h-10 w-10 items-center justify-center text-slate-300 hover:text-white sm:flex">
              <Bell className="h-5 w-5" aria-hidden="true" />
              <span className="sr-only">Notifications</span>
            </Button>
            <Button
              variant="outline"
              className="border-white/30 bg-white/10 text-white hover:bg-white/20"
              size="sm"
            >
              <Plus className="h-4 w-4" aria-hidden="true" />
              <span>Create record</span>
            </Button>
          </div>
        </header>

        <main className="flex-1 space-y-8 bg-slate-900/40 px-6 py-8">
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {metrics.map((metric) => (
              <Card key={metric.label} className="border-white/10 bg-slate-900/70 text-slate-100">
                <CardContent className="space-y-2">
                  <p className="text-xs uppercase tracking-wide text-slate-400">{metric.label}</p>
                  <p className="text-3xl font-semibold text-white">{metric.value}</p>
                  <p className="text-xs text-emerald-200">{metric.detail}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid gap-6 xl:grid-cols-[2.2fr_1fr]">
            <Card className="border-white/10 bg-slate-950/50 text-slate-100">
              <CardContent className="space-y-6">
                <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                  <div>
                    <h2 className="text-lg font-semibold text-white">Contracts</h2>
                    <p className="text-sm text-slate-400">Track obligations, owners, and renewal readiness.</p>
                  </div>
                  <div className="flex flex-1 flex-col gap-3 sm:flex-row sm:items-center sm:justify-end">
                    <div className="relative w-full sm:w-60">
                      <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" aria-hidden="true" />
                      <Input
                        value={searchTerm}
                        onChange={(event) => setSearchTerm(event.target.value)}
                        placeholder="Search contracts"
                        className="h-10 w-full rounded-xl border-white/10 bg-white/10 pl-10 text-white placeholder:text-slate-400"
                      />
                    </div>
                    <div className="flex items-center gap-2">
                      <Button
                        type="button"
                        size="sm"
                        variant={filter === 'all' ? 'secondary' : 'ghost'}
                        className={cn(
                          'rounded-full px-4',
                          filter === 'all'
                            ? 'bg-white/20 text-white hover:bg-white/30'
                            : 'text-slate-300 hover:text-white hover:bg-white/10'
                        )}
                        onClick={() => setFilter('all')}
                      >
                        All contracts
                      </Button>
                      <Button
                        type="button"
                        size="sm"
                        variant={filter === 'renewals' ? 'secondary' : 'ghost'}
                        className={cn(
                          'rounded-full px-4',
                          filter === 'renewals'
                            ? 'bg-white/20 text-white hover:bg-white/30'
                            : 'text-slate-300 hover:text-white hover:bg-white/10'
                        )}
                        onClick={() => setFilter('renewals')}
                      >
                        Renewals
                      </Button>
                      <Button
                        type="button"
                        variant="ghost"
                        size="icon"
                        className="hidden h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-slate-200 hover:bg-white/20 lg:flex"
                      >
                        <Filter className="h-4 w-4" aria-hidden="true" />
                        <span className="sr-only">Open filters</span>
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="overflow-hidden rounded-2xl border border-white/10">
                  <Table className="min-w-[720px] divide-y divide-white/10">
                    <TableHead>
                      <TableRow className="bg-white/5 text-left">
                        <TableHeader className="text-slate-200">Contract</TableHeader>
                        <TableHeader className="text-slate-200">Value</TableHeader>
                        <TableHeader className="text-slate-200">Owner</TableHeader>
                        <TableHeader className="text-slate-200">Status</TableHeader>
                        <TableHeader className="text-slate-200">Stage</TableHeader>
                        <TableHeader className="text-right text-slate-200">Renewal</TableHeader>
                      </TableRow>
                    </TableHead>
                    <TableBody className="divide-white/10">
                      {filteredContracts.map((contract) => (
                        <TableRow key={contract.name} className="border-white/5 hover:bg-white/5">
                          <TableCell className="text-white">
                            <div className="space-y-1">
                              <p className="font-medium">{contract.name}</p>
                              <p className="text-xs text-slate-400">{contract.counterparty}</p>
                            </div>
                          </TableCell>
                          <TableCell className="text-slate-200">{contract.value}</TableCell>
                          <TableCell className="text-slate-200">{contract.owner}</TableCell>
                          <TableCell>
                            <Badge
                              className={cn(
                                'border-none px-3 py-1 text-xs font-semibold uppercase tracking-wide',
                                statusStyles[contract.status]
                              )}
                            >
                              {contract.status}
                            </Badge>
                          </TableCell>
                          <TableCell className="text-slate-200">{contract.stage}</TableCell>
                          <TableCell className="text-right text-slate-200">{contract.renewal}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>

            <div className="grid gap-6">
              <Card className="border-white/10 bg-slate-950/50 text-slate-100">
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-sm font-semibold text-white">Renewal tracker</h3>
                      <p className="text-xs text-slate-400">What needs attention next</p>
                    </div>
                    <CalendarDays className="h-5 w-5 text-slate-400" aria-hidden="true" />
                  </div>
                  <div className="space-y-3">
                    {renewalTimeline.map((item) => (
                      <div key={item.contract} className="rounded-xl border border-white/10 bg-white/5 p-3">
                        <p className="text-sm font-medium text-white">{item.contract}</p>
                        <div className="mt-1 flex items-center justify-between text-xs text-slate-300">
                          <span>Due {item.due}</span>
                          <span className="flex items-center gap-1">
                            {item.tone === 'success' && <CheckCircle2 className="h-3.5 w-3.5 text-emerald-300" aria-hidden="true" />}
                            {item.tone === 'warning' && <ShieldCheck className="h-3.5 w-3.5 text-amber-300" aria-hidden="true" />}
                            {item.tone === 'alert' && <AlertTriangle className="h-3.5 w-3.5 text-rose-300" aria-hidden="true" />}
                            <span>{item.status}</span>
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="border-white/10 bg-slate-950/50 text-slate-100">
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-sm font-semibold text-white">Action items</h3>
                      <p className="text-xs text-slate-400">Assigned from workflows</p>
                    </div>
                    <Sparkles className="h-5 w-5 text-emerald-300" aria-hidden="true" />
                  </div>
                  <ul className="space-y-3 text-sm text-slate-200">
                    {actionItems.map((item) => (
                      <li key={item.title} className="rounded-xl border border-white/10 bg-white/5 p-3">
                        <p className="font-medium text-white">{item.title}</p>
                        <p className="text-xs text-slate-300">
                          Owner: {item.owner} · Due {item.due}
                        </p>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-white/10 bg-slate-950/50 text-slate-100">
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-sm font-semibold text-white">Integrations</h3>
                      <p className="text-xs text-slate-400">Connection health</p>
                    </div>
                    <PlugZap className="h-5 w-5 text-slate-400" aria-hidden="true" />
                  </div>
                  <ul className="space-y-3 text-sm text-slate-200">
                    {integrationHealth.map((integration) => (
                      <li key={integration.name} className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 p-3">
                        <div>
                          <p className="font-medium text-white">{integration.name}</p>
                          <p className="text-xs text-slate-300">{integration.status}</p>
                        </div>
                        <Badge
                          className={cn(
                            'border-none px-3 py-1 text-xs font-semibold uppercase tracking-wide',
                            integration.tone === 'success' && 'bg-emerald-500/15 text-emerald-200',
                            integration.tone === 'warning' && 'bg-amber-500/15 text-amber-200'
                          )}
                        >
                          {integration.tone === 'success' ? 'Healthy' : 'Attention'}
                        </Badge>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
