'use client';

import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import {
  Table,
  TableHead,
  TableHeader,
  TableBody,
  TableRow,
  TableCell,
} from '@/components/ui/table';

// Mock contract spend data
const contracts = [
  { id: 'C-1001', name: 'IT Support Services', budget: 50000, actual: 48000 },
  { id: 'C-1002', name: 'Facilities Maintenance', budget: 75000, actual: 82500 },
  { id: 'C-1003', name: 'Community Outreach Grant', budget: 60000, actual: 45000 },
];

function calculateTotals() {
  const totalBudget = contracts.reduce((sum, c) => sum + c.budget, 0);
  const totalActual = contracts.reduce((sum, c) => sum + c.actual, 0);
  return { totalBudget, totalActual };
}

function getAiRecommendation(role: 'buyer' | 'seller', delta: number) {
  if (delta > 0) {
    return role === 'buyer'
      ? 'Overspend detected. Consider scaling back services or renegotiating rates.'
      : 'Overspend detected. Increase deliverables or request a budget amendment.';
  }
  if (delta < 0) {
    return role === 'buyer'
      ? 'Underspend noted. Evaluate if additional value can be captured.'
      : 'Underspend noted. You may reduce effort or propose reallocating funds.';
  }
  return 'On target. Maintain current pace.';
}

export default function UtilizationReports() {
  const [role, setRole] = useState<'buyer' | 'seller'>('buyer');
  const { totalBudget, totalActual } = calculateTotals();
  const totalDelta = totalActual - totalBudget;

  return (
    <div className="p-6 space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Contract Utilization</h1>
        <button
          className="text-sm underline text-blue-600"
          onClick={() => setRole(role === 'buyer' ? 'seller' : 'buyer')}
        >
          Switch to {role === 'buyer' ? 'Seller' : 'Buyer'} View
        </button>
      </div>

      <Card>
        <CardContent>
          <Table>
            <TableHead>
              <TableRow>
                <TableHeader>Contract</TableHeader>
                <TableHeader>Budget</TableHeader>
                <TableHeader>Actual</TableHeader>
                <TableHeader>Variance</TableHeader>
              </TableRow>
            </TableHead>
            <TableBody>
              {contracts.map((c) => {
                const delta = c.actual - c.budget;
                const recommendation = getAiRecommendation(role, delta);
                return (
                  <TableRow key={c.id}>
                    <TableCell>{c.name}</TableCell>
                    <TableCell>${c.budget.toLocaleString()}</TableCell>
                    <TableCell>${c.actual.toLocaleString()}</TableCell>
                    <TableCell className={delta > 0 ? 'text-red-600' : delta < 0 ? 'text-yellow-600' : 'text-green-600'}>
                      {delta > 0 ? '+' : ''}{delta.toLocaleString()}
                      <div className="text-xs text-gray-500">{recommendation}</div>
                    </TableCell>
                  </TableRow>
                );
              })}
              <TableRow>
                <TableCell className="font-semibold">Total</TableCell>
                <TableCell className="font-semibold">${totalBudget.toLocaleString()}</TableCell>
                <TableCell className="font-semibold">${totalActual.toLocaleString()}</TableCell>
                <TableCell className={`font-semibold ${totalDelta > 0 ? 'text-red-600' : totalDelta < 0 ? 'text-yellow-600' : 'text-green-600'}` }>
                  {totalDelta > 0 ? '+' : ''}{totalDelta.toLocaleString()}
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-4">
          <div className="text-sm text-gray-500 mb-2">Overall Recommendation</div>
          <p>{getAiRecommendation(role, totalDelta)}</p>
        </CardContent>
      </Card>
    </div>
  );
}

