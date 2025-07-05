import './globals.css'

export const metadata = {
  title: 'ContractPlan',
  description: 'Empowering public teams with workflow automation.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
