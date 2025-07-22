// V12 homepage rebuild — vault-approved visuals, layout, tone, and functionality
// Do not regress visual identity or copy. Logo, layout, and tone are final per Vault.

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { ScreenshotCarousel } from '@/components/ScreenshotCarousel';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#f8fafc] to-[#e6f0eb] text-gray-800">
      <header className="flex items-center justify-between px-6 py-4 md:px-10">
        <div className="flex items-center space-x-3">
          <Image src="/logo.svg" alt="ContractPlan Logo" width={32} height={32} />
          <span className="text-xl font-semibold tracking-tight text-gray-900">ContractPlan</span>
        </div>
        <nav className="hidden md:flex space-x-6 text-sm">
          <Link href="#pricing" className="hover:text-emerald-600">Pricing</Link>
          <Link href="/app" className="hover:text-emerald-600">App</Link>
        </nav>
        <div className="hidden md:flex items-center space-x-4">
          <Button variant="ghost" asChild>
            <Link href="/sign-in">Sign in</Link>
          </Button>
          <Button asChild>
            <Link href="/sign-up">Start free</Link>
          </Button>
        </div>
      </header>

      <section className="px-6 md:px-10 mt-12 md:mt-20 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-gray-900 max-w-4xl mx-auto">
          From chaos to order. <br />
          <span className="text-emerald-600">Contract management, streamlined.</span>
        </h1>
        <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
          ContractPlan turns messy folders, missed deadlines, and forgotten obligations into clarity. Built for teams that care.
        </p>
        <div className="mt-8 flex justify-center space-x-4">
          <Button className="animate-pulse" size="lg" asChild>
            <Link href="/app">View demo</Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link href="#pricing">See pricing</Link>
          </Button>
        </div>
      </section>

      <section className="mt-20">
        <ScreenshotCarousel images={["/screens/dashboard.png", "/screens/contracts.png", "/screens/files.png"]} />
      </section>

      <section id="pricing" className="mt-24 bg-white py-16 px-6 md:px-10 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Simple pricing for every team</h2>
        <p className="mt-4 text-gray-600 max-w-xl mx-auto">
          Start for free, grow with us. Upgrade anytime.
        </p>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div className="rounded-xl border p-6">
            <h3 className="text-lg font-semibold text-gray-800">Starter</h3>
            <p className="text-4xl font-bold text-emerald-600">$0</p>
            <p className="mt-2 text-sm text-gray-500">Unlimited contracts, 1 user</p>
          </div>
          <div className="rounded-xl border p-6 border-emerald-600 shadow-lg">
            <h3 className="text-lg font-semibold text-gray-800">Pro</h3>
            <p className="text-4xl font-bold text-emerald-600">$9</p>
            <p className="mt-2 text-sm text-gray-500">Everything in Starter + AI Assist + file repo</p>
          </div>
          <div className="rounded-xl border p-6">
            <h3 className="text-lg font-semibold text-gray-800">NEXTSuite</h3>
            <p className="text-4xl font-bold text-emerald-600">$19</p>
            <p className="mt-2 text-sm text-gray-500">All features + org dashboards, timelines, & integrations</p>
          </div>
        </div>
      </section>

      <footer className="mt-24 mb-8 text-center text-sm text-gray-500">
        Built to make a difference by ContractPlan Inc.
      </footer>
    </main>
  );
}

