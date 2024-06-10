import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: !!sessionStorage.getItem("authToken"),
  token: sessionStorage.getItem("authToken"),
  role: sessionStorage.getItem("userRole"),
  userProfile: JSON.parse(sessionStorage.getItem("userProfile")) || null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuthToken(state, action) {
      state.token = action.payload;
      state.isAuthenticated = true;
      sessionStorage.setItem("authToken", action.payload);
    },
    setUserRole(state, action) {
      state.role = action.payload;
      sessionStorage.setItem("userRole", action.payload);
    },
    setUserProfile(state, action) {
      state.userProfile = action.payload;
      sessionStorage.setItem("userProfile", JSON.stringify(action.payload));
    },
    logout(state) {
      state.token = null;
      state.isAuthenticated = false;
      state.role = null;
      state.userProfile = null;
      sessionStorage.removeItem("authToken");
      sessionStorage.removeItem("userRole");
      sessionStorage.removeItem("userProfile");
    },
  },
});

export const { setAuthToken, setUserRole, setUserProfile, logout } =
  authSlice.actions;

export default authSlice.reducer;
