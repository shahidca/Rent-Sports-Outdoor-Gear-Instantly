"use client";

import { Package, ShoppingBag, Activity, DollarSign } from "lucide-react";

import { useProviderDashboard } from "../hooks/useProviderDashboard";

export default function ProviderStats() {
  const { data, isPending } = useProviderDashboard();

  if (isPending) {
    return <p>Loading...</p>;
  }

  const stats = data?.data;

  if (!stats) {
    return <p>No dashboard data available.</p>;
  }

  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

      <div className="rounded-xl border p-6">
        <Package className="mb-3 h-8 w-8 text-primary" />
        <h3 className="text-3xl font-bold">
          {stats.totalGear}
        </h3>
        <p>Total Gear</p>
      </div>

      <div className="rounded-xl border p-6">
        <ShoppingBag className="mb-3 h-8 w-8 text-primary" />
        <h3 className="text-3xl font-bold">
          {stats.totalRentals}
        </h3>
        <p>Total Rentals</p>
      </div>

      <div className="rounded-xl border p-6">
        <Activity className="mb-3 h-8 w-8 text-primary" />
        <h3 className="text-3xl font-bold">
          {stats.activeRentals}
        </h3>
        <p>Active Rentals</p>
      </div>

      <div className="rounded-xl border p-6">
        <DollarSign className="mb-3 h-8 w-8 text-primary" />
        <h3 className="text-3xl font-bold">
          ৳{stats.monthlyRevenue}
        </h3>
        <p>Monthly Revenue</p>
      </div>

    </div>
  );
}