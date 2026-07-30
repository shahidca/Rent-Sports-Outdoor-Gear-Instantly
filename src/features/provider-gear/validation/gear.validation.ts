import { z } from "zod";

export const gearSchema = z.object({
  name: z.string().min(3, "Name is required"),

  description: z
    .string()
    .min(20, "Description must be at least 20 characters"),

  category: z.string().min(1, "Category is required"),

  pricePerDay: z.coerce
    .number()
    .positive("Price must be greater than 0"),

  quantity: z.coerce
    .number()
    .int()
    .min(1, "Quantity must be at least 1"),
});

export type GearFormData = z.infer<typeof gearSchema>;