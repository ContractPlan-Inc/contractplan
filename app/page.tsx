// app/page.tsx
'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Home() {
  const [showDemo, setShowDemo] = useState(false);

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#1A2238] via-[#283044] to-[#1A2238] text-white px-6 py-16">
      <div className="max-w-6xl mx-auto space-y-20">
        {/* Hero */}
        <section className="text-center space-y-6">
          <h1 className="text-5xl font-bold leading-tight">
            Finally, clarity in contract management.
          </h1>
          <p className="text-lg text-gray-300">
            ContractPlan helps public sector teams track milestones, ensure compliance, and stay audit-ready — all in one simple workspace.
          </p>
          <div className="space-x-4">
            <Link
              href="/app"
              className="inline-block bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-6 py-3 rounded-lg shadow"
            >
              Launch App
            </Link>
            <button
              onClick={() => setShowDemo(!showDemo)}
              className="inline-block border border-gray-400 hover:border-white text-white font-semibold px-6 py-3 rounded-lg"
            >
              {showDemo ? 'Hide Walkthrough' : 'See Walkthrough'}
            </button>
          </div>
        </section>

        {/* Demo Walkthrough */}
        {showDemo && (
          <section className="bg-white text-black p-6 rounded-lg shadow-md space-y-4">
            <h2 className="text-2xl font-bold">AI Demo Walkthrough</h2>
            <p>
              Meet your assistant: “Contract #2045 is nearing renewal. Would you like to send a notice?”
            </p>
            <p>
              Auto-detects late reports, compliance gaps, and budget flags — and helps your team stay ahead.
            </p>
            <Link href="/app/ai/assistant" className="text-blue-600 underline">
              Go to AI Assistant
            </Link>
          </section>
        )}

        {/* Logos / Trust */}
        <section className="text-center space-y-4">
          <p className="text-gray-400 uppercase tracking-widest">Trusted by public impact teams</p>
          <div className="flex justify-center gap-10 opacity-70">
            <span>🏛️ Acme County</span>
            <span>🏙️ Metro Services</span>
            <span>💼 LocalWorks</span>
          </div>
        </section>

        {/* Screenshot */}
        <section className="text-center">
          <img
            src="/screenshots/dashboard.png"
            alt="ContractPlan dashboard"
            className="rounded-xl shadow-lg border border-white/10 mx-auto w-full max-w-4xl"
          />
        </section>

        {/* Footer */}
        <footer className="text-center text-sm text-gray-400">
          ContractPlan Inc. — Empowering transparency in public contracting.
        </footer>
      </div>
    </main>
  );
}

