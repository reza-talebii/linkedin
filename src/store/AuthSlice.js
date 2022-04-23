import { createSlice } from "@reduxjs/toolkit";
import { auth } from "../firebase/server";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const authSlice = createSlice({
  name: "auth",
  initialState: { user: null },
  reducers: {
    signup(state) {
      const provider = new GoogleAuthProvider();

      signInWithPopup(auth, provider)
        .then((result) => {
          const user = result.user;
          state.user = user;
        })
        .catch((error) => alert(error.message));
    },
  },
});

export const authActions = authSlice.actions;
export const authReducer = authSlice.reducer;
