// Replace the current hero <main> section with this block:

<main className="min-h-screen bg-white px-6 py-16">
  <div className="max-w-5xl mx-auto text-center">
    <h1 className="text-5xl font-extrabold text-gray-900 mb-6">
      Bring Order to Contract Chaos
    </h1>
    <p className="text-lg text-gray-700 mb-10">
      ContractPlan helps nonprofits and governments manage contracts, track compliance, and collaborate—all with ease and confidence.
    </p>
    <div className="inline-flex space-x-4">
      <Link href="/demo">
        <a className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition">
          Launch Demo
        </a>
      </Link>
      <Link href="/pricing">
        <a className="px-6 py-3 bg-transparent border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition">
          View Pricing
        </a>
      </Link>
    </div>
    <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
      {["dashboard-screenshot.png","document-screenshot.png","workflow-screenshot.png"].map((img) => (
        <div key={img} className="bg-white rounded-xl shadow-lg overflow-hidden">
          <img src={`/media/${img}`} alt={img} className="w-full object-cover" />
        </div>
      ))}
    </div>
  </div>
</main>

