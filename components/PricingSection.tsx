import { Button } from './ui/button'

export function PricingSection() {
  const tiers = [
    {
      name: 'Free',
      price: '$0/mo',
      features: [
        'Unlimited contracts',
        'Timeline view',
        '1 seat',
      ],
      cta: 'Get Started',
    },
    {
      name: 'Pro',
      price: '$9/mo',
      features: [
        'Everything in Free +',
        '5 seats',
        'Dashboard analytics',
        'Reminders & alerts',
      ],
      cta: 'Upgrade to Pro',
    },
    {
      name: 'NEXTSuite',
      price: '$19/mo',
      features: [
        'Everything in Pro +',
        'Advanced permissions',
        'Export & integrations',
        'Priority support',
      ],
      cta: 'Unlock NEXTSuite',
    },
  ]

  return (
    <div className="grid md:grid-cols-3 gap-8">
      {tiers.map((tier, i) => (
        <div key={i} className="border border-gray-200 rounded-xl p-6 shadow-sm">
          <h3 className="text-xl font-bold text-midnight mb-1">{tier.name}</h3>
          <p className="text-2xl text-emerald font-bold mb-4">{tier.price}</p>
          <ul className="mb-6 space-y-1 text-gray-600">
            {tier.features.map((f, j) => (
              <li key={j}>• {f}</li>
            ))}
          </ul>
          <Button className="w-full" variant={i === 0 ? 'outline' : 'emerald'}>
            {tier.cta}
          </Button>
        </div>
      ))}
    </div>
  )
}
