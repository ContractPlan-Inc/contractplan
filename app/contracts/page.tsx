import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

const contracts = [
  { name: 'Vendor MSA 2025', type: 'Service', owner: 'Amanda Liu', status: 'Active' },
  { name: 'Grant Funding Q3', type: 'Grant', owner: 'Marcus Bell', status: 'Pending' },
  { name: 'Facility Upgrade', type: 'Capital', owner: 'Priya Singh', status: 'In review' },
] as const;

export default function ContractsPage() {
  return (
    <main className="space-y-6 bg-gradient-to-br from-midnight via-[#111c3a] to-pacific p-6 text-white">
      <header className="space-y-1">
        <h1 className="text-3xl font-semibold">Contracts</h1>
        <p className="text-sm text-slate-200/80">
          A centralized list of every contract in your workspace with owners, types, and current status.
        </p>
      </header>

      <Card className="bg-white text-slate-900">
        <CardContent className="p-0">
          <Table>
            <TableHead>
              <TableRow>
                <TableHeader>Name</TableHeader>
                <TableHeader>Type</TableHeader>
                <TableHeader>Owner</TableHeader>
                <TableHeader>Status</TableHeader>
              </TableRow>
            </TableHead>
            <TableBody>
              {contracts.map((contract) => (
                <TableRow key={contract.name}>
                  <TableCell>{contract.name}</TableCell>
                  <TableCell>{contract.type}</TableCell>
                  <TableCell>{contract.owner}</TableCell>
                  <TableCell>
                    <Badge variant="secondary">{contract.status}</Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </main>
  );
}
