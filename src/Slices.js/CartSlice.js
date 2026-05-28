import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItem: JSON.parse(localStorage.getItem("cartItem")) || [],
  showCart: false,
  totalAmount: 0,
};

const CartSlice = createSlice({
  name: "Cart",
  initialState,
  reducers: {
    addtoCart: (state, action) => {
      const existing = state.cartItem.find(
        (item) => item.id === action.payload.id
      );

      if (existing) {
        existing.quantity += 1;
      } else {
        state.cartItem.push({ ...action.payload, quantity: 1 });
      }

      localStorage.setItem("cartItem", JSON.stringify(state.cartItem));
    },

    increaseQty: (state, action) => {
      const item = state.cartItem.find((i) => i.id === action.payload);
      if (item) item.quantity += 1;

      localStorage.setItem("cartItem", JSON.stringify(state.cartItem));
    },

    decreaseQty: (state, action) => {
      const item = state.cartItem.find((i) => i.id === action.payload);
      if (item && item.quantity > 1) item.quantity -= 1;

      localStorage.setItem("cartItem", JSON.stringify(state.cartItem));
    },

    removeFromCart: (state, action) => {
      state.cartItem = state.cartItem.filter(
        (i) => i.id !== action.payload
      );

      localStorage.setItem("cartItem", JSON.stringify(state.cartItem));
    },

    clearCart: (state) => {
      state.cartItem = [];
      localStorage.removeItem("cartItem");
    },

    toggleCart: (state) => {
      state.showCart = !state.showCart;
    },

    getTotalAmount: (state) => {
      state.totalAmount = state.cartItem.reduce((sum, item) => {
        return sum + item.Price * (item.quantity || 1);
      }, 0);
    },
  },
});

export const {
  addtoCart,
  increaseQty,
  decreaseQty,
  removeFromCart,
  clearCart,
  toggleCart,
  getTotalAmount,
} = CartSlice.actions;

export default CartSlice;