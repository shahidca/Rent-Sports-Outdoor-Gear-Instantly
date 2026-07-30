import ProviderStats from "@/features/provider/components/ProviderStats";

export default function ProviderDashboardPage() {
  return (
    <div className="space-y-8">

      <h1 className="text-3xl font-bold">
        Provider Dashboard
      </h1>

      <ProviderStats />

    </div>
  );
}