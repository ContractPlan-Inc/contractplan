// app/workflows.tsx

'use client';

import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface WorkflowStep {
  id: number;
  title: string;
  description: string;
}

export default function WorkflowsPage() {
  const [steps, setSteps] = useState<WorkflowStep[]>([
    { id: 1, title: 'Draft Contract', description: 'Create an initial contract draft with parties and terms.' },
    { id: 2, title: 'Review', description: 'Review draft with legal and compliance teams.' },
    { id: 3, title: 'Approval', description: 'Get approvals from decision-makers.' },
  ]);

  const [newStep, setNewStep] = useState({ title: '', description: '' });

  const addStep = () => {
    if (!newStep.title.trim()) return;
    setSteps([...steps, { id: steps.length + 1, ...newStep }]);
    setNewStep({ title: '', description: '' });
  };

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-semibold">Workflow Designer</h1>

      <Card>
        <CardContent className="space-y-4 p-4">
          {steps.map((step) => (
            <div key={step.id} className="border p-3 rounded bg-gray-50">
              <div className="font-semibold">Step {step.id}: {step.title}</div>
              <div className="text-sm text-gray-600">{step.description}</div>
            </div>
          ))}
        </CardContent>
      </Card>

      <Card>
        <CardContent className="space-y-4 p-4">
          <div className="text-sm font-medium text-gray-700">Add a new step</div>
          <Input
            placeholder="Step title"
            value={newStep.title}
            onChange={(e) => setNewStep({ ...newStep, title: e.target.value })}
          />
          <Input
            placeholder="Step description"
            value={newStep.description}
            onChange={(e) => setNewStep({ ...newStep, description: e.target.value })}
          />
          <Button onClick={addStep}>Add Step</Button>
        </CardContent>
      </Card>
    </div>
  );
}

