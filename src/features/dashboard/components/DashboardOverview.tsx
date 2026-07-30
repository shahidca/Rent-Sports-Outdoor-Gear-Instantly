"use client";

import StatsCard from "./StatsCards";
import { useDashboard } from "../hooks/useDashboard";

export default function DashboardOverview() {
  const { data, isPending } = useDashboard();

  if (isPending) {
    return <p>Loading...</p>;
  }

  const overview = data?.data;

  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

      <StatsCard
        title="Total Rentals"
        value={overview.totalRentals}
      />

      <StatsCard
        title="Active Rentals"
        value={overview.activeRentals}
      />

      <StatsCard
        title="Completed"
        value={overview.completedRentals}
      />

      <StatsCard
        title="Total Spent"
        value={`৳${overview.totalSpent}`}
      />

    </div>
  );
}