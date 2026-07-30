import axiosInstance from "@/lib/axios";

import { IWishlistItem } from "../types/wishlist";

interface IWishlistResponse {
  success: boolean;
  message: string;
  data: IWishlistItem[];
}

export const getWishlist = async () => {
  const { data } =
    await axiosInstance.get<IWishlistResponse>(
      "/customer/wishlist"
    );

  return data;
};

export const addWishlist = async (
  gearId: string
) => {
  const { data } =
    await axiosInstance.post(
      "/customer/wishlist",
      {
        gearId,
      }
    );

  return data;
};

export const removeWishlist = async (
  gearId: string
) => {
  const { data } =
    await axiosInstance.delete(
      `/customer/wishlist/${gearId}`
    );

  return data;
};