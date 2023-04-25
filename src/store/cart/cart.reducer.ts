import { createSlice } from "@reduxjs/toolkit";
import { CategoryItem } from "../category/category.types";
import { CartState, CartItem } from "./cart.types";

const INITIAL_STATE: CartState = {
  isCartOpen: false,
  cartItems: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState: INITIAL_STATE,
  reducers: {
    addItemToCart(state, action) {
      const newCartItems = addCartItem(state.cartItems, action.payload);
      state.cartItems = newCartItems;
    },
    removeItemFromCart(state, action) {
      state.cartItems = removeCartItem(state.cartItems, action.payload);
    },
    clearItemFromCart(state, action) {
      state.cartItems = clearCartItem(state.cartItems, action.payload);
    },
    setIsCartOpen(state, action) {
      state.isCartOpen = action.payload;
    },
    setClearCart(state) {
      state.cartItems = [];
    },
  },
});

// Helpers
const addCartItem = (
  cartItems: CartItem[],
  productToAdd: CategoryItem
): CartItem[] => {
  const existingProduct = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );

  if (existingProduct) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const removeCartItem = (
  cartItems: CartItem[],
  productToRemove: CartItem
): CartItem[] => {
  if (productToRemove.quantity === 1) {
    return cartItems.filter((cartItem) => productToRemove.id !== cartItem.id);
  }

  return cartItems.map((cartItem) =>
    cartItem.id === productToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

const clearCartItem = (
  cartItems: CartItem[],
  productToClear: CartItem
): CartItem[] => {
  return cartItems.filter((cartItem) => cartItem.id !== productToClear.id);
};

export const {
  addItemToCart,
  removeItemFromCart,
  clearItemFromCart,
  setClearCart,
  setIsCartOpen,
} = cartSlice.actions;

export const cartReducer = cartSlice.reducer;
