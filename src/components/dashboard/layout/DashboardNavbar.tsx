export default function DashboardNavbar() {
  return (
    <header className="sticky top-0 z-50 h-16 border-b bg-background">

      <div className="flex h-full items-center justify-between px-6">

        <h1 className="text-xl font-bold">
          GearUp Dashboard
        </h1>

        <div className="flex items-center gap-4">

          <span className="text-sm text-muted-foreground">
            Customer
          </span>

        </div>

      </div>

    </header>
  );
}