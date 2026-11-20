import type { Metadata } from 'next';

import { ProductListing } from '@/components/product-listing';
import { fetchCatalog } from '@/lib/catalog';

export const metadata: Metadata = {
  title: 'Todos os produtos | Mundo do Natal',
  description: 'Conheça a coleção completa de árvores, luzes, guirlandas, figuras e enfeites de Natal.',
};

export default async function ProductsPage() {
  const { products } = await fetchCatalog();
  return (
    <main className="min-h-screen bg-[var(--brand-red)] text-white">
      <section className="px-4 pb-4 pt-5 sm:px-8 lg:px-12 lg:pb-8 lg:pt-10">
        <div className="relative mx-auto min-h-56 max-w-[1240px] overflow-hidden rounded-2xl bg-[#3b0816] sm:min-h-72">
          <img
            src="https://mundodonatal.com/cdn/shop/t/10/assets/hero-mundo-natal.webp?v=95608368117420465371794234297"
            alt="Todos os produtos"
            className="absolute inset-0 h-full w-full object-cover opacity-45"
          />
          <h1 className="brand-heading absolute left-[8%] top-1/2 -translate-y-1/2 text-4xl leading-[0.95] sm:text-6xl lg:text-7xl">
            Coleção<br /><span className="text-[var(--brand-gold)]">Mundo do Natal</span>
          </h1>
        </div>
      </section>
      <ProductListing sourceProducts={products} />
    </main>
  );
}
