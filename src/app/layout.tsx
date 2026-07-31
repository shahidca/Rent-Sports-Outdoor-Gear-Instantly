import "./globals.css";

import QueryProvider from "@/providers/QueryProvider";
import AuthProvider from "@/providers/AuthProvider";
import { Toaster } from "sonner";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("font-sans", geist.variable)}>
      <body>
        <QueryProvider>
          <AuthProvider>
            {children}
            <Toaster
              richColors
              position="top-right"
            />
          </AuthProvider>
        </QueryProvider>
      </body>
    </html>
  );
}