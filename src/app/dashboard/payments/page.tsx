import PaymentTable from "@/features/payment/components/PaymentTable";

export default function PaymentsPage() {
  return (
    <div className="space-y-6">

      <h1 className="text-3xl font-bold">
        Payment History
      </h1>

      <PaymentTable />

    </div>
  );
}