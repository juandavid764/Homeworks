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

    logout: (state, action) => {
      state.status = "not-authenticated";
      state.uid = null;
      state.email = null;
      state.displayname = null;
      state.photoURL = null;
      state.errorMessage = action.payload?.errorMessage;
    },
    checkingCredentials: (state, action) => {
      console.log("cehcking");
    },
  },
});

export const { login, register, logout, checkingCredentials } = authSlice.actions;

export default authSlice.reducer;