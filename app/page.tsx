export default function Page() {
  return (
    <main className="min-h-screen bg-[#0b1120] text-white px-6 py-20">
      <div className="max-w-6xl mx-auto text-center">
        <img
          src="/logo.png"
          alt="ContractPlan logo"
          className="mx-auto w-20 h-20 mb-6"
        />
        <h1 className="text-5xl font-bold mb-4">From chaos to order.</h1>
        <p className="text-xl text-gray-300 mb-8">
          ContractPlan helps you organize, track, and take action on every contract that matters — with AI.
        </p>
        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          <a
            href="/dashboard"
            className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-xl font-semibold"
          >
            Try the Live Demo
          </a>
          <a
            href="#pricing"
            className="border border-white hover:bg-white hover:text-black text-white px-6 py-3 rounded-xl font-semibold"
          >
            View Pricing
          </a>
        </div>
        <div className="rounded-xl overflow-hidden shadow-xl border border-gray-700">
          <img
            src="/screenshots/dashboard.png"
            alt="ContractPlan dashboard screenshot"
            className="w-full"
          />
        </div>
        <div className="mt-16 text-sm text-gray-500">
          Built to make a difference by ContractPlan Inc.
        </div>
      </div>
    </main>
  );
}
