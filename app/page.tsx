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
          className="text-5xl md:text-6xl font-extrabold text-slate-900 mb-6 leading-tight"
        >
          Take control of your contracts, grants, and compliance
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-xl md:text-2xl text-slate-700 mb-8"
        >
          Make room for the work that matters most.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="w-full flex justify-center mb-10"
        >
          <Image
            src="/screens/hero-chaos-to-order.png"
            alt="Man and Machine Automation Illustration"
            width={1000}
            height={600}
            className="object-cover rounded-none"
            priority
            unoptimized
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mt-2"
        >
          <p className="text-md md:text-lg text-slate-600">
            Built for local governments and nonprofits. Intuitive, compliant, actually helpful.
          </p>
        </motion.div>

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

      {/* Remaining sections preserved as-is */}

      {/* Screenshot Section */}
      <section className="max-w-6xl mx-auto px-6 pb-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {["approvals", "grants", "workflows", "compliance"].map((name) => (
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

      {/* ... remaining sections unchanged ... */}
    </main>
  );
}

