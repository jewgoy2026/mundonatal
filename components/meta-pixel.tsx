'use client';

import { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';

type MetaPixelSettings = {
  enabled: boolean;
  pixelId: string | null;
};

type MetaPixelFunction = ((...args: unknown[]) => void) & {
  callMethod?: (...args: unknown[]) => void;
  queue: unknown[][];
  push: MetaPixelFunction;
  loaded: boolean;
  version: string;
};

declare global {
  interface Window {
    fbq?: MetaPixelFunction;
    _fbq?: MetaPixelFunction;
    mundonatalMetaPixelInitialized?: Record<string, boolean>;
  }
}

function ensureMetaPixelQueue() {
  if (window.fbq) return window.fbq;

  const pixel = function (...args: unknown[]) {
    if (pixel.callMethod) pixel.callMethod(...args);
    else pixel.queue.push(args);
  } as MetaPixelFunction;
  pixel.queue = [];
  pixel.push = pixel;
  pixel.loaded = true;
  pixel.version = '2.0';
  window.fbq = pixel;
  window._fbq = pixel;
  return pixel;
}

function loadMetaPixelScript() {
  if (document.getElementById('mundonatal-meta-pixel-script')) return;
  const script = document.createElement('script');
  script.id = 'mundonatal-meta-pixel-script';
  script.async = true;
  script.src = 'https://connect.facebook.net/en_US/fbevents.js';
  document.head.appendChild(script);
}

export function MetaPixel() {
  const pathname = usePathname();
  const [settings, setSettings] = useState<MetaPixelSettings>({ enabled: false, pixelId: null });
  const lastTrackedPage = useRef('');

  useEffect(() => {
    const lifecycle = new AbortController();
    void fetch('/api/checkout/settings', { cache: 'no-store', signal: lifecycle.signal })
      .then(async (response) => {
        if (!response.ok) throw new Error('Configuração indisponível.');
        return response.json() as Promise<{ data?: { metaPixel?: MetaPixelSettings } }>;
      })
      .then((payload) => {
        const metaPixel = payload.data?.metaPixel;
        const pixelId = typeof metaPixel?.pixelId === 'string' && /^\d{5,30}$/.test(metaPixel.pixelId)
          ? metaPixel.pixelId
          : null;
        setSettings({ enabled: metaPixel?.enabled === true && Boolean(pixelId), pixelId });
      })
      .catch(() => undefined);
    return () => lifecycle.abort();
  }, []);

  useEffect(() => {
    const pixelId = settings.pixelId;
    if (!settings.enabled || !pixelId) return;

    const fbq = ensureMetaPixelQueue();
    window.mundonatalMetaPixelInitialized = window.mundonatalMetaPixelInitialized ?? {};
    if (!window.mundonatalMetaPixelInitialized[pixelId]) {
      fbq('init', pixelId);
      window.mundonatalMetaPixelInitialized[pixelId] = true;
      loadMetaPixelScript();
    }

    const pageKey = `${pixelId}:${pathname}`;
    if (lastTrackedPage.current === pageKey) return;
    lastTrackedPage.current = pageKey;
    fbq('track', 'PageView');
  }, [pathname, settings]);

  return null;
}
