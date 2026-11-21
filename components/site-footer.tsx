export function SiteFooter() {
  return (
    <footer className="border-t border-black/10 bg-[#ece8de] text-black">
      <div className="mx-auto grid max-w-[1360px] gap-12 px-5 py-16 sm:px-8 md:grid-cols-[1.3fr_1fr_1fr]">
        <div><a href="/" className="inline-flex" aria-label="Reino Natalino - início"><img src="/reino-natalino-logo.png" alt="Reino Natalino" width={2172} height={724} className="h-auto w-[220px] max-w-full object-contain sm:w-[260px]" /></a><p className="mt-5 max-w-md text-sm leading-6 text-black/60">Uma curadoria de árvores, luzes e detalhes para transformar cada ambiente em uma celebração.</p><a href="https://www.instagram.com/mundodonatal/" className="mt-6 inline-flex items-center gap-2 text-sm font-bold">Instagram · @mundodonatal</a></div>
        <div><p className="font-bold text-[var(--brand-green-dark)]">Navegue</p><nav className="mt-4 grid gap-3 text-sm text-black/60"><a href="/produtos">Todos os produtos</a><a href="/produtos?categoria=arvores-de-natal">Árvores de Natal</a><a href="/produtos?categoria=iluminacao">Iluminação</a><a href="/carrinho">Carrinho</a></nav></div>
        <div><p className="font-bold text-[var(--brand-green-dark)]">Atendimento</p><nav className="mt-4 grid gap-3 text-sm text-black/60"><a href="/frete-e-entrega">Frete e entrega</a><a href="/trocas-e-devolucoes">Trocas e devoluções</a><a href="mailto:atendimento@mundodonatal.com">Fale conosco</a></nav></div>
      </div>
      <div className="border-t border-black/10 px-5 py-5 text-center text-[10px] uppercase tracking-[0.16em] text-black/45">© 2026 Mundo do Natal · Todos os direitos reservados</div>
    </footer>
  );
}
