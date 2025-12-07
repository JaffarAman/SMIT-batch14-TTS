import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    counterValue: 0,
  },
  reducers: {
    // actions
    addTodo: (state, { payload }) => {
      console.log("addTodo", state.counterValue, payload);
      state.counterValue = ++state.counterValue;
    },
    minusTodo: (state) => {
      state.counterValue = --state.counterValue;
    },
  },
});

const { reducer, actions } = counterSlice;

const counterReducer = reducer;

const { addTodo, minusTodo } = actions;

export { counterReducer, addTodo, minusTodo };
