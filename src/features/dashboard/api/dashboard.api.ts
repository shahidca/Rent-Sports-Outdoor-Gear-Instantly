import axiosInstance from "@/lib/axios";

export interface IDashboardOverview {
  totalRentals: number;
  activeRentals: number;
  completedRentals: number;
  totalSpent: number;
  wishlist: number;
}

export const getDashboardOverview = async () => {
  const { data } = await axiosInstance.get(
    "/customer/dashboard"
  );

  return data;
};