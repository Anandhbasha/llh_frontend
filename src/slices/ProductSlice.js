import { createSlice } from "@reduxjs/toolkit";

const initialState = {

  /* PRODUCTS ARRAY */
  Products: [],

  /* SEARCH */
  searchTerm: "",

};

export const ProductSlice = createSlice({

  name: "Product",

  initialState,

  reducers: {

    /* SET PRODUCTS FROM BACKEND */
    setProducts: (state, action) => {

      state.Products = action.payload;

    },

    /* ADD PRODUCT */
    addProduct: (state, action) => {

      state.Products.push(action.payload);

    },

    /* EDIT PRODUCT */
    editProduct: (state, action) => {

      const updatedProduct = action.payload;

      const index = state.Products.findIndex(
        (item) => item.id === updatedProduct.id
      );

      if (index !== -1) {

        state.Products[index] = updatedProduct;

      }

    },

    /* DELETE PRODUCT */
    deleteProduct: (state, action) => {

      state.Products = state.Products.filter(
        (item) => item.id !== action.payload
      );

    },

    /* SEARCH */
    setSearchTerm: (state, action) => {

      state.searchTerm = action.payload;

    }

  }

});

export const {

  addProduct,
  editProduct,
  deleteProduct,
  setSearchTerm,
  setProducts

} = ProductSlice.actions;

export default ProductSlice.reducer;