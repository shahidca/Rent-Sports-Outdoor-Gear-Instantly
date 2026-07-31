import Link from "next/link";

import { CheckCircle2 } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function PaymentSuccessPage() {
  return (
    <div className="flex min-h-[70vh] items-center justify-center">

      <div className="w-full max-w-lg rounded-2xl border bg-background p-10 text-center shadow-sm">

        <CheckCircle2 className="mx-auto mb-6 h-20 w-20 text-green-600" />

        <h1 className="text-3xl font-bold">
          Payment Successful
        </h1>

        <p className="mt-4 text-muted-foreground">
          Your payment has been completed successfully.
        </p>

        <p className="mt-2 text-muted-foreground">
          Thank you for renting with GearUp.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">

          <Link href="/dashboard/customer/rentals">

            <Button>
              My Rentals
            </Button>

          </Link>

          <Link href="/dashboard/customer/payments">

            <Button variant="outline">
              Payment History
            </Button>

          </Link>

        </div>

      </div>

    </div>
  );
}