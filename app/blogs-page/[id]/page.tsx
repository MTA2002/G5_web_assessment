"use client";
import Blog from "@/app/interfaces/blog-interface";
import { useParams } from "next/navigation";
import React, { useEffect } from "react";
import Image from "next/image";
import RelatedBlogs from "../components/RelatedBlog";
import RelatedBlog from "../components/RelatedBlog";
import { AppDispatch, RootState } from "@/app/store";
import { useDispatch, useSelector } from "react-redux";
import { fetchSingleBlog } from "@/app/features/singleBlogs/single-blog-slice";
import { defaultAuthor } from "../components/Blog";

const BlogDetail = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch: AppDispatch = useDispatch();
  const { blog, status, error } = useSelector(
    (state: RootState) => state.singleBlogData
  );

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchSingleBlog(id));
    }
  }, [status, dispatch]);

  if (status === "loading" || status == "idle") {
    return <div className="min-h-[100vh]">Loading...</div>;
  }

  if (status === "failed") {
    return <div className="min-h-[100vh]">Error: {error}</div>;
  }

  console.log(blog, status);
  function createMarkup() {
    return { __html: blog?.description! };
  }

  function ensureAuthor(blog: Blog): Blog {
    return {
      ...blog,
      author: blog?.author! ?? defaultAuthor,
    };
  }

  const newBlog = ensureAuthor(blog!);

  return (
    <div className="flex flex-col items-center px-16 py-10 gap-10 lg:px-44 md:px-32 min-h-[100vh]">
      <div className="flex flex-col gap-3 items-center">
        <h1 className="text-4xl font-bold">{newBlog?.title}</h1>
        <p className="font-light text-sm">
          {newBlog?.tags.map((tag) => tag.toUpperCase()).join(",  ")} | 6 MIN
          READ
        </p>
      </div>
      <Image
        src={newBlog?.image!}
        alt=""
        width={500}
        height={500}
        className="w-full rounded-md shadow"
      />
      <div className="flex flex-col items-center gap-5">
        <Image
          src={newBlog?.author?.image!}
          alt=""
          width={100}
          height={100}
          className="rounded-full h-12 w-12"
        />
        <div className="space-y-2 text-center">
          <p className="text-[#032b4c]">
            {newBlog?.author?.name!.toUpperCase()} | SOFTWARE ENGINEER
          </p>
          <p className="text-[#264FAD] font-semibold">
            @{newBlog?.author?.name!}
          </p>
        </div>
      </div>
      <div
        dangerouslySetInnerHTML={createMarkup()}
        className="text-[#737373] text-lg"
      />
      <div className="flex flex-col gap-4 md:self-start">
        {newBlog?.relatedBlogs.length! > 0 && (
          <p className="font-semibold text-xl">Related Blogs</p>
        )}
        <div className="flex gap-9 flex-wrap">
          {newBlog?.relatedBlogs!.map((relatedBlog, index) => {
            return <RelatedBlog blog={relatedBlog} key={index}></RelatedBlog>;
          })}
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
