export interface ICreateRental {
  gearId: string;

  startDate: string;

  endDate: string;

  quantity: number;
}

export interface IRentalResponse {
  success: boolean;

  message: string;

  data: {
    id: string;

    totalDays: number;

    totalPrice: number;

    paymentStatus: string;
  };
}