'use client';

import Image from 'next/image';

export default function HomePage() {
  return (
    <main style={{ minHeight: '100vh', padding: '2rem', background: 'linear-gradient(to bottom right, #1e3a8a, #bbf7d0)', color: 'white' }}>
      <section style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
        <h1 style={{ fontSize: '3rem', fontWeight: 'bold' }}>Automate Smarter. Eliminate Chaos.</h1>
        <p style={{ fontSize: '1.25rem', marginTop: '1rem' }}>
          ContractPlan gives you intelligent templates, real-time alerts, and built-in oversight to manage contracts, bids, and deadlines—without drowning in admin work.
        </p>
        <div style={{ marginTop: '2rem' }}>
          <a
            href="#"
            style={{
              marginRight: '1rem',
              padding: '0.75rem 1.5rem',
              backgroundColor: 'white',
              color: '#1e3a8a',
              borderRadius: '8px',
              fontWeight: 'bold',
              display: 'inline-block',
              textDecoration: 'none'
            }}
          >
            Get Started Free
          </a>
          <a
            href="#"
            style={{
              padding: '0.75rem 1.5rem',
              border: '2px solid white',
              borderRadius: '8px',
              fontWeight: 'bold',
              color: 'white',
              display: 'inline-block',
              textDecoration: 'none'
            }}
          >
            See Pricing
          </a>
        </div>
        <div style={{ marginTop: '3rem' }}>
          <Image
            src="/hero-screenshot.png"
            alt="App Screenshot"
            width={1000}
            height={600}
            style={{ borderRadius: '12px', boxShadow: '0 10px 20px rgba(0,0,0,0.2)' }}
          />
        </div>
      </section>
    </main>
  );
}
