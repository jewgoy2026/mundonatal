import { ArrowRight, Gift, ShieldCheck, Sparkles, Truck } from 'lucide-react';
import { HeroCarousel } from '@/components/hero-carousel';
import { ProductCard } from '@/components/product-card';
import { fetchCatalog } from '@/lib/catalog';

const featuredHandles = [
  'arvore-de-natal-abeto-fraser-imperial',
  'arvore-de-natal-abeto-fraser-nevado',
  'guirlanda-vermelha-e-branca-nordica-com-led-70-cm',
  'the-holiday-aisle-54-in-4-piece-outdoor-christmas-decoration-25d-reindeer-family-yard-decoration-with-warm-white-led-lights-w122748968',
  'the-holiday-aisle-solar-led-christmas-decorative-outdoor-waterproof-landscape-lights-w110003751',
  'the-holiday-aisle-foldable-outdoor-led-light-balls-hanging-sphere-christmas-lights-with-warm-white-leds-metal-frame-globe-lights-for-patio-garden-holiday-party-decor',
  'the-holiday-aisle-hutto-5ft-soldier-nutcracker-warm-lighted-leds-christmas-yard-decoration-outdoor-w114535735',
  'kit-100-bolas-de-natal-vermelho-e-dourado-3-cm-4-cm-e-6-cm-ponteira-estrela-dourada',
];

const categoryHandles: Record<string, string> = {
  'arvores-de-natal': 'arvore-de-natal-abeto-fraser-imperial',
  'decoracao-de-natal': 'escada-luz-em-led-colorido-decoracao-de-natal-com-papai-noel-pendurado-3m',
  'figuras-natalinas': 'the-holiday-aisle-30-pre-lit-fabric-snowman-w003572991',
  iluminacao: 'cortina-de-led-com-300-luzes-e-8-modos-para-natal',
  guirlandas: 'guirlanda-vermelha-e-branca-nordica-com-led-70-cm',
  enfeites: 'kit-16-enfeites-de-natal-tradicional-vermelho-e-verde-com-papai-noel-presentes-e-arvores',
};

export default async function Home() {
  const { products, categories } = await fetchCatalog();
  const featured = featuredHandles.map((handle) => products.find((product) => product.handle === handle)).filter((product): product is NonNullable<typeof product> => Boolean(product));

  return (
    <main className="bg-[var(--brand-cream)] text-[var(--brand-red)]">
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

      <section className="mx-auto max-w-[1360px] px-4 py-16 sm:px-8 lg:py-24">
        <div className="mb-10 flex items-end justify-between gap-4">
          <div><p className="text-xs font-bold uppercase tracking-[0.3em] text-[var(--brand-gold-dark)]">Destaques da temporada</p><h2 className="brand-heading mt-3 text-4xl sm:text-6xl">Escolhas que encantam</h2></div>
          <a href="/produtos" className="hidden items-center gap-2 text-sm font-bold sm:flex">Ver tudo <ArrowRight className="size-4" /></a>
        </div>
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-6">{featured.map((product) => <ProductCard key={product.handle} product={product} featured />)}</div>
      </section>

      <section className="bg-[var(--brand-red)] px-4 py-16 text-white sm:px-8 lg:py-24">
        <div className="mx-auto max-w-[1360px]">
          <p className="text-center text-xs font-bold uppercase tracking-[0.3em] text-[var(--brand-gold)]">Encontre o seu Natal</p>
          <h2 className="brand-heading mt-3 text-center text-4xl sm:text-6xl">Compre por categoria</h2>
          <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
            {categories.map((category) => {
              const product = products.find((item) => item.handle === categoryHandles[category.slug]) ?? products.find((item) => item.category === category.slug);
              if (!product) return null;
              return <a key={category.slug} href={`/produtos?categoria=${category.slug}`} className="group overflow-hidden rounded-t-[5rem] border border-white/15 bg-white/5 p-3 text-center"><span className="flex aspect-[4/5] items-center justify-center overflow-hidden rounded-t-[4.4rem] bg-[var(--brand-cream)] p-4"><img src={product.images[0]} alt="" className="h-full w-full object-contain transition duration-500 group-hover:scale-105" loading="lazy" /></span><strong className="block px-2 py-5 text-sm">{category.name}</strong></a>;
            })}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#e5d2a6] px-5 py-20 text-center sm:px-8 lg:py-28">
        <div className="mx-auto max-w-3xl"><p className="text-xs font-bold uppercase tracking-[0.32em] text-[var(--brand-gold-dark)]">Uma casa, muitas histórias</p><h2 className="brand-heading mt-4 text-5xl leading-none sm:text-7xl">O cenário das suas melhores lembranças</h2><p className="mx-auto mt-6 max-w-2xl leading-7 text-black/60">Monte uma decoração com personalidade: do primeiro galho à última luz, cada detalhe pode ser escolhido e ajustado pelo nosso catálogo.</p><a href="/produtos" className="mt-8 inline-flex h-12 items-center gap-2 rounded-full bg-[var(--brand-red)] px-8 text-sm font-bold text-white">Conhecer coleção <ArrowRight className="size-4" /></a></div>
      </section>
    </main>
  );
}
