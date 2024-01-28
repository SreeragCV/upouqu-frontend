import { createSlice } from "@reduxjs/toolkit";

const token = localStorage.getItem("token");

const authSlice = createSlice({
  name: "authentication",
  initialState: {
    isLoggedIn: true,
    isVerified: true,
    userId: null,
  },
  reducers: {
    handleLogin(state, action) {
      state.isLoggedIn = true;
      state.isVerified = true;
      state.userId = action.payload.id;
    },
    handleLogout(state) {
      state.isLoggedIn = false;
      state.isVerified = false;
      state.userId = null;
      localStorage.removeItem("token");
    },
    handleVerify(state, action){
      state.isLoggedIn = true;
      state.isVerified = true;
      state.userId = action.payload.id;
    }
  },
});

export const { handleLogin, handleLogout, handleVerify } = authSlice.actions;
export default authSlice.reducer;
