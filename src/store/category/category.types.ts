export type CategoryMap = {
  [key: string]: CategoryItem[];
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
  newArrival: boolean;
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
