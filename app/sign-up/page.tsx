import type { Metadata } from 'next';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export const metadata: Metadata = {
  title: 'Create your account | ContractPlan',
  description: 'Launch a new ContractPlan workspace in minutes and bring structure to your programs.',
};

export default function SignUpPage() {
  return (
    <main className="mx-auto my-16 max-w-md space-y-8 rounded-2xl bg-white/95 p-10 text-gray-900 shadow-xl backdrop-blur">
      <header className="space-y-2 text-center">
        <h1 className="text-3xl font-semibold tracking-tight">Create your workspace</h1>
        <p className="text-sm text-gray-600">Start collaborating with your team in just a few steps.</p>
      </header>

      <form className="space-y-6">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-medium text-gray-700">
            Full name
          </label>
          <Input id="name" name="name" autoComplete="name" placeholder="Jordan Smith" required />
        </div>

        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium text-gray-700">
            Work email
          </label>
          <Input id="email" name="email" type="email" autoComplete="email" placeholder="you@city.gov" required />
        </div>

        <div className="space-y-2">
          <label htmlFor="organization" className="text-sm font-medium text-gray-700">
            Organization
          </label>
          <Input id="organization" name="organization" placeholder="City of Evergreen" required />
        </div>

        <Button type="submit" className="w-full">
          Get started
        </Button>
      </form>

      <p className="text-center text-sm text-gray-600">
        Already have an account?{' '}
        <Link href="/sign-in" className="font-semibold text-emerald hover:text-emerald/90">
          Sign in
        </Link>
        .
      </p>
    </main>
  );
}
