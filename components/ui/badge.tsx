// components/ui/badge.tsx
import { ReactNode } from 'react';

type BadgeProps = {
  children: ReactNode;
  variant?: 'default' | 'secondary';
};

export function Badge({ children, variant = 'default' }: BadgeProps) {
  const base = 'inline-block text-xs font-medium px-2.5 py-0.5 rounded';
  const styles = {
    default: 'bg-blue-100 text-blue-800',
    secondary: 'bg-gray-100 text-gray-800',
  };

  return <span className={`${base} ${styles[variant]}`}>{children}</span>;
}

