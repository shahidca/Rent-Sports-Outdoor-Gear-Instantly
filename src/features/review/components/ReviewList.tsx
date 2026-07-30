"use client";

import { useReviews } from "../hooks/useReviews";
import RatingStars from "./RatingStars";

export default function ReviewList() {
  const { data, isPending } =
    useReviews();

  if (isPending) {
    return <p>Loading reviews...</p>;
  }

  const reviews = data?.data ?? [];

  if (!reviews.length) {
    return (
      <div className="rounded-xl border p-10 text-center">
        No reviews yet.
      </div>
    );
  }

  return (
    <div className="space-y-4">

      {reviews.map((review) => (

        <div
          key={review.id}
          className="rounded-xl border p-5"
        >

          <h2 className="font-semibold">
            {review.gearName}
          </h2>

          <RatingStars
            rating={review.rating}
          />

          <p className="mt-3">
            {review.comment}
          </p>

        </div>

      ))}

    </div>
  );
}