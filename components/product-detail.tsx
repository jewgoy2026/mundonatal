'use client';

import { useMemo, useState } from 'react';
import { Minus, Plus, ShieldCheck, ShoppingBag, Truck } from 'lucide-react';

import { useCart } from '@/components/cart-provider';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { NativeSelect, NativeSelectOption } from '@/components/ui/native-select';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import {
  formatMoney,
  getCategoryName,
  getVariantImageIndex,
  type Product,
} from '@/lib/catalog';

export function ProductDetail({ product }: { product: Product }) {
  const initialVariant = product.variants.find((entry) => entry.available) ?? product.variants[0];
  const [variantId, setVariantId] = useState(initialVariant.id);
  const [imageIndex, setImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const { addItem } = useCart();

  const selectedVariant = useMemo(
    () => product.variants.find((entry) => entry.id === variantId) ?? initialVariant,
    [product.variants, variantId, initialVariant],
  );

  const discount = selectedVariant.compareAt
    ? Math.round((1 - selectedVariant.price / selectedVariant.compareAt) * 100)
    : 0;

  const selectVariant = (nextVariantId: string) => {
    setVariantId(nextVariantId);
    const nextImageIndex = getVariantImageIndex(product, nextVariantId);
    if (product.images[nextImageIndex]) {
      setImageIndex(nextImageIndex);
    }
  };

  return (
    <div className="mx-auto max-w-[1240px] px-3 py-4 text-white sm:px-8 lg:px-0 lg:py-14">
      <nav className="mb-7 hidden text-xs text-white/45 lg:block" aria-label="Navegação estrutural">
        <a href="/" className="hover:text-white">Início</a>
        <span className="px-2">/</span>
        <a href={`/produtos?categoria=${product.category}`} className="hover:text-white">
          {getCategoryName(product.category)}
        </a>
        <span className="px-2">/</span>
        <span className="text-white">{product.shortName}</span>
      </nav>

      <div className="grid gap-7 lg:grid-cols-[minmax(0,520px)_minmax(390px,1fr)] lg:justify-between lg:gap-12">
        <div className="min-w-0 lg:max-w-[520px]">
          <div className="grid gap-2">
            <div className="order-2 flex gap-2 overflow-x-auto">
              {product.images.map((image, index) => (
                <button
                  type="button"
                  key={image}
                  aria-label={`Ver imagem ${index + 1}`}
                  aria-current={imageIndex === index}
                  onClick={() => setImageIndex(index)}
                  className={`size-16 shrink-0 overflow-hidden rounded-xl border bg-[#1a1715] transition sm:size-20 ${
                    imageIndex === index ? 'border-[var(--brand-yellow)]' : 'border-white/10 hover:border-white/50'
                  }`}
                >
                  <img src={image} alt="" className="h-full w-full object-cover object-center" />
                </button>
              ))}
            </div>
            <div className="order-1 relative flex aspect-square w-full items-center justify-center overflow-hidden rounded-2xl bg-[#1a1715]">
              {product.badge && (
                <span className="absolute left-3 top-3 z-10 -rotate-3 rounded-lg bg-[var(--brand-yellow)] px-3 py-2 text-[10px] font-black uppercase tracking-[0.1em] text-black sm:left-5 sm:top-5">
                  {product.badge}
                </span>
              )}
              <span className="absolute right-4 top-4 z-10 rounded-full border border-[var(--brand-yellow)] px-4 py-2 text-[10px] font-black uppercase tracking-[0.18em] text-[var(--brand-yellow)]">
                {product.goals.includes('premium') ? 'Premium' : product.goals.includes('com-iluminacao') ? 'Iluminado' : 'Natal 2026'}
              </span>
              <img
                src={product.images[imageIndex]}
                alt={product.shortName}
                className="h-full w-full object-contain object-center transition duration-500 hover:scale-[1.025]"
              />
            </div>
          </div>
        </div>

        <div className="lg:sticky lg:top-8 lg:self-start">
          <h1 className="brand-heading text-4xl uppercase leading-[0.9] sm:text-6xl">
            {product.name}
          </h1>
          <div className="mt-3 flex items-center gap-3 text-sm">
            <span className="tracking-[0.12em] text-[var(--brand-yellow)]">★★★★★</span>
            <strong>4,8</strong>
            <span className="text-white/45">14 avaliações</span>
          </div>
          <div className="mt-6 flex flex-wrap items-baseline gap-3">
            <p className="text-3xl font-black">{formatMoney(selectedVariant.price)}</p>
            {selectedVariant.compareAt && selectedVariant.compareAt > selectedVariant.price && (
              <>
                <p className="text-base text-white/35 line-through">{formatMoney(selectedVariant.compareAt)}</p>
                <span className="rounded-full bg-[var(--brand-yellow)] px-2 py-1 text-[10px] font-black uppercase text-black">-{discount}%</span>
              </>
            )}
          </div>
          <p className="mt-2 text-xs text-white/45">À vista no PIX</p>
          <p className="mt-7 text-sm leading-6 text-white/65">{product.description}</p>

          <div className="mt-8">
            <div className="mb-3 flex items-center justify-between">
              <p className="text-xs font-black uppercase tracking-[0.1em]">Escolha uma opção</p>
              <p className={`text-[10px] font-black uppercase ${selectedVariant.available ? 'text-[var(--brand-yellow)]' : 'text-red-400'}`}>
                {selectedVariant.available ? 'Disponível' : 'Esgotado'}
              </p>
            </div>
            {product.variants.length <= 6 ? (
              <div className="flex flex-wrap gap-2">
                {product.variants.map((entry) => (
                  <button
                    type="button"
                    key={entry.id}
                    disabled={!entry.available}
                    onClick={() => selectVariant(entry.id)}
                    className={`rounded-full border px-4 py-3 text-xs font-bold transition disabled:cursor-not-allowed disabled:opacity-35 ${
                      variantId === entry.id
                        ? 'border-[var(--brand-yellow)] bg-[var(--brand-yellow)] text-black'
                        : 'border-white/25 bg-[#1a1715] text-white hover:border-white'
                    }`}
                  >
                    {entry.title}
                  </button>
                ))}
              </div>
            ) : (
              <NativeSelect
                value={variantId}
                onChange={(event) => selectVariant(event.target.value)}
                className="w-full [&_[data-slot=native-select]]:h-12 [&_[data-slot=native-select]]:rounded-full [&_[data-slot=native-select]]:border-white/20 [&_[data-slot=native-select]]:bg-[#1a1715] [&_[data-slot=native-select]]:text-white"
              >
                {product.variants.map((entry) => (
                  <NativeSelectOption key={entry.id} value={entry.id} disabled={!entry.available}>
                    {entry.title}{entry.available ? '' : ' — esgotado'}
                  </NativeSelectOption>
                ))}
              </NativeSelect>
            )}
          </div>

          <div className="mt-7 grid grid-cols-[112px_1fr] gap-3">
            <div className="flex h-13 items-center justify-between rounded-full border border-white/25 bg-[#1a1715] text-white">
              <Button
                variant="ghost"
                size="icon-lg"
                className="h-full rounded-full text-white hover:bg-white/10 hover:text-white"
                aria-label="Diminuir quantidade"
                onClick={() => setQuantity((current) => Math.max(1, current - 1))}
              >
                <Minus className="size-4" />
              </Button>
              <span className="text-sm font-black">{quantity}</span>
              <Button
                variant="ghost"
                size="icon-lg"
                className="h-full rounded-full text-white hover:bg-white/10 hover:text-white"
                aria-label="Aumentar quantidade"
                onClick={() => setQuantity((current) => Math.min(20, current + 1))}
              >
                <Plus className="size-4" />
              </Button>
            </div>
            <Button
              className="h-13 rounded-full bg-[var(--brand-yellow)] text-sm font-black uppercase text-black hover:bg-[#e8ab00]"
              disabled={!selectedVariant.available}
              onClick={() => addItem(product.handle, selectedVariant.id, quantity, product)}
            >
              <ShoppingBag className="size-5" />
              {selectedVariant.available ? 'Adicionar ao carrinho' : 'Produto esgotado'}
            </Button>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-3 text-xs">
            <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-[#1a1715] p-4">
              <Truck className="size-5 shrink-0" />
              <span>Entrega rastreada</span>
            </div>
            <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-[#1a1715] p-4">
              <ShieldCheck className="size-5 shrink-0" />
              <span>Qualidade Mundo do Natal</span>
            </div>
          </div>

          <form className="mt-6 flex gap-2" onSubmit={(event) => event.preventDefault()}>
            <Input
              inputMode="numeric"
              placeholder="Digite seu CEP"
              aria-label="CEP para cálculo do frete"
              className="h-11 rounded-full border-white/20 bg-[#1a1715] px-4 text-white placeholder:text-white/40"
            />
            <Button type="submit" variant="outline" className="h-11 rounded-full border-white/70 bg-transparent px-5 font-black uppercase text-white hover:bg-white hover:text-black">
              Calcular
            </Button>
          </form>

          <Accordion className="mt-8 border-y border-white/20">
            <AccordionItem>
              <AccordionTrigger className="rounded-none py-4 font-black uppercase hover:no-underline">Sobre o produto</AccordionTrigger>
              <AccordionContent className="pb-5 leading-6 text-white/65">{product.description}</AccordionContent>
            </AccordionItem>
            <AccordionItem>
              <AccordionTrigger className="rounded-none py-4 font-black uppercase hover:no-underline">Entrega e devolução</AccordionTrigger>
              <AccordionContent className="pb-5 leading-6 text-white/65">
                Frete grátis para todo o Brasil em 5 a 8 dias úteis ou entrega expressa em 2 a 3 dias úteis por R$ 27,92. Todos os envios possuem rastreio.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
}
