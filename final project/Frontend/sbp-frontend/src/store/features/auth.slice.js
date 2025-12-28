import { createSlice } from "@reduxjs/toolkit";
import { loginThunk } from "./auth.thunk";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    loading: false,
    error: null,
    user: null,
    token: "",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loginThunk.pending, (state, { payload }) => {
      state.loading = true;
    });
    builder.addCase(loginThunk.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.user = payload.data;
      state.token = payload.token;
    });
    builder.addCase(loginThunk.rejected, (state, { payload }) => {
      state.loading = false;
    });
  },
});

const { reducer, actions } = authSlice;

const authReducer = reducer;

const {} = actions;

export { authReducer };
