export type RentalStatus =
  | "PENDING"
  | "APPROVED"
  | "REJECTED"
  | "PICKED_UP"
  | "RETURNED";

export interface IProviderRental {
  id: string;

  customerName: string;

  customerEmail: string;

  gearName: string;

  startDate: string;

  endDate: string;

  totalPrice: number;

  status: RentalStatus;
}