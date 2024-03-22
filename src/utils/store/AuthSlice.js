import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "authentication",
  initialState: {
    isLoggedIn: true,
    isVerified: true,
    user_id: null,
    role: null,
    full_name: null,
    dp_url : null
  },
  reducers: {
    handleLogin(state, action) {
      state.isLoggedIn = true;
      state.isVerified = true;
      state.user_id = action.payload.id;
      state.role = action.payload.role;
      state.full_name = action.payload.full_name;
      state.dp_url = action.payload.dp_url
    },
    handleLogout(state) {
      state.isLoggedIn = false;
      state.isVerified = false;
      state.user_id = null;
      state.role = null;
      state.full_name = null;
      state.image_url = null
      localStorage.removeItem("token");
    },
    handleVerify(state, action) {
      state.isLoggedIn = true;
      state.isVerified = true;
      state.user_id = action.payload.id;
      state.role = action.payload.role;
      state.full_name = action.payload.full_name;
      state.dp_url = action.payload.dp_url
    },
  },
});

export const { handleLogin, handleLogout, handleVerify } = authSlice.actions;
export default authSlice.reducer;
