import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: { user: null },
  reducers: {
    signup(state, action) {
      state.user = action.payload.user;
    },
    signOut(state) {
      state.user = null;
    },
  },
});

export const authActions = authSlice.actions;
export const authReducer = authSlice.reducer;
