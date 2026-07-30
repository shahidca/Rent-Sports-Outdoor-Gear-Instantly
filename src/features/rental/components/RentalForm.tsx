"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  RentalFormValues,
  rentalSchema,
} from "../validation/rental.validation";

import { useCreateRental } from "../hooks/useCreateRental";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface Props {
  gearId: string;
}

export default function RentalForm({
  gearId,
}: Props) {
  const { mutate, isPending } =
    useCreateRental();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RentalFormValues>({
    resolver: zodResolver(rentalSchema),
  });

  const onSubmit = (
    values: RentalFormValues
  ) => {
    mutate({
      gearId,
      ...values,
    });
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-6 rounded-xl border p-6"
    >
      <div>
        <label className="mb-2 block text-sm font-medium">
          Start Date
        </label>

        <Input
          type="date"
          {...register("startDate")}
        />

        <p className="mt-1 text-sm text-red-500">
          {errors.startDate?.message}
        </p>
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium">
          End Date
        </label>

        <Input
          type="date"
          {...register("endDate")}
        />

        <p className="mt-1 text-sm text-red-500">
          {errors.endDate?.message}
        </p>
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium">
          Quantity
        </label>

        <Input
          type="number"
          min={1}
          {...register("quantity")}
        />

        <p className="mt-1 text-sm text-red-500">
          {errors.quantity?.message}
        </p>
      </div>

      <Button
        type="submit"
        className="w-full"
        disabled={isPending}
      >
        {isPending
          ? "Processing..."
          : "Continue to Payment"}
      </Button>
    </form>
  );
}