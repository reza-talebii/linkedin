import { createAsyncThunk } from "@reduxjs/toolkit";

import { storage, db } from "../../firebase/server";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { collection, addDoc, getDocs } from "firebase/firestore";

export const createPost = createAsyncThunk(
  "posts/createPost",
  async (post, { rejectWithValue }) => {
    //UPLOAD IMAGE
    if (post.shareImage) {
      const storageRef = ref(storage, `${post.shareImage.name}`);
      const uploadTask = uploadBytesResumable(storageRef, post.shareImage);

      uploadTask.on(
        "state_changed",
        (snapshot) => {},
        (error) => {
          rejectWithValue(error.message);
        },
        async () => {
          const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
          try {
            await addDoc(collection(db, "posts"), {
              actor: {
                description: post.user.email,
                title: post.user.displayName,
                date: JSON.stringify(post.timestamp),
                profileImage: post.user.photoURL,
              },
              post: {
                video: post.shareVideo ? post.shareVideo : null,
                image: downloadURL,
                comments: {},
                like: {},
                description: post.editorText,
              },
            });
          } catch (e) {
            rejectWithValue(e.message);
          }
        }
      );
    }
    //UPLOAD VIDEO
    else {
      try {
        await addDoc(collection(db, "posts"), {
          actor: {
            description: post.user.email,
            title: post.user.displayName,
            date: JSON.stringify(post.timestamp),
            profileImage: post.user.photoURL,
          },
          post: {
            video: post.shareVideo,
            image: null,
            comments: {},
            like: {},
            description: post.editorText,
          },
        });
      } catch (e) {
        rejectWithValue(e.message);
      }
    }
  }
);

export const getAllPost = createAsyncThunk(
  "posts/getAllPost",
  async (_, { rejectWithValue }) => {
    try {
      const posts = await getDocs(collection(db, "posts"));
      let docs = [];

      posts.forEach((doc) => {
        docs.push({ ...doc.data() });
      });

      return { posts: docs };
    } catch (e) {
      rejectWithValue(e.message);
    }
  }
);
