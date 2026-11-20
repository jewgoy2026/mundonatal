const publicStoreHosts = new Set([
  'reinonatalino.shop',
  'www.reinonatalino.shop',
  'mundonatal.oficialtrustpaycard.workers.dev',
  'mundonatal-backup.oficialtrustpaycard.workers.dev',
  'mundodonatal.com',
]);

export const defaultSiteOrigin =
  'https://reinonatalino.shop';

function normalizeHost(value: string | null | undefined) {
  return value?.split(',')[0]?.trim().toLowerCase().replace(/\.$/, '') ?? '';
}

export function getSiteOrigin(
  hostValue: string | null | undefined,
  protocolValue?: string | null,
) {
  const host = normalizeHost(hostValue);

  if (publicStoreHosts.has(host)) {
    return `https://${host}`;
  }

  if (host.startsWith('localhost:') || host.startsWith('127.0.0.1:')) {
    const protocol = protocolValue?.split(',')[0]?.trim() === 'https' ? 'https' : 'http';
    return `${protocol}://${host}`;
  }

  return defaultSiteOrigin;
}
