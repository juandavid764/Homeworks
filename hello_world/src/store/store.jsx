import { configureStore } from "@reduxjs/toolkit";
import { firebaseSlice } from "./slices/firebaseSlice.js";

export const Store = configureStore({
  reducer: {
    firebase: firebaseSlice.reducer,
  },
});
