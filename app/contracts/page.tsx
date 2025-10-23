"use client"

import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { cn } from '@/lib/utils'

const contracts = [
  { name: 'Vendor MSA 2025', type: 'Service', owner: 'Amanda Liu', status: 'Active' },
  { name: 'Grant Funding Q3', type: 'Grant', owner: 'Marcus Bell', status: 'Pending' },
]

const statusStyles: Record<string, string> = {
  Active: 'bg-emerald-500/15 text-emerald-200',
  Pending: 'bg-amber-500/15 text-amber-200',
}

export default function ContractsPage() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-8 text-slate-50">
      <div className="mx-auto max-w-5xl space-y-6">
        <div>
          <h1 className="text-3xl font-semibold">All contracts</h1>
          <p className="text-sm text-slate-300">A consolidated list of every agreement managed in ContractPlan.</p>
        </div>

        <Card className="border-white/10 bg-slate-950/60 text-slate-100">
          <CardContent className="p-0">
            <Table>
              <TableHead>
                <TableRow className="bg-white/5">
                  <TableHeader className="text-slate-200">Name</TableHeader>
                  <TableHeader className="text-slate-200">Type</TableHeader>
                  <TableHeader className="text-slate-200">Owner</TableHeader>
                  <TableHeader className="text-slate-200">Status</TableHeader>
                </TableRow>
              </TableHead>
              <TableBody className="divide-white/10">
                {contracts.map((contract) => (
                  <TableRow key={contract.name} className="border-white/10 text-slate-200">
                    <TableCell className="text-white">{contract.name}</TableCell>
                    <TableCell>{contract.type}</TableCell>
                    <TableCell>{contract.owner}</TableCell>
                    <TableCell>
                      <Badge
                        className={cn(
                          'border-none px-3 py-1 text-xs font-semibold uppercase tracking-wide',
                          statusStyles[contract.status] ?? 'bg-white/10 text-white'
                        )}
                      >
                        {contract.status}
                      </Badge>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </main>
  )
}
