import { createSlice } from "@reduxjs/toolkit";

const conterSlice = createSlice({
  name: "counter",
  initialState: {
    count: 0,
  },
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    incrementBy: (state, action) => {
      state.count += action.payload; // Usa el payload para incrementar el valor
    },
    decrementBy: (state, action) => {
      state.count -= action.payload; // Usa el payload para incrementar el valor
    },
  },
});

export const { increment, incrementBy, decrement, decrementBy } = conterSlice.actions;

export default conterSlice.reducer;
