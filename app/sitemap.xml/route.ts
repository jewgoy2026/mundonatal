import { fetchCatalog } from '@/lib/catalog';
import { getSiteOrigin } from '@/lib/site-origin';

function escapeXml(value: string) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&apos;');
}

export async function GET(request: Request) {
  const requestUrl = new URL(request.url);
  const origin = getSiteOrigin(
    request.headers.get('x-forwarded-host') ?? request.headers.get('host') ?? requestUrl.host,
    request.headers.get('x-forwarded-proto') ?? requestUrl.protocol.replace(':', ''),
  );
  const catalog = await fetchCatalog();
  const paths = [
    '/',
    '/produtos',
    '/frete-e-entrega',
    '/trocas-e-devolucoes',
    ...catalog.products.map((product) => `/produtos/${encodeURIComponent(product.handle)}`),
  ];
  const urls = Array.from(new Set(paths)).map(
    (path) => `  <url>\n    <loc>${escapeXml(`${origin}${path}`)}</loc>\n  </url>`,
  );
  const xml = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...urls,
    '</urlset>',
    '',
  ].join('\n');

  return new Response(xml, {
    headers: {
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
}
