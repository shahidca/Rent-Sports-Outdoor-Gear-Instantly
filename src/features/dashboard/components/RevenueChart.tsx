"use client";

import {
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

const data = [
  { month: "Jan", revenue: 1200 },
  { month: "Feb", revenue: 2100 },
  { month: "Mar", revenue: 1800 },
  { month: "Apr", revenue: 2800 },
  { month: "May", revenue: 3200 },
  { month: "Jun", revenue: 4200 },
];

export default function RevenueChart() {
  return (
    <div className="rounded-xl border bg-card p-6 shadow-sm">

      <h2 className="mb-6 text-xl font-semibold">
        Monthly Revenue
      </h2>

      <div className="h-80">

        <ResponsiveContainer width="100%" height="100%">

          <LineChart data={data}>

            <CartesianGrid strokeDasharray="3 3" />

            <XAxis dataKey="month" />

            <YAxis />

            <Tooltip />

            <Line
              type="monotone"
              dataKey="revenue"
              strokeWidth={3}
              data={undefined}
            />

          </LineChart>

        </ResponsiveContainer>

      </div>

    </div>
  );
}