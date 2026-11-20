'use client';

import { useEffect, useMemo, useState } from 'react';
import { Search, SlidersHorizontal, X } from 'lucide-react';

import { ProductCard } from '@/components/product-card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { NativeSelect, NativeSelectOption } from '@/components/ui/native-select';
import { categories, goals, type Product } from '@/lib/catalog';

type SortMode = 'relevancia' | 'menor-preco' | 'maior-preco' | 'az';

export function ProductListing({ sourceProducts }: { sourceProducts: Product[] }) {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('todos');
  const [goal, setGoal] = useState('todos');
  const [sort, setSort] = useState<SortMode>('relevancia');
  const [filtersOpen, setFiltersOpen] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setQuery(params.get('q') ?? '');
    setCategory(params.get('categoria') ?? 'todos');
    setGoal(params.get('objetivo') ?? 'todos');
  }, []);

  const filtered = useMemo(() => {
    const normalizedQuery = query
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .toLowerCase()
      .trim();
    const result = sourceProducts.filter((product) => {
      const searchable = `${product.name} ${product.description}`
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .toLowerCase();
      return (
        (!normalizedQuery || searchable.includes(normalizedQuery)) &&
        (category === 'todos' || product.category === category) &&
        (goal === 'todos' || product.goals.includes(goal))
      );
    });
    return [...result].sort((a, b) => {
      const priceA = Math.min(...a.variants.map((entry) => entry.price));
      const priceB = Math.min(...b.variants.map((entry) => entry.price));
      if (sort === 'menor-preco') return priceA - priceB;
      if (sort === 'maior-preco') return priceB - priceA;
      if (sort === 'az') return a.shortName.localeCompare(b.shortName, 'pt-BR');
      return sourceProducts.indexOf(a) - sourceProducts.indexOf(b);
    });
  }, [sourceProducts, query, category, goal, sort]);

  const clearFilters = () => {
    setQuery('');
    setCategory('todos');
    setGoal('todos');
    window.history.replaceState({}, '', '/produtos');
  };

  return (
    <div className="mx-auto max-w-[1240px] px-4 pb-20 text-white sm:px-8 lg:px-0">
      <div className="flex items-center justify-between gap-4 py-4 lg:hidden">
        <p className="text-sm text-white/70">Ordenar</p>
        <NativeSelect
          aria-label="Ordenar produtos"
          value={sort}
          onChange={(event) => setSort(event.target.value as SortMode)}
          className="w-44 [&_[data-slot=native-select]]:h-11 [&_[data-slot=native-select]]:rounded-full [&_[data-slot=native-select]]:border-0 [&_[data-slot=native-select]]:bg-white [&_[data-slot=native-select]]:px-5 [&_[data-slot=native-select]]:font-black [&_[data-slot=native-select]]:uppercase [&_[data-slot=native-select]]:text-black"
        >
          <NativeSelectOption value="relevancia">Mais relevantes</NativeSelectOption>
          <NativeSelectOption value="menor-preco">Menor preço</NativeSelectOption>
          <NativeSelectOption value="maior-preco">Maior preço</NativeSelectOption>
          <NativeSelectOption value="az">Ordem A–Z</NativeSelectOption>
        </NativeSelect>
      </div>

      <div className="flex items-center justify-between gap-4 pb-5 lg:hidden">
        <p className="text-sm font-black">{filtered.length} resultado{filtered.length === 1 ? '' : 's'}</p>
        <Button
          variant="outline"
          className="rounded-full border-white/70 bg-transparent px-5 font-black uppercase text-white hover:bg-white hover:text-black"
          onClick={() => setFiltersOpen((current) => !current)}
        >
          <SlidersHorizontal className="size-4" /> Filtros
        </Button>
      </div>

      <div className={`${filtersOpen ? 'grid' : 'hidden'} gap-4 border-y border-white/15 py-5 lg:grid lg:grid-cols-[1fr_auto_auto_auto] lg:items-center`}>
        <label className="relative block">
          <span className="sr-only">Buscar no catálogo</span>
          <Search className="absolute left-4 top-1/2 size-4 -translate-y-1/2 text-white/45" />
          <Input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Buscar no catálogo"
            className="h-11 rounded-full border-white/15 bg-[#1a1715] pl-11 text-white placeholder:text-white/40"
          />
        </label>

        <NativeSelect
          aria-label="Filtrar por categoria"
          value={category}
          onChange={(event) => setCategory(event.target.value)}
          className="w-full lg:w-52 [&_[data-slot=native-select]]:h-11 [&_[data-slot=native-select]]:rounded-full [&_[data-slot=native-select]]:border-white/15 [&_[data-slot=native-select]]:bg-[#1a1715] [&_[data-slot=native-select]]:px-4 [&_[data-slot=native-select]]:font-bold [&_[data-slot=native-select]]:text-white"
        >
          <NativeSelectOption value="todos">Todas as categorias</NativeSelectOption>
          {categories.map((entry) => (
            <NativeSelectOption key={entry.slug} value={entry.slug}>{entry.name}</NativeSelectOption>
          ))}
        </NativeSelect>

        <NativeSelect
          aria-label="Filtrar por coleção"
          value={goal}
          onChange={(event) => setGoal(event.target.value)}
          className="w-full lg:w-52 [&_[data-slot=native-select]]:h-11 [&_[data-slot=native-select]]:rounded-full [&_[data-slot=native-select]]:border-white/15 [&_[data-slot=native-select]]:bg-[#1a1715] [&_[data-slot=native-select]]:px-4 [&_[data-slot=native-select]]:font-bold [&_[data-slot=native-select]]:text-white"
        >
          <NativeSelectOption value="todos">Todas as coleções</NativeSelectOption>
          {goals.map((entry) => (
            <NativeSelectOption key={entry.slug} value={entry.slug}>{entry.name}</NativeSelectOption>
          ))}
        </NativeSelect>

        <NativeSelect
          aria-label="Ordenar produtos"
          value={sort}
          onChange={(event) => setSort(event.target.value as SortMode)}
          className="hidden w-full lg:block lg:w-48 [&_[data-slot=native-select]]:h-11 [&_[data-slot=native-select]]:rounded-full [&_[data-slot=native-select]]:border-white/15 [&_[data-slot=native-select]]:bg-[#1a1715] [&_[data-slot=native-select]]:px-4 [&_[data-slot=native-select]]:font-bold [&_[data-slot=native-select]]:text-white"
        >
          <NativeSelectOption value="relevancia">Mais relevantes</NativeSelectOption>
          <NativeSelectOption value="menor-preco">Menor preço</NativeSelectOption>
          <NativeSelectOption value="maior-preco">Maior preço</NativeSelectOption>
          <NativeSelectOption value="az">Ordem A–Z</NativeSelectOption>
        </NativeSelect>
      </div>

      <div className="hidden items-center justify-between gap-4 py-7 lg:flex">
        <p className="flex items-center gap-2 text-sm font-black uppercase">
          <SlidersHorizontal className="size-4" /> {filtered.length} resultado{filtered.length === 1 ? '' : 's'}
        </p>
        {(query || category !== 'todos' || goal !== 'todos') && (
          <Button variant="ghost" className="font-bold uppercase text-white hover:bg-white/10 hover:text-white" onClick={clearFilters}>
            <X className="size-4" /> Limpar tudo
          </Button>
        )}
      </div>

      {filtered.length > 0 ? (
        <div className="mt-12 grid grid-cols-2 gap-3 pb-8 md:grid-cols-3 lg:mt-0 lg:grid-cols-4 lg:gap-x-5 lg:gap-y-8">
          {filtered.map((product) => <ProductCard key={product.handle} product={product} featured />)}
        </div>
      ) : (
        <div className="flex min-h-80 flex-col items-center justify-center rounded-2xl border border-white/15 bg-[#1a1715] px-6 text-center">
          <Search className="size-10 stroke-1" />
          <h2 className="mt-5 text-2xl font-black uppercase">Nenhum produto encontrado</h2>
          <p className="mt-2 text-sm text-white/50">Tente outro termo ou limpe os filtros.</p>
          <Button className="mt-6 h-11 rounded-full bg-[var(--brand-yellow)] px-6 font-black uppercase text-black" onClick={clearFilters}>Limpar filtros</Button>
        </div>
      )}
    </div>
  );
}
