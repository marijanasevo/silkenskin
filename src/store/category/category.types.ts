export type CategoryMap = {
  [key: string]: CategoryItem[];
};

// TODO: Remove when review feature is finished
export type Review = {
  title: string;
  stars: number;
  comment: string;
};

export type CategoryItem = {
  id: number;
  name: string;
  brand: string;
  volume: string;
  price: number;
  description: string;
  thumbnailUrl: string;
  gallery: string[];
  ingredientsList: string[];
  targets: string[];
  suited: string;
  productProperties: string[];
  averageStars: number;
  numberOfReviews: number;
  reviews: Review[];
};

export type Category = {
  title: string;
  items: CategoryItem[];
};

export type CategoryState = {
  readonly categories: Category[];
  readonly isLoading: boolean;
  readonly error: Error | null;
};
