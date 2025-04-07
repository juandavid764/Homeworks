import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    status: "checking", // 'checking', 'authenticated', 'not-authenticated'
    uid: null,
    email: null,
    displayname: null,
    photoURL: null,
    errorMessage: null,
  },
  reducers: {
    register: (state, action) => {
      state.status = "authenticated";
      state.email = action.payload.email;
    },

    login: (state, action) => {
      state.status = "authenticated";
      state.uid = action.payload.uid;
      state.email = action.payload.email;
      state.displayname = action.payload.displayName;
    },

    logout: (state, action) => {},
    checkingCredentials: (state, action) => {
      console.log("cehcking");
    },
  },
});

export const { register, logout, checkingCredentials } = authSlice.actions;

export default authSlice.reducer;