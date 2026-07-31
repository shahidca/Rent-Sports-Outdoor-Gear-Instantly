"use client";

import RentalTable from "../components/RentalTable";


export default function CustomerRentalsPage() {
  return (
    <div className="space-y-6">

      <div>

        <h1 className="text-3xl font-bold">
          My Rentals
        </h1>

        <p className="text-muted-foreground">
          View all your rental requests.
        </p>

      </div>

      <RentalTable />

    </div>
  );
}