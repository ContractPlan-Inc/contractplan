import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-midnight to-pacific px-6 py-12">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-5xl font-bold text-white leading-tight mb-6">
          Bring Order to Contract Chaos
        </h1>
        <p className="text-lg text-skyMist mb-10 max-w-3xl mx-auto">
          ContractPlan streamlines workflows for local governments and nonprofits, saving time, reducing errors, and restoring trust.
        </p>
        <div className="flex justify-center gap-6 mb-16">
          <Link
            href="/app"
            className="px-6 py-3 bg-emerald text-white font-semibold rounded-xl shadow-md hover:shadow-lg"
          >
            Launch Demo
          </Link>
          <Link
            href="/pricing"
            className="px-6 py-3 border border-skyMist text-skyMist font-semibold rounded-xl hover:bg-white/10"
          >
            View Pricing
          </Link>
        </div>

        {/* Screenshot Carousel */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {[
            "dashboard-screenshot.png",
            "document-screenshot.png",
            "workflow-screenshot.png",
          ].map((src, idx) => (
            <div
              key={idx}
              className="bg-white/5 rounded-2xl p-4 shadow-inner backdrop-blur"
            >
              <Image
                src={`/media/${src}`}
                alt="App screenshot"
                width={600}
                height={400}
                className="rounded-xl"
              />
            </div>
          ))}
        </div>

        {/* Animation embed */}
        <div className="mt-12">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="rounded-2xl shadow-lg w-full max-w-3xl mx-auto"
          >
            <source src="/media/chaos-to-order.mp4" type="video/mp4" />
          </video>
        </div>

        {/* AI Assistant Callout */}
        <div className="mt-16 text-center text-lg text-coolGray max-w-xl mx-auto">
          <p>
            Need help? Our built-in AI Assistant is available 24/7 to guide you
            through contracts, workflows, and integrations.
          </p>
        </div>
      </div>
    </main>
  );
}

