"use client";

const payments = [
  {
    id: "PAY-001",
    amount: 2500,
    method: "Stripe",
    status: "Paid",
    date: "2026-07-20",
  },
  {
    id: "PAY-002",
    amount: 1800,
    method: "Stripe",
    status: "Paid",
    date: "2026-07-15",
  },
  {
    id: "PAY-003",
    amount: 950,
    method: "Stripe",
    status: "Pending",
    date: "2026-07-10",
  },
];

export default function RecentPayments() {
  return (
    <div className="rounded-xl border bg-card p-6 shadow-sm">

      <h2 className="mb-6 text-xl font-semibold">
        Recent Payments
      </h2>

      <div className="overflow-x-auto">

        <table className="w-full">

          <thead>

            <tr className="border-b">

              <th className="py-3 text-left">
                Payment ID
              </th>

              <th className="py-3 text-left">
                Amount
              </th>

              <th className="py-3 text-left">
                Method
              </th>

              <th className="py-3 text-left">
                Status
              </th>

              <th className="py-3 text-left">
                Date
              </th>

            </tr>

          </thead>

          <tbody>

            {payments.map((payment) => (

              <tr
                key={payment.id}
                className="border-b"
              >

                <td className="py-4">
                  {payment.id}
                </td>

                <td>
                  ৳{payment.amount}
                </td>

                <td>
                  {payment.method}
                </td>

                <td>

                  <span className="rounded-md bg-primary/10 px-3 py-1 text-sm">
                    {payment.status}
                  </span>

                </td>

                <td>
                  {payment.date}
                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}