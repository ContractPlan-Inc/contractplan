'use client';

import { Button } from '@/components/ui/button';
import Image from 'next/image';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-900 to-green-200 text-white p-8">
      <section className="max-w-5xl mx-auto text-center space-y-6">
        <h1 className="text-5xl font-bold">Automate Smarter. Eliminate Chaos.</h1>
        <p className="text-xl text-white/90">ContractPlan gives you intelligent templates, real-time alerts, and built-in oversight to manage contracts, bids, and deadlines—without drowning in admin work.</p>
        <div className="mt-6 space-x-4">
          <Button>Get Started Free</Button>
          <Button variant="outline">See Pricing</Button>
        </div>
        <Image
          src="/hero-screenshot.png"
          alt="App Screenshot"
          width={1000}
          height={600}
          className="mx-auto mt-10 rounded-xl shadow-xl"
        />
      </section>
    </main>
  );
}
