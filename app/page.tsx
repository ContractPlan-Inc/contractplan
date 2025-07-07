import Image from 'next/image'
import Link from 'next/link'

export default function AppPage() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900">
      {/* App Header */}
      <header className="bg-white border-b shadow-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-indigo-700">ContractPlan</h1>
          <nav className="space-x-6 text-sm text-gray-600 hidden md:block">
            <Link href="#overview">Overview</Link>
            <Link href="#docs">Documents</Link>
            <Link href="#assistant">Assistant</Link>
          </nav>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Sidebar */}
        <aside className="md:col-span-1 bg-white rounded-2xl shadow p-6">
          <h2 className="text-lg font-semibold mb-4">📂 Navigation</h2>
          <ul className="space-y-3 text-blue-700 font-medium">
            <li><Link href="#overview">🏢 Organization Overview</Link></li>
            <li><Link href="#docs">📄 Documents</Link></li>
            <li><Link href="#assistant">🤖 AI Assistant</Link></li>
          </ul>
        </aside>

        {/* Main content */}
        <section className="md:col-span-3 space-y-12">
          <div id="overview" className="bg-white rounded-2xl shadow p-6">
            <h2 className="text-xl font-semibold mb-2">🏢 Organization Overview</h2>
            <p className="text-gray-700">Acme City Hall • 42 active workflows • Last audit passed ✔</p>
            <Image src="/media/dashboard-screenshot.png" alt="Dashboard Screenshot" width={800} height={400} className="mt-4 rounded-lg border" />
          </div>

          <div id="docs" className="bg-white rounded-2xl shadow p-6">
            <h2 className="text-xl font-semibold mb-2">📄 Document Center</h2>
            <ul className="list-disc pl-6 text-gray-700">
              <li>Vendor Onboarding Agreement</li>
              <li>Subgrant Compliance Report</li>
              <li>Community Services MOU</li>
            </ul>
            <Image src="/media/document-screenshot.png" alt="Document View" width={800} height={400} className="mt-4 rounded-lg border" />
          </div>

          <div id="assistant" className="bg-white rounded-2xl shadow p-6">
            <h2 className="text-xl font-semibold mb-2">🤖 AI Assistant</h2>
            <p className="text-gray-700 mb-2">"Highlight key risks in this contract"</p>
            <div className="bg-emerald-50 border border-emerald-300 text-emerald-800 rounded p-4 text-sm">
              ✅ 3 flagged clauses<br />✅ Merge section 6 and 7 for clarity<br />✅ Add verification step for subcontractors
            </div>
            <video
              src="/media/chaos-to-order.mp4"
              autoPlay
              muted
              loop
              className="rounded-lg border mt-4 w-full"
            />
          </div>
        </section>
      </div>
    </main>
  )
}

