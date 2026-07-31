import { z } from "zod";

export const rentalSchema = z
  .object({
    startDate: z.string().min(1, "Start date is required"),

    endDate: z.string().min(1, "End date is required"),

    notes: z.string().optional(),
  })
  .refine(
    (data) =>
      new Date(data.endDate) >=
      new Date(data.startDate),
    {
      message:
        "End date must be after start date",
      path: ["endDate"],
    }
  );

export type RentalFormData =
  z.infer<typeof rentalSchema>;