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
    <aside className="hidden h-[calc(100vh-64px)] w-72 border-r bg-background lg:block">

      <div className="p-6">

        <h2 className="text-2xl font-bold">
          GearUp
        </h2>

      </div>

      <nav className="space-y-2 px-4">

        {menus.map((menu) => (
          <Link
            key={menu.href}
            href={menu.href}
            className={`block rounded-lg px-4 py-3 transition ${
              pathname === menu.href
                ? "bg-primary text-primary-foreground"
                : "hover:bg-muted"
            }`}
          >
            {menu.title}
          </Link>
        ))}

      </nav>

    </aside>
  );
}