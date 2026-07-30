"use client";

import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  profileSchema,
  ProfileFormData,
} from "../validation/profile.validation";

import { useProfile } from "../hooks/useProfile";
import { useUpdateProfile } from "../hooks/useUpdateProfile";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function EditProfileForm() {
  const { data } = useProfile();

  const { mutate, isPending } =
    useUpdateProfile();

  const {
    register,
    handleSubmit,
    reset,
  } = useForm<ProfileFormData>({
    resolver: zodResolver(profileSchema),
  });

  useEffect(() => {
    if (data?.data) {
      reset({
        name: data.data.name,
        phone: data.data.phone ?? "",
        address: data.data.address ?? "",
      });
    }
  }, [data, reset]);

  const onSubmit = (
    values: ProfileFormData
  ) => {
    mutate(values);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-5 rounded-xl border p-6"
    >
      <Input
        placeholder="Name"
        {...register("name")}
      />

      <Input
        placeholder="Phone"
        {...register("phone")}
      />

      <Input
        placeholder="Address"
        {...register("address")}
      />

      <Button
        type="submit"
        disabled={isPending}
      >
        {isPending
          ? "Saving..."
          : "Update Profile"}
      </Button>
    </form>
  );
}