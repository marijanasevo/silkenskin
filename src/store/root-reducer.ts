import { combineReducers } from "@reduxjs/toolkit";
import { userReducer } from "./user/user.reducer";
import { categoriesReducer } from "./category/category.reducer";
import { cartReducer } from "./cart/cart.reducer";
import { menuReducer } from "./menu/menu.reducer";
import { reviewsReducer } from "./review/review.reducer";
import { wishlistReducer } from "./wishlist/wishlist.reducer";
import { postsReducer } from "./posts/posts.reducer";

export const rootReducer = combineReducers({
  user: userReducer,
  categories: categoriesReducer,
  cart: cartReducer,
  menu: menuReducer,
  reviews: reviewsReducer,
  wishlist: wishlistReducer,
  posts: postsReducer,
});
