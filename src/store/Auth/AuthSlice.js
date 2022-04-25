import { createSlice } from "@reduxjs/toolkit";

import { signup, signout } from "./AuthThunk";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: localStorage.getItem("user"),
    loadingAuth: false,
    errorAuth: null,
  },
  reducers: {},
  extraReducers: {
    //SIGN UP
    [signup.pending]: (state) => {
      state.loadingAuth = true;
    },
    [signup.fulfilled]: (state, action) => {
      state.user = action.payload;
      state.loadingAuth = false;
    },
    [signup.rejected]: (state, action) => {
      state.errorAuth = action.payload;
      state.loadingAuth = false;
    },
    //SIGN OUT
    [signout.pending]: (state) => {
      state.loadingAuth = true;
    },
    [signout.fulfilled]: (state, action) => {
      state.user = action.payload;
      state.loadingAuth = false;
    },
    [signout.rejected]: (state, action) => {
      state.errorAuth = action.payload;
      state.loadingAuth = false;
    },
  },
});

export const authActions = authSlice.actions;
export const authReducer = authSlice.reducer;
