import RentalTable from "@/features/rental/components/RentalTable";

export default function RentalsPage() {
  return (
    <div className="space-y-6">

      <h1 className="text-3xl font-bold">
        My Rentals
      </h1>

      <RentalTable />

    </div>
  );
}