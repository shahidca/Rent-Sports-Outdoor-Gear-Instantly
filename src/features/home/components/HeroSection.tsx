import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20">
      <h1 className="text-5xl font-bold">
        Rent Sports & Outdoor Gear Instantly
      </h1>

      <p className="mt-6 text-lg text-muted-foreground">
        Explore premium sports equipment for your next adventure.
      </p>

      <div className="mt-8 flex gap-4">
        <Link href="/gear">
          <Button>Explore Gear</Button>
        </Link>

        <Link href="/auth/register">
          <Button variant="outline">Become Provider</Button>
        </Link>
      </div>
    </section>
  );
}