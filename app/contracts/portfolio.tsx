// app/contracts/portfolio.tsx

'use client';

import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Card, CardContent } from '@/components/ui/card';

const mockContracts = [
  {
    id: 'CP-001',
    title: 'Affordable Housing Initiative',
    value: '$750,000',
    status: 'Active',
    department: 'Housing',
    endDate: '2026-04-30',
  },
  {
    id: 'CP-002',
    title: 'Workforce Training Grant',
    value: '$420,000',
    status: 'Expired',
    department: 'Labor',
    endDate: '2023-12-31',
  },
  {
    id: 'CP-003',
    title: 'Community Broadband Expansion',
    value: '$1.2M',
    status: 'Active',
    department: 'Technology',
    endDate: '2027-02-15',
  },
];

export default function ContractPortfolioPage() {
  const [search, setSearch] = useState('');

  const filtered = mockContracts.filter((c) =>
    c.title.toLowerCase().includes(search.toLowerCase()) ||
    c.id.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6 space-y-4">
      <h1 className="text-2xl font-semibold">Contract Portfolio</h1>
      <Input
        placeholder="Search contracts..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="max-w-sm"
      />

      <Card>
        <CardContent className="p-4 overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>Title</TableHead>
                <TableHead>Department</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>End Date</TableHead>
                <TableHead>Value</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filtered.map((c) => (
                <TableRow key={c.id}>
                  <TableCell>{c.id}</TableCell>
                  <TableCell>{c.title}</TableCell>
                  <TableCell>{c.department}</TableCell>
                  <TableCell>{c.status}</TableCell>
                  <TableCell>{c.endDate}</TableCell>
                  <TableCell>{c.value}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}

