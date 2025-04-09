import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./slices/Auth/authSlice.js";

export const Store = configureStore({
  reducer: {
    auth: authSlice.reducer,
  },
});
