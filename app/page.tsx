'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <section className="text-center py-24 px-6 bg-gradient-to-b from-blue-50 to-white">
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
    </main>
  );
}
