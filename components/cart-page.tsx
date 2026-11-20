'use client';

import { Minus, Plus, ShoppingBag, Trash2 } from 'lucide-react';

import { useCart } from '@/components/cart-provider';
import { Button, buttonVariants } from '@/components/ui/button';
import { formatMoney, getVariantImage, products } from '@/lib/catalog';
import { cn } from '@/lib/utils';

export function CartPage() {
  const { items, subtotal, updateQuantity, removeItem } = useCart();

  if (items.length === 0) {
    return (
      <div className="mx-auto flex min-h-[65vh] max-w-[1440px] flex-col items-center justify-center px-4 py-20 text-center">
        <ShoppingBag className="size-14 stroke-1" />
        <h1 className="brand-heading mt-6 text-4xl uppercase">Seu carrinho está vazio</h1>
        <p className="mt-3 max-w-md text-sm text-white/55">A decoração perfeita ainda está esperando por você.</p>
        <a href="/produtos" className={cn(buttonVariants({ size: 'lg' }), 'mt-8 h-12 rounded-full bg-[var(--brand-yellow)] px-7 font-black uppercase text-black')}>
          Ver produtos
        </a>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-[1440px] px-4 py-12 sm:px-8 lg:px-12 lg:py-20">
      <p className="text-xs font-black uppercase tracking-[0.22em] text-[var(--brand-yellow)]">Seu Natal</p>
      <h1 className="brand-heading mt-2 text-5xl uppercase sm:text-7xl">Carrinho</h1>

      <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_390px] lg:gap-16">
        <section className="space-y-0 border-t border-white/20">
          {items.map((item) => {
            const product = products.find((entry) => entry.handle === item.productHandle);
            const selectedVariant = product?.variants.find((entry) => entry.id === item.variantId);
            if (!product || !selectedVariant) return null;
            return (
              <article key={`${item.productHandle}-${item.variantId}`} className="grid grid-cols-[112px_minmax(0,1fr)] gap-4 border-b border-white/20 py-5 sm:grid-cols-[160px_minmax(0,1fr)] sm:gap-7 sm:py-7">
                <a href={`/produtos/${product.handle}`} aria-label={`Abrir ${product.shortName}`} className="flex aspect-square w-full items-center justify-center overflow-hidden rounded-2xl bg-white">
                  <img src={getVariantImage(product, selectedVariant.id)} alt="" className="h-full w-full object-cover object-center" />
                </a>
                <div className="flex min-w-0 flex-col justify-between gap-4 sm:flex-row sm:items-center">
                  <div className="min-w-0">
                    <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-[var(--brand-yellow)]">Mundo do Natal</p>
                    <h2 className="mt-1 text-sm font-black leading-tight sm:text-lg">
                      <a href={`/produtos/${product.handle}`} className="hover:underline">{product.shortName}</a>
                    </h2>
                    <p className="mt-2 text-xs text-white/50">{selectedVariant.title}</p>
                    <p className="mt-3 font-black sm:hidden">{formatMoney(selectedVariant.price * item.quantity)}</p>
                  </div>
                  <div className="flex items-center justify-between gap-5 sm:justify-end">
                    <div className="flex h-10 items-center rounded-full border border-white/25 bg-[#1a1715]">
                      <Button
                        variant="ghost"
                        size="icon-sm"
                        className="h-full rounded-full text-white hover:bg-white/10 hover:text-white"
                        aria-label="Diminuir quantidade"
                        onClick={() => updateQuantity(product.handle, selectedVariant.id, item.quantity - 1)}
                      >
                        <Minus className="size-3" />
                      </Button>
                      <span className="w-8 text-center text-xs font-black">{item.quantity}</span>
                      <Button
                        variant="ghost"
                        size="icon-sm"
                        className="h-full rounded-full text-white hover:bg-white/10 hover:text-white"
                        aria-label="Aumentar quantidade"
                        onClick={() => updateQuantity(product.handle, selectedVariant.id, item.quantity + 1)}
                      >
                        <Plus className="size-3" />
                      </Button>
                    </div>
                    <p className="hidden w-24 text-right font-black sm:block">{formatMoney(selectedVariant.price * item.quantity)}</p>
                    <Button
                      variant="ghost"
                      size="icon-sm"
                      className="text-white hover:bg-white/10 hover:text-white"
                      aria-label={`Remover ${product.shortName}`}
                      onClick={() => removeItem(product.handle, selectedVariant.id)}
                    >
                      <Trash2 className="size-4" />
                    </Button>
                  </div>
                </div>
              </article>
            );
          })}
        </section>

        <aside className="h-fit rounded-2xl border border-white/15 bg-[#1a1715] p-6 lg:sticky lg:top-8">
          <h2 className="brand-heading text-2xl uppercase">Resumo</h2>
          <div className="mt-6 space-y-3 text-sm">
            <div className="flex justify-between"><span>Subtotal</span><strong>{formatMoney(subtotal)}</strong></div>
            <div className="flex justify-between text-white/50"><span>Frete</span><span>Calculado no checkout</span></div>
          </div>
          <div className="my-6 border-t border-white/20" />
          <div className="flex items-baseline justify-between">
            <span className="font-black uppercase">Total parcial</span>
            <span className="text-2xl font-black">{formatMoney(subtotal)}</span>
          </div>

          <div className="mt-7 rounded-xl bg-black/35 p-4">
            <p className="text-xs font-bold">Frete grátis para todo o Brasil em 5 a 8 dias úteis.</p>
            <p className="mt-2 text-[11px] text-white/55">Expresso em 2 a 3 dias úteis por R$ 27,92.</p>
          </div>

          <a href="/checkout" className={cn(buttonVariants({ size: 'lg' }), 'mt-6 h-12 w-full rounded-full bg-[var(--brand-yellow)] font-black uppercase text-black hover:bg-[#e8ab00]')}>
            Continuar para checkout
          </a>
          <a href="/produtos" className="mt-4 block text-center text-xs font-bold uppercase underline underline-offset-4">Continuar comprando</a>
        </aside>
      </div>
    </div>
  );
}
