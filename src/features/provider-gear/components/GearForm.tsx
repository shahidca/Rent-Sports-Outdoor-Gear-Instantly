"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import {
  gearSchema,
  GearFormData,
} from "../validation/gear.validation";

import { useCreateGear } from "../hooks/useCreateGear";

export default function GearForm() {
  const router = useRouter();

  const [image, setImage] =
    useState<File | null>(null);

  const { mutate, isPending } =
    useCreateGear();

  const {
    register,
    handleSubmit,
  } = useForm<GearFormData>({
    resolver: zodResolver(gearSchema),
  });

  const onSubmit = (
    values: GearFormData
  ) => {
    const formData = new FormData();

    formData.append("name", values.name);
    formData.append(
      "description",
      values.description
    );
    formData.append(
      "category",
      values.category
    );
    formData.append(
      "pricePerDay",
      String(values.pricePerDay)
    );
    formData.append(
      "quantity",
      String(values.quantity)
    );

    if (image) {
      formData.append("image", image);
    }

    mutate(formData, {
      onSuccess: () => {
        router.push(
          "/dashboard/provider/gear"
        );
      },
    });
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-5 rounded-xl border p-6"
    >
      <Input
        placeholder="Gear Name"
        {...register("name")}
      />

      <textarea
        className="min-h-32 w-full rounded-md border p-3"
        placeholder="Description"
        {...register("description")}
      />

      <Input
        placeholder="Category"
        {...register("category")}
      />

      <Input
        type="number"
        placeholder="Price Per Day"
        {...register("pricePerDay")}
      />

      <Input
        type="number"
        placeholder="Quantity"
        {...register("quantity")}
      />

      <Input
        type="file"
        accept="image/*"
        onChange={(e) =>
          setImage(
            e.target.files?.[0] ?? null
          )
        }
      />

      <Button
        type="submit"
        disabled={isPending}
      >
        {isPending
          ? "Creating..."
          : "Create Gear"}
      </Button>
    </form>
  );
}