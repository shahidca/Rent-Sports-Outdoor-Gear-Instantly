export interface ICustomerRental {
  id: string;

  gearName: string;

  gearImage: string;

  startDate: string;

  endDate: string;

  totalPrice: number;

  rentalStatus:
    | "PLACED"
    | "CONFIRMED"
    | "PAID"
    | "PICKED_UP"
    | "RETURNED"
    | "CANCELLED";

  paymentStatus:
    | "PENDING"
    | "COMPLETED"
    | "FAILED";

  createdAt: string;
}