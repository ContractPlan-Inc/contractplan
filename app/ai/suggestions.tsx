'use client'

import { Card, CardContent } from '@/components/ui/card'

export default function SuggestionsPage() {
  return (
    <div className="min-h-screen bg-slate-950 px-6 py-8 text-slate-50">
      <div className="mx-auto max-w-3xl space-y-3">
        <h1 className="text-2xl font-semibold">AI suggestions</h1>
        <Card>
          <CardContent className="p-6">
            <p className="text-sm text-slate-600">
              This module will display personalized contract suggestions based on risk, renewal, and compliance signals.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
