"use client";

import Link from "next/link";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  registerSchema,
  RegisterSchema,
} from "../schemas/register.schema";

import { useRegister } from "../hooks/useRegister";

import PasswordInput from "./PasswordInput";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";


export default function RegisterForm() {

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: {
      errors,
    },
  } = useForm<RegisterSchema>({
    resolver: zodResolver(registerSchema),

    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      phone: "",
      address: "",
      profileImage: "",
      role: "CUSTOMER",
    },
  });


  const {
    mutate,
    isPending,
  } = useRegister();


  const role = watch("role");


  const onSubmit = (
    data: RegisterSchema
  ) => {

    mutate({
      name: data.name,
      email: data.email,
      password: data.password,
      phone: data.phone,
      address: data.address,
      profileImage: data.profileImage,
      role: data.role,
    });

  };


  return (
    <div className="space-y-6 rounded-xl border bg-background p-6 shadow-sm">


      <div className="text-center space-y-2">

        <h1 className="text-2xl font-bold">
          Create Account
        </h1>

        <p className="text-sm text-muted-foreground">
          Join GearUp today
        </p>

      </div>



      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-4"
      >


        {/* Name */}

        <div className="space-y-2">

          <label className="text-sm font-medium">
            Name
          </label>

          <Input
            placeholder="Your name"
            {...register("name")}
          />

          {errors.name && (
            <p className="text-sm text-destructive">
              {errors.name.message}
            </p>
          )}

        </div>



        {/* Email */}

        <div className="space-y-2">

          <label className="text-sm font-medium">
            Email
          </label>

          <Input
            type="email"
            placeholder="example@gmail.com"
            {...register("email")}
          />

          {errors.email && (
            <p className="text-sm text-destructive">
              {errors.email.message}
            </p>
          )}

        </div>



        {/* Phone */}

        <div className="space-y-2">

          <label className="text-sm font-medium">
            Phone
          </label>

          <Input
            placeholder="Phone number"
            {...register("phone")}
          />

        </div>



        {/* Address */}

        <div className="space-y-2">

          <label className="text-sm font-medium">
            Address
          </label>

          <Input
            placeholder="Address"
            {...register("address")}
          />

        </div>



        {/* Profile Image */}

        <div className="space-y-2">

          <label className="text-sm font-medium">
            Profile Image URL
          </label>

          <Input
            placeholder="https://image-url.com"
            {...register("profileImage")}
          />

        </div>



        {/* Role */}

        <div className="space-y-2">

          <label className="text-sm font-medium">
            Account Type
          </label>


          <Select
            value={role}
            onValueChange={(value) => {

              if(value) {
                setValue(
                  "role",
                  value as "CUSTOMER" | "PROVIDER"
                );
              }

            }}
          >

            <SelectTrigger>

              <SelectValue placeholder="Select role" />

            </SelectTrigger>


            <SelectContent>

              <SelectItem value="CUSTOMER">
                Customer
              </SelectItem>


              <SelectItem value="PROVIDER">
                Provider
              </SelectItem>

            </SelectContent>


          </Select>


        </div>




        {/* Password */}

        <div className="space-y-2">

          <label className="text-sm font-medium">
            Password
          </label>


          <PasswordInput
            placeholder="********"
            {...register("password")}
          />


          {errors.password && (
            <p className="text-sm text-destructive">
              {errors.password.message}
            </p>
          )}

        </div>




        {/* Confirm Password */}

        <div className="space-y-2">

          <label className="text-sm font-medium">
            Confirm Password
          </label>


          <PasswordInput
            placeholder="********"
            {...register("confirmPassword")}
          />


          {errors.confirmPassword && (
            <p className="text-sm text-destructive">
              {errors.confirmPassword.message}
            </p>
          )}

        </div>



        <Button
          className="w-full"
          type="submit"
          disabled={isPending}
        >

          {
            isPending
              ? "Creating..."
              : "Register"
          }

        </Button>


      </form>




      <p className="text-center text-sm">

        Already have an account?{" "}

        <Link
          href="/auth/login"
          className="underline font-medium"
        >
          Login
        </Link>

      </p>


    </div>
  );
}