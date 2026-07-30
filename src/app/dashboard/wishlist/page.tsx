import WishlistGrid from "@/features/wishlist/components/WishlistGrid";

export default function WishlistPage() {
  return (
    <div className="space-y-6">

      <h1 className="text-3xl font-bold">
        My Wishlist
      </h1>

      <WishlistGrid />

    </div>
  );
}