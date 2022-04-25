import { createSlice } from "@reduxjs/toolkit";
import { createPost } from "./SharePostThunk";

const SharePostSlice = createSlice({
  name: "SharePost",
  initialState: { error: null, loading: false },
  reducers: {},
  extraReducers: {
    [createPost.pending]: (state, action) => {
      state.loading = true;
      console.log("pending", action.payload);
    },
    [createPost.fulfilled]: (state, action) => {
      state.loading = false;
    },
    [createPost.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const sharePostReducer = SharePostSlice.reducer;
