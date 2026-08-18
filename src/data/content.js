export const HERO_DELIVERY = {
  endpoint: 'POST /stripe/webhook',
  status: 'Delivered',
  code: '200 OK',
  latency: '142ms',
  payload: {
    event: 'payment.succeeded',
    customer: 'cus_••••••',
    amount: 2499,
    currency: 'usd',
  },
  headers: {
    'content-type': 'application/json',
    'stripe-signature': 't=1712…,v1=8a3c…',
  },
};

export const WEBHOOKS = [
  {
    id: 'wh_01',
    source: 'stripe',
    event: 'payment.succeeded',
    status: 200,
    time: '2s ago',
    method: 'POST',
    latency: '142ms',
    payload: {
      event: 'payment.succeeded',
      customer: 'cus_••••••',
      amount: 2499,
      currency: 'usd',
    },
    headers: {
      'content-type': 'application/json',
      'stripe-signature': 't=1712…,v1=8a3c…',
    },
  },
  {
    id: 'wh_02',
    source: 'github',
    event: 'push',
    status: 200,
    time: '14s ago',
    method: 'POST',
    latency: '98ms',
    payload: {
      ref: 'refs/heads/main',
      repository: { full_name: 'acme/api-gateway' },
      commits: [{ message: 'fix: webhook retry logic' }],
    },
    headers: {
      'content-type': 'application/json',
      'x-github-event': 'push',
    },
  },
  {
    id: 'wh_03',
    source: 'shopify',
    event: 'orders/create',
    status: 422,
    time: '1m ago',
    method: 'POST',
    latency: '—',
    payload: {
      id: 5829103,
      order_number: 1042,
      total_price: '129.00',
      note: 'Signature mismatch — inspect headers',
    },
    headers: {
      'content-type': 'application/json',
      'x-shopify-hmac-sha256': 'invalid',
    },
  },
];

export const FEATURES = [
  {
    id: 'capture',
    title: 'Capture',
    description: 'Persistent endpoints capture webhook deliveries reliably.',
  },
  {
    id: 'inspect',
    title: 'Inspect',
    description: 'See payloads, headers, responses, and timing in one place.',
  },
  {
    id: 'replay',
    title: 'Replay',
    description: 'Replay failed deliveries without manually reproducing the event.',
  },
];

export const STEPS = [
  {
    id: '01',
    title: 'Connect',
    description: 'Point your webhook provider at a Latch endpoint.',
  },
  {
    id: '02',
    title: 'Inspect',
    description: 'See exactly what was delivered and what went wrong.',
  },
  {
    id: '03',
    title: 'Replay',
    description: 'Retry the delivery with one click.',
  },
];

export const INTEGRATIONS = ['Stripe', 'GitHub', 'Shopify', 'Twilio', 'Clerk', 'Resend'];
