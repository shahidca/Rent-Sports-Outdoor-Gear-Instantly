"use client";

import { useWishlist } from "../hooks/useWishlist";

export default function WishlistGrid() {
  const {
    data,
    isPending,
  } = useWishlist();

  if (isPending) {
    return <p>Loading wishlist...</p>;
  }

  const items = data?.data ?? [];

  if (!items.length) {
    return (
      <div className="rounded-xl border p-10 text-center">
        Your wishlist is empty.
      </div>
    );
  }

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

      {items.map((item) => (

        <div
          key={item.id}
          className="rounded-xl border p-5"
        >

          <img
            src={item.image}
            alt={item.gearName}
            className="mb-4 h-52 w-full rounded-lg object-cover"
          />

          <h3 className="text-xl font-semibold">
            {item.gearName}
          </h3>

          <p>{item.category}</p>

          <p className="mt-2 font-bold">
            ৳{item.pricePerDay}/day
          </p>

        </div>

      ))}

    </div>
  );
}