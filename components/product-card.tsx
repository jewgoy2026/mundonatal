'use client';

import { Eye, ShoppingBag } from 'lucide-react';

import { useCart } from '@/components/cart-provider';
import { Button } from '@/components/ui/button';
import { formatMoney, type Product } from '@/lib/catalog';

export function ProductCard({
  product,
  featured = false,
}: {
  product: Product;
  featured?: boolean;
}) {
  const { addItem } = useCart();
  const selectedVariant = product.variants.find((entry) => entry.available) ?? product.variants[0];
  const available = product.variants.some((entry) => entry.available);

  return (
    <article
      className={`group flex min-w-0 flex-col ${
        featured ? 'overflow-hidden rounded-2xl border border-[var(--brand-gold)]/25 bg-white text-[var(--brand-red)] shadow-sm' : ''
      }`}
    >
      <a
        href={`/produtos/${product.handle}`}
        className={`relative flex aspect-[4/5] items-center justify-center overflow-hidden ${
          featured ? 'bg-[var(--product-surface)]' : 'bg-[var(--product-surface)]'
        }`}
      >
        {product.badge && (
          <span className="absolute left-3 top-3 z-10 bg-black px-2 py-1 text-[9px] font-black uppercase tracking-[0.1em] text-white sm:left-4 sm:top-4 sm:text-[10px]">
            {product.badge}
          </span>
        )}
        <img
          src={product.images[0]}
          alt={product.shortName}
          className="h-full w-full object-cover object-center transition duration-500 ease-out group-hover:scale-[1.04]"
          loading="lazy"
        />
      </a>
      <div className={`flex flex-1 flex-col ${featured ? 'p-4 sm:p-5' : 'pt-4'}`}>
        <p
          className={`text-[10px] font-black uppercase tracking-[0.12em] ${
            featured ? 'text-[var(--brand-gold-dark)]' : 'text-black/45'
          }`}
        >
          {product.goals.includes('premium') ? 'Premium' : product.goals.includes('com-iluminacao') ? 'Iluminado' : 'Natal 2026'}
        </p>
        <h2 className="mt-1 text-sm font-black leading-tight sm:text-base">
          <a href={`/produtos/${product.handle}`} className="hover:underline">
            {product.shortName}
          </a>
        </h2>
        {featured && (
          <p className="mt-4 line-clamp-2 min-h-10 text-xs leading-5 text-black/55">
            {product.description}
          </p>
        )}
        {featured && product.variants.length > 1 && (
          <div className="mt-3 flex min-h-7 gap-1.5 overflow-hidden">
            {product.variants.slice(0, 3).map((entry, index) => (
              <span
                key={entry.id}
                className={`whitespace-nowrap rounded-full border px-2.5 py-1 text-[9px] ${
                  index === 0
                    ? 'border-[var(--brand-gold)] bg-[var(--brand-gold)]/10 text-[var(--brand-red)]'
                    : 'border-black/10 bg-black/5 text-black/55'
                }`}
              >
                {entry.title}
              </span>
            ))}
          </div>
        )}
        <div className="mt-3 flex flex-wrap items-baseline gap-x-2">
          <p className="text-lg font-black">{formatMoney(selectedVariant.price)}</p>
          {selectedVariant.compareAt && selectedVariant.compareAt > selectedVariant.price && (
            <p className="text-xs text-black/40 line-through">
              {formatMoney(selectedVariant.compareAt)}
            </p>
          )}
        </div>
        <p className="mt-1 text-[11px] text-black/50">À vista no PIX</p>
        <Button
          className={`mt-4 h-10 w-full font-black uppercase ${
            featured
              ? 'rounded-full bg-[var(--brand-red)] text-white hover:bg-[#4f0b1d]'
              : 'rounded-none'
          }`}
          disabled={!available}
          onClick={() => addItem(product.handle, selectedVariant.id, 1, product)}
        >
          <ShoppingBag className="size-4" /> {available ? 'Adicionar' : 'Produto esgotado'}
        </Button>
        {featured && (
          <a
            href={`/produtos/${product.handle}`}
            className="mt-2 flex h-10 items-center justify-center gap-2 rounded-full border border-[var(--brand-red)]/40 text-xs font-black uppercase transition-colors hover:bg-[var(--brand-red)] hover:text-white"
          >
            <Eye className="size-4" /> Ver mais
          </a>
        )}
      </div>
    </article>
  );
}
