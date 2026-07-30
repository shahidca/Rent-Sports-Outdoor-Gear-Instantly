"use client";

const rentals = [
  {
    id: "RNT-001",
    gear: "Mountain Bike",
    startDate: "2026-07-20",
    endDate: "2026-07-25",
    status: "Active",
  },
  {
    id: "RNT-002",
    gear: "Camping Tent",
    startDate: "2026-07-10",
    endDate: "2026-07-12",
    status: "Completed",
  },
  {
    id: "RNT-003",
    gear: "Kayak",
    startDate: "2026-08-01",
    endDate: "2026-08-03",
    status: "Pending",
  },
];

export default function RecentRentals() {
  return (
    <div className="rounded-xl border bg-card p-6 shadow-sm">

      <h2 className="mb-6 text-xl font-semibold">
        Recent Rentals
      </h2>

      <div className="overflow-x-auto">

        <table className="w-full">

          <thead>

            <tr className="border-b">

              <th className="py-3 text-left">Rental ID</th>

              <th className="py-3 text-left">Gear</th>

              <th className="py-3 text-left">Start</th>

              <th className="py-3 text-left">End</th>

              <th className="py-3 text-left">Status</th>

            </tr>

          </thead>

          <tbody>

            {rentals.map((rental) => (

              <tr
                key={rental.id}
                className="border-b"
              >

                <td className="py-4">{rental.id}</td>

                <td>{rental.gear}</td>

                <td>{rental.startDate}</td>

                <td>{rental.endDate}</td>

                <td>

                  <span className="rounded bg-primary/10 px-3 py-1 text-sm">
                    {rental.status}
                  </span>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}