'use client';

import { useEffect, useRef, useState, type SyntheticEvent } from 'react';
import { Check, Copy, CreditCard, LoaderCircle, LockKeyhole, MapPin, QrCode, ShoppingBag, Truck } from 'lucide-react';
import { QRCodeSVG } from 'qrcode.react';

import { fireGoogleAdsPurchaseConversion } from '@/lib/google-ads-conversion';
import { useCart } from '@/components/cart-provider';
import { Button, buttonVariants } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { formatMoney, getVariantImage, products } from '@/lib/catalog';
import { cn } from '@/lib/utils';

type Address = {
  cep: string;
  street: string;
  number: string;
  complement: string;
  neighborhood: string;
  city: string;
  state: string;
};

const initialAddress: Address = {
  cep: '',
  street: '',
  number: '',
  complement: '',
  neighborhood: '',
  city: '',
  state: '',
};

type PixOrder = {
  orderId: string;
  orderNumber: string;
  status: string;
  totalCents: number;
  discountCents: number;
  pix: {
    transactionId: string;
    copyPaste: string;
    qrCodeUrl?: string | null;
    expiresAt?: string | null;
  } | null;
};

type ShippingMethod = 'STANDARD' | 'EXPRESS';
type PixPaymentMode = 'GATEWAY' | 'STATIC_KEY';

type CardPaymentSettings = {
  provider: 'MERCADO_PAGO';
  enabled: boolean;
  publicKey: string | null;
  threeDsEnabled: boolean;
};

type CardOrder = {
  orderNumber: number;
  status: string;
  statusDetail: string | null;
  totalCents: number;
  providerOrderId: string | null;
  providerPaymentId: string | null;
  challengeUrl: string | null;
};

type CardBrickController = { unmount: () => Promise<void> | void };
type CardBrickFormData = {
  token?: string;
  payment_method_id?: string;
  installments?: number | string;
};
type MercadoPagoBrowser = {
  bricks: () => {
    create: (
      type: 'cardPayment',
      container: string,
      settings: Record<string, unknown>,
    ) => Promise<CardBrickController>;
  };
};

declare global {
  interface Window {
    MercadoPago?: new (publicKey: string, options: { locale: string }) => MercadoPagoBrowser;
  }
}

let mercadoPagoSdkPromise: Promise<void> | null = null;

function loadMercadoPagoSdk() {
  if (window.MercadoPago) return Promise.resolve();
  if (mercadoPagoSdkPromise) return mercadoPagoSdkPromise;
  mercadoPagoSdkPromise = new Promise<void>((resolve, reject) => {
    const existing = document.querySelector<HTMLScriptElement>('script[data-mercadopago-sdk]');
    if (existing) {
      existing.addEventListener('load', () => resolve(), { once: true });
      existing.addEventListener('error', () => reject(new Error('Não foi possível carregar o formulário seguro.')), { once: true });
      return;
    }
    const script = document.createElement('script');
    script.src = 'https://sdk.mercadopago.com/js/v2';
    script.async = true;
    script.dataset.mercadopagoSdk = 'true';
    script.onload = () => resolve();
    script.onerror = () => reject(new Error('Não foi possível carregar o formulário seguro.'));
    document.head.appendChild(script);
  });
  return mercadoPagoSdkPromise;
}

const SHIPPING = {
  STANDARD: { label: 'Frete grátis', deadline: '5 a 8 dias úteis', price: 0 },
  EXPRESS: { label: 'Frete expresso', deadline: '2 a 3 dias úteis', price: 2792 },
} satisfies Record<ShippingMethod, { label: string; deadline: string; price: number }>;

const BRAZILIAN_STATES = new Set([
  'AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG',
  'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO',
]);

function normalizeState(value: string) {
  return value.replace(/[^a-z]/gi, '').toUpperCase().slice(0, 2);
}

function isValidState(value: string) {
  return BRAZILIAN_STATES.has(normalizeState(value));
}

function maskCpf(value: string) {
  return value.replace(/\D/g, '').slice(0, 11).replace(/(\d{3})(\d)/, '$1.$2').replace(/(\d{3})(\d)/, '$1.$2').replace(/(\d{3})(\d{1,2})$/, '$1-$2');
}

function maskPhone(value: string) {
  return value.replace(/\D/g, '').slice(0, 11).replace(/(\d{2})(\d)/, '($1) $2').replace(/(\d{5})(\d)/, '$1-$2');
}

function maskCep(value: string) {
  return value.replace(/\D/g, '').slice(0, 8).replace(/(\d{5})(\d)/, '$1-$2');
}

function checkoutValidationMessage(input: {
  name: string;
  email: string;
  cpf: string;
  phone: string;
  address: Address;
}) {
  const name = input.name.trim();
  const email = input.email.trim();
  const cpf = input.cpf.replace(/\D/g, '');
  const phone = input.phone.replace(/\D/g, '');
  const cep = input.address.cep.replace(/\D/g, '');
  const state = normalizeState(input.address.state);

  if (name.length < 3) return 'Informe seu nome completo.';
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) return 'Informe um e-mail completo e válido, como nome@gmail.com.';
  if (phone.length < 10 || phone.length > 11) return 'Informe um telefone válido com DDD.';
  if (cpf.length !== 11) return 'Informe o CPF completo com 11 números.';
  if (cep.length !== 8) return 'Informe o CEP completo com 8 números.';
  if (input.address.street.trim().length < 2) return 'Confira o nome da rua.';
  if (!input.address.number.trim()) return 'Informe o número do endereço.';
  if (input.address.neighborhood.trim().length < 2) return 'Confira o bairro.';
  if (input.address.city.trim().length < 2) return 'Confira a cidade.';
  if (!isValidState(state)) return 'Confira a UF. Use uma sigla válida com duas letras, como MG ou SP.';
  return null;
}

export function CheckoutShell() {
  const { items, subtotal } = useCart();
  const [review, setReview] = useState(false);
  const [lookupLoading, setLookupLoading] = useState(false);
  const [lookupError, setLookupError] = useState('');
  const [addressError, setAddressError] = useState('');
  const [formError, setFormError] = useState('');
  const [address, setAddress] = useState(initialAddress);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [cpf, setCpf] = useState('');
  const [phone, setPhone] = useState('');
  const [shippingMethod, setShippingMethod] = useState<ShippingMethod>('STANDARD');
  const [pixPaymentMode, setPixPaymentMode] = useState<PixPaymentMode>('GATEWAY');
  const [pixDiscountPercent, setPixDiscountPercent] = useState(0);
  const [pixMaxTransactionCents, setPixMaxTransactionCents] = useState<number | null>(null);
  const [pixLoading, setPixLoading] = useState(false);
  const [pixError, setPixError] = useState('');
  const [pixOrder, setPixOrder] = useState<PixOrder | null>(null);
  const [copied, setCopied] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState<'pix' | 'card'>('pix');
  const [cardPayment, setCardPayment] = useState<CardPaymentSettings>({
    provider: 'MERCADO_PAGO',
    enabled: false,
    publicKey: null,
    threeDsEnabled: true,
  });
  const [cardSettingsLoading, setCardSettingsLoading] = useState(true);
  const [cardOrder, setCardOrder] = useState<CardOrder | null>(null);
  const [cardError, setCardError] = useState('');
  const [cardBrickReady, setCardBrickReady] = useState(false);
  const idempotencyKey = useRef('');
  const cardIdempotencyKey = useRef('');

  useEffect(() => {
    const lifecycle = new AbortController();
    const loadSettings = async () => {
      try {
        let lastError: unknown;
        for (let attempt = 0; attempt < 3; attempt += 1) {
          try {
            const response = await fetch('/api/checkout/settings', {
              cache: 'no-store',
              signal: lifecycle.signal,
            });
            if (!response.ok) throw new Error('Configuração indisponível.');
            const payload = await response.json() as {
              data?: {
                pixDiscountPercent?: number;
                maxTransactionCents?: number | null;
                pixRouting?: { mode?: PixPaymentMode };
                cardPayment?: CardPaymentSettings;
              };
            };
            if (lifecycle.signal.aborted) return;
            setPixDiscountPercent(Number(payload.data?.pixDiscountPercent ?? 0));
            const limit = Number(payload.data?.maxTransactionCents);
            setPixMaxTransactionCents(Number.isFinite(limit) && limit > 0 ? limit : null);
            setPixPaymentMode(payload.data?.pixRouting?.mode === 'STATIC_KEY' ? 'STATIC_KEY' : 'GATEWAY');
            const card = payload.data?.cardPayment;
            const publicKey = typeof card?.publicKey === 'string' ? card.publicKey.trim() : '';
            setCardPayment({
              provider: 'MERCADO_PAGO',
              enabled: card?.enabled === true && publicKey.length >= 20,
              publicKey: publicKey || null,
              threeDsEnabled: true,
            });
            return;
          } catch (error) {
            if (lifecycle.signal.aborted) return;
            lastError = error;
            if (attempt < 2) await new Promise((resolve) => window.setTimeout(resolve, 350 * (attempt + 1)));
          }
        }
        throw lastError;
      } catch {
        // Mantém o PIX utilizável quando a consulta de cartão estiver indisponível.
      } finally {
        if (!lifecycle.signal.aborted) setCardSettingsLoading(false);
      }
    };
    void loadSettings();
    return () => lifecycle.abort();
  }, []);

  const readyPix = pixOrder?.pix ?? null;
  useEffect(() => {
    if (!readyPix?.copyPaste) return;
    // Conversao dispara somente apos a API confirmar a geracao do PIX,
    // com valor final da cobranca e identificador unico do provedor.
    fireGoogleAdsPurchaseConversion({
      transactionId: readyPix.transactionId || undefined,
      amountCents: pixOrder ? pixOrder.totalCents : null,
    });
  }, [readyPix, pixOrder]);

  useEffect(() => {
    if (cardOrder?.status !== 'processed') return;
    const transactionId = cardOrder.providerPaymentId ?? cardOrder.providerOrderId ?? `card-${cardOrder.orderNumber}`;
    fireGoogleAdsPurchaseConversion({
      transactionId,
      amountCents: cardOrder.totalCents,
    });
  }, [cardOrder]);

  const lookupCep = async () => {
    const digits = address.cep.replace(/\D/g, '');
    if (digits.length !== 8) return;
    setLookupLoading(true);
    setLookupError('');
    try {
      const response = await fetch(`https://viacep.com.br/ws/${digits}/json/`);
      const result = (await response.json()) as {
        erro?: boolean;
        logradouro?: string;
        bairro?: string;
        localidade?: string;
        uf?: string;
      };
      if (!response.ok || result.erro) throw new Error('CEP não encontrado.');
      const state = normalizeState(result.uf ?? '');
      if (!isValidState(state)) throw new Error('UF inválida para o CEP informado.');
      setAddress((current) => ({
        ...current,
        street: result.logradouro ?? '',
        neighborhood: result.bairro ?? '',
        city: result.localidade ?? '',
        state,
      }));
      setAddressError('');
    } catch {
      setLookupError('Não foi possível localizar esse CEP.');
    } finally {
      setLookupLoading(false);
    }
  };

  const submit = (event: SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();
    const state = normalizeState(address.state);
    const validationMessage = paymentMethod === 'card' || pixPaymentMode !== 'STATIC_KEY'
      ? checkoutValidationMessage({ name, email, cpf, phone, address: { ...address, state } })
      : null;
    if (validationMessage) {
      setAddress((current) => ({ ...current, state }));
      setAddressError(isValidState(state) ? '' : validationMessage);
      setFormError(validationMessage);
      return;
    }
    setAddress((current) => ({ ...current, state }));
    setAddressError('');
    setFormError('');
    setReview(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const createPix = async () => {
    if (pixLoading || pixOrder?.pix) return;
    const state = normalizeState(address.state);
    const validationMessage = pixPaymentMode !== 'STATIC_KEY'
      ? checkoutValidationMessage({ name, email, cpf, phone, address: { ...address, state } })
      : null;
    if (validationMessage) {
      setPixError(`${validationMessage} Volte e corrija os dados antes de gerar o PIX.`);
      return;
    }
    setPixLoading(true);
    setPixError('');
    if (!idempotencyKey.current) {
      idempotencyKey.current = `urso-${Date.now()}-${Math.random().toString(36).slice(2)}`;
    }
    try {
      const response = await fetch('/api/checkout/pix', {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
          'idempotency-key': idempotencyKey.current,
        },
        body: JSON.stringify({
          items: items.map((item) => ({ variantId: item.variantId, quantity: item.quantity })),
          customer: {
            name,
            document: cpf.replace(/\D/g, ''),
            email: email.trim().toLowerCase(),
            phone: phone.replace(/\D/g, ''),
            address: {
              street: address.street,
              streetNumber: address.number,
              ...(address.complement ? { complement: address.complement } : {}),
              zipCode: address.cep.replace(/\D/g, ''),
              neighborhood: address.neighborhood,
              city: address.city,
              state,
              country: 'BR',
            },
          },
          shippingMethod,
        }),
      });
      const rawBody = await response.text();
      let payload: { data?: PixOrder; error?: { message?: string } } = {};
      try {
        payload = JSON.parse(rawBody) as typeof payload;
      } catch {
        payload = {
          error: {
            message: response.ok
              ? 'A resposta do serviço de PIX foi inválida.'
              : 'O serviço de PIX está temporariamente indisponível. Tente novamente em instantes.',
          },
        };
      }
      if (!response.ok || !payload.data) {
        idempotencyKey.current = '';
        throw new Error(payload.error?.message ?? 'Não foi possível gerar o PIX.');
      }
      setPixOrder(payload.data);
    } catch (error) {
      setPixError(error instanceof Error ? error.message : 'Não foi possível gerar o PIX.');
    } finally {
      setPixLoading(false);
    }
  };

  const copyPix = async () => {
    if (!pixOrder?.pix?.copyPaste) return;
    await navigator.clipboard.writeText(pixOrder.pix.copyPaste);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  };

  const pixDiscountCents = Math.round(subtotal * pixDiscountPercent / 100);
  const estimatedTotalCents = subtotal - pixDiscountCents + SHIPPING[shippingMethod].price;
  const cardTotalCents = subtotal + SHIPPING[shippingMethod].price;
  const exceedsPixLimit = pixMaxTransactionCents !== null && estimatedTotalCents > pixMaxTransactionCents;

  useEffect(() => {
    if (!review || paymentMethod !== 'card' || !cardPayment.enabled || !cardPayment.publicKey || cardOrder) return;
    let active = true;
    let controller: CardBrickController | null = null;
    setCardBrickReady(false);
    setCardError('');

    void loadMercadoPagoSdk()
      .then(async () => {
        if (!active || !window.MercadoPago || !cardPayment.publicKey) return;
        const mercadoPago = new window.MercadoPago(cardPayment.publicKey, { locale: 'pt-BR' });
        controller = await mercadoPago.bricks().create('cardPayment', 'cardPaymentBrick_container', {
          initialization: {
            amount: cardTotalCents / 100,
            payer: { email },
          },
          customization: {
            paymentMethods: { minInstallments: 1, maxInstallments: 12 },
            visual: { style: { theme: 'default' } },
          },
          callbacks: {
            onReady: () => {
              if (active) setCardBrickReady(true);
            },
            onSubmit: async (formData: CardBrickFormData) => {
              setCardError('');
              const token = formData.token;
              const paymentMethodId = formData.payment_method_id;
              const installments = Number(formData.installments);
              if (!token || !paymentMethodId || !Number.isInteger(installments)) {
                const message = 'O Mercado Pago não devolveu os dados tokenizados do cartão.';
                setCardError(message);
                throw new Error(message);
              }
              if (!cardIdempotencyKey.current) {
                cardIdempotencyKey.current = `mundonatal-card-${Date.now()}-${Math.random().toString(36).slice(2)}`;
              }
              const response = await fetch('/api/checkout/card', {
                method: 'POST',
                headers: {
                  'content-type': 'application/json',
                  'idempotency-key': cardIdempotencyKey.current,
                },
                body: JSON.stringify({
                  items: items.map((item) => ({ variantId: item.variantId, quantity: item.quantity })),
                  customer: {
                    name,
                    document: cpf.replace(/\D/g, ''),
                    email,
                    phone: phone.replace(/\D/g, ''),
                    address: {
                      street: address.street,
                      streetNumber: address.number,
                      ...(address.complement ? { complement: address.complement } : {}),
                      zipCode: address.cep.replace(/\D/g, ''),
                      neighborhood: address.neighborhood,
                      city: address.city,
                      state: address.state,
                      country: 'BR',
                    },
                  },
                  shippingMethod,
                  cardToken: token,
                  paymentMethodId,
                  installments,
                }),
              });
              const payload = await response.json() as { data?: CardOrder; error?: { message?: string } };
              if (!response.ok || !payload.data) {
                cardIdempotencyKey.current = '';
                const message = payload.error?.message ?? 'Não foi possível processar o cartão.';
                setCardError(message);
                throw new Error(message);
              }
              setCardOrder(payload.data);
            },
            onError: () => {
              if (active) setCardError('Não foi possível carregar ou validar o formulário seguro do Mercado Pago.');
            },
          },
        });
      })
      .catch((error: unknown) => {
        if (active) setCardError(error instanceof Error ? error.message : 'Não foi possível carregar o formulário seguro.');
      });

    return () => {
      active = false;
      if (controller) void controller.unmount();
    };
  }, [
    review,
    paymentMethod,
    cardPayment.enabled,
    cardPayment.publicKey,
    cardOrder,
    cardTotalCents,
    email,
    items,
    name,
    cpf,
    phone,
    address,
    shippingMethod,
  ]);

if (items.length === 0) {
    return (
      <div className="mx-auto flex min-h-[65vh] max-w-2xl flex-col items-center justify-center px-4 text-center">
        <ShoppingBag className="size-14 stroke-1" />
        <h1 className="mt-6 text-4xl font-black uppercase tracking-[-0.05em]">Seu carrinho está vazio</h1>
        <p className="mt-3 text-sm text-black/55">Adicione produtos antes de iniciar o checkout.</p>
        <a href="/produtos" className={cn(buttonVariants({ size: 'lg' }), 'mt-8 h-12 rounded-none px-7 font-black uppercase')}>Ver produtos</a>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-[1240px] px-4 py-10 sm:px-8 lg:px-12 lg:py-16">
      <div className="mb-10 flex items-center justify-between border-b border-black pb-6">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.16em] text-black/45">Compra segura</p>
          <h1 className="mt-2 text-4xl font-black uppercase tracking-[-0.06em] sm:text-6xl">Checkout</h1>
        </div>
        <LockKeyhole className="size-8 stroke-1" />
      </div>

      {review ? (
        <div className="grid gap-8 lg:grid-cols-[1fr_390px] lg:gap-12">
          <section className="border border-black bg-white p-6 sm:p-9">
            <div className="flex size-12 items-center justify-center rounded-full bg-[var(--brand-yellow)]">
              <Check className="size-6" />
            </div>
            <p className="mt-7 text-xs font-black uppercase tracking-[0.15em] text-black/45">Revisão do pedido</p>
            <h2 className="mt-2 text-3xl font-black uppercase tracking-[-0.04em]">
              {paymentMethod === 'card'
                ? cardOrder?.status === 'processed' ? `Pedido ${cardOrder.orderNumber} aprovado` : 'Pagamento seguro com cartão'
                : pixOrder?.pix ? `PIX do pedido ${pixOrder.orderNumber}` : 'Tudo pronto para gerar o PIX'}
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-6 text-black/60">
              {paymentMethod === 'card'
                ? 'Os dados do cartão são capturados e tokenizados diretamente pelo Mercado Pago; nossa API recebe somente o token.'
                : pixOrder?.pix
                  ? 'Copie o código abaixo e conclua o pagamento no aplicativo do seu banco.'
                  : 'O valor final será recalculado com os preços e descontos publicados no painel.'}
            </p>

            <div className="mt-8 grid gap-5 bg-[var(--brand-cream)] p-5 sm:grid-cols-2">
              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.12em] text-black/45">Cliente</p>
                <p className="mt-2 text-sm font-bold">{name}</p>
                <p className="text-xs text-black/55">{email}</p>
                <p className="text-xs text-black/55">{phone}</p>
              </div>
              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.12em] text-black/45">Entrega</p>
                <p className="mt-2 text-sm font-bold">{address.street}, {address.number}</p>
                <p className="text-xs text-black/55">{address.neighborhood} · {address.city}/{address.state}</p>
                <p className="text-xs text-black/55">CEP {address.cep}</p>
                <p className="mt-2 text-xs font-bold">{SHIPPING[shippingMethod].label} · {SHIPPING[shippingMethod].deadline}</p>
              </div>
            </div>

            {paymentMethod === 'card' ? (
              <section className="mt-7 border border-black p-5 sm:p-6">
                <div className="flex items-center gap-3"><CreditCard className="size-7" /><div><p className="font-black uppercase">Cartão de crédito</p><p className="text-xs text-black/50">Processamento seguro pelo Mercado Pago</p></div></div>
                {cardOrder?.status === 'processed' ? (
                  <output className="mt-5 block border border-emerald-700 bg-emerald-50 p-4 text-sm font-bold text-emerald-800">Pagamento aprovado. Pedido {cardOrder.orderNumber} confirmado.</output>
                ) : cardOrder?.status === 'action_required' && cardOrder.challengeUrl ? (
                  <div className="mt-5">
                    <p className="mb-3 text-sm font-bold">Confirme a compra com seu banco.</p>
                    <iframe title="Autenticação 3DS" src={cardOrder.challengeUrl} className="h-[560px] w-full border border-black" allow="payment" />
                  </div>
                ) : cardOrder ? (
                  <p role="alert" className="mt-5 border border-red-700 bg-red-50 p-4 text-sm font-bold text-red-700">Pagamento não aprovado. Verifique os dados ou tente outro cartão.</p>
                ) : (
                  <>
                    {!cardBrickReady ? <p className="mt-5 flex items-center gap-2 text-sm"><LoaderCircle className="size-4 animate-spin" /> Carregando formulário seguro…</p> : null}
                    <div id="cardPaymentBrick_container" className="mt-5" />
                  </>
                )}
                {cardError ? <p role="alert" className="mt-4 border border-red-700 bg-red-50 p-4 text-sm font-bold text-red-700">{cardError}</p> : null}
              </section>
            ) : (
              <>
                <div className="mt-7 flex items-center gap-4 border border-black p-5">
                  <QrCode className="size-9" />
                  <div><p className="font-black uppercase">PIX</p><p className="text-xs text-black/50">{pixDiscountPercent > 0 ? `${pixDiscountPercent}% de desconto aplicado na sua compra` : 'Pagamento instantâneo e seguro'}</p></div>
                </div>
                {pixOrder?.pix ? (
                  <div className="mt-6 border border-black bg-[var(--brand-cream)] p-4">
                    <div className="mx-auto flex max-w-[270px] flex-col items-center bg-white p-4 text-center" aria-label="QR Code PIX com o valor final do pedido">
                      <QRCodeSVG
                        value={pixOrder.pix.copyPaste}
                        size={238}
                        level="M"
                        marginSize={1}
                        className="h-auto w-full"
                        title="QR Code PIX"
                      />
                      <p className="mt-3 text-xs font-black uppercase">Escaneie para pagar {formatMoney(pixOrder.totalCents)}</p>
                    </div>
                    <p className="mt-4 break-all border border-black/15 bg-white p-3 font-mono text-xs leading-5">{pixOrder.pix.copyPaste}</p>
                    <Button onClick={() => void copyPix()} className="mt-4 h-11 w-full rounded-none bg-black font-black uppercase text-white">
                      {copied ? <Check className="size-4" /> : <Copy className="size-4" />} {copied ? 'Código copiado' : 'Copiar código PIX'}
                    </Button>
                  </div>
                ) : (
                  <Button onClick={() => void createPix()} disabled={pixLoading || exceedsPixLimit} className="mt-6 h-12 w-full rounded-none bg-[var(--brand-yellow)] font-black uppercase text-black">
                    {pixLoading ? <LoaderCircle className="size-4 animate-spin" /> : <QrCode className="size-4" />} {pixLoading ? 'Gerando PIX…' : 'Gerar PIX'}
                  </Button>
                )}
                {exceedsPixLimit ? <p className="mt-3 text-sm font-bold text-red-700" role="alert">O PIX atual aceita pedidos de até {formatMoney(pixMaxTransactionCents)}. Remova um item ou divida a compra.</p> : null}
                {pixError ? <p className="mt-3 text-sm font-bold text-red-700" role="alert">{pixError}</p> : null}
              </>
            )}
            {!cardOrder && !pixOrder?.pix ? <Button variant="ghost" className="mt-3 w-full font-bold uppercase" onClick={() => setReview(false)}>Voltar e editar dados</Button> : null}
          </section>
          <OrderSummary items={items} subtotal={subtotal} pixDiscountPercent={pixDiscountPercent} shippingMethod={shippingMethod} paymentMethod={paymentMethod} />
        </div>
      ) : (
        <form onSubmit={submit} className="grid gap-8 lg:grid-cols-[1fr_390px] lg:gap-12">
          <div className="space-y-6">
            <section className="border border-black bg-white p-5 sm:p-8">
              <h2 className="text-xl font-black uppercase">1. Seus dados</h2>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <label className="sm:col-span-2">
                  <span className="mb-2 block text-xs font-bold">Nome completo</span>
                  <Input required value={name} onChange={(event) => setName(event.target.value)} autoComplete="name" className="h-11 rounded-none border-black" />
                </label>
                <label>
                  <span className="mb-2 block text-xs font-bold">E-mail</span>
                  <Input required type="email" value={email} onChange={(event) => setEmail(event.target.value)} autoComplete="email" className="h-11 rounded-none border-black" />
                </label>
                <label>
                  <span className="mb-2 block text-xs font-bold">Telefone</span>
                  <Input required value={phone} onChange={(event) => setPhone(maskPhone(event.target.value))} inputMode="tel" autoComplete="tel" placeholder="(11) 99999-9999" className="h-11 rounded-none border-black" />
                </label>
                <label>
                  <span className="mb-2 block text-xs font-bold">CPF</span>
                  <Input required value={cpf} onChange={(event) => setCpf(maskCpf(event.target.value))} inputMode="numeric" placeholder="000.000.000-00" className="h-11 rounded-none border-black" />
                </label>
              </div>
            </section>

            <section className="border border-black bg-white p-5 sm:p-8">
              <h2 className="flex items-center gap-2 text-xl font-black uppercase"><MapPin className="size-5" /> 2. Endereço</h2>
              <div className="mt-6 grid gap-4 sm:grid-cols-6">
                <label className="sm:col-span-2">
                  <span className="mb-2 block text-xs font-bold">CEP</span>
                  <div className="relative">
                    <Input
                      required
                      value={address.cep}
                      onChange={(event) => setAddress((current) => ({ ...current, cep: maskCep(event.target.value) }))}
                      onBlur={lookupCep}
                      inputMode="numeric"
                      autoComplete="postal-code"
                      placeholder="00000-000"
                      className="h-11 rounded-none border-black"
                    />
                    {lookupLoading && <LoaderCircle className="absolute right-3 top-3 size-4 animate-spin" />}
                  </div>
                  {lookupError && <p className="mt-1 text-xs text-red-700">{lookupError}</p>}
                </label>
                <label className="sm:col-span-4">
                  <span className="mb-2 block text-xs font-bold">Rua</span>
                  <Input required value={address.street} onChange={(event) => setAddress((current) => ({ ...current, street: event.target.value }))} autoComplete="street-address" className="h-11 rounded-none border-black" />
                </label>
                <label className="sm:col-span-2">
                  <span className="mb-2 block text-xs font-bold">Número</span>
                  <Input required value={address.number} onChange={(event) => setAddress((current) => ({ ...current, number: event.target.value }))} className="h-11 rounded-none border-black" />
                </label>
                <label className="sm:col-span-4">
                  <span className="mb-2 block text-xs font-bold">Complemento</span>
                  <Input value={address.complement} onChange={(event) => setAddress((current) => ({ ...current, complement: event.target.value }))} className="h-11 rounded-none border-black" />
                </label>
                <label className="sm:col-span-3">
                  <span className="mb-2 block text-xs font-bold">Bairro</span>
                  <Input required value={address.neighborhood} onChange={(event) => setAddress((current) => ({ ...current, neighborhood: event.target.value }))} className="h-11 rounded-none border-black" />
                </label>
                <label className="sm:col-span-2">
                  <span className="mb-2 block text-xs font-bold">Cidade</span>
                  <Input required value={address.city} onChange={(event) => setAddress((current) => ({ ...current, city: event.target.value }))} className="h-11 rounded-none border-black" />
                </label>
                <label className="sm:col-span-1">
                  <span className="mb-2 block text-xs font-bold">UF</span>
                  <Input required maxLength={2} value={address.state} onChange={(event) => {
                    const state = normalizeState(event.target.value);
                    setAddress((current) => ({ ...current, state }));
                    if (isValidState(state)) setAddressError('');
                  }} className="h-11 rounded-none border-black" />
                </label>
              </div>
              {addressError ? <p className="mt-3 text-sm font-bold text-red-700" role="alert">{addressError}</p> : null}
            </section>

            <section className="border border-black bg-white p-5 sm:p-8">
              <h2 className="flex items-center gap-2 text-xl font-black uppercase"><Truck className="size-5" /> 3. Entrega</h2>
              <RadioGroup value={shippingMethod} onValueChange={(value) => setShippingMethod(value as ShippingMethod)} className="mt-6 gap-3">
                <label className="flex cursor-pointer items-center justify-between gap-4 border border-black p-5">
                  <span className="flex items-center gap-4">
                    <RadioGroupItem value="STANDARD" />
                    <span><strong className="block uppercase">Frete grátis</strong><small className="text-black/55">5 a 8 dias úteis</small></span>
                  </span>
                  <strong>Grátis</strong>
                </label>
                <label className="flex cursor-pointer items-center justify-between gap-4 border border-black p-5">
                  <span className="flex items-center gap-4">
                    <RadioGroupItem value="EXPRESS" />
                    <span><strong className="block uppercase">Frete expresso</strong><small className="text-black/55">2 a 3 dias úteis</small></span>
                  </span>
                  <strong>{formatMoney(SHIPPING.EXPRESS.price)}</strong>
                </label>
              </RadioGroup>
            </section>

            <section className="border-2 border-black bg-white p-5 sm:p-8">
              <h2 className="flex items-center gap-2 text-xl font-black uppercase"><CreditCard className="size-5" /> 4. Forma de pagamento</h2>
              <RadioGroup value={paymentMethod} onValueChange={(value) => setPaymentMethod(value as 'pix' | 'card')} className="mt-6 gap-3">
                <label className={`flex cursor-pointer items-center justify-between gap-4 border-2 p-5 ${paymentMethod === 'pix' ? 'bg-[var(--brand-cream)]' : 'bg-white'}`}>
                  <span className="flex items-center gap-4">
                    <RadioGroupItem value="pix" />
                    <span><strong className="block uppercase">PIX</strong><small className="text-black/55">{pixDiscountPercent > 0 ? `${pixDiscountPercent}% de desconto · aprovação instantânea` : 'Aprovação instantânea e segura'}</small></span>
                  </span>
                </label>
                <label aria-disabled={!cardPayment.enabled} className={`flex items-center justify-between gap-4 border-2 p-5 ${cardPayment.enabled ? 'cursor-pointer' : 'cursor-not-allowed text-black/45'} ${paymentMethod === 'card' ? 'bg-[var(--brand-cream)]' : 'bg-white'}`}>
                  <span className="flex items-center gap-4">
                    <RadioGroupItem value="card" disabled={!cardPayment.enabled} />
                    <span><strong className="block uppercase">Cartão de crédito</strong><small>{cardSettingsLoading ? 'Validando pagamento seguro…' : cardPayment.enabled ? 'Formulário seguro do Mercado Pago' : 'Credenciais não configuradas para esta loja'}</small></span>
                  </span>
                </label>
              </RadioGroup>
              {paymentMethod === 'pix' ? <div className="mt-5 flex items-center gap-4 border-2 border-black bg-[var(--brand-yellow)] p-5"><QrCode className="size-9 shrink-0" /><span><strong className="block text-lg uppercase">PIX — opção em destaque</strong><small className="text-black/70">{pixDiscountPercent > 0 ? `${pixDiscountPercent}% de desconto sobre o total · ` : ''}aprovação instantânea, direto no app do seu banco</small></span></div> : null}
            </section>
          </div>

          <div>
            <OrderSummary items={items} subtotal={subtotal} pixDiscountPercent={pixDiscountPercent} shippingMethod={shippingMethod} paymentMethod={paymentMethod} />
            {formError ? <p className="mt-4 border border-red-700 bg-red-50 p-3 text-sm font-bold text-red-700" role="alert">{formError}</p> : null}
            <Button type="submit" className="mt-4 h-12 w-full rounded-none bg-[var(--brand-yellow)] font-black uppercase text-black hover:bg-[#e8ab00]">
              Revisar pedido
            </Button>
            <p className="mt-3 flex items-center justify-center gap-2 text-center text-[10px] uppercase tracking-[0.08em] text-black/45">
              <LockKeyhole className="size-3" /> Valores validados pela API antes da cobrança
            </p>
          </div>
        </form>
      )}

    </div>
  );
}

function OrderSummary({
  items,
  subtotal,
  pixDiscountPercent,
  shippingMethod,
  paymentMethod,
}: {
  items: ReturnType<typeof useCart>['items'];
  subtotal: number;
  pixDiscountPercent: number;
  shippingMethod: ShippingMethod;
  paymentMethod: 'pix' | 'card';
}) {
  const pixDiscountCents = paymentMethod === 'pix' ? Math.round(subtotal * pixDiscountPercent / 100) : 0;
  const shipping = SHIPPING[shippingMethod];
  const total = subtotal - pixDiscountCents + shipping.price;
  return (
    <aside className="h-fit border border-black bg-white p-5 sm:p-6 lg:sticky lg:top-36">
      <h2 className="text-lg font-black uppercase">Resumo do pedido</h2>
      <div className="mt-5 max-h-80 space-y-4 overflow-y-auto pr-1">
        {items.map((item) => {
          const product = products.find((entry) => entry.handle === item.productHandle);
          const selectedVariant = product?.variants.find((entry) => entry.id === item.variantId);
          if (!product || !selectedVariant) return null;
          return (
            <div key={`${item.productHandle}-${item.variantId}`} className="grid grid-cols-[64px_1fr_auto] gap-3 border-b border-black/10 pb-4">
              <div className="relative flex aspect-square items-center justify-center bg-[var(--product-surface)] p-2">
                <img src={getVariantImage(product, selectedVariant.id)} alt="" className="h-full w-full object-contain" />
                <span className="absolute -right-1 -top-1 flex size-5 items-center justify-center rounded-full bg-black text-[9px] font-black text-white">{item.quantity}</span>
              </div>
              <div className="min-w-0">
                <p className="text-xs font-black leading-tight">{product.shortName}</p>
                <p className="mt-1 text-[10px] text-black/45">{selectedVariant.title}</p>
              </div>
              <p className="text-xs font-black">{formatMoney(selectedVariant.price * item.quantity)}</p>
            </div>
          );
        })}
      </div>
      <div className="mt-5 space-y-3 text-sm">
        <div className="flex justify-between"><span>Subtotal</span><strong>{formatMoney(subtotal)}</strong></div>
        {paymentMethod === 'pix' && pixDiscountPercent > 0 ? <div className="flex justify-between text-emerald-700"><span>Desconto PIX ({pixDiscountPercent}%)</span><strong>- {formatMoney(pixDiscountCents)}</strong></div> : null}
        <div className="flex justify-between text-black/50"><span>{shipping.label} ({shipping.deadline})</span><span>{shipping.price === 0 ? 'Grátis' : formatMoney(shipping.price)}</span></div>
      </div>
      <div className="my-5 border-t border-black" />
      <div className="flex items-baseline justify-between"><span className="font-black uppercase">{paymentMethod === 'pix' ? 'Total no PIX' : 'Total no cartão'}</span><span className="text-2xl font-black">{formatMoney(total)}</span></div>
    </aside>
  );
}
