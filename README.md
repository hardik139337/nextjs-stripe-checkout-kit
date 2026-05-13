<div align="center">

# Next.js Stripe Checkout Kit

### Add Stripe payments to your Next.js app in 10 minutes, not 10 hours.

A minimal, production-ready Stripe Checkout integration for Next.js 16. One-time payments, subscriptions, and payment links — all wired up with webhook handlers.

[![Next.js 16](https://img.shields.io/badge/Next.js-16-black?logo=next.js&logoColor=white)](#)
[![Stripe](https://img.shields.io/badge/Stripe-Payments-635BFF?logo=stripe&logoColor=white)](#)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?logo=typescript&logoColor=white)](#)
[![MIT License](https://img.shields.io/badge/License-MIT-green)](#)

---

</div>

## What You Get

- **One-time payments** — Sell digital products, courses, or downloads
- **Recurring subscriptions** — SaaS plans with monthly/annual billing
- **Payment links** — No-code checkout for simple products
- **Webhook handlers** — Sync Stripe events to your database
- **Customer portal** — Let users manage their own subscriptions
- **Usage-based billing** — Metered billing for API products

## Quick Start

```bash
git clone https://github.com/hardik139337/nextjs-stripe-checkout-kit.git
cd nextjs-stripe-checkout-kit
npm install
cp .env.example .env
# Add your Stripe keys
npm run dev
```

## What's Included

### Checkout Page
Beautiful, responsive pricing page with plan selection and Stripe Checkout redirect.

### API Routes
- `POST /api/checkout` — Create a Checkout Session
- `POST /api/portal` — Create a Customer Portal session
- `POST /api/webhooks` — Handle Stripe webhook events
- `GET /api/subscription` — Get current subscription status

### Webhook Handlers
Pre-built handlers for:
- `checkout.session.completed`
- `customer.subscription.created`
- `customer.subscription.updated`
- `customer.subscription.deleted`
- `invoice.payment_succeeded`
- `invoice.payment_failed`

### Components
- `PricingTable` — 3-tier pricing display
- `CheckoutButton` — CTA with loading state
- `SubscriptionBadge` — Show plan status
- `ManageBilling` — Customer portal button

### Database Integration
- Works with Prisma, Drizzle, or any ORM
- Schema examples included
- Type-safe subscription helpers

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router) |
| Payments | Stripe |
| Styling | Tailwind CSS v4 |
| Language | TypeScript |

## License

MIT — use for unlimited projects.
