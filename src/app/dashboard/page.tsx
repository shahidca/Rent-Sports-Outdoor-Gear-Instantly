import StatsGrid from "@/features/dashboard/components/StatsGrid";
import RevenueChart from "@/features/dashboard/components/RevenueChart";
import RecentRentals from "@/features/dashboard/components/RecentRentals";
import RecentPayments from "@/features/dashboard/components/RecentPayments";
import QuickActions from "@/features/dashboard/components/QuickActions";

export default function DashboardPage() {
  return (
    <div className="space-y-8">

      <StatsGrid />

      <QuickActions />

      <RevenueChart />

      <RecentRentals />

      <RecentPayments />

    </div>
  );
}