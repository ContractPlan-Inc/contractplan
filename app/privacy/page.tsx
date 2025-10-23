import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy | ContractPlan',
  description:
    'Learn how ContractPlan collects, uses, and safeguards the information entrusted to us.',
};

export default function PrivacyPage() {
  return (
    <main className="mx-auto my-16 max-w-3xl space-y-12 rounded-2xl bg-white/95 p-10 text-gray-900 shadow-xl backdrop-blur">
      <header className="space-y-2 text-center">
        <p className="text-sm font-semibold text-emerald">Privacy at ContractPlan</p>
        <h1 className="text-3xl font-bold tracking-tight text-gray-900">Privacy Policy</h1>
        <p className="text-sm text-gray-600">
          Effective March 1, 2025 — we continually review and improve our safeguards as the product evolves.
        </p>
      </header>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-gray-900">What we collect</h2>
        <p className="text-sm leading-6 text-gray-700">
          ContractPlan stores only the information required to power your workspace: account details, usage metrics, and the
          content you upload. Draft contracts and supporting files are encrypted in transit and at rest using industry-standard
          protocols.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-gray-900">How we use information</h2>
        <p className="text-sm leading-6 text-gray-700">
          Data is used to operate and secure the service, personalize onboarding, and surface insights about contract
          performance. We never sell personal information and limit internal access to the minimum required to support you.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-gray-900">Your choices</h2>
        <p className="text-sm leading-6 text-gray-700">
          Administrators can export or delete workspace data at any time. To request help with privacy questions, reach out to{' '}
          <a className="font-medium text-emerald hover:text-emerald/90" href="mailto:privacy@contractplan.com">
            privacy@contractplan.com
          </a>
          .
        </p>
      </section>

      <footer className="flex flex-wrap items-center justify-between gap-4 border-t border-gray-200 pt-6 text-sm text-gray-600">
        <span>Last updated March 1, 2025</span>
        <Link href="/" className="font-semibold text-emerald hover:text-emerald/90">
          Back to homepage
        </Link>
      </footer>
    </main>
  );
}
