"use client";

import { useMemo, useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

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
  const mutation = useCreateRental();

  const [startDate, setStartDate] =
    useState("");

  const [endDate, setEndDate] =
    useState("");

  const [notes, setNotes] =
    useState("");

  const totalDays = useMemo(() => {
    if (!startDate || !endDate) {
      return 0;
    }

    const start = new Date(startDate);

    const end = new Date(endDate);

    const diff =
      end.getTime() - start.getTime();

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
    <div className="space-y-6 rounded-xl border p-6">

      <div>

        <Label htmlFor="startDate">
          Start Date
        </Label>

        <Input
          id="startDate"
          type="date"
          value={startDate}
          onChange={(e) =>
            setStartDate(
              e.target.value
            )
          }
        />

      </div>

      <div>

        <Label htmlFor="endDate">
          End Date
        </Label>

        <Input
          id="endDate"
          type="date"
          value={endDate}
          onChange={(e) =>
            setEndDate(
              e.target.value
            )
          }
        />

      </div>

      <div>

        <Label htmlFor="notes">
          Notes
        </Label>

        <Textarea
          id="notes"
          rows={4}
          placeholder="Any special instructions..."
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