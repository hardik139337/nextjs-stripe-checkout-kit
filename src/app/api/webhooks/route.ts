import { NextRequest, NextResponse } from "next/server";
import stripe from "@/lib/stripe";
import type Stripe from "stripe";

export async function POST(req: NextRequest) {
  const body = await req.text();
  const sig = req.headers.get("stripe-signature");

  if (!sig) {
    return NextResponse.json({ error: "Missing signature" }, { status: 400 });
  }

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(body, sig, process.env.STRIPE_WEBHOOK_SECRET!);
  } catch {
    return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
  }

  switch (event.type) {
    case "checkout.session.completed": {
      const session = event.data.object as Stripe.Checkout.Session;
      console.log("Checkout completed:", {
        sessionId: session.id,
        customerId: session.customer,
        planId: session.metadata?.planId,
        amountTotal: session.amount_total,
      });
      // TODO: Update your database - activate subscription for user
      break;
    }

    case "customer.subscription.created": {
      const subscription = event.data.object as Stripe.Subscription;
      console.log("Subscription created:", {
        subscriptionId: subscription.id,
        customerId: subscription.customer,
        status: subscription.status,
      });
      // TODO: Update your database - create subscription record
      break;
    }

    case "customer.subscription.updated": {
      const subscription = event.data.object as Stripe.Subscription;
      console.log("Subscription updated:", {
        subscriptionId: subscription.id,
        status: subscription.status,
      });
      // TODO: Update your database - sync subscription status
      break;
    }

    case "customer.subscription.deleted": {
      const subscription = event.data.object as Stripe.Subscription;
      console.log("Subscription deleted:", {
        subscriptionId: subscription.id,
        customerId: subscription.customer,
      });
      // TODO: Update your database - downgrade user to free plan
      break;
    }

    case "invoice.payment_succeeded": {
      const invoice = event.data.object as Stripe.Invoice;
      console.log("Payment succeeded:", {
        invoiceId: invoice.id,
        amountPaid: invoice.amount_paid,
      });
      // TODO: Update your database - record payment, extend access
      break;
    }

    case "invoice.payment_failed": {
      const invoice = event.data.object as Stripe.Invoice;
      console.log("Payment failed:", {
        invoiceId: invoice.id,
        customerId: invoice.customer,
      });
      // TODO: Update your database - notify user, handle dunning
      break;
    }

    default:
      console.log("Unhandled event:", event.type);
  }

  return NextResponse.json({ received: true });
}
