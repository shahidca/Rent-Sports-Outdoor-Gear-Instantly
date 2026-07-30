import RentalTable from "@/features/provider-rental/components/RentalTable";

export default function ProviderRentalsPage() {
  return (
    <div className="space-y-6">

      <h1 className="text-3xl font-bold">
        Rental Requests
      </h1>

      <RentalTable />

    </div>
  );
}