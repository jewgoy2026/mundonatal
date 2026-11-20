import { ArrowRight } from 'lucide-react';

const HERO = 'https://mundodonatal.com/cdn/shop/t/10/assets/hero-mundo-natal.webp?v=95608368117420465371794234297';

export function HeroCarousel() {
  return (
    <section className="relative isolate min-h-[560px] overflow-hidden bg-[var(--brand-red)] sm:min-h-[680px]">
      <img src={HERO} alt="Sala decorada para o Natal" className="absolute inset-0 h-full w-full object-cover object-center" fetchPriority="high" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#3b0816]/95 via-[#3b0816]/55 to-transparent" />
      <div className="relative mx-auto flex min-h-[560px] max-w-[1360px] items-center px-5 py-16 sm:min-h-[680px] sm:px-10 lg:px-16">
        <div className="max-w-2xl text-white">
          <p className="text-xs font-bold uppercase tracking-[0.35em] text-[var(--brand-gold)]">Coleção Natal 2026</p>
          <h1 className="brand-heading mt-5 text-5xl leading-[0.95] sm:text-7xl lg:text-8xl">A magia começa dentro de casa</h1>
          <p className="mt-6 max-w-xl text-base leading-7 text-white/80 sm:text-lg">Árvores, guirlandas, luzes e personagens para criar memórias que ficam muito depois do último presente.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="/produtos" className="inline-flex h-12 items-center gap-2 rounded-full bg-[var(--brand-gold)] px-7 text-sm font-bold text-[var(--brand-red)] transition hover:-translate-y-0.5">Explorar coleção <ArrowRight className="size-4" /></a>
            <a href="/produtos?categoria=arvores-de-natal" className="inline-flex h-12 items-center rounded-full border border-white/70 px-7 text-sm font-bold text-white hover:bg-white hover:text-[var(--brand-red)]">Ver árvores</a>
          </div>
        </div>
      </div>
    </section>
  );
}
