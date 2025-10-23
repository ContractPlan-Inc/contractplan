import { Check } from 'lucide-react'

import { cn } from '@/lib/utils'

import { Badge } from './ui/badge'
import { Button } from './ui/button'

type Tier = {
  name: string
  price: string
  summary: string
  features: string[]
  cta: string
  highlight?: boolean
}

const tiers: Tier[] = [
  {
    name: 'Starter',
    price: '$0',
    summary: 'Launch quickly with contract tracking, document storage, and renewal reminders.',
    features: ['Unlimited contracts & documents', 'Personalized onboarding checklist', 'Email reminders & timeline view'],
    cta: 'Get started',
  },
  {
    name: 'Pro',
    price: '$9',
    summary: 'Everything in Starter plus collaboration controls and AI-driven insights.',
    features: ['Team workspaces & permissions', 'AI risk & compliance monitoring', 'Advanced dashboards & exports'],
    cta: 'Upgrade to Pro',
    highlight: true,
  },
  {
    name: 'NEXTSuite',
    price: '$19',
    summary: 'Integrations, audit trails, and dedicated support for cross-agency deployments.',
    features: ['Dedicated success architect', 'Salesforce, Stripe & data warehouse sync', 'Priority support with 4h response'],
    cta: 'Talk to us',
  },
]

export function PricingSection() {
  return (
    <div className="grid gap-6 lg:grid-cols-3">
      {tiers.map((tier) => (
        <div
          key={tier.name}
          className={cn(
            'relative flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-8 text-left shadow-sm',
            tier.highlight && 'border-emerald-500/60 shadow-lg shadow-emerald-500/20'
          )}
        >
          {tier.highlight && (
            <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-emerald text-white">
              Most popular
            </Badge>
          )}
          <div>
            <h3 className="text-xl font-semibold text-midnight">{tier.name}</h3>
            <p className="mt-3 text-4xl font-bold text-midnight">
              {tier.price}
              <span className="text-base font-medium text-slate-500">/seat</span>
            </p>
            <p className="mt-4 text-sm leading-relaxed text-slate-600">{tier.summary}</p>
          </div>
          <ul className="mt-6 space-y-3 text-sm text-slate-600">
            {tier.features.map((feature) => (
              <li key={feature} className="flex items-start gap-3">
                <span className="mt-0.5 rounded-full bg-emerald-500/15 p-1 text-emerald-500">
                  <Check className="h-3.5 w-3.5" aria-hidden="true" />
                </span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <Button
              className={cn(
                'w-full justify-center',
                tier.highlight
                  ? 'shadow-lg shadow-emerald-500/20'
                  : 'border-slate-300 bg-white text-slate-900 hover:bg-slate-100'
              )}
              variant={tier.highlight ? 'emerald' : 'outline'}
            >
              {tier.cta}
            </Button>
          </div>
        </div>
      ))}
    </div>
  )
}
