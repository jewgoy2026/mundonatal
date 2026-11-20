import { ArrowRight, Gift, ShieldCheck, Sparkles, Truck } from 'lucide-react';
import { HeroCarousel } from '@/components/hero-carousel';
import { HomeCatalogGrid } from '@/components/home-catalog-grid';
import { fetchCatalog } from '@/lib/catalog';

export default async function Home() {
  const { products, collections } = await fetchCatalog();

  return (
    <main className="bg-[var(--brand-cream)] text-black">
      <HeroCarousel />
      <section className="border-y border-[var(--brand-gold)]/35 bg-white">
        <div className="mx-auto grid max-w-[1360px] grid-cols-2 gap-px sm:grid-cols-4">
          {[
            [Truck, 'Entrega acompanhada', 'Rastreio em cada etapa'],
            [ShieldCheck, 'Compra segura', 'Proteção no pagamento'],
            [Sparkles, 'Seleção especial', 'Curadoria natalina'],
            [Gift, 'Natal completo', '177 produtos na coleção'],
          ].map(([Icon, title, copy]) => {
            const TrustIcon = Icon as typeof Truck;
            return <div key={String(title)} className="flex items-center gap-3 border-[var(--brand-gold)]/20 p-5 sm:border-r"><TrustIcon className="size-6 text-[var(--brand-gold-dark)]" /><div><strong className="block text-sm">{String(title)}</strong><span className="text-xs text-black/50">{String(copy)}</span></div></div>;
          })}
        </div>
      </section>

      <section className="mx-auto max-w-[1360px] px-4 py-14 sm:px-8 lg:py-20">
        <div className="mb-10 flex items-end justify-between gap-4">
          <div><p className="text-xs font-bold uppercase tracking-[0.3em] text-[var(--brand-green-dark)]">Catálogo completo</p><h2 className="brand-heading mt-3 text-4xl sm:text-6xl">Todos os produtos</h2><p className="mt-3 max-w-xl text-sm leading-6 text-black/55">Os {products.length} produtos do catálogo oficial, organizados para você encontrar cada detalhe do seu Natal.</p></div>
          <a href="/produtos" className="hidden items-center gap-2 text-sm font-bold text-[var(--brand-green-dark)] sm:flex">Filtrar catálogo <ArrowRight className="size-4" /></a>
        </div>
        <HomeCatalogGrid products={products} />
      </section>

      <section className="border-y border-black/10 bg-[#f0ece2] px-4 py-16 text-black sm:px-8 lg:py-20">
        <div className="mx-auto max-w-[1360px]">
          <p className="text-center text-xs font-bold uppercase tracking-[0.3em] text-[var(--brand-green-dark)]">Encontre o seu Natal</p>
          <h2 className="brand-heading mt-3 text-center text-4xl sm:text-6xl">Compre por coleção</h2>
          <div className="mt-10 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-7">
            {collections.map((collection) => {
              const product = products.find((item) => item.collections.includes(collection.slug));
              if (!product) return null;
              return <a key={collection.slug} href={`/produtos?colecao=${collection.slug}`} className="group overflow-hidden rounded-2xl border border-black/10 bg-white p-2 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-md sm:p-3"><span className="block aspect-square overflow-hidden rounded-xl bg-[var(--product-surface)]"><img src={product.images[0]} alt="" className="h-full w-full object-cover object-center transition duration-500 group-hover:scale-105" loading="lazy" /></span><strong className="flex min-h-14 items-center justify-center px-1 py-3 text-xs sm:min-h-16 sm:px-2 sm:text-sm">{collection.name}</strong></a>;
            })}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#e5d2a6] px-5 py-20 text-center sm:px-8 lg:py-28">
        <div className="mx-auto max-w-3xl"><p className="text-xs font-bold uppercase tracking-[0.32em] text-[var(--brand-green-dark)]">Uma casa, muitas histórias</p><h2 className="brand-heading mt-4 text-5xl leading-none sm:text-7xl">O cenário das suas melhores lembranças</h2><p className="mx-auto mt-6 max-w-2xl leading-7 text-black/60">Monte uma decoração com personalidade: do primeiro galho à última luz, cada detalhe pode ser escolhido e ajustado pelo nosso catálogo.</p><a href="/produtos" className="mt-8 inline-flex h-12 items-center gap-2 rounded-full bg-[var(--brand-green)] px-8 text-sm font-bold text-white transition hover:bg-[var(--brand-green-dark)]">Conhecer coleção <ArrowRight className="size-4" /></a></div>
      </section>
    </main>
  );
}
