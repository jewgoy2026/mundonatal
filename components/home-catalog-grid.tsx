'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

import { ProductCard } from '@/components/product-card';
import { Button } from '@/components/ui/button';
import type { Product } from '@/lib/catalog';

const PAGE_SIZE = 24;

export function HomeCatalogGrid({ products }: { products: Product[] }) {
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const visibleProducts = products.slice(0, visibleCount);
  const hasMore = visibleCount < products.length;

  return (
    <>
      <div className="grid grid-cols-2 gap-3 sm:gap-5 md:grid-cols-3 lg:grid-cols-4">
        {visibleProducts.map((product) => (
          <ProductCard key={product.handle} product={product} featured />
        ))}
      </div>
      {hasMore && (
        <div className="mt-10 flex justify-center">
          <Button
            type="button"
            className="h-12 rounded-full bg-[var(--brand-green)] px-7 font-black uppercase text-white hover:bg-[var(--brand-green-dark)]"
            onClick={() => setVisibleCount((current) => Math.min(current + PAGE_SIZE, products.length))}
          >
            <ChevronDown className="size-4" />
            Mostrar mais produtos ({products.length - visibleCount})
          </Button>
        </div>
      )}
    </>
  );
}
