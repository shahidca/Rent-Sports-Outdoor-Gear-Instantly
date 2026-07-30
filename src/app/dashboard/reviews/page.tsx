import ReviewList from "@/features/review/components/ReviewList";

export default function ReviewsPage() {
  return (
    <div className="space-y-6">

      <h1 className="text-3xl font-bold">
        My Reviews
      </h1>

      <ReviewList />

    </div>
  );
}