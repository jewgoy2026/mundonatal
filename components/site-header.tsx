'use client';

import { useState } from 'react';
import { Menu, Search, ShoppingBag, X } from 'lucide-react';
import { useCart } from '@/components/cart-provider';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { collections } from '@/lib/catalog';

const LOGO = 'https://mundodonatal.com/cdn/shop/t/10/assets/logo-mundo-do-natal-favicon-v1.png?v=145563815753261193141794234297';

export function SiteHeader() {
  const { count, setCartOpen } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <>
      <div className="bg-[var(--brand-red)] px-4 py-2 text-center text-[11px] font-bold uppercase tracking-[0.18em] text-white">
        Natal 2026 · Encontre a decoração que transforma a sua casa
      </div>
      <header className="sticky top-0 z-50 border-b border-[var(--brand-gold)]/35 bg-[var(--brand-cream)]/95 text-[var(--brand-red)] backdrop-blur">
        <div className="mx-auto flex h-20 max-w-[1360px] items-center gap-4 px-4 sm:px-8 lg:h-24">
          <Button variant="ghost" size="icon-lg" className="lg:hidden" aria-label="Abrir menu" onClick={() => setMenuOpen(true)}><Menu /></Button>
          <a href="/" className="flex min-w-0 items-center gap-3" aria-label="Mundo do Natal - início">
            <img src={LOGO} alt="Mundo do Natal" className="size-12 rounded-full object-contain sm:size-14" />
            <span className="brand-heading hidden text-2xl leading-none sm:block lg:text-3xl">Mundo do Natal</span>
          </a>
          <nav className="ml-auto hidden items-center gap-6 text-sm font-bold lg:flex">
            <a href="/produtos?colecao=arvores-de-natal" className="hover:text-[var(--brand-gold-dark)]">Árvores</a>
            <a href="/produtos?colecao=enfeites" className="hover:text-[var(--brand-gold-dark)]">Enfeites</a>
            <a href="/produtos?colecao=luzes" className="hover:text-[var(--brand-gold-dark)]">Luzes</a>
            <a href="/produtos" className="hover:text-[var(--brand-gold-dark)]">Todos os produtos</a>
          </nav>
          <div className="ml-auto flex items-center lg:ml-3">
            <Button variant="ghost" size="icon-lg" aria-label="Buscar" onClick={() => setSearchOpen((value) => !value)}><Search /></Button>
            <Button variant="ghost" size="icon-lg" className="relative" aria-label={`Abrir carrinho com ${count} itens`} onClick={() => setCartOpen(true)}>
              <ShoppingBag />
              {count > 0 && <span className="absolute right-0 top-0 flex size-5 items-center justify-center rounded-full bg-[var(--brand-red)] text-[10px] font-bold text-white">{count > 99 ? '99+' : count}</span>}
            </Button>
          </div>
        </div>
        {searchOpen && <div className="border-t border-[var(--brand-gold)]/25 px-4 py-4"><form action="/produtos" className="mx-auto flex max-w-2xl gap-2"><Input name="q" placeholder="Busque árvores, guirlandas, luzes..." className="h-12 border-[var(--brand-red)]/25 bg-white" /><Button className="h-12 bg-[var(--brand-red)] text-white">Buscar</Button></form></div>}
      </header>
      {menuOpen && <div className="fixed inset-0 z-[60] overflow-y-auto bg-[var(--brand-red)] text-white lg:hidden"><div className="flex items-center justify-between border-b border-white/15 p-5"><span className="brand-heading text-2xl">Mundo do Natal</span><Button variant="ghost" size="icon-lg" className="text-white" onClick={() => setMenuOpen(false)}><X /></Button></div><nav className="grid gap-1 p-5">{collections.map((collection) => <a key={collection.slug} href={`/produtos?colecao=${collection.slug}`} className="border-b border-white/15 py-4 text-lg font-bold" onClick={() => setMenuOpen(false)}>{collection.name}</a>)}<a href="/produtos" className="mt-4 rounded-full bg-[var(--brand-gold)] px-5 py-4 text-center font-bold text-[var(--brand-red)]">Ver catálogo completo</a></nav></div>}
    </>
  );
}
