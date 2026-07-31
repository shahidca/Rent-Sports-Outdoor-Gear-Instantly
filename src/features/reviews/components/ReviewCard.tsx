"use client";

import { format } from "date-fns";

import { IReview } from "../types/review";

import StarRating from "./StarRating";

interface Props {
  review: IReview;
}

export default function ReviewCard({
  review,
}: Props) {
  return (
    <div className="rounded-xl border p-5">

      <div className="mb-3 flex items-center justify-between">

        <h3 className="font-semibold">
          {review.customerName}
        </h3>

        <StarRating
          rating={review.rating}
        />

      </div>

      <p className="mb-3 text-sm text-muted-foreground">
        {review.comment}
      </p>

      <span className="text-xs text-muted-foreground">
        {format(
          new Date(review.createdAt),
          "dd MMM yyyy"
        )}
      </span>

    </div>
  );
}