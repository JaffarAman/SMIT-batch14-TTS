import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const productSlice = createSlice({
  name: "product",
  initialState: {
    allProduct: [],
    loading: false,
    error: null,
  },
  reducers: {
    dummyFunction: () => {},
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProductApi.pending, (state, { payload }) => {
      // console.log("loading");
      state.loading = true;
      state.error = null;
    });

    builder.addCase(fetchProductApi.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.allProduct = payload;
      state.error = null;
    });

    builder.addCase(fetchProductApi.rejected, (state, { payload }) => {
      state.error = "Something went wrond";
    });

    // create
    builder.addCase(createproductThunk.pending)
    builder.addCase(createproductThunk.fulfilled)
    builder.addCase(createproductThunk.rejected)

  },
});

const { reducer, actions } = productSlice;

const { dummyFunction } = actions;

const productReducer = reducer;

// Actions
const fetchProductApi = createAsyncThunk("fetch/product", async (body , {rejectWithValue}) => {
  try {
    const res = await axios.get("https://fakestore12321321312api.com/products");
    return res.data;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});




const createproductThunk = createAsyncThunk("create/product"  , (body , {rejectWithValue})=>{
    try {
        // axios
        return data
    } catch (error) {
        return rejectWithValue(error.message)
    }
})
export { productReducer, fetchProductApi };
