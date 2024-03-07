import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./AuthSlice.js";
import cartSlice from "./CartSlice.js";

const store = configureStore({
  reducer: { auth: authSlice, cart: cartSlice },
});

export default store;
