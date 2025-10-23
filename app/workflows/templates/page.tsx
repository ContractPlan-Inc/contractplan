'use client';

import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';

const templates = [
  {
    name: 'Grant intake + scoring',
    description: 'Collect applications, route reviews, and generate award recommendations.',
    tags: ['Intake', 'Evaluation'],
  },
  {
    name: 'Vendor onboarding',
    description: 'Gather insurance, compliance docs, and schedule kickoff tasks automatically.',
    tags: ['Procurement'],
  },
  {
    name: 'Monitoring & reporting',
    description: 'Schedule program check-ins, send reminders, and centralize deliverables.',
    tags: ['Compliance', 'Performance'],
  },
] as const;

export default function WorkflowTemplates() {
  return (
    <div className="space-y-6 p-6">
      <header className="space-y-1">
        <h1 className="text-2xl font-semibold text-white">Workflow templates</h1>
        <p className="text-sm text-slate-200/80">
          Jump-start new workflows with best practices tailored for local governments and nonprofits.
        </p>
      </header>

      <div className="grid gap-4 md:grid-cols-2">
        {templates.map((template) => (
          <Card key={template.name} className="bg-white text-slate-900">
            <CardContent className="space-y-3 p-6">
              <div>
                <h2 className="text-lg font-semibold">{template.name}</h2>
                <p className="text-sm text-slate-600">{template.description}</p>
              </div>
              <div className="flex flex-wrap gap-2">
                {template.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
