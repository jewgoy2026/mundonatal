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
      <div className="bg-[var(--brand-green-dark)] px-4 py-2 text-center text-[10px] font-bold uppercase tracking-[0.16em] text-white sm:text-[11px] sm:tracking-[0.18em]">
        Natal 2026 · Encontre a decoração que transforma a sua casa
      </div>
      <header className="sticky top-0 z-50 border-b border-black/10 bg-[var(--brand-cream)]/95 text-black backdrop-blur">
        <div className="mx-auto flex h-16 max-w-[1360px] items-center gap-2 px-3 sm:h-20 sm:gap-4 sm:px-8 lg:h-20">
          <Button variant="ghost" size="icon-lg" className="lg:hidden" aria-label="Abrir menu" onClick={() => setMenuOpen(true)}><Menu /></Button>
          <a href="/" className="flex min-w-0 items-center gap-3" aria-label="Mundo do Natal - início">
            <img src={LOGO} alt="Mundo do Natal" className="size-10 rounded-full object-contain sm:size-12" />
            <span className="brand-heading hidden text-2xl leading-none text-[var(--brand-red)] sm:block lg:text-3xl">Mundo do Natal</span>
          </a>
          <nav className="ml-auto hidden items-center gap-5 text-sm font-bold lg:flex">
            <a href="/produtos?colecao=arvores-de-natal" className="hover:text-[var(--brand-green-dark)]">Árvores</a>
            <a href="/produtos?colecao=enfeites" className="hover:text-[var(--brand-green-dark)]">Enfeites</a>
            <a href="/produtos?colecao=luzes" className="hover:text-[var(--brand-green-dark)]">Luzes</a>
            <a href="/produtos" className="rounded-full bg-[var(--brand-green)] px-5 py-2.5 text-white transition hover:bg-[var(--brand-green-dark)]">Todos os produtos</a>
          </nav>
          <div className="ml-auto flex items-center lg:ml-3">
            <Button variant="ghost" size="icon-lg" aria-label="Buscar" onClick={() => setSearchOpen((value) => !value)}><Search /></Button>
            <Button variant="ghost" size="icon-lg" className="relative" aria-label={`Abrir carrinho com ${count} itens`} onClick={() => setCartOpen(true)}>
              <ShoppingBag />
              {count > 0 && <span className="absolute right-0 top-0 flex size-5 items-center justify-center rounded-full bg-[var(--brand-green-dark)] text-[10px] font-bold text-white">{count > 99 ? '99+' : count}</span>}
            </Button>
          </div>
        </div>
        <nav aria-label="Coleções" className="no-scrollbar flex gap-2 overflow-x-auto border-t border-black/10 px-3 py-2 sm:px-6 lg:px-8">
          {collections.map((collection) => (
            <a key={collection.slug} href={`/produtos?colecao=${collection.slug}`} className="shrink-0 rounded-full border border-black/10 bg-white px-3 py-2 text-[10px] font-bold transition hover:border-[var(--brand-green)] hover:bg-[var(--brand-green)] hover:text-white sm:px-4 sm:text-xs">
              {collection.name}
            </a>
          ))}
        </nav>
        {searchOpen && <div className="border-t border-black/10 px-4 py-4"><form action="/produtos" className="mx-auto flex max-w-2xl gap-2"><Input name="q" placeholder="Busque árvores, guirlandas, luzes..." className="h-12 border-black/15 bg-white" /><Button className="h-12 bg-[var(--brand-green)] text-white hover:bg-[var(--brand-green-dark)]">Buscar</Button></form></div>}
      </header>
      {menuOpen && <div className="fixed inset-0 z-[60] overflow-y-auto bg-[var(--brand-cream)] text-black lg:hidden"><div className="flex items-center justify-between border-b border-black/10 p-5"><span className="brand-heading text-2xl text-[var(--brand-red)]">Mundo do Natal</span><Button variant="ghost" size="icon-lg" onClick={() => setMenuOpen(false)}><X /></Button></div><nav className="grid grid-cols-2 gap-2 p-5">{collections.map((collection) => <a key={collection.slug} href={`/produtos?colecao=${collection.slug}`} className="flex min-h-16 items-center rounded-xl border border-black/10 bg-white p-3 text-sm font-bold shadow-sm" onClick={() => setMenuOpen(false)}>{collection.name}</a>)}<a href="/produtos" className="col-span-2 mt-3 rounded-full bg-[var(--brand-green)] px-5 py-4 text-center font-bold text-white" onClick={() => setMenuOpen(false)}>Ver catálogo completo</a></nav></div>}
    </>
  );
}
