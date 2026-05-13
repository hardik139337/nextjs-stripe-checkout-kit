type Props = {
  plan: string | null;
  active: boolean;
};

export default function SubscriptionBadge({ plan, active }: Props) {
  if (!active || !plan) {
    return (
      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gray-100 text-gray-600 text-sm font-medium">
        <span className="w-2 h-2 rounded-full bg-gray-400" />
        Free Plan
      </span>
    );
  }

  return (
    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-green-50 text-green-700 text-sm font-medium">
      <span className="w-2 h-2 rounded-full bg-green-500" />
      {plan.charAt(0).toUpperCase() + plan.slice(1)} Plan
    </span>
  );
}
