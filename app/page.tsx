// app/page.tsx
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-sky-50 to-emerald-100 text-gray-900 font-sans">
      {/* Hero */}
      <section className="px-6 py-24 text-center">
        <h1 className="text-5xl sm:text-6xl font-extrabold leading-tight text-blue-900">
          Take control of your contracts,<br />grants, and workflows
        </h1>
        <p className="mt-6 text-xl text-gray-700 max-w-2xl mx-auto">
          Simplify your approvals, stay compliant, and automate the work you shouldn't have to do.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Link href="/app" className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded-2xl font-semibold shadow">
            Get Started
          </Link>
          <Link href="/demo" className="px-6 py-3 rounded-2xl border border-pink-600 text-pink-600 font-semibold hover:bg-pink-50">
            View Demo
          </Link>
        </div>
        <p className="text-sm text-gray-500 mt-2">Free to use</p>
      </section>

      {/* Features */}
      <section className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl mx-auto px-6 pb-20">
        <div className="bg-white p-6 rounded-2xl shadow text-center">
          <h3 className="text-lg font-bold mb-2">Manage contracts and grants</h3>
          <p className="text-sm text-gray-600">Track all your agreements in one place</p>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow text-center">
          <h3 className="text-lg font-bold mb-2">Automate workflows</h3>
          <p className="text-sm text-gray-600">Streamline processes with powerful automation</p>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow text-center">
          <h3 className="text-lg font-bold mb-2">Stay on top of approvals</h3>
          <p className="text-sm text-gray-600">Keep your team accountable</p>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow text-center">
          <h3 className="text-lg font-bold mb-2">Get real-time insights</h3>
          <p className="text-sm text-gray-600">From progress to compliance</p>
        </div>
      </section>

      {/* Demo Screenshot */}
      <section className="py-16 bg-white border-y border-gray-200 px-6">
        <h2 className="text-3xl font-bold text-center mb-6">Interactive Demo</h2>
        <p className="text-center text-gray-600 max-w-xl mx-auto mb-10">
          Walk through a live scenario with mock org data. See ContractPlan in action.
        </p>
        <div className="flex justify-center">
          <Image
            src="/screenshot-demo.png"
            alt="ContractPlan App Screenshot"
            width={800}
            height={450}
            className="rounded-xl shadow-xl border"
          />
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50 px-6">
        <h2 className="text-3xl font-bold text-center mb-10">What Users Say</h2>
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow text-center">
            <p className="italic">"It's a must-have contract management tool!"</p>
            <p className="mt-4 text-sm text-gray-500">— Ben Holland</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow text-center">
            <p className="italic">"The automation features save us a huge amount of time."</p>
            <p className="mt-4 text-sm text-gray-500">— Malavika Dhar</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow text-center">
            <p className="italic">"We reduced our contract approval time by 32%!"</p>
            <p className="mt-4 text-sm text-gray-500">— Fraser Shaw</p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-gradient-to-r from-blue-700 to-green-600 text-white px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Pricing</h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <div className="bg-white text-gray-900 p-6 rounded-2xl text-center shadow">
            <h3 className="text-xl font-bold">Free</h3>
            <p className="mt-2 text-sm">1 project · Email support</p>
            <p className="text-3xl font-extrabold my-4">$0/mo</p>
          </div>
          <div className="bg-white text-gray-900 p-6 rounded-2xl text-center shadow border-4 border-blue-500">
            <h3 className="text-xl font-bold">Pro</h3>
            <p className="mt-2 text-sm">Smart templates · Growth tracking</p>
            <p className="text-3xl font-extrabold my-4">$9/mo</p>
          </div>
          <div className="bg-white text-gray-900 p-6 rounded-2xl text-center shadow">
            <h3 className="text-xl font-bold">Business</h3>
            <p className="mt-2 text-sm">Integrations · Role controls</p>
            <p className="text-3xl font-extrabold my-4">$19/mo</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center text-sm text-gray-500 py-10">
        © 2025 ContractPlan Inc. · <Link href="/privacy" className="underline">Privacy</Link> · <Link href="/terms" className="underline">Terms</Link>
      </footer>
    </main>
  );
}

