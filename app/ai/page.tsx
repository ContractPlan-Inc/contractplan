'use client';

import Link from 'next/link';
import { useState } from 'react';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const suggestions = [
  'Contract #2045 is nearing renewal — recommend early outreach to the counterparty.',
  'Missing compliance doc on Contract #1988: EPA Form 8700-12.',
  'Contract #1999 has three late milestone reports — flag for review.',
  'Consider re-negotiating Contract #1771 — pricing terms no longer competitive.',
] as const;

export default function AssistantPage() {
  const [visible, setVisible] = useState(true);

  return (
    <div className="space-y-6 p-6">
      <header className="flex flex-col gap-4 justify-between md:flex-row md:items-start">
        <div className="space-y-1">
          <h1 className="text-2xl font-semibold text-white">Contract intelligence</h1>
          <p className="text-sm text-slate-200/80">
            ContractPlan AI audits your portfolio 24/7 and surfaces the next best action for your team.
          </p>
        </div>
        <Button asChild variant="outline" className="border-white/20 bg-white/10 text-white hover:bg-white/20">
          <Link href="/ai/assistant">Launch assistant</Link>
        </Button>
      </header>

      <Card className="bg-white/10 text-white">
        <CardContent className="space-y-3 p-6">
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium text-slate-200">Smart suggestions</p>
            <Button
              variant="ghost"
              className="text-sm text-emerald-200 hover:bg-emerald-500/10 hover:text-emerald-100"
              onClick={() => setVisible((prev) => !prev)}
            >
              {visible ? 'Hide' : 'Show'} suggestions
            </Button>
          </div>
          {visible && (
            <ul className="space-y-2 text-sm text-slate-100/90">
              {suggestions.map((item) => (
                <li key={item} className="rounded-lg bg-white/5 px-3 py-2">
                  {item}
                </li>
              ))}
            </ul>
          )}
        </CardContent>
      </Card>

      <section className="grid gap-4 md:grid-cols-2">
        <Card className="bg-white text-slate-900">
          <CardContent className="space-y-3 p-6">
            <Badge variant="secondary">Risk & renewal</Badge>
            <h2 className="text-lg font-semibold">Always know what needs attention</h2>
            <p className="text-sm text-slate-600">
              ContractPlan watches renewal dates, spend thresholds, and compliance milestones. You decide how to act on each alert.
            </p>
          </CardContent>
        </Card>
        <Card className="bg-white text-slate-900">
          <CardContent className="space-y-3 p-6">
            <Badge variant="secondary">Collaboration</Badge>
            <h2 className="text-lg font-semibold">Share insights with your team</h2>
            <p className="text-sm text-slate-600">
              Turn any suggestion into a task, assign owners, and post updates without leaving your workflow.
            </p>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
