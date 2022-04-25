import { createSlice } from "@reduxjs/toolkit";

const SharePostSlice = createSlice({
  name: "SharePost",
  initialState: { error: null, loading: false },
  reducers: {},
  extraReducers: {},
});

export const sharePostReducer = SharePostSlice.reducer;
