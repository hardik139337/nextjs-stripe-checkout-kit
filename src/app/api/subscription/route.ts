import { NextRequest, NextResponse } from "next/server";
import stripe from "@/lib/stripe";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const customerId = searchParams.get("customerId");

    if (!customerId) {
      return NextResponse.json({ error: "Missing customerId" }, { status: 400 });
    }

    const subscriptions = await stripe.subscriptions.list({
      customer: customerId,
      status: "active",
      limit: 1,
    });

    const sub = subscriptions.data[0] || null;

    return NextResponse.json({
      active: !!sub,
      planId: sub?.metadata?.planId || null,
      status: sub?.status || null,
      currentPeriodEnd: sub ? (sub as unknown as { current_period_end: number }).current_period_end : null,
      cancelAtPeriodEnd: sub ? (sub as unknown as { cancel_at_period_end: boolean }).cancel_at_period_end : false,
    });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Internal server error";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
