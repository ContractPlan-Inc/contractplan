// app/workflows/designer.tsx

'use client';

import { Card, CardContent } from '@/components/ui/card';

const mockWorkflow = [
  { stage: 'Drafting', description: 'Initial contract drafting by legal team' },
  { stage: 'Review', description: 'Internal and external legal review' },
  { stage: 'Approval', description: 'Final approval by decision makers' },
  { stage: 'Execution', description: 'Signatures and formal execution' },
  { stage: 'Monitoring', description: 'Ongoing performance and compliance' },
  { stage: 'Renewal/Closeout', description: 'End of term actions and renewal evaluation' },
];

export default function WorkflowDesigner() {
  return (
    <div className="p-6 space-y-4">
      <h1 className="text-2xl font-semibold">Workflow Designer</h1>
      <Card>
        <CardContent className="p-4 space-y-6">
          {mockWorkflow.map((step, index) => (
            <div key={index} className="relative pl-6 border-l border-gray-300">
              <div className="absolute -left-3 top-1 w-2 h-2 bg-emerald-600 rounded-full" />
              <div className="text-lg font-medium text-gray-800">{step.stage}</div>
              <div className="text-sm text-gray-500">{step.description}</div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}

