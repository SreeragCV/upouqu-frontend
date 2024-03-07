import { createSlice } from "@reduxjs/toolkit";

const progressSlice = createSlice({
  name: "progress",
  initialState: "",
  reducers: {
    showCart(state, action) {
      state = "cart";
    },

    hideCart(state, action) {
      state = "";
    },

    showCheckout(state, action) {
      state = "checkout";
    },

    hideCheckout(state, action) {
      state = "";
    },

    showSuccess(state, action) {
      state = "success";
    },

    hideSuccess(state, action) {
      state = "";
    },
  },
});

export const {
  showCart,
  hideCart,
  showCheckout,
  hideCheckout,
  showSuccess,
  hideSuccess,
} = progressSlice.actions;

export default progressSlice.reducer;
