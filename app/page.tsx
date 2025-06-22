'use client';

import Image from 'next/image';

export default function Home() {
  return (
    <main className="p-8 font-sans">
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold text-blue-800">Automate Smarter. Eliminate Chaos.</h1>
        <p className="mt-4 text-lg text-gray-700 max-w-xl mx-auto">
          ContractPlan gives you intelligent templates, real-time alerts, and built-in oversight to manage contracts, bids, and deadlines—without drowning in admin work.
        </p>
      </section>
      <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <div className="bg-white rounded-2xl shadow p-6">
          <h3 className="font-semibold text-xl text-blue-700">📄 Smart Templates</h3>
          <p className="text-gray-600 mt-2">Standardize contracts with built-in intelligence and reduce legal risk.</p>
        </div>
        <div className="bg-white rounded-2xl shadow p-6">
          <h3 className="font-semibold text-xl text-blue-700">⏰ Real-Time Alerts</h3>
          <p className="text-gray-600 mt-2">Never miss a renewal, deadline, or compliance check again.</p>
        </div>
        <div className="bg-white rounded-2xl shadow p-6">
          <h3 className="font-semibold text-xl text-blue-700">🧠 Built-in Oversight</h3>
          <p className="text-gray-600 mt-2">Give leadership full visibility into contract health and obligations.</p>
        </div>
      </section>
    </main>
  );
}