// app/page.tsx

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-sky-50 text-gray-800">
      <header className="px-6 py-8 bg-white border-b shadow-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="text-2xl font-bold text-blue-800">ContractPlan</div>
          <nav className="space-x-6 text-sm">
            <Link href="/overview" className="hover:text-blue-600">Overview</Link>
            <Link href="/reports/dashboard" className="hover:text-blue-600">Reports</Link>
            <Link href="/workflow/designer" className="hover:text-blue-600">Workflow</Link>
            <Link href="/ai/assistant" className="hover:text-blue-600">AI</Link>
          </nav>
          <Link href="/app">
            <Button className="bg-blue-700 hover:bg-blue-800 text-white rounded-full px-6 py-2 text-sm shadow">Launch App</Button>
          </Link>
        </div>
      </header>

      <section className="py-24 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h1 className="text-5xl font-bold text-blue-900 leading-tight">
            Smarter Contracts for Local Government & Nonprofits
          </h1>
          <p className="text-lg text-gray-600">
            Manage obligations, documents, and reporting in one place. Automated, auditable, and designed for clarity.
          </p>
          <div className="flex justify-center gap-4">
            <Link href="/app">
              <Button className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2 rounded-full shadow">Start Free</Button>
            </Link>
            <Link href="/overview">
              <Button variant="outline" className="px-6 py-2 rounded-full border-gray-300">How It Works</Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-2xl font-semibold text-blue-800 mb-4">Stay Compliant, Stay Ahead</h2>
            <p className="text-gray-600 mb-6">
              ContractPlan centralizes your contract terms, obligations, timelines, and supporting documents. It notifies your team proactively, so nothing slips.
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Real-time compliance suggestions</li>
              <li>AI-powered summaries and risk flags</li>
              <li>Shareable dashboards for leadership</li>
            </ul>
          </div>
          <div>
            <Image
              src="/media/dashboard-screenshot.png"
              alt="ContractPlan dashboard"
              width={640}
              height={400}
              className="rounded-xl border shadow"
            />
          </div>
        </div>
      </section>

      <section className="py-20 bg-sky-100 border-t">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-2xl font-bold text-blue-800">Everything You Need to Run Clean, Clear Contracts</h2>
          <p className="text-gray-700">
            Built-in document repository, compliance tracking, integrations with Salesforce and Stripe, and AI assistance.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            {[
              'Invite collaborators and manage permissions',
              'OCR + AI flagging of missing docs',
              'Built-in analytics for contract value and deadlines',
            ].map((feature, idx) => (
              <Card key={idx} className="bg-white">
                <CardContent className="p-4 text-sm text-gray-700">
                  {feature}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <footer className="py-10 text-center text-sm text-gray-500">
        © 2025 ContractPlan Inc. | <Link href="/legal" className="underline">Terms</Link>
      </footer>
    </main>
  );
}

