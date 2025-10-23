import { type LucideIcon, Activity, BellRing, FileText, ShieldCheck, Sparkles, Users } from 'lucide-react'

type Feature = {
  title: string
  description: string
  icon: LucideIcon
}

const features: Feature[] = [
  {
    title: 'AI-powered insights',
    description: 'Spot renewal risks, missing documents, and savings opportunities before they become blockers.',
    icon: Sparkles,
  },
  {
    title: 'Visual timelines & dashboards',
    description: 'See obligations, milestones, and workload across every team with a single glance.',
    icon: Activity,
  },
  {
    title: 'Secure file collaboration',
    description: 'Centralize contract files with version tracking, permissions, and audit-ready activity logs.',
    icon: FileText,
  },
  {
    title: 'Automated reminders',
    description: 'Proactive nudges keep stakeholders ahead of renewals, compliance dates, and deliverables.',
    icon: BellRing,
  },
  {
    title: 'Granular permissions',
    description: 'Control who sees what with roles tailored to procurement, finance, legal, and program teams.',
    icon: ShieldCheck,
  },
  {
    title: 'Launch-ready onboarding',
    description: 'Walk new contributors through workflows and tasks with guided checklists and contextual help.',
    icon: Users,
  },
]

export function FeaturesGrid() {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {features.map((feature) => {
        const Icon = feature.icon
        return (
          <div
            key={feature.title}
            className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white/80 p-6 text-left shadow-sm"
          >
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-500">
              <Icon className="h-6 w-6" aria-hidden="true" />
            </div>
            <h3 className="text-lg font-semibold text-midnight">{feature.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">{feature.description}</p>
          </div>
        )
      })}
    </div>
  )
}
