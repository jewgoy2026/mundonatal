import {
  categories,
  collections,
  goals,
  products,
  type Product,
  type ProductVariant,
} from '@/lib/generated/catalog-data';

export { categories, collections, goals, products, type Product, type ProductVariant };

export function getVariantImageIndex(product: Product, variantId: string) {
  const variantIndex = product.variants.findIndex((variant) => variant.id === variantId);
  if (variantIndex < 0 || product.images.length < 2) return 0;
  return Math.min(variantIndex, product.images.length - 1);
}

export function getVariantImage(product: Product, variantId: string) {
  return product.images[getVariantImageIndex(product, variantId)] ?? product.images[0];
}

export function formatMoney(value: number) {
  return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value / 100);
}

export function getProduct(handle: string) {
  return products.find((product) => product.handle === handle);
}

export function getCategoryName(slug: string) {
  return categories.find((category) => category.slug === slug)?.name ?? slug;
}

export function getGoalName(slug: string) {
  return goals.find((goal) => goal.slug === slug)?.name ?? slug;
}

export function getCollectionName(slug: string) {
  return collections.find((collection) => collection.slug === slug)?.name ?? slug;
}

export const catalogApiUrl = process.env.NEXT_PUBLIC_CATALOG_API_URL ?? 'https://api-mundonatal.203-161-52-90.nip.io';

export type CatalogSnapshot = {
  products: Product[];
  categories: { slug: string; name: string; productCount?: number }[];
  goals: { slug: string; name: string; productCount?: number }[];
  collections: { slug: string; name: string; productCount?: number }[];
};

export async function fetchCatalog(): Promise<CatalogSnapshot> {
  try {
    const response = await fetch(`${catalogApiUrl}/v1/catalog`, { cache: 'no-store', headers: { Accept: 'application/json' } });
    if (!response.ok) throw new Error(`Catalog API returned ${response.status}`);
    const payload = (await response.json()) as { catalog?: CatalogSnapshot };
    if (!payload.catalog || !Array.isArray(payload.catalog.products)) throw new Error('Invalid catalog payload');
    return payload.catalog;
  } catch {
    return { products, categories: [...categories], goals: [...goals], collections: [...collections] };
  }
}

export async function fetchProduct(handle: string): Promise<Product | undefined> {
  try {
    const response = await fetch(`${catalogApiUrl}/v1/products/${encodeURIComponent(handle)}`, { cache: 'no-store', headers: { Accept: 'application/json' } });
    if (response.status === 404) return undefined;
    if (!response.ok) throw new Error(`Product API returned ${response.status}`);
    const payload = (await response.json()) as { product?: Product };
    if (!payload.product) throw new Error('Invalid product payload');
    return payload.product;
  } catch {
    return getProduct(handle);
  }
}

export function replaceCatalogProducts(nextProducts: Product[]) {
  if (!Array.isArray(nextProducts) || nextProducts.length === 0) return;
  products.splice(0, products.length, ...nextProducts);
}

export function replaceCatalogProduct(nextProduct: Product) {
  const index = products.findIndex((product) => product.handle === nextProduct.handle);
  if (index === -1) products.push(nextProduct);
  else products.splice(index, 1, nextProduct);
}
