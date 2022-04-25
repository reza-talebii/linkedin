import { configureStore } from "@reduxjs/toolkit";

import { authReducer } from "./Auth/AuthSlice";
import { sharePostReducer } from "./SharePost/SharePostSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    sharePost: sharePostReducer,
  },
});

export default store;
