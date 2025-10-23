'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

const renewals = [
  { contract: 'Contract #2045', owner: 'Jordan Thomas', renewalDate: 'Jul 30', risk: 'Missing certificate' },
  { contract: 'Contract #1889', owner: 'Priya Singh', renewalDate: 'Aug 12', risk: 'Budget review' },
] as const;

export default function ReportsDashboard() {
  return (
    <div className="space-y-6 p-6">
      <header className="space-y-1">
        <h1 className="text-2xl font-semibold text-white">Reporting dashboard</h1>
        <p className="text-sm text-slate-200/80">
          Use the dashboard to track renewal readiness, spend variance, and compliance workload week over week.
        </p>
      </header>

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
              {renewals.map((item) => (
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
    </div>
  );
}
