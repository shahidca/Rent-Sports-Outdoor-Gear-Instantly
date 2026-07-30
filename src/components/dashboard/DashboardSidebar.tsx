"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const menus = [
  {
    title: "Dashboard",
    href: "/dashboard",
  },
  {
    title: "Profile",
    href: "/dashboard/profile",
  },
  {
    title: "My Rentals",
    href: "/dashboard/rentals",
  },
  {
    title: "Payments",
    href: "/dashboard/payments",
  },
  {
    title: "Wishlist",
    href: "/dashboard/wishlist",
  },
  {
    title: "Settings",
    href: "/dashboard/settings",
  },
];

export default function DashboardSidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 border-r bg-background p-4">

      <h2 className="mb-6 text-xl font-bold">
        GearUp
      </h2>

      <nav className="space-y-2">

        {menus.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`block rounded-lg px-3 py-2 transition ${
              pathname === item.href
                ? "bg-primary text-primary-foreground"
                : "hover:bg-muted"
            }`}
          >
            {item.title}
          </Link>
        ))}

      </nav>

    </aside>
  );
}