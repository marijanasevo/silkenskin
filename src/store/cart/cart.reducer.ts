import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  isCartOpen: false,
  cartItems: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState: INITIAL_STATE,
  reducers: {
    addItemToCart(state, action) {
      const newCartItems = addCartItem(state.cartItems, action.payload);
      console.log("cartItems:", state.cartItems, "payload:", action.payload);
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
    setClearCart(state, action) {
      state.cartItems = [];
    },
  },
});

// Helpers
const addCartItem = (cartItems, productToAdd) => {
  // console.log(cartItems, productToAdd);
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

const removeCartItem = (cartItems, productToRemove) => {
  if (productToRemove.quantity === 1) {
    return cartItems.filter((cartItem) => productToRemove.id !== cartItem.id);
  }

  return cartItems.map((cartItem) =>
    cartItem.id === productToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

const clearCartItem = (cartItems, productToClear) => {
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
