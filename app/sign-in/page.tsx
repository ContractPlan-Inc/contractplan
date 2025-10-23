import type { Metadata } from 'next';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export const metadata: Metadata = {
  title: 'Sign in | ContractPlan',
  description: 'Access your ContractPlan workspace and continue building resilient programs.',
};

export default function SignInPage() {
  return (
    <main className="mx-auto my-16 max-w-md space-y-8 rounded-2xl bg-white/95 p-10 text-gray-900 shadow-xl backdrop-blur">
      <header className="text-center space-y-2">
        <h1 className="text-3xl font-semibold tracking-tight">Welcome back</h1>
        <p className="text-sm text-gray-600">Sign in with your email to continue.</p>
      </header>

      <form className="space-y-6">
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium text-gray-700">
            Email address
          </label>
          <Input id="email" name="email" type="email" placeholder="you@organization.org" autoComplete="email" required />
        </div>

        <div className="space-y-2">
          <label htmlFor="password" className="text-sm font-medium text-gray-700">
            Password
          </label>
          <Input id="password" name="password" type="password" autoComplete="current-password" required />
        </div>

        <Button type="submit" className="w-full">
          Sign in
        </Button>
      </form>

      <p className="text-center text-sm text-gray-600">
        Need an account?{' '}
        <Link href="/sign-up" className="font-semibold text-emerald hover:text-emerald/90">
          Create one
        </Link>
        .
      </p>
    </main>
  );
}
