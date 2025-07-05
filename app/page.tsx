<'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white text-gray-900">
      {/* Hero Section */}
      <section className="text-center py-24 px-6">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-6xl font-bold mb-6"
        >
          Empowering Local Government & Nonprofits
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-lg md:text-xl max-w-2xl mx-auto mb-8"
        >
          ContractPlan helps you organize contracts, track deadlines, and demonstrate accountability with AI-powered workflows and real-time collaboration.
        </motion.p>
        <div className="flex justify-center gap-4">
          <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl">
            Launch Demo
          </Button>
          <Button className="px-6 py-3 rounded-xl border border-gray-400">
            Learn More
          </Button>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-white text-center">
        <h2 className="text-3xl font-bold mb-4">Simple Pricing</h2>
        <p className="mb-8 text-gray-600">Start free, upgrade as you grow. No hidden fees.</p>
        <div className="flex justify-center gap-8 flex-wrap">
          {[{ tier: 'Free', price: '$0', desc: 'Get started with essential features' }, { tier: 'Pro', price: '$9/mo', desc: 'Unlock full workflows and automations' }, { tier: 'Teams', price: '$19/mo', desc: 'Collaborate with your whole org' }].map(({ tier, price, desc }) => (
            <div key={tier} className="p-6 w-64 rounded-2xl border border-gray-200 shadow-sm bg-white">
              <h3 className="text-2xl font-semibold text-blue-700">{tier}</h3>
              <p className="mt-2 text-sm text-gray-600">{desc}</p>
              <p className="text-3xl font-bold my-4">{price}</p>
              <Button className="w-full bg-blue-600 text-white hover:bg-blue-700 py-2 rounded-lg">Select</Button>
            </div>
          ))}
        </div>
      </section>

      {/* NEXTSuite CTA */}
      <section className="bg-purple-50 py-16 px-6 text-center">
        <h2 className="text-3xl font-bold text-purple-900 mb-4">Step Into the NEXTSuite</h2>
        <p className="text-md text-purple-700 max-w-xl mx-auto mb-6">
          Elite users unlock tools like AccordIQ, SummitIQ, and more. Seamless integrations, zero friction.
        </p>
        <Button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-xl">
          Explore NEXTSuite
        </Button>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-6 bg-white">
        <h2 className="text-3xl font-bold text-center mb-8">What Our Users Say</h2>
        <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
          {["ContractPlan gave us confidence in our audit.", "The collaboration features saved us hours weekly.", "We finally have a grip on our grant paperwork."]
            .map((quote, i) => (
              <blockquote key={i} className="p-6 border-l-4 border-blue-600 bg-blue-50">
                <p className="text-gray-700 italic">“{quote}”</p>
              </blockquote>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center text-sm text-gray-500 py-10 border-t border-gray-200">
        © 2025 ContractPlan Inc. · <Link href="/privacy" className="underline">Privacy</Link> · <Link href="/terms" className="underline">Terms</Link>
      </footer>
    </main>
  );
}
>
