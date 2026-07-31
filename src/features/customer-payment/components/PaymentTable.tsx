"use client";

import PaymentDetailsDialog from "./PaymentDetailsDialog";
import PaymentStatusBadge from "./PaymentStatusBadge";

import { useMyPayments } from "../hooks/useMyPayments";
import { ICustomerPayment } from "../types/payment";

export default function PaymentTable() {
  const {
    data,
    isPending,
  } = useMyPayments();

  if (isPending) {
    return (
      <p className="py-10 text-center">
        Loading payments...
      </p>
    );
  }

  const payments: ICustomerPayment[] =
    data?.data ?? [];

  if (!payments.length) {
    return (
      <div className="rounded-xl border p-10 text-center">
        No payments found.
      </div>
    );
  }

  return (
    <div className="overflow-x-auto rounded-xl border">

      <table className="w-full">

        <thead className="bg-muted">

          <tr>

            <th className="p-4 text-left">
              Rental
            </th>

            <th className="p-4 text-left">
              Amount
            </th>

            <th className="p-4 text-left">
              Currency
            </th>

            <th className="p-4 text-left">
              Status
            </th>

            <th className="p-4 text-left">
              Paid At
            </th>

            <th className="p-4 text-left">
              Action
            </th>

          </tr>

        </thead>

        <tbody>

          {payments.map(
            (payment) => (

              <tr
                key={payment.id}
                className="border-t"
              >

                <td className="p-4">
                  {
                    payment.rentalOrder
                      .id
                  }
                </td>

                <td className="p-4">
                  ৳{payment.amount}
                </td>

                <td className="p-4">
                  {
                    payment.currency
                  }
                </td>

                <td className="p-4">

                  <PaymentStatusBadge
                    status={
                      payment.status
                    }
                  />

                </td>

                <td className="p-4">
                  {payment.paidAt ??
                    "-"}
                </td>

                <td className="p-4">

                  <PaymentDetailsDialog
                    payment={
                      payment
                    }
                  />

                </td>

              </tr>
            )
          )}

        </tbody>

      </table>

    </div>
  );
}