'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <section className="text-center py-24 px-6 bg-gradient-to-b from-blue-50 to-white">
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-6xl font-bold mb-6"
        >
          Empowering Local Government & Nonprofits
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-lg md:text-xl max-w-2xl mx-auto mb-8"
        >
          ContractPlan helps you organize your contracts, track deadlines, and demonstrate accountability with AI-powered workflows and real-time collaboration.
        </motion.p>
        <div className="flex justify-center gap-4">
          <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl">
            Launch Demo
          </Button>
          <Button variant="outline" className="px-6 py-3 rounded-xl">
            Learn More
          </Button>
        </div>
      </section>

      <section className="bg-purple-50 py-16 px-6 text-center">
        <h2 className="text-3xl font-bold text-purple-900 mb-4">Step Into the NEXTSuite</h2>
        <p className="text-md text-purple-700 max-w-xl mx-auto mb-6">
          Elite users unlock tools like AccordIQ, SummitIQ, and more. Seamless integrations, zero friction.
        </p>
        <Button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-xl">
          Explore NEXTSuite
        </Button>
      </section>

      <footer className="text-center text-sm text-gray-500 py-10 border-t border-gray-200">
        © 2025 ContractPlan Inc. · <Link href="/privacy" className="underline">Privacy</Link> · <Link href="/terms" className="underline">Terms</Link>
      </footer>
    </main>
  );
}
