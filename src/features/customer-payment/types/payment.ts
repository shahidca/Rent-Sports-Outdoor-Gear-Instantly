export interface ICustomerPayment {
  id: string;

  amount: number;

  currency: string;

  status:
    | "PENDING"
    | "COMPLETED"
    | "FAILED";

  transactionId: string | null;

  paymentIntentId: string;

  paidAt: string | null;

  createdAt: string;

  rentalOrder: {
    id: string;
  };
}