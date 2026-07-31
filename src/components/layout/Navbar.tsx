"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import MobileMenu from "./MobileMenu";

import { Button } from "@/components/ui/button";

import { useAuthContext } from "@/providers/AuthProvider";

const navItems = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Browse Gear",
    href: "/gear",
  },
];

export default function Navbar() {
  const pathname = usePathname();

  const { user } = useAuthContext();

  return (
    <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">

      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">

        {/* Logo */}

        <Link
          href="/"
          className="text-2xl font-bold tracking-tight text-primary"
        >
          GearUp
        </Link>

        {/* Desktop Navigation */}

        <nav className="hidden items-center gap-8 md:flex">

          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={
                pathname === item.href
                  ? "font-semibold text-primary transition-colors"
                  : "text-muted-foreground transition-colors hover:text-primary"
              }
            >
              {item.name}
            </Link>
          ))}

        </nav>

        {/* Right Side */}

        <div className="flex items-center gap-3">

          {user ? (
            <Link href="/dashboard">
              <Button>
                Dashboard
              </Button>
            </Link>
          ) : (
            <>
              <Link href="/auth/login">
                <Button variant="outline">
                  Login
                </Button>
              </Link>

              <Link href="/auth/register">
                <Button>
                  Register
                </Button>
              </Link>
            </>
          )}

          <MobileMenu />

        </div>

      </div>

    </header>
  );
}