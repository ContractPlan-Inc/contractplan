// ✅ V7.5: Live ContractPlan Homepage with real content

import Image from 'next/image'
import Link from 'next/link'

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-midnight to-pacific px-6 py-16 text-white">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-5xl font-bold leading-tight mb-6 tracking-tight">
          Bring Order to Contract Chaos
        </h1>
        <p className="text-lg text-skyMist mb-10 max-w-3xl mx-auto">
          ContractPlan streamlines workflows for local governments and nonprofits. Automate approvals, standardize documents, and accelerate execution.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
          <Link href="/app" className="bg-emerald hover:bg-emerald/90 text-white font-semibold py-3 px-6 rounded-2xl transition">
            Launch App
          </Link>
          <Link href="/demo" className="border border-skyMist text-skyMist hover:text-white hover:border-white py-3 px-6 rounded-2xl transition">
            See Demo
          </Link>
        </div>

        {/* Animation embed */}
        <div className="mt-12">
          <video autoPlay loop muted playsInline className="rounded-2xl shadow-lg w-full max-w-3xl mx-auto">
            <source src="/media/chaos-to-order.mp4" type="video/mp4" />
          </video>
        </div>

        {/* AI Assistant Callout */}
        <div className="mt-16 text-center text-lg text-coolGray max-w-xl mx-auto">
          <p>Need help? Our built-in AI Assistant is available 24/7 to guide you through contracts, workflows, and integrations.</p>
        </div>
      </div>
    </main>
  )
}

