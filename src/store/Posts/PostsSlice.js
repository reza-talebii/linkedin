import { createSlice } from "@reduxjs/toolkit";
import { createPost, getAllPost } from "./PostsThunk";

const PostsSlice = createSlice({
  name: "SharePost",
  initialState: { error: null, loading: false, success: false },
  reducers: {},
  extraReducers: {
    //SAVA POST
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
    //GET ALL POST
    [getAllPost.pending]: (state) => {
      state.loading = true;
    },
    [getAllPost.fulfilled]: (state, action) => {
      state.loading = false;
      console.log(action.payload);
    },
    [getAllPost.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const PostsReducer = PostsSlice.reducer;
