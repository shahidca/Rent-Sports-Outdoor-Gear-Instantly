import axiosInstance from "@/lib/axios";

export interface CreateRentalPayload {
  gearId: string;
  startDate: string;
  endDate: string;
  notes?: string;
}

export const createRental = async (
  payload: CreateRentalPayload
) => {
  const { data } =
    await axiosInstance.post(
      "/rentals",
      payload
    );

  return data;
};

export const getCustomerRentals =
  async () => {
    const { data } =
      await axiosInstance.get(
        "/rentals/my-rentals"
      );

    return data;
  };