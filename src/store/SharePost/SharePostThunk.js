import { createAsyncThunk } from "@reduxjs/toolkit";

import { storage } from "../../firebase/server";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

export const createPost = createAsyncThunk(
  "sharePost/createPost",
  async (post, { rejectWithValue }) => {
    //UPLOAD IMAGE
    if (post.shareImage) {
      const storageRef = ref(storage, `/images/${post.shareImage.name}`);
      const uploadTask = uploadBytesResumable(storageRef, post.shareImage);

      uploadTask.on(
        "state_changed",
        (snapshot) => {},
        (error) => {
          rejectWithValue(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            console.log(downloadURL);
          });
        }
      );
    }
  }
);
