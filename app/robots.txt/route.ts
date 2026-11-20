import { getSiteOrigin } from '@/lib/site-origin';

export function GET(request: Request) {
  const requestUrl = new URL(request.url);
  const origin = getSiteOrigin(
    request.headers.get('x-forwarded-host') ?? request.headers.get('host') ?? requestUrl.host,
    request.headers.get('x-forwarded-proto') ?? requestUrl.protocol.replace(':', ''),
  );
  const content = [
    'User-agent: *',
    'Allow: /',
    `Sitemap: ${origin}/sitemap.xml`,
    '',
  ].join('\n');

  return new Response(content, {
    headers: {
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
}
