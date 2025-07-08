'use client'

import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <main className="bg-white text-gray-900 min-h-screen flex flex-col items-center px-6 pb-20">
      {/* Hero */}
      <section className="w-full max-w-6xl text-center mt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center mb-8"
        >
          <Image
            src="/logo.svg"
            alt="ContractPlan Logo"
            width={48}
            height={48}
            className="mr-3"
          />
          <h1 className="text-4xl font-bold tracking-tight text-indigo-900">
            ContractPlan
          </h1>
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-2xl sm:text-3xl font-medium text-gray-700 max-w-3xl mx-auto"
        >
          From chaos to clarity. Empower your team with contract automation built for local government and nonprofits.
        </motion.h2>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Button className="bg-emerald-600 text-white hover:bg-emerald-700 px-6 py-3 text-lg rounded-xl">
            Try the Live Demo
          </Button>
          <Button variant="outline" className="px-6 py-3 text-lg rounded-xl">
            View AI Walkthrough
          </Button>
        </div>
      </section>

      {/* Animated CTA */}
      <section className="mt-20 w-full max-w-5xl text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="rounded-2xl bg-sky-100 p-6 shadow-md"
        >
          <h3 className="text-xl font-semibold mb-2 text-sky-900">
            Your Assistant is Ready
          </h3>
          <p className="text-sky-800 mb-4">
            Our built-in AI helps draft, validate, and streamline every document.
          </p>
          <Image
            src="/screens/ai-assist.png"
            alt="AI Assist"
            width={900}
            height={480}
            className="rounded-xl border shadow-sm mx-auto"
          />
        </motion.div>
      </section>

      {/* Screenshot Carousel */}
      <section className="mt-24 w-full max-w-6xl text-center">
        <h3 className="text-2xl font-semibold mb-6 text-gray-800">
          Real Results, Real Interface
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {['screen1.png', 'screen2.png', 'screen3.png'].map((src, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="rounded-xl overflow-hidden border shadow-sm bg-gray-50"
            >
              <Image
                src={`/screens/${src}`}
                alt={`Screenshot ${i + 1}`}
                width={400}
                height={250}
                className="object-cover w-full h-auto"
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Integrations */}
      <section className="mt-24 w-full max-w-6xl text-center">
        <h3 className="text-xl font-semibold text-gray-700 mb-4">Built-In Integrations</h3>
        <div className="flex justify-center items-center flex-wrap gap-6 text-gray-500 text-sm">
          <span>✔️ Stripe</span>
          <span>✔️ Salesforce</span>
          <span>✔️ Clerk</span>
          <span>✔️ Posthog</span>
          <span>✔️ Crisp</span>
          <span>✔️ Sentry</span>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-24 text-sm text-gray-400 text-center">
        © {new Date().getFullYear()} ContractPlan Inc. All rights reserved.
      </footer>
    </main>
  )
}

