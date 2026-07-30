import axiosInstance from "@/lib/axios";

import { IReview } from "../types/review";

interface ReviewResponse {
  success: boolean;
  message: string;
  data: IReview[];
}

export const getMyReviews = async () => {
  const { data } =
    await axiosInstance.get<ReviewResponse>(
      "/customer/reviews"
    );

  return data;
};

export const createReview = async (
  rentalId: string,
  rating: number,
  comment: string
) => {
  const { data } =
    await axiosInstance.post(
      "/reviews",
      {
        rentalId,
        rating,
        comment,
      }
    );

  return data;
};

export const deleteReview = async (
  reviewId: string
) => {
  const { data } =
    await axiosInstance.delete(
      `/reviews/${reviewId}`
    );

  return data;
};