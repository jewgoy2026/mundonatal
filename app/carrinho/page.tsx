import type { Metadata } from 'next';

import { CartPage } from '@/components/cart-page';

export const metadata: Metadata = {
  title: 'Carrinho | Mundo do Natal Suplementos',
};

export default function CartRoute() {
  return (
    <main className="min-h-screen bg-[var(--brand-black)] text-white">
      <CartPage />
    </main>
  );
}
