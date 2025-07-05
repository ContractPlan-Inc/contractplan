'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-800">
      <header className="flex items-center gap-4 px-6 pt-6">
        <div className="flex items-center gap-3">
          <Image src="/logo_128x128.png" alt="ContractPlan Logo" width={48} height={48} />
          <span className="text-2xl font-semibold text-slate-900 tracking-tight">ContractPlan</span>
        </div>
      </header>
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center justify-between gap-10">
        <div className="flex-1 space-y-6">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold leading-tight text-slate-900"
          >
            Take control of your contracts, grants, and workflows
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-lg text-slate-600 max-w-xl"
          >
            Simplify approvals, stay compliant, and automate the work you shouldn’t have to do.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ delay: 0.2, duration: 0.6 }}
            className="flex gap-4 items-center"
          >
            <Link
              href="/app"
              className="inline-block bg-emerald-500 hover:bg-emerald-600 text-white text-lg px-6 py-3 rounded-md"
            >
              Get Started
            </Link>
            <span className="text-slate-500 text-sm">Free to use</span>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="flex-1"
        >
          <Image
            src="/screens/approvals.png"
            alt="Approvals UI"
            width={640}
            height={480}
            className="rounded-xl shadow-xl border border-slate-200"
          />
        </motion.div>
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
          <Link
            href="/app/demo"
            className="inline-block bg-pacific-blue hover:bg-blue-700 text-white px-6 py-3 rounded-md text-lg"
          >
            Try the Demo Walkthrough
          </Link>
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
                quote: '“We reduced our contract approval time by 52%.”',
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
        </div>
        <div className="text-xs text-slate-400">
          SalesBot and OnboardingBot active
        </div>
        <p className="mt-2">© {new Date().getFullYear()} ContractPlan Inc. All rights reserved.</p>
      </footer>
    </main>
  );
}

