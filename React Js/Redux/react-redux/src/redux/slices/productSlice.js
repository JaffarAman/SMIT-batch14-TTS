import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "product",
  initialState: {
    products: [],
    addToCart: [],
  },
  reducers: {
    // actions
    setProduct: (state, { payload }) => {
      state.products = payload;
    },
    addToCart: (state, { payload }) => {
      //   state.addToCart.push(payload);
      const findProduct = state.addToCart.find((prod) => {
        if (prod.id == payload.id) {
          return true;
        }
      });

      console.log("findProduct", findProduct);

      if (!findProduct) {
        state.addToCart.push(payload);
      }
    },
  },
});

const { reducer, actions } = productSlice;

export const productReducer = reducer;
export const { setProduct, addToCart } = actions;
