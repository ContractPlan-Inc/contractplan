// app/page.tsx – Light Mode Homepage Inspired by Monday.com, ContractPlan V10 Copy Preserved

'use client';

import { useState } from 'react';

const screenshots = [
  '/screenshots/dashboard.png',
  '/screenshots/contracts.png',
  '/screenshots/detail.png',
];

export default function Page() {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((index + 1) % screenshots.length);
  const prev = () => setIndex((index - 1 + screenshots.length) % screenshots.length);

  return (
    <main className="min-h-screen bg-white text-[#0b1120] px-6 py-24 font-sans">
      <div className="max-w-6xl mx-auto text-center">
        <img
          src="/logo.png"
          alt="ContractPlan logo"
          className="mx-auto w-20 h-20 mb-6"
        />
        <h1 className="text-5xl font-bold mb-4">From chaos to order.</h1>
        <p className="text-xl text-gray-700 mb-8">
          ContractPlan helps you organize, track, and take action on every contract that matters — with AI.
        </p>
        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          <button
            onClick={() => window.location.href = '/app'}
            className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-xl font-semibold transition-all"
          >
            Try the Live Demo
          </button>
          <button
            onClick={() => document.getElementById('carousel')?.scrollIntoView({ behavior: 'smooth' })}
            className="border border-gray-800 hover:bg-gray-800 hover:text-white px-6 py-3 rounded-xl font-semibold transition-all"
          >
            View Product
          </button>
        </div>

        <div id="carousel" className="relative w-full max-w-4xl mx-auto border border-gray-200 rounded-xl overflow-hidden shadow-xl">
          <img
            src={screenshots[index]}
            alt={`ContractPlan screenshot ${index + 1}`}
            className="w-full object-cover transition-opacity duration-500"
          />
          <div className="absolute top-1/2 left-0 right-0 flex justify-between px-4 -translate-y-1/2">
            <button
              onClick={prev}
              className="bg-white/80 hover:bg-white text-[#0b1120] px-3 py-1 rounded-full text-xl shadow"
            >‹</button>
            <button
              onClick={next}
              className="bg-white/80 hover:bg-white text-[#0b1120] px-3 py-1 rounded-full text-xl shadow"
            >›</button>
          </div>
        </div>

        <div className="mt-16 text-sm text-gray-400">
          Built to make a difference by ContractPlan Inc.
        </div>
      </div>
    </main>
  );
}

