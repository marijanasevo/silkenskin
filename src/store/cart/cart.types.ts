import { CategoryItem } from "../category/category.types";

export type CartItem = CategoryItem & {
  quantity: number;
};

export type CartState = {
  readonly isCartOpen: boolean;
  readonly cartItems: CartItem[];
};
