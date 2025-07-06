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
      <section className="max-w-7xl mx-auto px-6 pt-20 pb-16 text-center relative">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-slate-900 mb-4"
        >
          Take control of your contracts, grants, and compliance
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="w-full flex justify-center mt-4"
        >
          <Image
            src="/screens/hero-chaos-to-order.png"
            alt="ContractPlan automation illustration"
            width={935} // 15% smaller than original 1100
            height={561} // scaled proportionally from 660
            className="object-contain rounded-xl shadow-sm"
            priority
            unoptimized
          />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-slate-900 mt-6"
        >
          Make room for the work that matters most.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="text-xl md:text-2xl text-slate-700 mt-6"
        >
          Built for local governments and nonprofits. Intuitive, compliant, actually helpful.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="mt-6"
        >
          <Link
            href="/app/demo"
            className="inline-block bg-pacific-blue hover:bg-blue-700 text-white px-6 py-3 rounded-md text-lg shadow-sm"
          >
            🎯 See It In Action
          </Link>
        </motion.div>
      </section>

      {/* Placeholder until app is fully built */}
      <section className="py-20 text-center text-slate-500">
        <p className="text-xl">The full ContractPlan application is being built now with real mock data and demo capabilities. Stay tuned.</p>
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

