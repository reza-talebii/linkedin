import { createSlice } from "@reduxjs/toolkit";
import { createPost } from "./PostsThunk";

const PostsSlice = createSlice({
  name: "SharePost",
  initialState: { error: null, loading: false, success: false },
  reducers: {},
  extraReducers: {
    [createPost.pending]: (state) => {
      state.loading = true;
    },
    [createPost.fulfilled]: (state) => {
      state.loading = false;
      state.success = true;
    },
    [createPost.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const PostsReducer = PostsSlice.reducer;
