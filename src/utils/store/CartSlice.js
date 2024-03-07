import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
  },
  reducers: {
    addItem(state, action) {
      const existingCartItemIndex = state.cart.findIndex(
        (item) => item.book_id === action.payload.bookDetails.book_id
      );
      const existingItem = state.cart[existingCartItemIndex];

      if (existingCartItemIndex > -1) {
        const updatedItem = {
          ...existingItem,
          quantity: existingItem.quantity + 1,
        };
        state.cart[existingCartItemIndex] = updatedItem;
      } else {
        state.cart.push({ ...action.payload.bookDetails, quantity: 1 });
      }
    },
    removeItem(state, action) {},
    clearCart(state, action) {},
  },
});

export const { addItem } = cartSlice.actions;
export default cartSlice.reducer;
