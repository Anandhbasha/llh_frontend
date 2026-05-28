import { configureStore } from "@reduxjs/toolkit";
import { ProductSlice } from "../slices/ProductSlice.js";
import CartSlice from "../slices/CartSlice.js";
import authSlice from "../Slices/AuthSlice.js";


const Store = configureStore({
  reducer: {
    Product: ProductSlice.reducer,
    Cart: CartSlice.reducer,  
    Auth: authSlice.reducer,
  },
});

export default Store;