'use client';

import { Card, CardContent } from '@/components/ui/card';

export default function SuggestionsPage() {
  return (
    <div className="p-6 space-y-4">
      <h1 className="text-2xl font-semibold">AI Suggestions</h1>
      <Card>
        <CardContent className="p-4">
          <p className="text-gray-600">
            This module will display personalized contract suggestions based on risk, renewal, and compliance signals.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}

