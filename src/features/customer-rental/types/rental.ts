export interface ICustomerRental {
  id: string;

  gearName: string;

  gearImage: string;

  startDate: string;

  endDate: string;

  totalPrice: number;

  rentalStatus:
    | "PENDING"
    | "APPROVED"
    | "REJECTED"
    | "PICKED_UP"
    | "RETURNED";

  paymentStatus:
    | "PENDING"
    | "PAID";

  createdAt: string;
}