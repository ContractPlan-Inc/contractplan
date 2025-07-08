// app/page.tsx
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function Home() {
  const [showDemo, setShowDemo] = useState(false);

  return (
    <main className="min-h-screen bg-gradient-to-b from-indigo-950 via-blue-900 to-slate-900 text-gray-900">
      <section className="max-w-6xl mx-auto px-6 py-24 text-center">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
          Bring order to chaos. <br />
          <span className="text-emerald-400">Smarter workflows start here.</span>
        </h1>
        <p className="text-lg md:text-xl text-sky-200 mb-10">
          ContractPlan helps local governments and nonprofits streamline documentation,
          compliance, and internal reviews—without the busywork.
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
          <button
            onClick={() => setShowDemo(!showDemo)}
            className="bg-emerald-400 text-black px-6 py-3 rounded-2xl text-lg font-semibold shadow hover:scale-105 transition"
          >
            {showDemo ? 'Hide' : '▶️ Walkthrough Demo'}
          </button>
          <Link href="/app">
            <button className="border border-white px-6 py-3 rounded-2xl text-lg hover:bg-white hover:text-black transition">
              Launch App
            </button>
          </Link>
        </div>
      </section>

      {showDemo && (
        <section className="max-w-5xl mx-auto px-6 pb-24 -mt-12">
          <div className="rounded-xl overflow-hidden ring-2 ring-emerald-400 shadow-xl">
            <Image
              src="/media/screenshot-demo.png"
              alt="Demo screenshot"
              width={1200}
              height={720}
              className="w-full"
            />
          </div>
        </section>
      )}

      <section className="bg-slate-800/50 py-16 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-slate-900 p-6 rounded-xl shadow hover:ring-2 hover:ring-emerald-500 transition">
            <h3 className="text-xl font-bold text-emerald-300 mb-2">AI Assistant</h3>
            <p className="text-sky-200">
              Get smart suggestions for compliance, deadlines, and review based on your uploaded documents.
            </p>
          </div>
          <div className="bg-slate-900 p-6 rounded-xl shadow hover:ring-2 hover:ring-emerald-500 transition">
            <h3 className="text-xl font-bold text-emerald-300 mb-2">Instant Onboarding</h3>
            <p className="text-sky-200">
              Upload your org’s policies or start from a template. You’re guided through every step.
            </p>
          </div>
          <div className="bg-slate-900 p-6 rounded-xl shadow hover:ring-2 hover:ring-emerald-500 transition">
            <h3 className="text-xl font-bold text-emerald-300 mb-2">Built for Public Sector</h3>
            <p className="text-sky-200">
              ContractPlan is designed for small teams in government and nonprofit settings.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 text-center bg-slate-950">
        <p className="text-sm text-sky-400 uppercase tracking-widest mb-4">Trusted by mission-driven teams</p>
        <div className="flex flex-wrap justify-center items-center gap-6 grayscale opacity-70">
          <Image src="/media/partner1.png" alt="Partner 1" width={100} height={40} />
          <Image src="/media/partner2.png" alt="Partner 2" width={100} height={40} />
          <Image src="/media/partner3.png" alt="Partner 3" width={100} height={40} />
        </div>
      </section>

      <footer className="py-12 text-center text-sm text-sky-500">
        © {new Date().getFullYear()} ContractPlan Inc. · Empowering small teams to do big things.
      </footer>
    </main>
  );
}

