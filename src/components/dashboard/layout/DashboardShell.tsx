import type { ReactNode } from "react";
import DashboardNavbar from "../DashboardNavbar";
import DashboardSidebar from "../DashboardSidebar";

// import DashboardNavbar from "./DashboardNavbar";
// import DashboardSidebar from "./DashboardSidebar";

interface Props {
  children: ReactNode;
}

export default function DashboardShell({
  children,
}: Props) {
  return (
    <div className="min-h-screen bg-muted/30">

      <DashboardNavbar />

      <div className="flex">

        <DashboardSidebar />

        <main className="flex-1 p-6">
          {children}
        </main>

      </div>

    </div>
  );
}