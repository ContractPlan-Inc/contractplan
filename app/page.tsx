'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function Home() {
  const [showDemoCTA, setShowDemoCTA] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowDemoCTA(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="min-h-screen bg-white text-slate-800 relative">
      <header className="flex items-center gap-3 px-6 pt-6">
        <div className="flex items-center gap-2">
          <Image src="/logo_128x128.png" alt="ContractPlan Logo" width={48} height={48} priority unoptimized />
          <span className="text-2xl font-semibold text-slate-900 tracking-tight">ContractPlan</span>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 pt-16 pb-28 text-center relative">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-slate-900 mb-6"
        >
          Simplify contracts, grants, workflows & compliance
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="w-full flex justify-center"
        >
          <Image
            src="/screens/chaos-to-order-man-machine.png"
            alt="Automation in action"
            width={900}
            height={520}
            className="object-contain"
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-lg text-slate-600 mt-8"
        >
          Make room for the work that matters most.
        </motion.p>

        <p className="text-base text-slate-500 mt-4">
          Built for local governments and nonprofits. Intuitive. Compliant. Actually helpful.
        </p>
      </section>

      {/* Screenshot Section */}
      <section className="max-w-6xl mx-auto px-6 pb-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {['approvals', 'grants', 'workflows', 'compliance'].map((name) => (
          <div key={name} className="text-center">
            <Image
              src={`/screens/screenshot-${name}.png`}
              alt={`${name} screenshot`}
              width={400}
              height={260}
              className="rounded-xl shadow-sm border border-slate-200 object-cover"
            />
            <p className="mt-2 text-sm capitalize text-slate-600">{name}</p>
          </div>
        ))}
      </section>

      {/* AI Assistant Callout */}
      <section className="bg-gradient-to-r from-sky-50 to-emerald-50 py-12">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-2xl md:text-3xl font-semibold text-slate-800 mb-4">
            Meet your AI Assistant
          </h2>
          <p className="text-slate-600 mb-6">
            Powered by NEXT AI, our assistant helps you write, review, and route contracts in seconds.
          </p>
          {showDemoCTA && (
            <Link
              href="/app/demo"
              className="inline-block bg-pacific-blue hover:bg-blue-700 text-white px-6 py-3 rounded-md text-lg"
            >
              🎯 Try the Demo Walkthrough
            </Link>
          )}
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-sky-50 py-16">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10 text-center">
          {[
            {
              icon: '📝',
              title: 'Manage contracts and grants',
              desc: 'Track all your agreements in one place',
            },
            {
              icon: '⚙️',
              title: 'Automate workflows',
              desc: 'Streamline processes with powerful automation',
            },
            {
              icon: '✅',
              title: 'Stay on top of approvals',
              desc: 'Keep your team accountable',
            },
            {
              icon: '📈',
              title: 'Get real-time insights',
              desc: 'Know everything from progress to compliance',
            },
          ].map(({ icon, title, desc }) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="space-y-3"
            >
              <div className="text-4xl">{icon}</div>
              <h3 className="text-xl font-semibold text-slate-800">{title}</h3>
              <p className="text-slate-600 text-sm">{desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-semibold text-slate-800 mb-10">Trusted by modern teams</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Ben Hollana',
                quote: '“It’s a must-have contract management tool!”',
              },
              {
                name: 'Malavika Dhar',
                quote: '“The automation features save us a huge amount of time.”',
              },
              {
                name: 'Fraser Shaw',
                quote: '“We reduced our contract approval time by 52%.“',
              },
            ].map(({ name, quote }) => (
              <motion.div
                key={name}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-sky-50 p-6 rounded-xl shadow-sm border border-slate-200 text-left"
              >
                <p className="text-slate-800 italic mb-4">{quote}</p>
                <p className="text-sm text-slate-500">— {name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-100 text-slate-500 text-sm text-center py-8">
        <div className="text-slate-500 text-sm mb-4">
          Powered by ContractPlan · Salesforce · Stripe · Clerk · Crisp
        </div>
        <div className="text-xs text-slate-400">
          SalesBot and OnboardingBot active
        </div>
        <p className="mt-2">© {new Date().getFullYear()} ContractPlan Inc. All rights reserved.</p>
      </footer>
    </main>
  );
}

