export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-[#0b1120] text-white px-4 py-24">
      <div className="max-w-4xl w-full text-center">
        <img
          src="/logo.png"
          alt="ContractPlan logo"
          className="mx-auto mb-6 w-20 h-20"
        />
        <h1 className="text-5xl font-bold mb-4">From chaos to order.</h1>
        <p className="text-lg text-gray-300 mb-8">
          ContractPlan organizes your contracts, deadlines, and documents with AI.
        </p>
        <div className="flex justify-center gap-4">
          <a
            href="/app"
            className="bg-emerald-500 text-white px-6 py-3 rounded-xl text-lg font-semibold hover:bg-emerald-600"
          >
            Try the Demo
          </a>
          <a
            href="#"
            className="border border-white px-6 py-3 rounded-xl text-lg font-semibold hover:bg-white hover:text-black"
          >
            Learn More
          </a>
        </div>
      </div>
    </main>
  );
}

