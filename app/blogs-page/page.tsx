"use client";
import React, { useEffect, useState } from "react";
import BlogCard from "./components/Blog";
import Blog from "../interfaces/blog-interface";
import { AppDispatch, RootState } from "../store";
import { useDispatch, useSelector } from "react-redux";
import { fetchBlogs } from "../features/blogs/blogs-slice";
import { ShimmeBlogCard } from "./shimmer-components";
import { retry } from "@reduxjs/toolkit/query";

const BlogsPage = () => {
  const dispatch: AppDispatch = useDispatch();
  const { items, status, error } = useSelector(
    (state: RootState) => state.blogData
  );
  const [searchTerm, setSearchTerm] = useState("");
  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchBlogs());
    }
  }, [status, dispatch]);

  const filteredBlogs = items.filter((item) => {
    return item.title.toLowerCase().includes(searchTerm.toLowerCase());
  });

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
            onChange={(e) => {
              setSearchTerm(e.target.value);
            }}
          />
          <button className="bg-[#264FAD] py-2 px-4 rounded-full text-white hover:bg-[#4764a8] ">
            + New Blog
          </button>
        </div>
        {status == "loading" && (
          <div className="w-full flex flex-col gap-5">
            {Array(5)
              .fill(0)
              .map((value, index) => {
                return <ShimmeBlogCard key={index} />;
              })}
          </div>
        )}
        {status == "failed" && <div>Error: {error}</div>}
        {filteredBlogs.length == 0 && <p>No Blogs Yet!!!</p>}
        <div className="w-full flex flex-col gap-9">
          {filteredBlogs.map((blog, index) => {
            return index <= 5 ? <BlogCard blog={blog} key={index} /> : <></>;
          })}
        </div>
      </div>
    </div>
  );
};

export default BlogsPage;
