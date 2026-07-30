"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

import { Button } from "@/components/ui/button";

import { useAuthContext } from "@/providers/AuthProvider";


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


export default function MobileMenu() {

  const [open, setOpen] = useState(false);

  const {
    user,
  } = useAuthContext();


  return (
    <div className="md:hidden">

      <Button
        variant="ghost"
        size="icon"
        onClick={() => setOpen(!open)}
      >

        {
          open ? (
            <X />
          ) : (
            <Menu />
          )
        }

      </Button>



      {
        open && (

          <div className="absolute left-0 top-16 w-full border-b bg-background p-4 shadow-md">


            <nav className="flex flex-col gap-4">


              {
                navItems.map((item) => (

                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="text-sm font-medium"
                  >
                    {item.name}
                  </Link>

                ))
              }




              {
                user ? (

                  <Link
                    href="/dashboard/customer"
                    onClick={() => setOpen(false)}
                  >

                    <Button className="w-full">
                      Dashboard
                    </Button>

                  </Link>

                ) : (

                  <div className="flex flex-col gap-2">


                    <Link
                      href="/auth/login"
                      onClick={() => setOpen(false)}
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
                      onClick={() => setOpen(false)}
                    >

                      <Button className="w-full">
                        Register
                      </Button>

                    </Link>


                  </div>

                )
              }


            </nav>


          </div>

        )
      }


    </div>
  );
}