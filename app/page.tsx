import { ScreenshotCarousel } from '@/components/ScreenshotCarousel';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

const screenshots = ['/screens/dashboard.png', '/screens/contracts.png', '/screens/files.png'];

const pricingPlans = [
  {
    name: 'Free',
    description: 'Limited usage. Explore basic features.',
    price: '$0/month',
    cta: 'Start for Free',
  },
  {
    name: 'Pro',
    description: 'Unlock AI, file uploads, timelines.',
    price: '$9/month',
    cta: 'Upgrade to Pro',
  },
  {
    name: 'Enterprise',
    description: 'Full org access, admin tools, integrations.',
    price: '$19/month',
    cta: 'Explore Enterprise',
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-[#f9fafb] text-gray-900">
      <header className="flex items-center justify-between border-b px-6 py-6 md:px-10">
        <div className="flex items-center space-x-3">
          <Image
            src="/logo-app-check.svg"
            alt="ContractPlan Logo"
            width={32}
            height={32}
            className="h-8 w-8"
          />
          <span className="text-xl font-semibold text-gray-800">ContractPlan</span>
        </div>
        <nav className="hidden items-center space-x-4 md:flex">
          <Button variant="ghost" asChild>
            <Link href="/sign-in">Sign in</Link>
          </Button>
          <Button asChild>
            <Link href="/app">Launch App</Link>
          </Button>
        </nav>
      </header>

      <section className="px-6 py-24 text-center md:px-10">
        <h1 className="text-4xl font-bold leading-tight md:text-5xl">From chaos to order</h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
          Simple tools that free you up to focus on impact, not administration.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Button size="lg" asChild className="transition-transform hover:scale-105">
            <Link href="/app">Launch the App</Link>
          </Button>
          <Button variant="outline" size="lg" asChild className="transition-transform hover:scale-105">
            <Link href="#demo">View Demo</Link>
          </Button>
        </div>
      </section>

      <section className="mt-10 px-6 md:px-10" id="demo">
        <div className="mx-auto max-w-6xl">
          <ScreenshotCarousel images={screenshots} />
        </div>
      </section>

      <section className="mt-24 bg-sky-50 px-6 py-16 text-center md:px-10" id="pricing">
        <h2 className="mb-6 text-3xl font-bold">Pricing Plans</h2>
        <p className="mx-auto mb-10 max-w-xl text-gray-600">
          Start free. Upgrade when you&apos;re ready to unlock more power.
        </p>
        <div className="flex flex-col justify-center gap-8 md:flex-row">
          {pricingPlans.map((plan) => (
            <div
              key={plan.name}
              className="w-full rounded-xl border bg-white p-6 shadow transition hover:shadow-lg md:w-1/3"
            >
              <h3 className="mb-2 text-xl font-semibold">{plan.name}</h3>
              <p className="mb-4 text-gray-600">{plan.description}</p>
              <p className="mb-6 text-2xl font-bold">{plan.price}</p>
              <Button asChild>
                <Link href="/sign-up">{plan.cta}</Link>
              </Button>
            </div>
          ))}
        </div>
      </section>

      <footer className="py-10 text-center text-sm text-gray-500">
        Built to make a difference by ContractPlan Inc.
      </footer>
    </main>
  );
}
