const API_URL = (
  process.env.COMMERCE_API_URL ??
  process.env.NEXT_PUBLIC_CATALOG_API_URL ??
  'https://api-mundonatal.203-161-52-90.nip.io'
).replace(/\/$/, '');

export const dynamic = 'force-dynamic';

export async function GET(request: Request) {
  const siteOrigin = new URL(request.url).origin;
  const response = await fetch(`${API_URL}/v1/checkout/settings`, {
    headers: {
      accept: 'application/json',
      'x-site-origin': siteOrigin,
    },
    cache: 'no-store',
  });
  return new Response(await response.text(), {
    status: response.status,
    headers: {
      'content-type': response.headers.get('content-type') ?? 'application/json',
      'cache-control': 'no-store',
    },
  });
}
