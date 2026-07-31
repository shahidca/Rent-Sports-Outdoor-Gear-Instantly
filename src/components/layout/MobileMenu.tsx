"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { useAuthContext } from "@/providers/AuthProvider";

export default function MobileMenu() {
  const pathname = usePathname();

  const { user } = useAuthContext();

  const [open, setOpen] = useState(false);

  const closeMenu = () => {
    setOpen(false);
  };

  return (
    <div className="relative md:hidden">
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setOpen((prev) => !prev)}
      >
        {open ? (
          <X className="h-6 w-6" />
        ) : (
          <Menu className="h-6 w-6" />
        )}
      </Button>

      {open && (
        <div className="absolute right-0 top-14 z-50 w-64 rounded-lg border bg-background p-4 shadow-lg">

          <nav className="flex flex-col gap-2">

            <Link
              href="/"
              onClick={closeMenu}
              className={
                pathname === "/"
                  ? "rounded-md bg-primary px-3 py-2 text-primary-foreground"
                  : "rounded-md px-3 py-2 hover:bg-muted"
              }
            >
              Home
            </Link>

            <Link
              href="/gear"
              onClick={closeMenu}
              className={
                pathname === "/gear"
                  ? "rounded-md bg-primary px-3 py-2 text-primary-foreground"
                  : "rounded-md px-3 py-2 hover:bg-muted"
              }
            >
              Browse Gear
            </Link>

            <hr className="my-2" />

            {user ? (
              <Link
                href="/dashboard"
                onClick={closeMenu}
              >
                <Button className="w-full">
                  Dashboard
                </Button>
              </Link>
            ) : (
              <>
                <Link
                  href="/auth/login"
                  onClick={closeMenu}
                >
                  <Button
                    variant="outline"
                    className="w-full"
                  >
                    Login
                  </Button>
                </Link>

                <Link
                  href="/auth/register"
                  onClick={closeMenu}
                >
                  <Button className="mt-3 w-full">
                    Register
                  </Button>
                </Link>
              </>
            )}

          </nav>

        </div>
      )}
    </div>
  );
}