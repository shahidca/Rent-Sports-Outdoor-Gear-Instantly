"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import {
  gearSchema,
  GearFormData,
} from "../validation/gear.validation";

import { useUpdateGear } from "../hooks/useUpdateGear";
import { useProviderGearDetails } from "../hooks/useProviderGearDetails";

interface Props {
  id: string;
}

export default function GearEditForm({
  id,
}: Props) {
  const router = useRouter();

  const [image, setImage] =
    useState<File | null>(null);

  const { data } =
    useProviderGearDetails(id);

  const { mutate, isPending } =
    useUpdateGear();

  const {
    register,
    handleSubmit,
    reset,
  } = useForm<GearFormData>({
    resolver: zodResolver(gearSchema),
  });

  useEffect(() => {
    if (data?.data) {
      reset({
        name: data.data.name,
        description:
          data.data.description,
        category:
          data.data.category,
        pricePerDay:
          data.data.pricePerDay,
        quantity:
          data.data.quantity,
      });
    }
  }, [data, reset]);

  const onSubmit = (
    values: GearFormData
  ) => {
    const formData =
      new FormData();

    Object.entries(values).forEach(
      ([key, value]) =>
        formData.append(
          key,
          String(value)
        )
    );

    if (image) {
      formData.append(
        "image",
        image
      );
    }

    mutate(
      {
        id,
        formData,
      },
      {
        onSuccess: () => {
          router.push(
            "/dashboard/provider/gear"
          );
        },
      }
    );
  };

  return (
    <form
      onSubmit={handleSubmit(
        onSubmit
      )}
      className="space-y-5 rounded-xl border p-6"
    >
      <Input
        placeholder="Gear Name"
        {...register("name")}
      />

      <textarea
        className="min-h-32 w-full rounded-md border p-3"
        {...register(
          "description"
        )}
      />

      <Input
        placeholder="Category"
        {...register(
          "category"
        )}
      />

      <Input
        type="number"
        {...register(
          "pricePerDay"
        )}
      />

      <Input
        type="number"
        {...register(
          "quantity"
        )}
      />

      <Input
        type="file"
        accept="image/*"
        onChange={(e) =>
          setImage(
            e.target
              .files?.[0] ??
              null
          )
        }
      />

      <Button
        type="submit"
        disabled={
          isPending
        }
      >
        {isPending
          ? "Updating..."
          : "Update Gear"}
      </Button>
    </form>
  );
}