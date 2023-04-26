export type ReviewMap = {
  [key: string]: Review;
};

export type Review = {
  productId: string;
  userDisplayName: string;
  userEmail?: string;
  body: string;
  stars: number;
  createdAt: Date;
  id: string;
  verifiedPurchase: boolean;
};

export type ReviewState = {
  readonly reviews: Review[];
  readonly isLoading: boolean;
  readonly error: Error | null;
};
