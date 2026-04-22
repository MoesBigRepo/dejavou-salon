import type { Metadata } from 'next';
import './globals.css';
import RevealOnScroll from '@/components/RevealOnScroll';

export const metadata: Metadata = {
  title: 'DejaVou Salon · Montvale, NJ',
  description:
    'Cut, color, and care. A small studio on Railroad Ave in Montvale, New Jersey.',
  openGraph: {
    title: 'DejaVou Salon',
    description: 'Be your own kind of beautiful.',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-cream text-ink grain antialiased">
        <main className="overflow-x-hidden w-full max-w-full">{children}</main>
        <RevealOnScroll />
      </body>
    </html>
  );
}
