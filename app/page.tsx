import { FeaturesGrid } from '@/components/FeaturesGrid';
import { PricingSection } from '@/components/PricingSection';
import { ScreenshotCarousel } from '@/components/ScreenshotCarousel';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

const screenshots = ['/screens/dashboard.png', '/screens/contracts.png', '/screens/files.png'];

const trustSignals = [
  { label: 'Programs supported', value: '120+' },
  { label: 'Contracts tracked', value: '3K+' },
  { label: 'Renewal accuracy', value: '98%' },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-[#f0f4ff] text-gray-900">
      <header className="flex items-center justify-between border-b border-gray-200 px-6 py-6 md:px-10">
        <div className="flex items-center space-x-3">
          <Image src="/logo-app-check.svg" alt="ContractPlan Logo" width={32} height={32} className="h-8 w-8" />
          <span className="text-xl font-semibold text-gray-800">ContractPlan</span>
        </div>
        <nav className="hidden items-center space-x-4 md:flex">
          <Link className="text-sm font-medium text-gray-600 hover:text-gray-900" href="#features">
            Features
          </Link>
          <Link className="text-sm font-medium text-gray-600 hover:text-gray-900" href="#pricing">
            Pricing
          </Link>
          <Button variant="ghost" asChild>
            <Link href="/sign-in">Sign in</Link>
          </Button>
          <Button asChild>
            <Link href="/app">Launch app</Link>
          </Button>
        </nav>
      </header>

      <section className="px-6 py-24 text-center md:px-10">
        <p className="text-sm font-semibold uppercase tracking-wide text-emerald-600">Built for public impact teams</p>
        <h1 className="mt-4 text-4xl font-bold leading-tight md:text-5xl">From chaos to contract clarity</h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
          ContractPlan keeps every agreement, report, and renewal on track — so you can focus on scaling programs that matter.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Button size="lg" asChild className="transition-transform hover:scale-105">
            <Link href="/app">Launch the app</Link>
          </Button>
          <Button variant="outline" size="lg" asChild className="transition-transform hover:scale-105">
            <Link href="#demo">View demo</Link>
          </Button>
        </div>
        <div className="mt-12 grid gap-6 text-sm text-gray-600 md:grid-cols-3">
          {trustSignals.map((signal) => (
            <div key={signal.label} className="rounded-2xl bg-white/70 p-6 shadow-sm">
              <p className="text-2xl font-semibold text-gray-900">{signal.value}</p>
              <p>{signal.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="features" className="mt-10 px-6 md:px-10">
        <div className="mx-auto max-w-5xl space-y-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900">A command center for every contract</h2>
          <p className="text-gray-600">
            Automate onboarding, manage compliance, and surface risks without juggling spreadsheets or inboxes.
          </p>
        </div>
        <div className="mx-auto mt-12 max-w-6xl">
          <FeaturesGrid />
        </div>
      </section>

      <section className="mt-24 px-6 md:px-10" id="demo">
        <div className="mx-auto max-w-6xl">
          <ScreenshotCarousel images={screenshots} />
        </div>
      </section>

      <section className="mt-24 bg-sky-50 px-6 py-16 md:px-10" id="pricing">
        <div className="mx-auto max-w-5xl space-y-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900">Pricing plans for every team</h2>
          <p className="text-gray-600">
            Start free and upgrade only when you&apos;re ready to unlock advanced automations and reporting.
          </p>
        </div>
        <div className="mx-auto mt-12 max-w-6xl">
          <PricingSection />
        </div>
      </section>

      <section className="px-6 py-16 text-center md:px-10">
        <div className="mx-auto max-w-3xl space-y-6">
          <h2 className="text-3xl font-bold text-gray-900">Ready to make compliance effortless?</h2>
          <p className="text-gray-600">
            Launch a workspace in minutes and keep every contract connected from intake to renewal.
          </p>
          <div className="flex justify-center gap-4">
            <Button size="lg" asChild>
              <Link href="/sign-up">Create your workspace</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/privacy">View our trust commitments</Link>
            </Button>
          </div>
        </div>
      </section>

      <footer className="border-t border-gray-200 py-10 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} ContractPlan Inc. ·{' '}
        <Link href="/privacy" className="underline">
          Privacy
        </Link>{' '}
        ·{' '}
        <Link href="/terms" className="underline">
          Terms
        </Link>
      </footer>
    </main>
  );
}
