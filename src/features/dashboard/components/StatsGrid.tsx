"use client";

import {
  Package,
  Clock,
  CheckCircle,
  Wallet,
} from "lucide-react";

import StatsCard from "./StatsCard";
import { useDashboard } from "../hooks/useDashboard";

export default function StatsGrid() {
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
        icon={<Package className="h-8 w-8 text-primary" />}
      />

      <StatsCard
        title="Active Rentals"
        value={overview.activeRentals}
        icon={<Clock className="h-8 w-8 text-primary" />}
      />

      <StatsCard
        title="Completed Rentals"
        value={overview.completedRentals}
        icon={<CheckCircle className="h-8 w-8 text-primary" />}
      />

      <StatsCard
        title="Total Spent"
        value={`৳${overview.totalSpent}`}
        icon={<Wallet className="h-8 w-8 text-primary" />}
      />

    </div>
  );
}