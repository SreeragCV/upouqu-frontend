import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "authentication",
  initialState: {
    isLoggedIn: false,
    isVerified: false,
    userId: null,
  },
  reducers: {
    handleLogin(state, action) {
      state.isLoggedIn = true;
      state.isVerified = true;
      state.userId = action.payload.id;
      localStorage.setItem("token", action.payload.token);
    },
  },
});

export const { handleLogin } = authSlice.actions;
export default authSlice.reducer;
