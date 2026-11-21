const trackedTransactions = new Set<string>();
const GOOGLE_ADS_PURCHASE_DESTINATION = 'AW-18555961500/LqMCCOm927gdEJyBlpBF';
const GOOGLE_ADS_ADD_TO_CART_DESTINATION = 'AW-18555961500/BAf6CNrQwrwdEJyBlpBF';
const GOOGLE_ADS_BEGIN_CHECKOUT_DESTINATION = 'AW-18555961500/R6vbCKHWwrwdEJyBlpBF';

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
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

function wasStored(storageKey: string) {
  try {
    return window.sessionStorage.getItem(storageKey) === '1';
  } catch {
    return false;
  }
}

function storeTrackingKey(storageKey: string) {
  try {
    window.sessionStorage.setItem(storageKey, '1');
  } catch {
    // O rastreamento não pode interromper o checkout se o storage estiver bloqueado.
  }
}

/**
 * Envia somente a conversao da cobranca pronta: PIX visivel com QR/copia e cola ou
 * cartao aprovado. A base global nao envia page_view.
 */
export function fireGoogleAdsPurchaseConversion(params: {
  transactionId?: string | null;
  amountCents?: number | null;
}): void {
  if (typeof window === 'undefined') return;

  const { transactionId, amountCents } = params;
  if (!transactionId) return;
  if (!Number.isSafeInteger(amountCents) || (amountCents ?? 0) <= 0) return;

  const trackingKey = `${GOOGLE_ADS_PURCHASE_DESTINATION}:${transactionId}`;
  const storageKey = `mundonatal:google-ads:purchase:${trackingKey}`;
  if (trackedTransactions.has(trackingKey) || wasStored(storageKey)) return;

  trackedTransactions.add(trackingKey);
  storeTrackingKey(storageKey);
  ensureGoogleTagQueue()('event', 'conversion', {
    send_to: GOOGLE_ADS_PURCHASE_DESTINATION,
    value: (amountCents as number) / 100,
    currency: 'BRL',
    transaction_id: transactionId,
  });
}

/** Dispara uma vez por ação efetiva que adicionou um item ao carrinho. */
export function fireGoogleAdsAddToCartConversion(): void {
  if (typeof window === 'undefined') return;

  ensureGoogleTagQueue()('event', 'conversion', {
    send_to: GOOGLE_ADS_ADD_TO_CART_DESTINATION,
    value: 1.0,
    currency: 'BRL',
  });
}

/** Dispara no clique que encaminha um carrinho válido para o checkout. */
export function fireGoogleAdsBeginCheckoutConversion(amountCents: number): void {
  if (typeof window === 'undefined') return;
  if (!Number.isSafeInteger(amountCents) || amountCents <= 0) return;

  ensureGoogleTagQueue()('event', 'conversion', {
    send_to: GOOGLE_ADS_BEGIN_CHECKOUT_DESTINATION,
    value: amountCents / 100,
    currency: 'BRL',
  });
}
