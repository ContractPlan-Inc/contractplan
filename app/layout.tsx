import type { Metadata } from 'next';
import { ReactNode } from 'react';

import './globals.css';

export const metadata: Metadata = {
  title: 'ContractPlan',
  description: 'Empowering local governments and nonprofits.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gradient-to-br from-midnight to-pacific text-white antialiased">
        {children}
      </body>
    </html>
  );
}
