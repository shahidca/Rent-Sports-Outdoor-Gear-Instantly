import DashboardNavbar from "@/components/dashboard/DashboardNavbar";
import DashboardSidebar from "@/components/dashboard/DashboardSidebar";
import type { ReactNode } from "react";


export default function DashboardLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="min-h-screen bg-muted/30">

      <DashboardNavbar />

      <div className="mx-auto flex max-w-7xl">

        <DashboardSidebar />

        <main className="flex-1 p-6">
          {children}
        </main>

      </div>

    </div>
  );
}