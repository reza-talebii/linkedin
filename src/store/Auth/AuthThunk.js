import { createAsyncThunk } from "@reduxjs/toolkit";

import { auth } from "../../firebase/server";
import { signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";

export const signup = createAsyncThunk(
  "auth/signup",
  async (_, { rejectWithValue }) => {
    const provider = new GoogleAuthProvider();

    try {
      const result = await signInWithPopup(auth, provider);
      localStorage.setItem("user", JSON.stringify(result.user));
      return JSON.stringify(result.user);
    } catch (error) {
      rejectWithValue(error);
    }
  }
);

export const signout = createAsyncThunk(
  "auth/signout",
  async (_, { rejectWithValue }) => {
    try {
      await signOut(auth);
      localStorage.removeItem("user");
      return null;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);
