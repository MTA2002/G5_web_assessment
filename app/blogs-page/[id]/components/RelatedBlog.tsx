import React from "react";
import Blog from "@/app/interfaces/blog-interface";
import Image from "next/image";
import Link from "next/link";
import { FiMessageSquare } from "react-icons/fi";
import { formatDate } from "../../components/Blog";

const RelatedBlog = ({ blog }: { blog: Blog }) => {
  function createMarkup() {
    return { __html: blog.description.split(".")[0] };
  }

  return (
    <div className=" shadow-md w-80 rounded-lg">
      <Image
        src={blog.image}
        alt=""
        width={100}
        height={100}
        className="w-full h-72"
      ></Image>
      <div className="p-4 flex flex-col gap-3">
        <p className="font-medium text-lg">{blog.title}</p>
        <div className="flex text-sm text-[#B9B9C3] gap-3 items-center">
          <Image
            src={blog.author?.image!}
            alt=""
            width={100}
            height={100}
            className="rounded-full h-8 w-8"
          />
          <p>by</p>
          <p className="text-[#6E6B7B]">{blog.author?.name.split(" ")[0]!}</p>
          <p>| {formatDate(blog.createdAt)}</p>
        </div>
        <div className="flex gap-3 flex-wrap">
          {blog.tags.map((tag, index) => {
            return (
              <div
                key={index}
                className={`bg-[#F5F5F5] text-[#8E8E8E] rounded-full px-4 py-1 w-auto ${
                  index > 1 && "hidden"
                }`}
              >
                {tag}
              </div>
            );
          })}
        </div>
        <div
          dangerouslySetInnerHTML={createMarkup()}
          className="text-[#6E6B7B]"
        />
        <hr className="border-t w-full" />
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <FiMessageSquare />

            <p>{blog.likes} Likes</p>
          </div>
          <Link
            href={`/blogs-page/${blog._id}`}
            className="text-[#7367F0] font-semibold"
          >
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RelatedBlog;
