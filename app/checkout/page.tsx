import type { Metadata } from 'next';

import { CheckoutShell } from '@/components/checkout-shell';

export const metadata: Metadata = {
  title: 'Checkout | Reino Natalino',
  robots: { index: false, follow: false },
};

export default function CheckoutPage() {
  return (
    <main className="min-h-screen bg-[var(--brand-cream)]">
      <CheckoutShell />
    </main>
  );
}

