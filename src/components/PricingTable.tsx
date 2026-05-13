import CheckoutButton from "./CheckoutButton";

const plans = [
  {
    id: "basic",
    name: "Basic",
    price: "$9",
    period: "/mo",
    description: "For individuals getting started",
    features: ["5 projects", "Basic analytics", "Email support"],
  },
  {
    id: "pro",
    name: "Pro",
    price: "$29",
    period: "/mo",
    description: "For professionals and growing teams",
    features: ["Unlimited projects", "Advanced analytics", "Priority support", "Custom domains", "API access"],
    featured: true,
  },
  {
    id: "enterprise",
    name: "Enterprise",
    price: "$99",
    period: "/mo",
    description: "For large organizations",
    features: ["Everything in Pro", "SSO/SAML", "Dedicated support", "SLA guarantee", "On-premise option"],
  },
];

export default function PricingTable() {
  return (
    <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
      {plans.map((plan) => (
        <div
          key={plan.id}
          className={`p-8 rounded-2xl border ${
            plan.featured
              ? "border-blue-500 bg-blue-50 shadow-xl shadow-blue-500/10"
              : "border-gray-200 bg-white"
          }`}
        >
          <h3 className="text-lg font-bold mb-1">{plan.name}</h3>
          <div className="text-4xl font-bold mb-1">
            {plan.price}
            <span className="text-sm font-normal text-gray-500">{plan.period}</span>
          </div>
          <p className="text-sm text-gray-500 mb-6">{plan.description}</p>
          <ul className="space-y-3 text-sm mb-8">
            {plan.features.map((f) => (
              <li key={f} className="flex items-center gap-2">
                <svg className="w-4 h-4 text-green-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                {f}
              </li>
            ))}
          </ul>
          <CheckoutButton
            planId={plan.id}
            label={plan.id === "enterprise" ? "Contact Sales" : "Subscribe"}
            className={`w-full py-2.5 rounded-lg font-semibold text-sm ${
              plan.featured
                ? "bg-blue-600 text-white hover:bg-blue-700"
                : "border border-gray-200 hover:bg-gray-50"
            }`}
          />
        </div>
      ))}
    </div>
  );
}
