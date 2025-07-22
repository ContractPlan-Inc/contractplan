import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { ScreenshotCarousel } from '@/components/ScreenshotCarousel';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#f9fafb] to-white text-gray-900">
      <header className="px-6 md:px-10 py-6 flex items-center justify-between border-b">
        <div className="flex items-center space-x-3">
          <Image
            src="/logo-blue-check.svg"
            alt="ContractPlan Logo"
            width={32}
            height={32}
            className="h-8 w-8"
          />
          <span className="text-xl font-semibold text-gray-800">ContractPlan</span>
        </div>
        <nav className="hidden md:flex items-center space-x-4">
          <Button variant="ghost" asChild>
            <Link href="/sign-in">Sign in</Link>
          </Button>
          <Button asChild>
            <Link href="/app">Launch App</Link>
          </Button>
        </nav>
      </header>

      <section className="px-6 md:px-10 py-24 text-center">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          From chaos to clarity
        </h1>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
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
          <ScreenshotCarousel
            images={[
              '/screens/dashboard.png',
              '/screens/contracts.png',
              '/screens/files.png',
            ]}
          />
        </div>
      </section>

      <section className="mt-24 bg-sky-50 py-16 px-6 md:px-10 text-center" id="pricing">
        <h2 className="text-3xl font-bold mb-6">Pricing Plans</h2>
        <p className="text-gray-600 mb-10 max-w-xl mx-auto">
          Start free. Upgrade when you're ready to unlock more power.
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-8">
          <div className="border rounded-xl p-6 shadow bg-white w-full md:w-1/3">
            <h3 className="text-xl font-semibold mb-2">Free</h3>
            <p className="text-gray-600 mb-4">For individuals and teams starting out</p>
            <p className="text-2xl font-bold mb-6">$0/month</p>
            <Button asChild>
              <Link href="/sign-up">Start for Free</Link>
            </Button>
          </div>
          <div className="border rounded-xl p-6 shadow bg-white w-full md:w-1/3">
            <h3 className="text-xl font-semibold mb-2">Pro</h3>
            <p className="text-gray-600 mb-4">Unlock advanced tools and AI features</p>
            <p className="text-2xl font-bold mb-6">$9/month</p>
            <Button asChild>
              <Link href="/sign-up">Upgrade to Pro</Link>
            </Button>
          </div>
          <div className="border rounded-xl p-6 shadow bg-white w-full md:w-1/3">
            <h3 className="text-xl font-semibold mb-2">NEXTSuite</h3>
            <p className="text-gray-600 mb-4">For organizations ready for full automation</p>
            <p className="text-2xl font-bold mb-6">$19/month</p>
            <Button asChild>
              <Link href="/sign-up">Explore Suite</Link>
            </Button>
          </div>
        </div>
      </section>

      <footer className="text-center text-sm text-gray-500 py-10">
        Built to make a difference by ContractPlan Inc.
      </footer>
    </main>
  );
}

