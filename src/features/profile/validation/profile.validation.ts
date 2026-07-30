import { z } from "zod";

export const profileSchema = z.object({
  name: z.string().min(2, "Name is required"),
  phone: z.string().optional(),
  address: z.string().optional(),
});

export type ProfileFormData = z.infer<
  typeof profileSchema
>;