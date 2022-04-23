import { createSlice } from "@reduxjs/toolkit";

import { signup } from "./AuthThunk";

const authSlice = createSlice({
  name: "auth",
  initialState: { user: null, loadingAuth: false, errorAuth: null },
  reducers: {
    signOut(state) {
      state.user = null;
    },
  },
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
  },
});

export const authActions = authSlice.actions;
export const authReducer = authSlice.reducer;
