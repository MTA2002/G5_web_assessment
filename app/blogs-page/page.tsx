"use client";
import React, { useEffect } from "react";
import BlogCard from "./components/Blog";
import Blog from "../interfaces/blog-interface";
import { AppDispatch, RootState } from "../store";
import { useDispatch, useSelector } from "react-redux";
import { fetchBlogs } from "../features/blogs/blogs-slice";

const BlogsPage = () => {
  const dispatch: AppDispatch = useDispatch();
  const { items, status, error } = useSelector(
    (state: RootState) => state.blogData
  );

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchBlogs());
    }
  }, [status, dispatch]);

  return (
    <div className="flex flex-col px-28 py-16 gap-16 lg:flex-row min-h-[100vh]">
      <div>
        <h1 className="font-semibold text-xl">Blogs</h1>
      </div>
      <div className="flex flex-col items-center grow gap-10">
        <div className="flex gap-5">
          <input
            type="text"
            className="border px-5 py-2 rounded-full border-[#CFCFCF]"
            placeholder="Search..."
          />
          <button className="bg-[#264FAD] py-2 px-4 rounded-full text-white hover:bg-[#4764a8] ">
            + New Blog
          </button>
        </div>
        {status == "loading" && <div>Loading...</div>}
        {status == "failed" && <div>Error: {error}</div>}
        <div className="w-full flex flex-col gap-9">
          {items.map((blog, index) => {
            return index <= 5 ? <BlogCard blog={blog} key={index} /> : <></>;
          })}
        </div>
      </div>
    </div>
  );
};

export default BlogsPage;
