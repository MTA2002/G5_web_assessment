import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Blog, { SingleBlogState } from "../../interfaces/blog-interface";

export const fetchSingleBlog = createAsyncThunk(
  "singleBlog/fetchSingleBlog",
  async (id: string) => {
    const response = await fetch(
      `https://a2sv-backend.onrender.com/api/blogs/${id}`
    );
    return (await response.json()) as Blog;
  }
);

const initialState: SingleBlogState = {
  blog: null,
  status: "idle",
  error: null,
};

const singleBlogSlice = createSlice({
  name: "singleBlog",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSingleBlog.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchSingleBlog.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.blog = action.payload;
      })
      .addCase(fetchSingleBlog.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Failed to fetch blog";
      });
  },
});

export default singleBlogSlice.reducer;
