'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

const MotionMain = motion.main
const MotionDiv = motion.div
const MotionSection = motion.section
const MotionSpan = motion.span

export default function HomePage() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <MotionMain
      className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 text-gray-900 flex flex-col"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <MotionSection className="py-20 px-6 text-center">
        <h1 className="text-4xl font-bold sm:text-6xl leading-tight">
          Empowering <span className="text-blue-600">Local Government</span> &{' '}
          <span className="text-green-600">Nonprofits</span>
        </h1>
        <p className="mt-6 text-lg text-gray-700 max-w-2xl mx-auto">
          ContractPlan helps you organize your contracts, track deadlines, and
          demonstrate accountability with AI-powered workflows and real-time
          collaboration.
        </p>
        <div className="mt-10 flex justify-center gap-4">
          <button className="px-6 py-3 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition">
            Get Started Free
          </button>
          <button className="px-6 py-3 rounded-lg bg-gray-200 text-gray-800 font-semibold hover:bg-gray-300 transition">
            Demo Tour
          </button>
        </div>
      </MotionSection>

      <MotionDiv className="px-6">
        <Image
          src="/hero-screenshot.png"
          alt="App Screenshot"
          width={1000}
          height={600}
          className="mx-auto mt-10 rounded-xl shadow-xl"
        />
      </MotionDiv>
    </MotionMain>
  )
}

