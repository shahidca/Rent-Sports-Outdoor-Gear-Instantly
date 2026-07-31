"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

import { usePayment } from "../hooks/usePayment";

interface Props {
  paymentId: string;
}

export default function PaymentDetailsPage({
  paymentId,
}: Props) {
  const {
    data,
    isPending,
    error,
  } = usePayment(paymentId);

  if (isPending) {
    return (
      <p className="py-10 text-center">
        Loading payment...
      </p>
    );
  }

  if (error) {
    return (
      <p className="py-10 text-center text-red-500">
        Failed to load payment.
      </p>
    );
  }

  const payment = data?.data;

  if (!payment) {
    return (
      <p className="py-10 text-center">
        Payment not found.
      </p>
    );
  }

  return (
    <div className="mx-auto max-w-4xl space-y-6">

      <div>

        <h1 className="text-3xl font-bold">
          Payment Details
        </h1>

        <p className="text-muted-foreground">
          View complete payment information.
        </p>

      </div>

      <Card>

        <CardContent className="space-y-6 pt-6">

          <div className="grid gap-6 md:grid-cols-2">

            <div>

              <p className="text-sm text-muted-foreground">
                Payment ID
              </p>

              <p className="font-medium break-all">
                {payment.id}
              </p>

            </div>

            <div>

              <p className="text-sm text-muted-foreground">
                Amount
              </p>

              <p className="font-semibold text-lg">
                ৳{payment.amount}
              </p>

            </div>

            <div>

              <p className="text-sm text-muted-foreground">
                Currency
              </p>

              <p>
                {payment.currency}
              </p>

            </div>

            <div>

              <p className="text-sm text-muted-foreground">
                Status
              </p>

              <Badge
                variant={
                  payment.status ===
                  "COMPLETED"
                    ? "default"
                    : payment.status ===
                      "FAILED"
                    ? "destructive"
                    : "secondary"
                }
              >
                {payment.status}
              </Badge>

            </div>

            <div>

              <p className="text-sm text-muted-foreground">
                Transaction ID
              </p>

              <p className="break-all">
                {payment.transactionId ??
                  "-"}
              </p>

            </div>

            <div>

              <p className="text-sm text-muted-foreground">
                Paid At
              </p>

              <p>
                {payment.paidAt
                  ? new Date(
                      payment.paidAt
                    ).toLocaleString()
                  : "-"}
              </p>

            </div>

          </div>

          {payment.rentalOrder && (

            <>

              <hr />

              <div>

                <h2 className="mb-4 text-xl font-semibold">
                  Rental Information
                </h2>

                <div className="grid gap-6 md:grid-cols-2">

                  <div>

                    <p className="text-sm text-muted-foreground">
                      Rental ID
                    </p>

                    <p>
                      {payment.rentalOrder.id}
                    </p>

                  </div>

                  {"status" in
                    payment.rentalOrder && (

                    <div>

                      <p className="text-sm text-muted-foreground">
                        Rental Status
                      </p>

                      <p>
                        {
                          payment
                            .rentalOrder
                            .status
                        }
                      </p>

                    </div>

                  )}

                </div>

              </div>

            </>

          )}

        </CardContent>

      </Card>

    </div>
  );
}