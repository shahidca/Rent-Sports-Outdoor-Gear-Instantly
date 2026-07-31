import axiosInstance from "@/lib/axios";

import { IReview } from "../types/review";

interface ReviewResponse {
  success: boolean;
  message: string;
  data: IReview[];
}

export const getGearReviews = async (
  gearId: string
) => {
  const { data } =
    await axiosInstance.get<ReviewResponse>(
      `/gear/${gearId}/reviews`
    );

  return data;
};