import type { ReactNode } from 'react';
import { ArrowLeft, Headphones, Mail, Phone } from 'lucide-react';

type PolicySection = {
  title: string;
  content: ReactNode;
};

export function PolicyPage({
  eyebrow,
  title,
  description,
  highlights,
  sections,
}: {
  eyebrow: string;
  title: string;
  description: string;
  highlights: Array<{ label: string; value: string; note: string }>;
  sections: PolicySection[];
}) {
  return (
    <main className="min-h-screen bg-[var(--brand-cream)] text-black">
      <section className="border-b border-white/10 bg-[var(--brand-black)] px-4 py-12 text-white sm:px-8 sm:py-16 lg:px-12 lg:py-20">
        <div className="mx-auto max-w-6xl">
          <a href="/" className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.12em] text-white/60 transition-colors hover:text-[var(--brand-yellow)]">
            <ArrowLeft className="size-4" /> Voltar para a loja
          </a>
          <p className="mt-10 text-xs font-black uppercase tracking-[0.3em] text-[var(--brand-yellow)]">{eyebrow}</p>
          <h1 className="brand-heading mt-3 max-w-4xl text-5xl uppercase leading-[0.88] sm:text-7xl lg:text-8xl">{title}</h1>
          <p className="mt-6 max-w-2xl text-sm leading-7 text-white/65 sm:text-base">{description}</p>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-8 sm:py-14 lg:px-12 lg:py-20">
        <section className="grid gap-3 sm:grid-cols-3" aria-label="Resumo da política">
          {highlights.map((highlight) => (
            <article className="border border-black bg-[var(--brand-yellow)] p-5 sm:p-6" key={highlight.label}>
              <span className="text-[10px] font-black uppercase tracking-[0.15em] text-black/55">{highlight.label}</span>
              <strong className="mt-2 block text-xl font-black uppercase leading-tight">{highlight.value}</strong>
              <p className="mt-2 text-xs leading-5 text-black/65">{highlight.note}</p>
            </article>
          ))}
        </section>

        <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_310px] lg:items-start">
          <article className="border border-black bg-white">
            {sections.map((section, index) => (
              <section className="grid gap-4 border-b border-black/15 p-6 last:border-b-0 sm:grid-cols-[54px_1fr] sm:p-8" key={section.title}>
                <span className="flex size-11 items-center justify-center rounded-full bg-black text-sm font-black text-[var(--brand-yellow)]">{String(index + 1).padStart(2, '0')}</span>
                <div>
                  <h2 className="text-xl font-black uppercase tracking-[-0.025em]">{section.title}</h2>
                  <div className="policy-copy mt-3 space-y-3 text-sm leading-7 text-black/65">{section.content}</div>
                </div>
              </section>
            ))}
          </article>

          <aside className="border border-black bg-black p-6 text-white lg:sticky lg:top-32">
            <div className="flex size-11 items-center justify-center rounded-full bg-[var(--brand-yellow)] text-black"><Headphones className="size-5" /></div>
            <h2 className="mt-5 text-xl font-black uppercase">Precisa de ajuda?</h2>
            <p className="mt-3 text-sm leading-6 text-white/60">Tenha o número do pedido em mãos para agilizar o atendimento.</p>
            <div className="mt-6 space-y-3 border-t border-white/15 pt-5 text-sm">
              <a className="flex items-center gap-3 font-bold transition-colors hover:text-[var(--brand-yellow)]" href="mailto:toca@mundonatal.com.br"><Mail className="size-4" /> Atendimento Mundo do Natal</a>
              <a className="flex items-center gap-3 font-bold transition-colors hover:text-[var(--brand-yellow)]" href="tel:08007044647"><Phone className="size-4" /> 0800 704 4647</a>
            </div>
            <p className="mt-6 text-[10px] uppercase leading-5 tracking-[0.08em] text-white/40">Política atualizada em 28 de outubro de 2026.</p>
          </aside>
        </div>
      </div>
    </main>
  );
}
