// components/ui/badge.tsx
import { ReactNode } from 'react';

export function Badge({ children }: { children: ReactNode }) {
  return (
    <span className="inline-block bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded">
      {children}
    </span>
  );
}

