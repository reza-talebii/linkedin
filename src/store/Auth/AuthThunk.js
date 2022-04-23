import { createAsyncThunk } from "@reduxjs/toolkit";

import { auth } from "../../firebase/server";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";

export const signup = createAsyncThunk(
  "auth/signup",
  async (_, { rejectWithValue }) => {
    const provider = new GoogleAuthProvider();

    try {
      const result = await signInWithPopup(auth, provider);
      return JSON.stringify(result.user);
    } catch (error) {
      rejectWithValue(error);
    }
  }
);
