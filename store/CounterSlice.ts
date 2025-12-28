import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CounterState {
  counter: number;
  isReady: boolean;
}

const initialState: CounterState = {
  counter: 0,
  isReady: false,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    initCounter: (state, action: PayloadAction<number>) => {
      if (state.isReady) return;
      state.isReady = true;
      state.counter = action.payload;
    },
    increment: (state) => {
      state.counter++;
    },
    decrement: (state) => {
      state.counter--;
    },
    resetCounter: (state, action: PayloadAction<number>) => {
      if (action.payload < 0) action.payload = 0;

      state.counter = action.payload;
    },
  },
});

export const { increment, decrement, resetCounter, initCounter } =
  counterSlice.actions;
export default counterSlice.reducer;
