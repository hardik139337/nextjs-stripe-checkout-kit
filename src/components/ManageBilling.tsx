"use client";

import { useState } from "react";

type Props = {
  customerId: string;
  className?: string;
};

export default function ManageBilling({ customerId, className }: Props) {
  const [loading, setLoading] = useState(false);

  const handlePortal = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/portal", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ customerId }),
      });
      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
      }
    } catch {
      alert("Failed to open billing portal.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <button onClick={handlePortal} disabled={loading} className={className}>
      {loading ? "Opening..." : "Manage Billing"}
    </button>
  );
}
