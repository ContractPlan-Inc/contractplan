'use client';

import { useMemo, useState } from 'react';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';

const initialSteps = [
  {
    id: 1,
    title: 'Draft contract',
    description: 'Capture parties, scope, milestones, and any compliance requirements.',
  },
  {
    id: 2,
    title: 'Legal + compliance review',
    description: 'Loop in reviewers and track revisions directly in ContractPlan.',
  },
  {
    id: 3,
    title: 'Approvals & signatures',
    description: 'Collect approvals, trigger DocuSign, and record the execution date automatically.',
  },
] satisfies WorkflowStep[];

type WorkflowStep = {
  id: number;
  title: string;
  description: string;
};

export default function WorkflowsPage() {
  const [steps, setSteps] = useState<WorkflowStep[]>(initialSteps);
  const [draft, setDraft] = useState({ title: '', description: '' });

  const canSubmit = useMemo(
    () => draft.title.trim().length > 0 && draft.description.trim().length > 0,
    [draft.description, draft.title],
  );

  const addStep = () => {
    if (!canSubmit) {
      return;
    }

    setSteps((previous) => [
      ...previous,
      { id: previous.length + 1, title: draft.title.trim(), description: draft.description.trim() },
    ]);

    setDraft({ title: '', description: '' });
  };

  const removeStep = (id: number) => {
    setSteps((previous) => previous.filter((step) => step.id !== id).map((step, index) => ({
      ...step,
      id: index + 1,
    })));
  };

  return (
    <div className="space-y-6 p-6">
      <header className="space-y-1">
        <h1 className="text-2xl font-semibold text-white">Workflow designer</h1>
        <p className="text-sm text-slate-200/80">
          Orchestrate cross-team collaboration with reusable steps, role assignments, and automated reminders.
        </p>
      </header>

      <Card className="bg-white/10 text-white">
        <CardContent className="space-y-4 p-6">
          {steps.map((step) => (
            <div key={step.id} className="flex flex-col gap-3 rounded-lg bg-white/5 p-4 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <div className="flex items-center gap-3">
                  <Badge variant="secondary" className="bg-white/15 text-white">
                    Step {step.id}
                  </Badge>
                  <p className="text-base font-semibold">{step.title}</p>
                </div>
                <p className="mt-2 text-sm text-slate-200/80">{step.description}</p>
              </div>
              <Button
                variant="ghost"
                className="self-start text-sm text-rose-200 hover:bg-rose-500/10 hover:text-rose-100"
                onClick={() => removeStep(step.id)}
              >
                Remove
              </Button>
            </div>
          ))}
        </CardContent>
      </Card>

      <Card className="bg-white text-slate-900">
        <CardContent className="space-y-4 p-6">
          <div>
            <p className="text-sm font-medium text-slate-500">Add a new step</p>
            <p className="text-sm text-slate-500">Describe the action and what success looks like for your team.</p>
          </div>
          <div className="grid gap-3 md:grid-cols-2">
            <Input
              placeholder="Assign reviewers"
              value={draft.title}
              onChange={(event) => setDraft((prev) => ({ ...prev, title: event.target.value }))}
            />
            <Input
              placeholder="Who is responsible and what happens next?"
              value={draft.description}
              onChange={(event) => setDraft((prev) => ({ ...prev, description: event.target.value }))}
            />
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <Button onClick={addStep} disabled={!canSubmit}>
              Add step
            </Button>
            <p className="text-sm text-slate-500">
              Steps power dashboards, reminders, and intake portals automatically.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
