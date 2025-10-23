'use client';

import { useEffect, useState } from 'react';

import { Card, CardContent } from '@/components/ui/card';

const steps = [
  '👋 Welcome to ContractPlan! Let’s get you set up.',
  '📁 First, import your existing contracts or start a new one.',
  '🔍 Use the AI assistant to flag missing documents or risks.',
  '📊 Visit the dashboard for instant portfolio insights.',
  '✅ That’s it! You’re ready to take control of your contracts.',
] as const;

export default function OnboardingBot() {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setStep((prev) => (prev < steps.length - 1 ? prev + 1 : prev));
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="space-y-6 p-6">
      <header className="space-y-1">
        <h1 className="text-2xl font-semibold text-white">Onboarding bot</h1>
        <p className="text-sm text-slate-200/80">
          A lightweight guide that walks new teammates through their first day in ContractPlan.
        </p>
      </header>

      <Card className="bg-white text-slate-900">
        <CardContent className="space-y-3 p-6">
          <p className="text-sm font-medium text-slate-600">Live guidance</p>
          <div className="rounded-xl bg-slate-50 p-5 text-lg leading-7">
            {steps[step]}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
