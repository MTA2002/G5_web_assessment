import Blog, { Author } from "@/app/interfaces/blog-interface";
import React from "react";
import Image from "next/image";
import Link from "next/link";

export const formatDate = (date: string): string => {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "short",
    day: "numeric",
  };
  return new Date(date).toLocaleDateString("en-US", options);
};

export const defaultAuthor: Author = {
  _id: "64ec82804b3e591223483696",
  name: "Yohannes Teffera",
  email: "yohannesteffera@gmail.com",
  image:
    "https://res.cloudinary.com/djtkzulun/image/upload/v1693469225/A2sv/wrwt1ldwgdnq03y1jguy.jpg",
  role: "user",
};

const BlogCard = ({ blog }: { blog: Blog }) => {
  function createMarkup() {
    return { __html: blog.description.split(".")[0] };
  }

  function ensureAuthor(blog: Blog): Blog {
    return {
      ...blog,
      author: blog.author ?? defaultAuthor,
    };
  }

  const newBlog = ensureAuthor(blog);
  return (
    <div className="flex flex-col gap-7">
      <hr className="border-t w-full" />

      <div className="flex flex-col gap-4">
        <div className="flex gap-5 items-center">
          <div>
            <img
              src={newBlog.author!.image}
              alt=""
              className="rounded-full w-12 h-12"
            ></img>
          </div>
          <div>
            <div className="flex gap-3 items-center">
              <p className="font-semibold">{newBlog.author!.name!}</p>
              <div className="w-1 h-1 rounded-full bg-[#868686]"></div>
              <p className="text-[#868686] text-sm">
                {formatDate(newBlog.createdAt)}
              </p>
            </div>
            <p className="text-[#9C9C9C] font-semibold">
              {newBlog.author!.role!}
            </p>
          </div>
        </div>

        <div className="flex flex-col-reverse  lg:flex-row lg:items-center justify-between">
          <div className="flex flex-col gap-4">
            <Link href={`/blogs-page/${newBlog._id}`}>
              <h1 className="font-bold text-2xl">{newBlog.title}</h1>
            </Link>
            <div
              dangerouslySetInnerHTML={createMarkup()}
              className="text-[#737373]"
            />
          </div>
          <Image
            src={newBlog.image}
            alt=""
            width={449}
            height={295}
            className="w-full h-48 rounded-2xl shadow-2xl lg:w-96 lg:h-full"
          ></Image>
        </div>
        <div className="flex gap-3">
          {newBlog.tags.map((tag, index) => {
            return (
              <div
                key={index}
                className="bg-[#F5F5F5] text-[#8E8E8E] rounded-full px-4 py-2 w-auto"
              >
                {tag}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
