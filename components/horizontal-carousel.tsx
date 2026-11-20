'use client';

import { useCallback, useEffect, useRef, useState, type ReactNode } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import { Button } from '@/components/ui/button';

export function HorizontalCarousel({
  children,
  trackClassName = '',
  previousLabel = 'Itens anteriores',
  nextLabel = 'Próximos itens',
}: {
  children: ReactNode;
  trackClassName?: string;
  previousLabel?: string;
  nextLabel?: string;
}) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [canGoBack, setCanGoBack] = useState(false);
  const [canGoForward, setCanGoForward] = useState(true);

  const updateControls = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    setCanGoBack(track.scrollLeft > 4);
    setCanGoForward(track.scrollLeft + track.clientWidth < track.scrollWidth - 4);
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const observer = new ResizeObserver(updateControls);
    observer.observe(track);
    track.addEventListener('scroll', updateControls, { passive: true });
    updateControls();
    return () => {
      observer.disconnect();
      track.removeEventListener('scroll', updateControls);
    };
  }, [updateControls]);

  const move = (direction: number) => {
    const track = trackRef.current;
    if (!track) return;
    track.scrollBy({ left: direction * Math.max(240, track.clientWidth * 0.72), behavior: 'smooth' });
  };

  return (
    <div className="relative">
      <div className="absolute -top-[4.65rem] right-0 flex gap-2">
        <Button
          type="button"
          variant="outline"
          size="icon-lg"
          className="rounded-full border-white/30 bg-transparent text-white hover:bg-white hover:text-black disabled:opacity-25"
          aria-label={previousLabel}
          disabled={!canGoBack}
          onClick={() => move(-1)}
        >
          <ChevronLeft className="size-5" />
        </Button>
        <Button
          type="button"
          size="icon-lg"
          className="rounded-full bg-[var(--brand-yellow)] text-black hover:bg-[#e0b400] disabled:opacity-25"
          aria-label={nextLabel}
          disabled={!canGoForward}
          onClick={() => move(1)}
        >
          <ChevronRight className="size-5" />
        </Button>
      </div>
      <div ref={trackRef} data-carousel-track className={trackClassName}>
        {children}
      </div>
    </div>
  );
}
