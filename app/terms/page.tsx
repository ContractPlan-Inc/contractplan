import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Terms of Service | ContractPlan',
  description: 'Understand the commitments we make to you and the expectations for using ContractPlan.',
};

export default function TermsPage() {
  return (
    <main className="mx-auto my-16 max-w-3xl space-y-12 rounded-2xl bg-white/95 p-10 text-gray-900 shadow-xl backdrop-blur">
      <header className="space-y-2 text-center">
        <p className="text-sm font-semibold text-emerald">Our agreement with you</p>
        <h1 className="text-3xl font-bold tracking-tight text-gray-900">Terms of Service</h1>
        <p className="text-sm text-gray-600">Effective March 1, 2025</p>
      </header>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-gray-900">Using ContractPlan</h2>
        <p className="text-sm leading-6 text-gray-700">
          Access is granted to support your organization&apos;s contract, intake, and grant workflows. You&apos;re responsible for
          keeping credentials secure and ensuring your workspace members follow applicable laws and regulations.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-gray-900">Service commitments</h2>
        <p className="text-sm leading-6 text-gray-700">
          We aim for 99.9% uptime, proactive maintenance windows, and prompt resolution of support tickets. If you experience an
          outage lasting longer than two consecutive hours, you&apos;re eligible for service credits toward the following month.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-gray-900">Acceptable use</h2>
        <p className="text-sm leading-6 text-gray-700">
          ContractPlan may not be used for harmful or deceptive activity, to store prohibited content, or to infringe on the
          rights of others. We reserve the right to suspend accounts that violate these expectations after reasonable notice.
        </p>
      </section>

      <footer className="flex flex-wrap items-center justify-between gap-4 border-t border-gray-200 pt-6 text-sm text-gray-600">
        <span>
          Questions? Contact{' '}
          <a className="font-medium text-emerald hover:text-emerald/90" href="mailto:legal@contractplan.com">
            legal@contractplan.com
          </a>
        </span>
        <Link href="/" className="font-semibold text-emerald hover:text-emerald/90">
          Back to homepage
        </Link>
      </footer>
    </main>
  );
}
