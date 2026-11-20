const API_URL = (
  process.env.COMMERCE_API_URL ??
  process.env.NEXT_PUBLIC_CATALOG_API_URL ??
  'https://api-mundonatal.203-161-52-90.nip.io'
).replace(/\/$/, '');

export const dynamic = 'force-dynamic';

export async function POST(request: Request) {
  const origin = request.headers.get('origin');
  if (!origin || origin !== new URL(request.url).origin) {
    return Response.json({ error: { code: 'invalid_origin', message: 'Origem inválida.' } }, { status: 403 });
  }
  const checkoutKey = process.env.MUNDONATAL_CHECKOUT_API_KEY;
  if (!checkoutKey) {
    return Response.json({ error: { code: 'checkout_unavailable', message: 'Checkout ainda não configurado.' } }, { status: 503 });
  }
  const idempotencyKey = request.headers.get('idempotency-key');
  if (!idempotencyKey) {
    return Response.json({ error: { code: 'missing_idempotency_key', message: 'Identificador do pedido ausente.' } }, { status: 400 });
  }
  const response = await fetch(`${API_URL}/v1/checkout/card`, {
    method: 'POST',
    headers: {
      accept: 'application/json',
      'content-type': 'application/json',
      'idempotency-key': idempotencyKey,
      'x-checkout-key': checkoutKey,
      'x-site-origin': origin,
    },
    body: await request.text(),
  });
  const rawBody = await response.text();
  let body = rawBody;
  try {
    JSON.parse(rawBody);
  } catch {
    body = JSON.stringify({
      error: {
        code: 'checkout_upstream_error',
        message: 'O serviço de cartão está temporariamente indisponível.',
      },
    });
  }
  return new Response(body, {
    status: response.status,
    headers: {
      'content-type': 'application/json; charset=utf-8',
      'cache-control': 'no-store',
    },
  });
}
