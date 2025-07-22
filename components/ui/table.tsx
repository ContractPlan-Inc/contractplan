// components/ui/table.tsx
import { ReactNode } from 'react';

export function Table({ children }: { children: ReactNode }) {
  return <table className="min-w-full border">{children}</table>;
}

export function TableHead({ children }: { children: ReactNode }) {
  return <thead className="bg-gray-100">{children}</thead>;
}

export function TableHeader({ children }: { children: ReactNode }) {
  return <th className="px-4 py-2 text-left text-sm font-medium text-gray-600 border-b">{children}</th>;
}

export function TableBody({ children }: { children: ReactNode }) {
  return <tbody>{children}</tbody>;
}

export function TableRow({ children }: { children: ReactNode }) {
  return <tr className="hover:bg-gray-50">{children}</tr>;
}

export function TableCell({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <td className={`px-4 py-2 text-sm text-gray-700 border-b ${className}`}>{children}</td>
  );
}

