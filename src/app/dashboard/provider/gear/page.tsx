
import Link from "next/link";
import { Button } from "@/components/ui/button";
export default function ProviderGearPage() {
  return (
    <div className="flex items-center justify-between">

  <h1 className="text-3xl font-bold">
    Manage Gear
  </h1>

  <Link href="/dashboard/provider/gear/new">
    <Button>
      Add Gear
    </Button>
  </Link>

</div>
  );
}