export interface IGear {
  id: string;

  name: string;

  description: string;

  brand: string;

  image: string;

  categoryId: string;

  pricePerDay: number;

  quantity: number;

  availableQuantity: number;

  averageRating: number;

  isAvailable: boolean;
}