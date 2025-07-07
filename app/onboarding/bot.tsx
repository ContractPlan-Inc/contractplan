'use client';

import { Card, CardContent } from '@/components/ui/card';
import { useEffect, useState } from 'react';

const steps = [
  '👋 Welcome to ContractPlan! Let’s get you set up.',
  '📁 First, import your existing contracts or start a new one.',
  '🔍 Use the AI assistant to flag missing documents or risks.',
  '📊 Visit the dashboard for instant portfolio insights.',
  '✅ That’s it! You’re ready to take control of your contracts.',
];

export default function OnboardingBot() {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setStep((prev) => (prev < steps.length - 1 ? prev + 1 : prev));
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="p-6 max-w-xl mx-auto">
      <Card>
        <CardContent className="p-4 space-y-2">
          <div className="text-sm text-gray-500">OnboardingBot</div>
          <div className="text-lg">{steps[step]}</div>
        </CardContent>
      </Card>
    </div>
  );
}

