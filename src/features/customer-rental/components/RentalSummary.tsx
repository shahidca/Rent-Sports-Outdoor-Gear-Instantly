"use client";

interface Props {
  days: number;

  pricePerDay: number;
}

export default function RentalSummary({
  days,
  pricePerDay,
}: Props) {
  const total =
    days * pricePerDay;

  return (
    <div className="rounded-xl border p-5">

      <h3 className="mb-4 text-lg font-semibold">
        Rental Summary
      </h3>

      <div className="space-y-2">

        <div className="flex justify-between">

          <span>
            Total Days
          </span>

          <span>
            {days}
          </span>

        </div>

        <div className="flex justify-between">

          <span>
            Price / Day
          </span>

          <span>
            ৳{pricePerDay}
          </span>

        </div>

        <hr />

        <div className="flex justify-between text-lg font-semibold">

          <span>
            Total
          </span>

          <span>
            ৳{total}
          </span>

        </div>

      </div>

    </div>
  );
}