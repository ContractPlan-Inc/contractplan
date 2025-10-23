import { ReactNode } from 'react';

import { cn } from '@/lib/utils';

type BadgeProps = {
  children: ReactNode;
  variant?: 'default' | 'secondary';
  className?: string;
};

const variantStyles: Record<NonNullable<BadgeProps['variant']>, string> = {
  default: 'bg-emerald-100 text-emerald-800',
  secondary: 'bg-gray-100 text-gray-800',
};

export function Badge({ children, variant = 'default', className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-block rounded-full px-2.5 py-0.5 text-xs font-medium',
        variantStyles[variant],
        className,
      )}
    >
      {children}
    </span>
  );
}
