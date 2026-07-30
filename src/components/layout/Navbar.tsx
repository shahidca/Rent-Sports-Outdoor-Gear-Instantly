"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import MobileMenu from "./MobileMenu";

import {
      Button,
} from "@/components/ui/button";

import {
      useAuthContext,
} from "@/providers/AuthProvider";


const navItems = [
      {
            name: "Home",
            href: "/",
      },
      {
            name: "Gear",
            href: "/gear",
      },
];


export default function Navbar() {

      const pathname = usePathname();

      const {
            user,
      } = useAuthContext();


      return (
            <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur">

                  <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">


                        {/* Logo */}

                        <Link
                              href="/"
                              className="text-xl font-bold"
                        >
                              GearUp
                        </Link>



                        {/* Desktop Menu */}

                        <nav className="hidden items-center gap-6 md:flex">

                              {
                                    navItems.map((item) => (

                                          <Link
                                                key={item.href}
                                                href={item.href}
                                                className={
                                                      pathname === item.href
                                                            ? "font-semibold text-primary"
                                                            : "text-muted-foreground"
                                                }
                                          >
                                                {item.name}
                                          </Link>

                                    ))
                              }

                        </nav>




                        {/* Actions */}

                        <div className="flex items-center gap-3">


                              {
                                    user ? (

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

                                    )
                              }



                              <MobileMenu />


                        </div>


                  </div>

            </header>
      );
}