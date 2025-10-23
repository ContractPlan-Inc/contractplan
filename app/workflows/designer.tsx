// app/workflows/designer.tsx

'use client'

import { Card, CardContent } from '@/components/ui/card'

const mockWorkflow = [
  { stage: 'Drafting', description: 'Initial contract drafting by legal team' },
  { stage: 'Review', description: 'Internal and external legal review' },
  { stage: 'Approval', description: 'Final approval by decision makers' },
  { stage: 'Execution', description: 'Signatures and formal execution' },
  { stage: 'Monitoring', description: 'Ongoing performance and compliance' },
  { stage: 'Renewal/Closeout', description: 'End of term actions and renewal evaluation' },
]

export default function WorkflowDesigner() {
  return (
    <div className="min-h-screen bg-slate-950 px-6 py-8 text-slate-50">
      <div className="mx-auto max-w-4xl space-y-6">
        <div>
          <h1 className="text-2xl font-semibold">Workflow designer</h1>
          <p className="text-sm text-slate-300">Visualize each stage in your contract lifecycle.</p>
        </div>
        <Card>
          <CardContent className="space-y-6 p-6">
            {mockWorkflow.map((step) => (
              <div key={step.stage} className="relative border-l border-slate-200 pl-6">
                <div className="absolute -left-3 top-1 h-2 w-2 rounded-full bg-emerald-500" />
                <div className="text-lg font-medium text-slate-900">{step.stage}</div>
                <div className="text-sm text-slate-600">{step.description}</div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
