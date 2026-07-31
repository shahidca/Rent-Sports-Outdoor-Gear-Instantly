import "./globals.css";

import { Geist } from "next/font/google";

import { cn } from "@/lib/utils";

import QueryProvider from "@/providers/QueryProvider";
import AuthProvider from "@/providers/AuthProvider";
import StripeProvider from "@/providers/StripeProvider";

import { Toaster } from "sonner";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(
        "font-sans",
        geist.variable
      )}
    >
      <body>

        <QueryProvider>

          <AuthProvider>

            <StripeProvider>

              {children}

              <Toaster
                richColors
                position="top-right"
              />

            </StripeProvider>

          </AuthProvider>

        </QueryProvider>

      </body>
    </html>
  );
}