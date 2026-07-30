import { z } from "zod";

export const registerSchema = z
  .object({
    name: z.string().min(2),

    email: z.string().email(),

    phone: z.string().optional(),

    address: z.string().optional(),

    profileImage: z.string().optional(),

    role: z.enum([
      "CUSTOMER",
      "PROVIDER",
    ]),

    password: z.string().min(6),

    confirmPassword: z.string(),
  })
  .refine(
    (data) =>
      data.password ===
      data.confirmPassword,
    {
      message: "Passwords do not match",
      path: ["confirmPassword"],
    }
  );

export type RegisterSchema =
  z.infer<typeof registerSchema>;