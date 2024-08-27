import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Blog, { BlogsState } from "../../interfaces/blog-interface";

export const fetchBlogs = createAsyncThunk("blogs/fetchBlogs", async () => {
  const response = await fetch("https://a2sv-backend.onrender.com/api/blogs");
  return (await response.json()) as Blog[];
});

const initialState: BlogsState = {
  items: [],
  status: "idle",
  error: null,
};

const blogsSlice = createSlice({
  name: "blogs",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBlogs.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchBlogs.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload;
      })
      .addCase(fetchBlogs.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Failed to fetch blogs";
      });
  },
});

export default blogsSlice.reducer;
