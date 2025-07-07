import Image from 'next/image'
import Link from 'next/link'

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-midnight to-pacific text-white px-6 py-20">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-5xl font-bold leading-tight mb-6 tracking-tight">
          Bring Order to Contract Chaos
        </h1>
        <p className="text-lg text-skyMist mb-10 max-w-3xl mx-auto">
          ContractPlan streamlines workflows for local governments and nonprofits, saving time, reducing errors, and restoring trust.
        </p>

        <div className="flex justify-center gap-4 mb-12">
          <Link href="/app" className="px-6 py-3 rounded-xl bg-emerald text-black font-semibold hover:opacity-90 shadow-lg">
            Launch Demo
          </Link>
          <Link href="/#pricing" className="px-6 py-3 rounded-xl border border-white text-white hover:bg-white hover:text-black transition shadow">
            View Pricing
          </Link>
        </div>

        {/* Screenshots carousel */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-16">
          <Image
            src="/media/dashboard-screenshot.png"
            alt="Dashboard"
            width={1000}
            height={600}
            unoptimized
            className="rounded-xl shadow-xl"
          />
          <Image
            src="/media/document-screenshot.png"
            alt="Document Editor"
            width={1000}
            height={600}
            unoptimized
            className="rounded-xl shadow-xl"
          />
          <Image
            src="/media/workflow-screenshot.png"
            alt="Workflow View"
            width={1000}
            height={600}
            unoptimized
            className="rounded-xl shadow-xl"
          />
        </div>

        {/* Animation */}
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

