import { NextRequest, NextResponse } from "next/server";
import stripe, { PLANS, PlanId } from "@/lib/stripe";

export async function POST(req: NextRequest) {
  try {
    const { planId, customerId, successUrl, cancelUrl } = await req.json();

    if (!planId || !PLANS[planId as PlanId]) {
      return NextResponse.json({ error: "Invalid plan" }, { status: 400 });
    }

    const plan = PLANS[planId as PlanId];

    const session = await stripe.checkout.sessions.create({
      mode: "subscription",
      payment_method_types: ["card"],
      line_items: [{ price: plan.price, quantity: 1 }],
      success_url: successUrl || `${process.env.NEXTAUTH_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: cancelUrl || `${process.env.NEXTAUTH_URL}/pricing`,
      customer: customerId || undefined,
      metadata: { planId },
    });

    return NextResponse.json({ url: session.url, sessionId: session.id });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Internal server error";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
