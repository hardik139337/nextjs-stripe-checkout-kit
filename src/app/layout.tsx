import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Next.js Stripe Checkout Kit — Add payments in 10 minutes",
  description: "Production-ready Stripe Checkout integration for Next.js 16. One-time payments, subscriptions, webhooks, and customer portal.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased bg-gray-950 text-white">{children}</body>
    </html>
  );
}
