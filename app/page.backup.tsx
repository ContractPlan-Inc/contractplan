import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function HomePage() {
  return (
    <main className="bg-gradient-to-br from-blue-50 to-green-100 text-gray-900 min-h-screen relative overflow-hidden font-sans">
      {/* Decorative Gradient Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.1),_transparent)] pointer-events-none"></div>

      {/* Header */}
      <header className="sticky top-0 z-50 flex justify-between items-center px-6 py-4 bg-white/80 backdrop-blur shadow-sm">
        <div className="flex items-center gap-2">
          <Image src="/logo.svg" alt="ContractPlan Logo" width={40} height={40} className="rounded" />
          <span className="text-2xl font-bold text-blue-800 tracking-tight">ContractPlan</span>
        </div>
        <a href="/app" className="bg-blue-700 text-white px-6 py-2 rounded-xl font-medium shadow hover:bg-blue-800 transition">Start for Free</a>
      </header>

      {/* Hero Section */}
      <section className="text-center py-24 px-6 relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-6xl sm:text-7xl font-extrabold text-blue-900 leading-tight mb-6"
        >
          Clarity from Complexity
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-2xl max-w-2xl mx-auto text-gray-700"
        >
          ContractPlan helps local governments and nonprofits automate documents, onboard faster, and scale impact.
        </motion.p>
        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
          <a href="/app" className="bg-blue-700 text-white px-8 py-4 rounded-2xl text-lg font-semibold shadow hover:bg-blue-800 transition">Launch App</a>
          <a href="#demo" className="border border-blue-700 text-blue-700 px-8 py-4 rounded-2xl text-lg font-semibold hover:bg-blue-50 transition">View Demo</a>
        </div>
      </section>

      {/* Features Section */}
      <section id="demo" className="grid md:grid-cols-3 gap-6 px-6 pb-20 max-w-6xl mx-auto">
        {[
          ["AI-Powered Onboarding", "ContractBot guides users through key workflows with human-like clarity."],
          ["Smart Templates", "Reusable forms, automation rules, and intelligent defaults—no coding needed."],
          ["Real-Time Insights", "Track funnel drop-offs, see upgrade readiness, and optimize conversion."]
        ].map(([title, desc], i) => (
          <motion.div
            key={i}
            className="bg-white shadow-xl rounded-2xl p-6 hover:scale-[1.03] transition-transform"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.4 }}
          >
            <h3 className="text-xl font-bold mb-2">{title}</h3>
            <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
          </motion.div>
        ))}
      </section>

      {/* Screenshot Section */}
      <section className="py-20 px-6 bg-white border-t border-gray-200 text-center">
        <h2 className="text-3xl font-bold mb-8">See ContractPlan in Action</h2>
        <Image
          src="/screens/demo-dashboard.png"
          alt="ContractPlan Screenshot"
          width={1200}
          height={700}
          className="rounded-xl shadow-lg mx-auto"
        />
      </section>

      {/* Testimonials */}
      <section className="bg-white py-20 px-6 border-t border-gray-200">
        <h2 className="text-center text-3xl font-bold mb-10">What Users Say</h2>
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          {[
            ["https://i.pravatar.cc/60?img=1", "We used ContractPlan to modernize our intake workflows — it's intuitive and powerful. We upgraded within a week.", "Operations Director, CityGovConnect"],
            ["https://i.pravatar.cc/60?img=8", "Our nonprofit now has a clear path to scale. This was the missing link in our toolkit.", "Claire M., Director at CommunityBridge"]
          ].map(([img, quote, role], i) => (
            <div key={i} className="flex gap-4 items-start">
              <Image src={img} alt="Avatar" width={48} height={48} className="h-12 w-12 rounded-full" />
              <blockquote className="text-gray-700 text-sm">
                “{quote}”
                <footer className="mt-2 text-sm text-gray-500">— {role}</footer>
              </blockquote>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing Section */}
      <section className="bg-gradient-to-r from-blue-700 to-green-600 text-white py-20 px-6">
        <h2 className="text-center text-3xl font-bold mb-10">Plans & Pricing</h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            ["Free", "$0/mo", "1 project, community support, and AI demo access."],
            ["Pro", "$9/mo", "Smart templates, conversion tracking, and custom branding."],
            ["Business", "$19/mo", "Full access, priority onboarding, and NEXTSuite connection."]
          ].map(([tier, price, desc], i) => (
            <div
              key={i}
              className={`bg-white text-gray-900 rounded-2xl p-6 text-center shadow-lg ${tier === "Pro" ? "border-4 border-blue-600 scale-105" : ""}`}
            >
              <h3 className="text-2xl font-semibold">{tier}</h3>
              <p className="mt-2 text-sm">{desc}</p>
              <p className="text-3xl font-bold my-4">{price}</p>
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

      {/* Footer */}
      <footer className="text-center text-sm text-gray-500 py-10 border-t border-gray-200">
        © 2025 ContractPlan Inc. · <Link href="/privacy" className="underline">Privacy</Link> · <Link href="/terms" className="underline">Terms</Link>
      </footer>
    </main>
  );
}

