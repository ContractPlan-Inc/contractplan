import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0b0c2a] text-white font-sans">
      <header className="flex items-center justify-between px-6 py-4 border-b border-white/10">
        <div className="flex items-center space-x-3">
          <Image
            src="/logo.svg"
            alt="ContractPlan Logo"
            width={32}
            height={32}
            className="rounded-md"
          />
          <span className="text-xl font-semibold tracking-tight">ContractPlan</span>
        </div>
        <nav className="space-x-4 text-sm">
          <Link href="#features" className="hover:underline">Features</Link>
          <Link href="#pricing" className="hover:underline">Pricing</Link>
          <Link href="/app" className="hover:underline">Demo</Link>
        </nav>
      </header>

      <section className="px-6 py-20 text-center max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          Empowering Local Governments and Nonprofits
        </h1>
        <p className="mt-4 text-lg text-gray-300">
          ContractPlan streamlines your approvals, automates compliance, and earns back your time.
        </p>
        <div className="mt-8 flex justify-center">
          <Link
            href="/app"
            className="bg-emerald-500 hover:bg-emerald-400 text-white font-semibold px-6 py-3 rounded-xl transition"
          >
            Launch Interactive Demo
          </Link>
        </div>
      </section>

      <section id="features" className="bg-[#11132e] px-6 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-6">Everything You Need to Stay on Track</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left text-gray-200">
            <li>✅ AI-generated contract summaries</li>
            <li>✅ Approval workflows with audit trail</li>
            <li>✅ Live demo mode with mock org data</li>
            <li>✅ Grant-readiness reporting</li>
            <li>✅ Salesforce & Stripe integrations</li>
            <li>✅ Role-based access and security</li>
          </ul>
        </div>
      </section>

      <section id="pricing" className="px-6 py-20 bg-[#0f112a] text-center">
        <h2 className="text-2xl font-bold mb-8">Simple, Transparent Pricing</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div className="border border-white/10 p-6 rounded-2xl bg-white/5">
            <h3 className="text-xl font-semibold">Free</h3>
            <p className="text-4xl font-bold my-4">$0</p>
            <p>Basic access with demo data</p>
          </div>
          <div className="border border-emerald-500 p-6 rounded-2xl bg-emerald-600/10">
            <h3 className="text-xl font-semibold">Standard</h3>
            <p className="text-4xl font-bold my-4">$9</p>
            <p>Unlocks real workflows and user roles</p>
          </div>
          <div className="border border-white/10 p-6 rounded-2xl bg-white/5">
            <h3 className="text-xl font-semibold">Pro</h3>
            <p className="text-4xl font-bold my-4">$19</p>
            <p>Includes integrations and reporting</p>
          </div>
        </div>
      </section>

      <footer className="px-6 py-12 text-center text-sm text-gray-400 border-t border-white/10">
        © {new Date().getFullYear()} ContractPlan Inc. | Built for public impact
      </footer>
    </main>
  );
}

