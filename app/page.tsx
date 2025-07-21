'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const screenshots = [
  '/media/screenshots/screen1.png',
  '/media/screenshots/screen2.png',
  '/media/screenshots/screen3.png',
];

export default function Page() {
  const [index, setIndex] = useState(0);
  const next = () => setIndex((index + 1) % screenshots.length);
  const prev = () => setIndex((index - 1 + screenshots.length) % screenshots.length);

  return (
    <main className="bg-white text-[#0b1120] min-h-screen font-sans overflow-x-hidden">
      {/* Header */}
      <header className="sticky top-0 z-50 flex justify-between items-center px-6 py-4 bg-white/80 backdrop-blur shadow-sm">
        <div className="flex items-center gap-2">
          <Image src="/logo.svg" alt="ContractPlan Logo" width={32} height={32} className="rounded" />
          <span className="text-xl font-bold">ContractPlan</span>
        </div>
        <nav className="hidden md:flex gap-6 text-sm">
          <a href="#features" className="hover:underline">Features</a>
          <a href="#pricing" className="hover:underline">Pricing</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </nav>
        <Link href="/app" className="bg-emerald-500 hover:bg-emerald-600 text-white px-5 py-2 rounded-md text-sm font-medium shadow">
          Get Started
        </Link>
      </header>

      {/* Hero */}
      <section className="text-center px-6 py-24">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl sm:text-6xl font-extrabold mb-6"
        >
          From chaos to order
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-xl text-gray-600 max-w-2xl mx-auto mb-10"
        >
          ContractPlan organizes, tracks and automates every contract so you can focus on impact.
        </motion.p>
        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          <Button onClick={() => window.location.href='/app'} className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-3 rounded-xl text-lg">
            Try Free
          </Button>
          <Button variant="outline" className="px-8 py-3 rounded-xl" onClick={() => document.getElementById('carousel')?.scrollIntoView({ behavior: 'smooth' })}>
            View Demo
          </Button>
        </div>
        <div id="carousel" className="relative w-full max-w-4xl mx-auto border border-gray-200 rounded-xl overflow-hidden shadow-xl">
          <img src={screenshots[index]} alt={`screenshot ${index + 1}`} className="w-full object-cover" />
          <div className="absolute top-1/2 left-0 right-0 flex justify-between px-4 -translate-y-1/2">
            <button onClick={prev} className="bg-white text-[#0b1120] px-3 py-1 rounded-full shadow">‹</button>
            <button onClick={next} className="bg-white text-[#0b1120] px-3 py-1 rounded-full shadow">›</button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="bg-gray-50 py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          {[
            ['Visual Workflows', 'Drag-and-drop flows keep everyone aligned from draft to renewal.', '/screens/screenshot-workflows.png'],
            ['AI Compliance', 'Automated checks flag issues before they become problems.', '/screens/screenshot-compliance.png'],
            ['Grant Tracking', 'Monitor funding milestones and performance at a glance.', '/screens/screenshot-grants.png'],
          ].map(([title, desc, img], i) => (
            <div key={i} className="text-center bg-white p-6 rounded-xl shadow">
              <Image src={img as string} alt="" width={300} height={200} className="mx-auto mb-4 rounded" />
              <h3 className="text-lg font-semibold mb-2">{title}</h3>
              <p className="text-gray-600 text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-6">
        <h2 className="text-center text-3xl font-bold mb-10">What users say</h2>
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          {[
            ['https://i.pravatar.cc/60?img=1', 'ContractPlan modernized our workflows and saved countless hours.', 'Operations Director, CityGovConnect'],
            ['https://i.pravatar.cc/60?img=8', 'Clear visibility into grants has been a game changer for us.', 'Claire M., CommunityBridge'],
          ].map(([img, quote, role], i) => (
            <div key={i} className="flex gap-4 items-start">
              <img src={img as string} alt="Avatar" className="w-12 h-12 rounded-full" />
              <blockquote className="text-gray-700 text-sm">
                “{quote}”
                <footer className="mt-2 text-sm text-gray-500">— {role}</footer>
              </blockquote>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="bg-gradient-to-r from-emerald-500 to-blue-500 text-white py-20 px-6">
        <h2 className="text-center text-3xl font-bold mb-10">Plans & Pricing</h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            ['Free', '$0/mo', '1 project and community support'],
            ['Pro', '$9/mo', 'Smart templates and reporting'],
            ['Business', '$19/mo', 'Priority onboarding and integrations'],
          ].map(([tier, price, desc], i) => (
            <div key={i} className={`bg-white text-[#0b1120] rounded-2xl p-6 text-center shadow-lg ${tier === 'Pro' ? 'border-4 border-emerald-500 scale-105' : ''}`}>
              <h3 className="text-2xl font-semibold">{tier}</h3>
              <p className="mt-2 text-sm">{desc}</p>
              <p className="text-3xl font-bold my-4">{price}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="bg-gray-100 text-center py-16 px-6">
        <h2 className="text-3xl font-bold mb-4">Ready to get started?</h2>
        <p className="text-gray-700 mb-6">Join organizations using ContractPlan to manage contracts effortlessly.</p>
        <Button onClick={() => window.location.href='/app'} className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-3 rounded-xl text-lg">
          Start for Free
        </Button>
      </section>

      <footer className="text-center text-sm text-gray-500 py-10 border-t border-gray-200">
        © 2025 ContractPlan Inc.
      </footer>
    </main>
  );
}

