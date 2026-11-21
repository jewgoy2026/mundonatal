import type { Metadata } from 'next';

import { CartPage } from '@/components/cart-page';

export const metadata: Metadata = {
  title: 'Carrinho | Reino Natalino',
};

export default function CartRoute() {
  return (
    <main className="min-h-screen bg-[var(--brand-black)] text-white">
      <CartPage />
    </main>
  );
}
