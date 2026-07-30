import { z } from "zod";

export const reviewSchema = z.object({
  rating: z
    .number()
    .min(1, "Minimum rating is 1")
    .max(5, "Maximum rating is 5"),

  comment: z
    .string()
    .min(10, "Comment must be at least 10 characters")
    .max(500),
});

export type ReviewFormData =
  z.infer<typeof reviewSchema>;