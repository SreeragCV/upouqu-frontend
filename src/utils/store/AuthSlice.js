import { createSlice } from "@reduxjs/toolkit";

const token = localStorage.getItem("token");

const authSlice = createSlice({
  name: "authentication",
  initialState: {
    isLoggedIn: true,
    isVerified: true,
    user_id: null,
  },
  reducers: {
    handleLogin(state, action) {
      state.isLoggedIn = true;
      state.isVerified = true;
      state.user_id = action.payload.id;
    },
    handleLogout(state) {
      state.isLoggedIn = false;
      state.isVerified = false;
      state.user_id = null;
      localStorage.removeItem("token");
    },
    handleVerify(state, action){
      state.isLoggedIn = true;
      state.isVerified = true;
      state.user_id = action.payload.id;
    }
  },
});

export const { handleLogin, handleLogout, handleVerify } = authSlice.actions;
export default authSlice.reducer;
