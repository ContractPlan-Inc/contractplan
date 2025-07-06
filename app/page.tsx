// ✅ V7.5 Conflict-Resolved app/page.tsx

import Image from 'next/image'
import Link from 'next/link'

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-midnight to-pacific px-6 py-12 text-white">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-5xl font-bold leading-tight mb-6 tracking-tight">
          Bring Order to Contract Chaos
        </h1>
        <p className="text-lg text-skyMist mb-10 max-w-3xl mx-auto">
          ContractPlan streamlines workflows for local governments and nonprofits. Designed for clarity, accountability, and results — powered by AI.
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <Link href="/app/demo">
            <button className="bg-emerald text-white px-6 py-3 rounded-2xl font-semibold hover:bg-emerald/80 transition">
              Try the Demo
            </button>
          </Link>
          <Link href="/pricing">
            <button className="border border-white text-white px-6 py-3 rounded-2xl font-semibold hover:bg-white hover:text-midnight transition">
              View Pricing
            </button>
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
