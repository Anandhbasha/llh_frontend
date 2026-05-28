import { configureStore } from "@reduxjs/toolkit";
import { ProductSlice } from "../slices/ProductSlice.js";
import CartSlice from "../slices/CartSlice.js";
import newauthSlice from "../newSlices/AuthSlice.js";


const Store = configureStore({
  reducer: {
    Product: ProductSlice.reducer,
    Cart: CartSlice.reducer,  
    Auth: newauthSlice.reducer,
  },
});

export default Store;