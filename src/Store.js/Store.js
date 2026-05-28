import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "../Slices.js/CartSlice";
import { ProductSlice } from "../Slices.js/Productslice";
import AuthSlice from "../Slices.js/AuthSlice";

const Store = configureStore({
  reducer: {
    Product: ProductSlice.reducer,
    Cart: CartSlice.reducer,   // ✅ MUST MATCH
    Auth: AuthSlice.reducer,
  },
});

export default Store;