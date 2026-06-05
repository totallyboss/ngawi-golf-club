import type { APIRoute } from 'astro';
import Stripe from 'stripe';

const PRODUCTS = {
  'green-fee': {
    name: 'Ngawi Golf Club – Green Fee',
    amount: 1000,
  },
  'membership': {
    name: 'Ngawi Golf Club – Annual Membership',
    amount: 12000,
  },
} as const;

type ProductKey = keyof typeof PRODUCTS;

export const POST: APIRoute = async ({ request }) => {
  const stripeKey = (import.meta.env.STRIPE_SECRET_KEY as string) ||
    ((request as unknown as { env?: { STRIPE_SECRET_KEY?: string } }).env?.STRIPE_SECRET_KEY);

  if (!stripeKey) {
    return new Response(JSON.stringify({ error: 'Stripe not configured' }), { status: 500 });
  }

  const origin = new URL(request.url).origin;

  let product: ProductKey;
  try {
    const body = await request.json() as { product?: string };
    if (!body.product || !(body.product in PRODUCTS)) {
      return new Response(JSON.stringify({ error: 'Invalid product' }), { status: 400 });
    }
    product = body.product as ProductKey;
  } catch {
    return new Response(JSON.stringify({ error: 'Invalid request body' }), { status: 400 });
  }

  const stripe = new Stripe(stripeKey);
  const { name, amount } = PRODUCTS[product];

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: [
      {
        price_data: {
          currency: 'nzd',
          product_data: { name },
          unit_amount: amount,
        },
        quantity: 1,
      },
    ],
    mode: 'payment',
    success_url: `${origin}/payment-success`,
    cancel_url: `${origin}/fees`,
  });

  return new Response(JSON.stringify({ url: session.url }), {
    headers: { 'Content-Type': 'application/json' },
  });
};
