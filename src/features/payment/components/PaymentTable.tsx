"use client";

import { usePayments } from "../hooks/usePayments";
import PaymentStatusBadge from "./PaymentStatusBadge";

export default function PaymentTable() {
  const {
    data,
    isPending,
  } = usePayments();

  if (isPending) {
    return <p>Loading payments...</p>;
  }

  const payments = data?.data ?? [];

  if (!payments.length) {
    return (
      <div className="rounded-xl border p-10 text-center">
        No payment history found.
      </div>
    );
  }

  return (
    <div className="overflow-x-auto rounded-xl border">

      <table className="w-full">

        <thead>

          <tr className="border-b">

            <th className="p-4 text-left">Transaction</th>
            <th className="p-4 text-left">Rental</th>
            <th className="p-4 text-left">Amount</th>
            <th className="p-4 text-left">Method</th>
            <th className="p-4 text-left">Status</th>
            <th className="p-4 text-left">Date</th>

          </tr>

        </thead>

        <tbody>

          {payments.map((payment) => (

            <tr
              key={payment.id}
              className="border-b"
            >

              <td className="p-4">
                {payment.transactionId}
              </td>

              <td className="p-4">
                {payment.rentalId}
              </td>

              <td className="p-4">
                {payment.currency} {payment.amount}
              </td>

              <td className="p-4">
                {payment.paymentMethod}
              </td>

              <td className="p-4">
                <PaymentStatusBadge
                  status={payment.paymentStatus}
                />
              </td>

              <td className="p-4">
                {new Date(
                  payment.createdAt
                ).toLocaleDateString()}
              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}