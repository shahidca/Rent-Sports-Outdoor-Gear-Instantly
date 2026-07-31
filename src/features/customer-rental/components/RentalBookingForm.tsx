"use client";

import { useMemo, useState } from "react";

import { Button } from "@/components/ui/button";

import RentalSummary from "./RentalSummary";

import { useCreateRental } from "../hooks/useCreateRental";

interface Props {
  gearId: string;

  pricePerDay: number;
}

export default function RentalBookingForm({
  gearId,
  pricePerDay,
}: Props) {
  const mutation =
    useCreateRental();

  const [startDate, setStartDate] =
    useState("");

  const [endDate, setEndDate] =
    useState("");

  const [notes, setNotes] =
    useState("");

  const totalDays =
    useMemo(() => {
      if (!startDate || !endDate)
        return 0;

      const start =
        new Date(startDate);

      const end =
        new Date(endDate);

      const diff =
        end.getTime() -
        start.getTime();

      return Math.max(
        Math.ceil(
          diff /
            (1000 *
              60 *
              60 *
              24)
        ) + 1,
        0
      );
    }, [startDate, endDate]);

  const handleSubmit = () => {
    mutation.mutate({
      gearId,
      startDate,
      endDate,
      notes,
    });
  };

  return (
    <div className="space-y-6">

      <div>

        <label className="mb-2 block font-medium">
          Start Date
        </label>

        <input
          type="date"
          className="w-full rounded-md border p-2"
          value={startDate}
          onChange={(e) =>
            setStartDate(
              e.target.value
            )
          }
        />

      </div>

      <div>

        <label className="mb-2 block font-medium">
          End Date
        </label>

        <input
          type="date"
          className="w-full rounded-md border p-2"
          value={endDate}
          onChange={(e) =>
            setEndDate(
              e.target.value
            )
          }
        />

      </div>

      <div>

        <label className="mb-2 block font-medium">
          Notes
        </label>

        <textarea
          rows={4}
          className="w-full rounded-md border p-2"
          value={notes}
          onChange={(e) =>
            setNotes(
              e.target.value
            )
          }
        />

      </div>

      <RentalSummary
        days={totalDays}
        pricePerDay={pricePerDay}
      />

      <Button
        className="w-full"
        disabled={
          mutation.isPending ||
          totalDays <= 0
        }
        onClick={handleSubmit}
      >
        {mutation.isPending
          ? "Submitting..."
          : "Rent Now"}
      </Button>

    </div>
  );
}