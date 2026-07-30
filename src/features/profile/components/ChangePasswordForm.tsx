"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  ChangePasswordFormData,
  changePasswordSchema,
} from "../validation/change-password.validation";

import { useChangePassword } from "../hooks/useChangePassword";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function ChangePasswordForm() {
  const { mutate, isPending } =
    useChangePassword();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ChangePasswordFormData>({
    resolver: zodResolver(changePasswordSchema),
  });

  const onSubmit = (
    values: ChangePasswordFormData
  ) => {
    mutate({
      currentPassword: values.currentPassword,
      newPassword: values.newPassword,
    });

    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-5 rounded-xl border p-6"
    >
      <h2 className="text-xl font-semibold">
        Change Password
      </h2>

      <Input
        type="password"
        placeholder="Current Password"
        {...register("currentPassword")}
      />

      <p className="text-sm text-red-500">
        {errors.currentPassword?.message}
      </p>

      <Input
        type="password"
        placeholder="New Password"
        {...register("newPassword")}
      />

      <p className="text-sm text-red-500">
        {errors.newPassword?.message}
      </p>

      <Input
        type="password"
        placeholder="Confirm Password"
        {...register("confirmPassword")}
      />

      <p className="text-sm text-red-500">
        {errors.confirmPassword?.message}
      </p>

      <Button
        type="submit"
        disabled={isPending}
      >
        {isPending
          ? "Updating..."
          : "Change Password"}
      </Button>
    </form>
  );
}