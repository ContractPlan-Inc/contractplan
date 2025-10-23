'use client'

import { ReactNode } from 'react'

import { cn } from '@/lib/utils'

type BadgeProps = {
  children: ReactNode
  variant?: 'default' | 'secondary'
  className?: string
}

export function Badge({ children, variant = 'default', className }: BadgeProps) {
  const base = 'inline-flex items-center rounded-full border px-2.5 py-1 text-xs font-semibold uppercase tracking-wide'
  const styles: Record<NonNullable<BadgeProps['variant']>, string> = {
    default: 'border-transparent bg-emerald-500/15 text-emerald-500',
    secondary: 'border-transparent bg-slate-200/80 text-slate-700',
  }

  return <span className={cn(base, styles[variant], className)}>{children}</span>
}
