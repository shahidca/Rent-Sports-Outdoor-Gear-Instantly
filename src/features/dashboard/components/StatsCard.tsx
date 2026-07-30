import { ReactNode } from "react";

interface StatsCardProps {
  title: string;
  value: number | string;
  icon: ReactNode;
  description?: string;
}

export default function StatsCard({
  title,
  value,
  icon,
  description,
}: StatsCardProps) {
  return (
    <div className="rounded-2xl border bg-card p-6 shadow-sm transition-all hover:shadow-lg">

      <div className="flex items-center justify-between">

        <div>

          <p className="text-sm text-muted-foreground">
            {title}
          </p>

          <h2 className="mt-2 text-3xl font-bold">
            {value}
          </h2>

          {description && (
            <p className="mt-2 text-sm text-muted-foreground">
              {description}
            </p>
          )}

        </div>

        <div className="rounded-xl bg-primary/10 p-4">
          {icon}
        </div>

      </div>

    </div>
  );
}