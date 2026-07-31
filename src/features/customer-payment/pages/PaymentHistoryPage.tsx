import PaymentTable from "../components/PaymentTable";

export default function PaymentHistoryPage() {
  return (
    <div className="space-y-6">

      <div>

        <h1 className="text-3xl font-bold">
          Payment History
        </h1>

        <p className="text-muted-foreground">
          View all your completed and pending payments.
        </p>

      </div>

      <PaymentTable />

    </div>
  );
}