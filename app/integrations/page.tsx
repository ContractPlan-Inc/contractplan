'use client';

import Link from 'next/link';

import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';

const integrations = [
  {
    name: 'Salesforce',
    description: 'Sync accounts, opportunities, and contract tags between teams.',
    status: 'Connected',
    href: '/integrations/salesforce',
  },
  {
    name: 'Stripe',
    description: 'Automate invoicing and match payments to contract milestones.',
    status: 'Needs setup',
    href: '/integrations/stripe',
  },
  {
    name: 'DocuSign',
    description: 'Send agreements for signature directly from ContractPlan.',
    status: 'Coming soon',
  },
] as const;

export default function IntegrationsHub() {
  return (
    <div className="space-y-6 p-6">
      <header className="space-y-1">
        <h1 className="text-2xl font-semibold text-white">Integrations hub</h1>
        <p className="text-sm text-slate-200/80">
          Connect the systems your team already relies on to create a single source of truth for every contract.
        </p>
      </header>

      <div className="grid gap-4 md:grid-cols-2">
        {integrations.map((integration) => (
          <Card key={integration.name} className="bg-white text-slate-900">
            <CardContent className="space-y-3 p-6">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold">{integration.name}</h2>
                <Badge variant="secondary">{integration.status}</Badge>
              </div>
              <p className="text-sm text-slate-600">{integration.description}</p>
              {integration.href ? (
                <Link className="text-sm font-medium text-emerald-600" href={integration.href}>
                  View details
                </Link>
              ) : (
                <span className="text-sm font-medium text-slate-400">Details coming soon</span>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
