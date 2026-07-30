import Link from "next/link";

import {
  Plus,
  Package,
  User,
  CreditCard,
} from "lucide-react";

import { Button } from "@/components/ui/button";

export default function QuickActions() {
  return (
    <div className="rounded-xl border bg-card p-6 shadow-sm">

      <h2 className="mb-6 text-xl font-semibold">
        Quick Actions
      </h2>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">

        <Link href="/gear">
          <Button className="h-14 w-full justify-start">
            <Package className="mr-2 h-5 w-5" />
            Browse Gear
          </Button>
        </Link>

        <Link href="/dashboard/rentals">
          <Button
            variant="outline"
            className="h-14 w-full justify-start"
          >
            <Plus className="mr-2 h-5 w-5" />
            My Rentals
          </Button>
        </Link>

        <Link href="/dashboard/payments">
          <Button
            variant="outline"
            className="h-14 w-full justify-start"
          >
            <CreditCard className="mr-2 h-5 w-5" />
            Payments
          </Button>
        </Link>

        <Link href="/dashboard/profile">
          <Button
            variant="outline"
            className="h-14 w-full justify-start"
          >
            <User className="mr-2 h-5 w-5" />
            Profile
          </Button>
        </Link>

      </div>

    </div>
  );
}