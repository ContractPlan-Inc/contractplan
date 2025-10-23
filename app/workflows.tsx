// app/workflows.tsx

'use client'

import { useState } from 'react'

import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

interface WorkflowStep {
  id: number
  title: string
  description: string
}

export default function WorkflowsPage() {
  const [steps, setSteps] = useState<WorkflowStep[]>([
    { id: 1, title: 'Draft contract', description: 'Create an initial contract draft with parties and terms.' },
    { id: 2, title: 'Review', description: 'Review draft with legal and compliance teams.' },
    { id: 3, title: 'Approval', description: 'Get approvals from decision-makers.' },
  ])

  const [newStep, setNewStep] = useState({ title: '', description: '' })

  const addStep = () => {
    if (!newStep.title.trim()) return
    setSteps([...steps, { id: steps.length + 1, ...newStep }])
    setNewStep({ title: '', description: '' })
  }

  return (
    <div className="min-h-screen bg-slate-950 px-6 py-8 text-slate-50">
      <div className="mx-auto max-w-5xl space-y-6">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-2xl font-semibold">Workflow designer</h1>
            <p className="text-sm text-slate-300">Map the steps that keep reviews and approvals moving.</p>
          </div>
          <div className="flex gap-2">
            <Input
              placeholder="Step title"
              value={newStep.title}
              onChange={(event) => setNewStep({ ...newStep, title: event.target.value })}
              className="h-10 rounded-xl border-white/10 bg-white/10 text-white placeholder:text-slate-400"
            />
            <Input
              placeholder="Step description"
              value={newStep.description}
              onChange={(event) => setNewStep({ ...newStep, description: event.target.value })}
              className="h-10 rounded-xl border-white/10 bg-white/10 text-white placeholder:text-slate-400"
            />
            <Button onClick={addStep} variant="emerald">
              Add step
            </Button>
          </div>
        </div>

        <Card>
          <CardContent className="space-y-4 p-6">
            {steps.map((step) => (
              <div key={step.id} className="rounded-xl border border-slate-200/70 bg-slate-50 p-4">
                <div className="font-semibold text-slate-900">
                  Step {step.id}: {step.title}
                </div>
                <div className="text-sm text-slate-600">{step.description}</div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
