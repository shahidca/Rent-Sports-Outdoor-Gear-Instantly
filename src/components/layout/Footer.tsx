import Link from "next/link";


export default function Footer() {

  const year = new Date().getFullYear();


  return (

    <footer className="border-t bg-background">

      <div className="mx-auto max-w-7xl px-4 py-10">


        <div className="grid gap-8 md:grid-cols-3">


          {/* Brand */}

          <div>

            <Link
              href="/"
              className="text-xl font-bold"
            >
              GearUp
            </Link>


            <p className="mt-3 text-sm text-muted-foreground">

              Rent sports and outdoor gear
              instantly. Explore, book, and
              enjoy your adventure.

            </p>

          </div>



          {/* Navigation */}

          <div>

            <h3 className="mb-3 font-semibold">
              Quick Links
            </h3>


            <ul className="space-y-2 text-sm">

              <li>
                <Link
                  href="/"
                  className="text-muted-foreground hover:text-primary"
                >
                  Home
                </Link>
              </li>


              <li>
                <Link
                  href="/gear"
                  className="text-muted-foreground hover:text-primary"
                >
                  Browse Gear
                </Link>
              </li>


              <li>
                <Link
                  href="/auth/register"
                  className="text-muted-foreground hover:text-primary"
                >
                  Become Provider
                </Link>
              </li>

            </ul>

          </div>




          {/* Contact */}

          <div>

            <h3 className="mb-3 font-semibold">
              Contact
            </h3>


            <p className="text-sm text-muted-foreground">
              Email: support@gearup.com
            </p>


            <p className="mt-2 text-sm text-muted-foreground">
              Sports & Outdoor Rental Platform
            </p>


          </div>


        </div>




        <div className="mt-8 border-t pt-6 text-center text-sm text-muted-foreground">

          © {year} GearUp. All rights reserved.

        </div>


      </div>


    </footer>

  );

}