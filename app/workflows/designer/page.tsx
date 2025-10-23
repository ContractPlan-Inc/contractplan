'use client';

import Link from 'next/link';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const mockWorkflow = [
  { stage: 'Drafting', description: 'Initial contract drafting by legal team with shared templates.' },
  { stage: 'Review', description: 'Internal and external reviewers collaborate with tracked edits.' },
  { stage: 'Approval', description: 'Decision makers sign off with clear audit trails.' },
  { stage: 'Execution', description: 'Signatures are collected and key dates are recorded instantly.' },
  { stage: 'Monitoring', description: 'Milestones, spend, and compliance tasks tracked across teams.' },
  { stage: 'Renewal / Closeout', description: 'Evaluate performance, archive records, and plan renewals.' },
] as const;

export default function WorkflowDesigner() {
  return (
    <div className="space-y-6 p-6">
      <header className="flex flex-col gap-4 justify-between md:flex-row md:items-start">
        <div className="space-y-1">
          <h1 className="text-2xl font-semibold text-white">Workflow designer</h1>
          <p className="text-sm text-slate-200/80">
            Visualize your lifecycle from intake to renewal. Customize stages, assign owners, and trigger automations.
          </p>
        </div>
        <Button asChild>
          <Link href="/workflows/templates">Browse templates</Link>
        </Button>
      </header>

      <Card className="bg-white text-slate-900">
        <CardContent className="space-y-6 p-6">
          {mockWorkflow.map((step, index) => (
            <div key={step.stage} className="grid gap-2 border-l border-slate-200 pl-6">
              <div className="flex items-center gap-3">
                <Badge variant="secondary">Stage {index + 1}</Badge>
                <p className="text-lg font-semibold text-slate-900">{step.stage}</p>
              </div>
              <p className="text-sm leading-6 text-slate-600">{step.description}</p>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
