"use client";

import Link from "next/link";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { loginSchema, LoginSchema } from "../schemas/login.schema";
import { useLogin } from "../hooks/useLogin";

import PasswordInput from "./PasswordInput";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";


export default function LoginForm() {

  const {
    register,
    handleSubmit,
    formState: {
      errors,
    },
  } = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });


  const {
    mutate,
    isPending,
  } = useLogin();



  const onSubmit = (
    data: LoginSchema
  ) => {

    mutate({
      email: data.email,
      password: data.password,
    });

  };



  return (
    <div className="space-y-6 rounded-xl border bg-background p-6 shadow-sm">

      <div className="space-y-2 text-center">

        <h1 className="text-2xl font-bold">
          Welcome Back
        </h1>

        <p className="text-sm text-muted-foreground">
          Login to your GearUp account
        </p>

      </div>



      <form
        onSubmit={
          handleSubmit(onSubmit)
        }
        className="space-y-4"
      >


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


          {
            errors.email && (
              <p className="text-sm text-destructive">
                {errors.email.message}
              </p>
            )
          }

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


          {
            errors.password && (
              <p className="text-sm text-destructive">
                {errors.password.message}
              </p>
            )
          }

        </div>




        <Button
          type="submit"
          className="w-full"
          disabled={isPending}
        >

          {
            isPending
              ? "Logging in..."
              : "Login"
          }

        </Button>


      </form>




      <p className="text-center text-sm">

        Don't have an account?{" "}

        <Link
          href="/auth/register"
          className="font-medium underline"
        >
          Register
        </Link>

      </p>


    </div>
  );
}