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
  customerPhone?: string;

  gearName: string;
  gearCategory?: string;

  quantity: number;

  startDate: string;
  endDate: string;

  totalPrice: number;

  status: RentalStatus;

  notes?: string;
}