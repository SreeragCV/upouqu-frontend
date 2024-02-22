import { createSlice } from "@reduxjs/toolkit";

const token = localStorage.getItem("token");

const authSlice = createSlice({
  name: "authentication",
  initialState: {
    isLoggedIn: true,
    isVerified: true,
    user_id: null,
    role: null,
    full_name: null,
  },
  reducers: {
    handleLogin(state, action) {
      state.isLoggedIn = true;
      state.isVerified = true;
      state.user_id = action.payload.id;
      state.role = action.payload.role;
      state.full_name = action.payload.full_name;
    },
    handleLogout(state) {
      state.isLoggedIn = false;
      state.isVerified = false;
      state.user_id = null;
      state.role = null;
      state.full_name = null;
      localStorage.removeItem("token");
    },
    handleVerify(state, action) {
      state.isLoggedIn = true;
      state.isVerified = true;
      state.user_id = action.payload.id;
      state.role = action.payload.role;
      state.full_name = action.payload.full_name;
    },
  },
});

export const { handleLogin, handleLogout, handleVerify } = authSlice.actions;
export default authSlice.reducer;
