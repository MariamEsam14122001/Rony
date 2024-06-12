import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: Boolean(sessionStorage.getItem("authToken")),
  token: sessionStorage.getItem("authToken") || null,
  role: sessionStorage.getItem("userRole") || null,
  userProfile: JSON.parse(sessionStorage.getItem("userProfile")) || null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuthToken: (state, action) => {
      const { payload } = action;
      state.token = payload;
      state.isAuthenticated = Boolean(payload);
      sessionStorage.setItem("authToken", payload);
    },
    setUserRole: (state, action) => {
      const { payload } = action;
      state.role = payload;
      sessionStorage.setItem("userRole", payload);
    },
    setUserProfile: (state, action) => {
      const { payload } = action;
      state.userProfile = payload;
      sessionStorage.setItem("userProfile", JSON.stringify(payload));
    },
    logout: (state) => {
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
