import Image from 'next/image'
import Link from 'next/link'

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-midnight to-pacific px-6 py-24">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-5xl font-bold leading-tight mb-6 tracking-tight">
          Bring Order to Contract Chaos
        </h1>
        <p className="text-lg text-skyMist mb-10 max-w-3xl mx-auto">
          ContractPlan streamlines workflows for local governments and nonprofits, saving time, reducing errors, and restoring trust.
        </p>

        <div className="flex justify-center gap-4 mb-12">
          <Link href="/app">
            <button className="bg-emerald hover:bg-emerald-dark text-white font-semibold px-6 py-3 rounded-xl shadow-md transition">
              Launch Demo
            </button>
          </Link>
          <Link href="/pricing">
            <button className="bg-white text-midnight font-semibold px-6 py-3 rounded-xl border border-coolGray shadow-sm hover:bg-coolGray/10 transition">
              View Pricing
            </button>
          </Link>
        </div>

        {/* Screenshot carousel */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-center justify-center max-w-5xl mx-auto">
          <Image
            src="/screenshots/org-overview.png"
            alt="ContractPlan organization overview"
            width={600}
            height={400}
            className="rounded-xl shadow-lg"
          />
          <Image
            src="/screenshots/editor-view.png"
            alt="Document editor"
            width={600}
            height={400}
            className="rounded-xl shadow-lg"
          />
          <Image
            src="/screenshots/ai-assist.png"
            alt="AI assistant suggestions"
            width={600}
            height={400}
            className="rounded-xl shadow-lg"
          />
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

