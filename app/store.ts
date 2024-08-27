import { configureStore } from "@reduxjs/toolkit";
import blogReducer from "./features/blogs/blogs-slice";
import singleReducer from "./features/singleBlogs/single-blog-slice";

export const store = configureStore({
  reducer: {
    blogData: blogReducer,
    singleBlogData: singleReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
