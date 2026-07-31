import axiosInstance from "@/lib/axios";

export interface CreateRentalPayload {
  startDate: string;
  endDate: string;

  items: {
    gearItemId: string;
    quantity: number;
  }[];
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

    return {
      ...data,

      data: data.data.map(
        (rental: any) => ({
          id: rental.id,

          gearName:
            rental.rentalItems?.[0]
              ?.gearItem?.name ?? "-",

          gearImage:
            rental.rentalItems?.[0]
              ?.gearItem?.images?.[0] ??
            "/placeholder.png",

          startDate:
            rental.startDate,

          endDate:
            rental.endDate,

          totalPrice: Number(
            rental.totalAmount
          ),

          rentalStatus:
            rental.status,

          paymentStatus:
            rental.payment?.status ??
            "PENDING",

          createdAt:
            rental.createdAt,
        })
      ),
    };
  };

export const cancelRental = async (
  rentalId: string
) => {
  const { data } =
    await axiosInstance.patch(
      `/rentals/${rentalId}/cancel`
    );

  return data;
};