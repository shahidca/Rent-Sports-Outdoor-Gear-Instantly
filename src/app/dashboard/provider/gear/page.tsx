import GearTable from "@/features/provider-gear/components/GearTable";

export default function ProviderGearPage() {
  return (
    <div className="space-y-6">

      <div className="flex items-center justify-between">

        <h1 className="text-3xl font-bold">
          Manage Gear
        </h1>

      </div>

      <GearTable />

    </div>
  );
}