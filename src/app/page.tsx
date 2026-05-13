import PricingTable from "@/components/PricingTable";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Nav */}
      <nav className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
        <div className="text-lg font-bold text-white">StripeKit</div>
        <div className="flex items-center gap-6 text-sm text-gray-400">
          <a href="#features" className="hover:text-white">Features</a>
          <a href="#pricing" className="hover:text-white">Pricing</a>
          <a href="#code" className="hover:text-white">Code</a>
          <a href="https://github.com/hardik139337/nextjs-stripe-checkout-kit" className="text-white hover:underline">GitHub</a>
        </div>
      </nav>

      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-20 pb-16 text-center">
        <div className="inline-block px-3 py-1 rounded-full bg-purple-500/10 text-purple-400 text-sm font-medium mb-6">
          Next.js 16 + Stripe + TypeScript
        </div>
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Add Stripe payments<br />
          <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            in 10 minutes
          </span>
        </h1>
        <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
          A production-ready Stripe Checkout integration for Next.js. One-time payments, subscriptions, webhooks, and customer portal — all wired up.
        </p>
        <div className="flex gap-4 justify-center">
          <a href="https://github.com/hardik139337/nextjs-stripe-checkout-kit" className="bg-white text-gray-950 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200">
            Get Free on GitHub
          </a>
          <a href="#code" className="border border-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-800">
            View Code
          </a>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-center mb-12">Everything you need for Stripe</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { title: "Checkout Sessions", desc: "Redirect to Stripe-hosted checkout. Customize success/cancel URLs.", icon: "🛒" },
            { title: "Webhook Handlers", desc: "6 pre-built handlers for subscription lifecycle events.", icon: "🔔" },
            { title: "Customer Portal", desc: "Let users manage their own subscriptions and billing.", icon: "👤" },
            { title: "One-time Payments", desc: "Sell digital products, courses, or downloads with a single charge.", icon: "💳" },
            { title: "Subscriptions", desc: "Monthly, annual, or usage-based billing with plan gating.", icon: "🔄" },
            { title: "Type-safe", desc: "Full TypeScript types for all Stripe objects and API responses.", icon: "🛡️" },
          ].map((f) => (
            <div key={f.title} className="p-6 rounded-xl border border-gray-800 bg-gray-900">
              <div className="text-2xl mb-3">{f.icon}</div>
              <h3 className="font-semibold mb-2">{f.title}</h3>
              <p className="text-sm text-gray-400">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Code Preview */}
      <section id="code" className="max-w-4xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-center mb-12">Drop-in components</h2>
        <div className="bg-gray-900 rounded-xl border border-gray-800 p-6 font-mono text-sm overflow-x-auto">
          <div className="text-gray-500 mb-2">{"// Add checkout to any page"}</div>
          <div>
            <span className="text-purple-400">import</span>{" "}
            <span className="text-blue-300">CheckoutButton</span>{" "}
            <span className="text-purple-400">from</span>{" "}
            <span className="text-green-400">&quot;@/components/CheckoutButton&quot;</span>
          </div>
          <div className="mt-4">
            <span className="text-purple-400">export default function</span>{" "}
            <span className="text-blue-300">PricingPage</span>() {"{"}
          </div>
          <div className="ml-4">
            <span className="text-purple-400">return</span> (
          </div>
          <div className="ml-8">
            <span className="text-gray-500">{"<"}</span>
            <span className="text-blue-300">CheckoutButton</span>
          </div>
          <div className="ml-12">
            <span className="text-green-300">planId</span>=<span className="text-green-400">&quot;pro&quot;</span>
          </div>
          <div className="ml-12">
            <span className="text-green-300">label</span>=<span className="text-green-400">&quot;Subscribe to Pro&quot;</span>
          </div>
          <div className="ml-8">
            <span className="text-gray-500">/&gt;</span>
          </div>
          <div className="ml-4">)</div>
          <div>{"}"}</div>
        </div>
      </section>

      {/* API Routes */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-center mb-12">4 API routes included</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {[
            { method: "POST", path: "/api/checkout", desc: "Create a Stripe Checkout Session" },
            { method: "POST", path: "/api/webhooks", desc: "Handle Stripe webhook events (6 event types)" },
            { method: "POST", path: "/api/portal", desc: "Create a Customer Portal session" },
            { method: "GET", path: "/api/subscription", desc: "Get current subscription status" },
          ].map((r) => (
            <div key={r.path} className="flex items-center gap-4 p-4 rounded-lg border border-gray-800 bg-gray-900">
              <span className={`px-2 py-1 rounded text-xs font-bold ${r.method === "GET" ? "bg-green-500/10 text-green-400" : "bg-blue-500/10 text-blue-400"}`}>
                {r.method}
              </span>
              <code className="text-sm font-mono text-white">{r.path}</code>
              <span className="text-sm text-gray-500 ml-auto">{r.desc}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-center mb-4">See it in action</h2>
        <p className="text-gray-400 text-center mb-12">This is the actual pricing component from the kit.</p>
        <PricingTable />
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-6 py-10 flex items-center justify-between text-sm text-gray-500">
          <div className="font-bold text-white">StripeKit</div>
          <a href="https://github.com/hardik139337/nextjs-stripe-checkout-kit">View on GitHub</a>
        </div>
      </footer>
    </div>
  );
}
