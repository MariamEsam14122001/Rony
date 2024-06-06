// src/redux/authSlice.jsx
import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAuthenticated: false,
    token: null,
    role: null,
  },
  reducers: {
    setAuthToken(state, action) {
      state.token = action.payload;
      state.isAuthenticated = true;
    },
    setUserRole(state, action) {
      state.role = action.payload;
    },
    logout(state) {
      state.token = null;
      state.isAuthenticated = false;
      state.role = null;
      sessionStorage.removeItem("authToken");
      sessionStorage.removeItem("userRole");
    },
  },
});

export const { setAuthToken, setUserRole, logout } = authSlice.actions;
export default authSlice.reducer;
