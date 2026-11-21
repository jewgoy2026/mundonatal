'use client';

import { useEffect, useSyncExternalStore } from 'react';
import { Minus, Plus, ShoppingBag, Trash2 } from 'lucide-react';

import { Button, buttonVariants } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet';
import {
  formatMoney,
  getVariantImage,
  products,
  replaceCatalogProduct,
  replaceCatalogProducts,
  type CatalogSnapshot,
  type Product,
} from '@/lib/catalog';
import {
  fireGoogleAdsAddToCartConversion,
  fireGoogleAdsBeginCheckoutConversion,
} from '@/lib/google-ads-conversion';
import { cn } from '@/lib/utils';

export type CartItem = {
  productHandle: string;
  variantId: string;
  quantity: number;
};

type CartStore = {
  items: CartItem[];
  cartOpen: boolean;
};

const STORAGE_KEY = 'mundo-do-natal-cart-v1';
const SERVER_SNAPSHOT: CartStore = { items: [], cartOpen: false };
let store: CartStore = SERVER_SNAPSHOT;
let hydrated = false;
const listeners = new Set<() => void>();

function emit() {
  listeners.forEach((listener) => listener());
}

function persist() {
  if (hydrated && typeof window !== 'undefined') {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(store.items));
  }
}

function setStore(next: CartStore) {
  store = next;
  persist();
  emit();
}

function hydrateStore() {
  if (hydrated || typeof window === 'undefined') return;
  hydrated = true;
  try {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    const parsed = saved ? (JSON.parse(saved) as CartItem[]) : [];
    store = { ...store, items: Array.isArray(parsed) ? parsed : [] };
  } catch {
    window.localStorage.removeItem(STORAGE_KEY);
  }
  emit();
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

function getSnapshot() {
  return store;
}

function getServerSnapshot() {
  return SERVER_SNAPSHOT;
}

function getSubtotal(items: CartItem[]) {
  return items.reduce((total, item) => {
    const product = products.find((entry) => entry.handle === item.productHandle);
    const selectedVariant = product?.variants.find((entry) => entry.id === item.variantId);
    return total + (selectedVariant?.price ?? 0) * item.quantity;
  }, 0);
}

function addItem(productHandle: string, variantId: string, quantity = 1, productSnapshot?: Product) {
  if (productSnapshot?.handle === productHandle) {
    replaceCatalogProduct(productSnapshot);
  }
  const product = products.find((entry) => entry.handle === productHandle);
  const selectedVariant = product?.variants.find((entry) => entry.id === variantId);
  if (!product || !selectedVariant?.available) return false;
  const safeQuantity = Math.max(1, Math.min(20, Math.floor(quantity)));
  const existing = store.items.find(
    (item) => item.productHandle === productHandle && item.variantId === variantId,
  );
  const items = existing
    ? store.items.map((item) =>
        item === existing
          ? { ...item, quantity: Math.min(20, item.quantity + safeQuantity) }
          : item,
      )
    : [...store.items, { productHandle, variantId, quantity: safeQuantity }];
  setStore({ items, cartOpen: true });
  fireGoogleAdsAddToCartConversion();
  return true;
}

function updateQuantity(productHandle: string, variantId: string, quantity: number) {
  const items = quantity <= 0
    ? store.items.filter(
        (item) => !(item.productHandle === productHandle && item.variantId === variantId),
      )
    : store.items.map((item) =>
        item.productHandle === productHandle && item.variantId === variantId
          ? { ...item, quantity: Math.min(20, quantity) }
          : item,
      );
  setStore({ ...store, items });
}

function removeItem(productHandle: string, variantId: string) {
  setStore({
    ...store,
    items: store.items.filter(
      (item) => !(item.productHandle === productHandle && item.variantId === variantId),
    ),
  });
}

function setCartOpen(cartOpen: boolean) {
  setStore({ ...store, cartOpen });
}

function clearCart() {
  setStore({ ...store, items: [] });
}

export function useCart() {
  const snapshot = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  useEffect(hydrateStore, []);
  return {
    items: snapshot.items,
    cartOpen: snapshot.cartOpen,
    count: snapshot.items.reduce((total, item) => total + item.quantity, 0),
    subtotal: getSubtotal(snapshot.items),
    addItem,
    updateQuantity,
    removeItem,
    setCartOpen,
    clearCart,
  };
}

export function CartRoot() {
  useEffect(() => {
    const lifecycle = new AbortController();
    void fetch('/api/catalog', {
      headers: { Accept: 'application/json' },
      cache: 'no-store',
      signal: lifecycle.signal,
    })
      .then(async (response) => {
        if (!response.ok) throw new Error(`Catalog API returned ${response.status}`);
        return (await response.json()) as { catalog?: CatalogSnapshot };
      })
      .then((payload) => {
        if (!payload.catalog?.products) return;
        replaceCatalogProducts(payload.catalog.products);
        // useSyncExternalStore só renderiza novamente quando o snapshot muda
        // de referência. Renove o estado para refletir os preços publicados.
        setStore({ ...store });
      })
      .catch(() => undefined);
    return () => lifecycle.abort();
  }, []);

  useEffect(() => {
    const modelContext = (
      document as Document & {
        modelContext?: {
          registerTool: (
            tool: Record<string, unknown>,
            options?: { signal?: AbortSignal },
          ) => void | Promise<void>;
        };
      }
    ).modelContext;
    if (!modelContext?.registerTool) return;

    const lifecycle = new AbortController();
    void Promise.resolve(
      modelContext.registerTool(
        {
          name: 'add_product_to_cart',
          title: 'Adicionar produto ao carrinho',
          description: 'Adiciona uma variante disponível do catálogo Mundo do Natal ao carrinho visível.',
          inputSchema: {
            type: 'object',
            properties: {
              productHandle: { type: 'string' },
              variantId: { type: 'string' },
              quantity: { type: 'integer', minimum: 1, maximum: 20 },
            },
            required: ['productHandle', 'variantId'],
            additionalProperties: false,
          },
          annotations: { readOnlyHint: false, untrustedContentHint: false },
          execute(input: unknown) {
            const value = input as {
              productHandle?: string;
              variantId?: string;
              quantity?: number;
            };
            const product = products.find((entry) => entry.handle === value.productHandle);
            const selectedVariant = product?.variants.find((entry) => entry.id === value.variantId);
            if (!product || !selectedVariant) throw new Error('Produto ou variante inválida.');
            if (!selectedVariant.available) throw new Error('Variante indisponível.');
            const quantity = Math.max(1, Math.min(20, Math.floor(value.quantity ?? 1)));
            addItem(product.handle, selectedVariant.id, quantity);
            return {
              added: true,
              product: product.shortName,
              variant: selectedVariant.title,
              quantity,
              subtotal: formatMoney(getSubtotal(store.items)),
            };
          },
        },
        { signal: lifecycle.signal },
      ),
    ).catch(() => undefined);
    return () => lifecycle.abort();
  }, []);

  return <CartDrawer />;
}

function CartDrawer() {
  const { items, subtotal, cartOpen, setCartOpen, updateQuantity, removeItem } = useCart();

  return (
    <Sheet open={cartOpen} onOpenChange={setCartOpen}>
      <SheetContent className="w-full gap-0 border-white/10 bg-[var(--brand-black)] p-0 text-white data-[side=right]:w-full data-[side=right]:max-w-none data-[side=right]:sm:max-w-[600px]">
        <SheetHeader className="border-b border-white/15 p-6">
          <SheetTitle className="brand-heading text-3xl uppercase text-white sm:text-4xl">
            Seu carrinho
          </SheetTitle>
          <SheetDescription className="text-white/50">Os itens ficam salvos neste dispositivo.</SheetDescription>
        </SheetHeader>

        <div className="flex-1 overflow-y-auto p-5">
          {items.length === 0 ? (
            <div className="flex min-h-72 flex-col items-center justify-center text-center">
              <ShoppingBag className="mb-4 size-10 stroke-1" />
              <p className="text-lg font-black uppercase">Seu carrinho está vazio</p>
              <p className="mt-2 max-w-xs text-sm text-white/55">Escolha seus favoritos e continue preparando o Natal.</p>
              <Button className="mt-6 h-11 rounded-full bg-[var(--brand-yellow)] px-6 font-black uppercase text-black" onClick={() => setCartOpen(false)}>
                Continuar comprando
              </Button>
            </div>
          ) : (
            <div className="space-y-6">
              {items.map((item) => {
                const product = products.find((entry) => entry.handle === item.productHandle);
                const selectedVariant = product?.variants.find((entry) => entry.id === item.variantId);
                if (!product || !selectedVariant) return null;
                return (
                  <article key={`${item.productHandle}-${item.variantId}`} className="grid grid-cols-[104px_minmax(0,1fr)] gap-4 border-b border-white/15 pb-6 sm:grid-cols-[124px_minmax(0,1fr)] sm:gap-5">
                    <a
                      href={`/produtos/${product.handle}`}
                      aria-label={`Abrir ${product.shortName}`}
                      className="flex aspect-square w-full items-center justify-center overflow-hidden rounded-2xl bg-white"
                    >
                      <img src={getVariantImage(product, selectedVariant.id)} alt="" className="h-full w-full object-cover object-center" />
                    </a>
                    <div className="min-w-0">
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <a href={`/produtos/${product.handle}`} className="text-sm font-black leading-tight hover:underline">
                            {product.shortName}
                          </a>
                          <p className="mt-1 text-xs text-white/50">{selectedVariant.title}</p>
                        </div>
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
                      <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
                        <div className="flex h-9 items-center rounded-full border border-white/25">
                          <Button
                            variant="ghost"
                            size="icon-sm"
                            className="h-full rounded-full text-white hover:bg-white/10 hover:text-white"
                            aria-label="Diminuir quantidade"
                            onClick={() => updateQuantity(product.handle, selectedVariant.id, item.quantity - 1)}
                          >
                            <Minus className="size-3" />
                          </Button>
                          <span className="w-8 text-center text-xs font-bold">{item.quantity}</span>
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
                        <p className="whitespace-nowrap text-sm font-black">{formatMoney(selectedVariant.price * item.quantity)}</p>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          )}
        </div>

        {items.length > 0 && (
          <SheetFooter className="border-t border-white/15 bg-[#1a1715] p-6">
            <div className="mb-2 flex items-center justify-between text-lg font-black uppercase">
              <span>Subtotal</span>
              <span>{formatMoney(subtotal)}</span>
            </div>
            <p className="mb-3 text-xs text-white/50">Frete calculado na próxima etapa.</p>
            <a
              href="/checkout"
              onClick={() => {
                fireGoogleAdsBeginCheckoutConversion(subtotal);
                setCartOpen(false);
              }}
              className={cn(
                buttonVariants({ size: 'lg' }),
                'h-12 w-full rounded-full bg-[var(--brand-yellow)] font-black uppercase text-black hover:bg-[#e8ab00]',
              )}
            >
              Ir para o checkout
            </a>
            <a
              href="/carrinho"
              onClick={() => setCartOpen(false)}
              className="py-2 text-center text-xs font-bold uppercase underline underline-offset-4"
            >
              Ver carrinho completo
            </a>
          </SheetFooter>
        )}
      </SheetContent>
    </Sheet>
  );
}
