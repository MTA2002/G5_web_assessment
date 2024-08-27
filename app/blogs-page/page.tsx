import React from "react";
import BlogCard from "./components/Blog";
import Blog from "../interfaces/blog-interface";

const BlogsPage = () => {
  const blog: Blog = {
    _id: "64e86f8c708f39f28f2ae2af",
    image:
      "https://res.cloudinary.com/djtkzulun/image/upload/v1692954508/A2sv/dsmcnmr0uxte3p0w0i4b.jpg",
    title: "New blog post",
    description:
      "<p>Lorem ipsum dolor sit amet consectetur adipiscing elit id praesent massa orci, varius mattis tortor sociosqu turpis vehicula erat pretium fringilla ad faucibus, luctus nulla donec euismod sem duis rhoncus rutrum tempor condimentum. Facilisis aliquet at diam nisl facilisi proin morbi, iaculis nec nullam semper arcu inceptos lacus euismod, vehicula cras suspendisse torquent fermentum consequat. Montes pretium suscipit scelerisque molestie mi aliquet tempor, netus conubia ante sociosqu leo condimentum viverra, nunc ultrices posuere erat a semper.</p><p>Non habitasse aptent eleifend praesent euismod tortor libero sapien dis, eget sociis tincidunt ante phasellus dictum molestie consequat morbi pellentesque, fermentum est tempus egestas ullamcorper venenatis hendrerit mus. Cras faucibus dapibus posuere sed aliquet tempus, sagittis per natoque id sem in sollicitudin, tincidunt egestas eleifend rutrum magna. Aenean congue dis aliquet magnis urna cras tempor tortor venenatis, praesent ultricies bibendum est non pretium donec ante massa orci, pellentesque interdum parturient habitasse id ullamcorper dui posuere.</p><p><br></p>",
    author: {
      _id: "64dfe6fb50961c55ce93e7de",
      name: "bruke updated",
      email: "bruk@a2sv.org",
      image:
        "https://res.cloudinary.com/djtkzulun/image/upload/v1702997841/A2sv/lumtcitvklvajczcynqe.png",
      role: "user",
    },
    isPending: true,
    tags: ["development", "technology"],
    likes: 0,
    relatedBlogs: [],
    skills: ["development"],
    createdAt: "2023-08-25T09:08:28.532Z",
    updatedAt: "2023-08-25T09:08:28.532Z",
    __v: 0,
  };

  return (
    <div className="flex flex-col px-28 py-16 gap-16 lg:flex-row">
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
        <div className="w-full flex flex-col gap-9">
          <BlogCard blog={blog} />
          <BlogCard blog={blog} />
          <BlogCard blog={blog} />
        </div>
      </div>
    </div>
  );
};

export default BlogsPage;
