import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const loginThunk = createAsyncThunk(
  "auth/login",
  async (payload, { rejectWithValue }) => {
    try {
      console.log("payload", payload);
      const url = import.meta.env.VITE_BASE_URL + "/auth/login";
      const res = await axios.post(url, payload);
      console.log("response", res);

      return res.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
