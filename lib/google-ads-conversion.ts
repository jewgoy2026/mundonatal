const trackedTransactions = new Set<string>();
const trackingTransactions = new Set<string>();
const googleAdsScriptPromises = new Map<string, Promise<void>>();
const GOOGLE_ADS_DESTINATION_PATTERN = /^(AW-\d+)\/[A-Za-z0-9_-]+$/;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
    mundonatalGoogleAdsInitialized?: Record<string, boolean>;
  }
}

function ensureGoogleTagQueue() {
  window.dataLayer = window.dataLayer ?? [];
  if (typeof window.gtag === 'function') return window.gtag;

  // O gtag.js processa os comandos no formato `arguments`, exatamente como no
  // snippet oficial. Um Array comum pode fazer a tag ser detectada sem que o
  // comando de conversao seja interpretado e enviado.
  window.gtag = function gtag() {
    // eslint-disable-next-line prefer-rest-params -- o gtag.js exige o objeto arguments
    window.dataLayer?.push(arguments);
  };
  return window.gtag;
}

function loadGoogleAdsScript(conversionId: string) {
  const pending = googleAdsScriptPromises.get(conversionId);
  if (pending) return pending;

  const promise = new Promise<void>((resolve, reject) => {
    const scriptId = `mundonatal-google-ads-tag-${conversionId}`;
    const existing = document.getElementById(scriptId) as HTMLScriptElement | null;
    if (existing?.dataset.loaded === 'true') {
      resolve();
      return;
    }

    const script = existing ?? document.createElement('script');
    const handleLoad = () => {
      script.dataset.loaded = 'true';
      resolve();
    };
    const handleError = () => {
      script.remove();
      googleAdsScriptPromises.delete(conversionId);
      reject(new Error('Nao foi possivel carregar a tag do Google Ads.'));
    };

    script.addEventListener('load', handleLoad, { once: true });
    script.addEventListener('error', handleError, { once: true });
    if (!existing) {
      script.id = scriptId;
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${conversionId}`;
      document.head.appendChild(script);
    }
  });

  googleAdsScriptPromises.set(conversionId, promise);
  return promise;
}

/**
 * Envia somente a conversao da cobranca pronta: PIX visivel com QR/copia e cola ou
 * cartao aprovado. O Google Ads nao e carregado antes e nenhum page_view e enviado.
 */
export async function fireGoogleAdsConversion(params: {
  transactionId?: string | null;
  amountCents?: number | null;
  sendTo?: string | null;
  backupSendTo?: string | null;
}): Promise<void> {
  if (typeof window === 'undefined') return;

  const { transactionId, amountCents } = params;
  if (!transactionId) return;
  if (!Number.isSafeInteger(amountCents) || (amountCents ?? 0) <= 0) return;

  const destinations = new Set(
    [params.sendTo?.trim(), params.backupSendTo?.trim()].filter(
      (sendTo): sendTo is string => Boolean(sendTo && GOOGLE_ADS_DESTINATION_PATTERN.test(sendTo)),
    ),
  );

  await Promise.allSettled(
    [...destinations].map(async (sendTo) => {
      const destination = GOOGLE_ADS_DESTINATION_PATTERN.exec(sendTo);
      if (!destination) return;
      const conversionId = destination[1]!;
      const trackingKey = `${sendTo}:${transactionId}`;
      if (trackedTransactions.has(trackingKey) || trackingTransactions.has(trackingKey)) return;

      trackingTransactions.add(trackingKey);
      try {
        const gtag = ensureGoogleTagQueue();
        window.mundonatalGoogleAdsInitialized = window.mundonatalGoogleAdsInitialized ?? {};
        if (!window.mundonatalGoogleAdsInitialized[conversionId]) {
          gtag('js', new Date());
          gtag('config', conversionId, { send_page_view: false });
          window.mundonatalGoogleAdsInitialized[conversionId] = true;
        }

        // Cada destino possui sua propria tag, mas recebe o mesmo valor final e
        // o mesmo identificador unico da cobranca criada pela API.
        await loadGoogleAdsScript(conversionId);

        gtag('event', 'conversion', {
          send_to: sendTo,
          value: (amountCents as number) / 100,
          currency: 'BRL',
          transaction_id: transactionId,
        });

        trackedTransactions.add(trackingKey);
      } finally {
        trackingTransactions.delete(trackingKey);
      }
    }),
  );
}

export const fireGoogleAdsPixConversion = fireGoogleAdsConversion;
