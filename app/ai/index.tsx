// app/ai/assistant.tsx

'use client';

import { Card, CardContent } from '@/components/ui/card';
import { useState } from 'react';

const suggestions = [
  'Contract #2045 is nearing renewal — recommend early outreach to counterparty.',
  'Missing compliance doc on Contract #1988: EPA Form 8700-12.',
  'Contract #1999 has 3 late milestone reports — flag for review.',
  'Consider re-negotiating Contract #1771 — pricing terms no longer competitive.',
];

export default function AssistantPage() {
  const [visible, setVisible] = useState(true);

  return (
    <div className="p-6 space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">AI Assistant</h1>
        <button
          onClick={() => setVisible(!visible)}
          className="text-sm underline text-blue-600"
        >
          {visible ? 'Hide Suggestions' : 'Show Suggestions'}
        </button>
      </div>

      {visible && (
        <Card>
          <CardContent className="p-4 space-y-2">
            <div className="text-sm text-gray-500">Smart Compliance Suggestions</div>
            <ul className="list-disc list-inside">
              {suggestions.map((s, i) => (
                <li key={i}>{s}</li>
              ))}
            </ul>
          </CardContent>
        </Card>
      )}
    </div>
  );
}

