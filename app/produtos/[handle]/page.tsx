import type { Metadata } from 'next';
import { headers } from 'next/headers';
import { notFound } from 'next/navigation';

import { ProductDetail } from '@/components/product-detail';
import { ProductCard } from '@/components/product-card';
import { fetchCatalog, fetchProduct, products } from '@/lib/catalog';
import { getSiteOrigin } from '@/lib/site-origin';

type ProductPageProps = {
  params: Promise<{ handle: string }>;
};

export function generateStaticParams() {
  return products.map((product) => ({ handle: product.handle }));
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { handle } = await params;
  const [product, requestHeaders] = await Promise.all([fetchProduct(handle), headers()]);
  if (!product) return { title: 'Produto não encontrado | Mundo do Natal' };
  const origin = getSiteOrigin(
    requestHeaders.get('x-forwarded-host') ?? requestHeaders.get('host'),
    requestHeaders.get('x-forwarded-proto'),
  );
  const productUrl = `${origin}/produtos/${encodeURIComponent(product.handle)}`;
  return {
    title: `${product.shortName} | Mundo do Natal`,
    description: product.description,
    alternates: { canonical: productUrl },
    openGraph: {
      title: product.shortName,
      description: product.description,
      url: productUrl,
      images: [{ url: product.images[0], alt: product.shortName }],
    },
    twitter: {
      card: 'summary_large_image',
      title: product.shortName,
      description: product.description,
      images: [product.images[0]],
    },
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { handle } = await params;
  const [product, catalog, requestHeaders] = await Promise.all([
    fetchProduct(handle),
    fetchCatalog(),
    headers(),
  ]);
  if (!product) notFound();
  const origin = getSiteOrigin(
    requestHeaders.get('x-forwarded-host') ?? requestHeaders.get('host'),
    requestHeaders.get('x-forwarded-proto'),
  );
  const primaryVariant =
    product.variants.find((variant) => variant.available) ?? product.variants[0];
  const productUrl = `${origin}/produtos/${encodeURIComponent(product.handle)}`;
  const productStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.description,
    image: product.images,
    url: productUrl,
    ...(primaryVariant?.sku ? { sku: primaryVariant.sku } : {}),
    brand: {
      '@type': 'Brand',
      name: 'Mundo do Natal',
    },
    offers: {
      '@type': 'Offer',
      url: productUrl,
      priceCurrency: 'BRL',
      price: ((primaryVariant?.price ?? 0) / 100).toFixed(2),
      availability: primaryVariant?.available
        ? 'https://schema.org/InStock'
        : 'https://schema.org/OutOfStock',
      itemCondition: 'https://schema.org/NewCondition',
    },
  };
  const related = catalog.products
    .filter((entry) => entry.category === product.category && entry.handle !== product.handle)
    .concat(catalog.products.filter((entry) => entry.category !== product.category))
    .slice(0, 4);

  return (
    <main className="min-h-screen bg-[var(--brand-black)]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(productStructuredData).replace(/</g, '\\u003c'),
        }}
      />
      <ProductDetail product={product} />
      <section className="border-t border-white/10 bg-[var(--brand-black)] px-4 py-16 text-white sm:px-8 lg:px-12 lg:py-20">
        <div className="mx-auto max-w-[1240px]">
          <p className="text-xs font-black uppercase tracking-[0.22em] text-[var(--brand-gold)]">Continue explorando</p>
          <h2 className="brand-heading mt-2 text-4xl sm:text-5xl">Você também pode gostar</h2>
          <div className="mt-10 grid grid-cols-2 gap-x-3 gap-y-10 lg:grid-cols-4 lg:gap-5">
            {related.map((entry) => <ProductCard key={entry.handle} product={entry} featured />)}
          </div>
        </div>
      </section>
    </main>
  );
}
