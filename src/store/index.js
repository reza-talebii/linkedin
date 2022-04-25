import { configureStore } from "@reduxjs/toolkit";

import { authReducer } from "./Auth/AuthSlice";
import { PostsReducer } from "./Posts/PostsSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    posts: PostsReducer,
  },
});

export default store;
