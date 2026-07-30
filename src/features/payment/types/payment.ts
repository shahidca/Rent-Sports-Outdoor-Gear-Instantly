export interface IPayment {
  id: string;
  rentalId: string;
  amount: number;
  currency: string;
  paymentMethod: string;
  paymentStatus: string;
  transactionId: string;
  createdAt: string;
}