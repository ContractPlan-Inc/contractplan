// app/ai/index.tsx

'use client'

import { Card, CardContent } from '@/components/ui/card'
import { useState } from 'react'

const suggestions = [
  'Contract #2045 is nearing renewal — recommend early outreach to counterparty.',
  'Missing compliance doc on Contract #1988: EPA Form 8700-12.',
  'Contract #1999 has 3 late milestone reports — flag for review.',
  'Consider re-negotiating Contract #1771 — pricing terms no longer competitive.',
]

export default function AssistantPage() {
  const [visible, setVisible] = useState(true)

  return (
    <div className="min-h-screen bg-slate-950 px-6 py-8 text-slate-50">
      <div className="mx-auto max-w-3xl space-y-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold">AI Assistant</h1>
          <button
            onClick={() => setVisible(!visible)}
            className="text-sm underline decoration-dotted underline-offset-4 hover:text-emerald-300"
          >
            {visible ? 'Hide suggestions' : 'Show suggestions'}
          </button>
        </div>

        {visible && (
          <Card>
            <CardContent className="space-y-3">
              <div className="text-sm font-medium text-slate-500">Smart compliance suggestions</div>
              <ul className="list-disc space-y-2 pl-6 text-sm text-slate-700">
                {suggestions.map((suggestion) => (
                  <li key={suggestion}>{suggestion}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}
