import Stripe from "stripe";

function createStripe() {
  return new Stripe(process.env.STRIPE_SECRET_KEY || "sk_test_placeholder", {
    apiVersion: "2025-08-27.basil",
  });
}

const globalForStripe = globalThis as unknown as { stripe: Stripe | undefined };
export const stripe = globalForStripe.stripe ?? createStripe();
if (process.env.NODE_ENV !== "production") globalForStripe.stripe = stripe;

export default stripe;

export const PLANS = {
  basic: {
    name: "Basic",
    price: process.env.STRIPE_PRICE_ID_BASIC || "price_basic",
    amount: 999,
    interval: "month" as const,
    features: ["5 projects", "Basic analytics", "Email support"],
  },
  pro: {
    name: "Pro",
    price: process.env.STRIPE_PRICE_ID_PRO || "price_pro",
    amount: 2999,
    interval: "month" as const,
    features: ["Unlimited projects", "Advanced analytics", "Priority support", "Custom domains", "API access"],
  },
  enterprise: {
    name: "Enterprise",
    price: process.env.STRIPE_PRICE_ID_ENTERPRISE || "price_enterprise",
    amount: 9900,
    interval: "month" as const,
    features: ["Everything in Pro", "SSO/SAML", "Dedicated support", "SLA guarantee", "On-premise option"],
  },
} as const;

export type PlanId = keyof typeof PLANS;
