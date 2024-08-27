"use client";
import Blog from "@/app/interfaces/blog-interface";
import { useParams } from "next/navigation";
import React from "react";
import Image from "next/image";
import RelatedBlogs from "../components/RelatedBlog";
import RelatedBlog from "../components/RelatedBlog";

const relatedBlog: Blog = {
  _id: "64ec83f54b3e59122348377e",
  image:
    "https://res.cloudinary.com/djtkzulun/image/upload/v1693221877/A2sv/sr1xhbsg4ki4nnx91g67.jpg",
  title: "What's up",
  description: "<p>how to  approach  a <strong>beautiful</strong> girl</p>",
  author: {
    _id: "64ec82804b3e591223483696",
    name: "Yohannes Teffera",
    email: "yohannesteffera@gmail.com",
    image:
      "https://res.cloudinary.com/djtkzulun/image/upload/v1693469225/A2sv/wrwt1ldwgdnq03y1jguy.jpg",
    role: "user",
  },
  isPending: true,
  tags: ["self-improvement", "social"],
  likes: 0,
  relatedBlogs: [],
  skills: [],
  createdAt: "2023-08-28T11:24:37.887Z",
  updatedAt: "2023-08-28T11:24:37.887Z",
  __v: 0,
};

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
  relatedBlogs: [
    relatedBlog,
    relatedBlog,
    relatedBlog,
    relatedBlog,
    relatedBlog,
  ],
  skills: ["development"],
  createdAt: "2023-08-25T09:08:28.532Z",
  updatedAt: "2023-08-25T09:08:28.532Z",
  __v: 0,
};

const BlogDetail = () => {
  const { id } = useParams<{ id: string }>();
  // const [job, setJob] = useState<Job | null>();
  function createMarkup() {
    return { __html: blog.description };
  }
  return (
    <div className="flex flex-col items-center px-16 py-10 gap-10 lg:px-44 md:px-32">
      <div className="flex flex-col gap-3 items-center">
        <h1 className="text-4xl font-bold">{blog.title}</h1>
        <p className="font-light text-sm">
          {blog.tags.map((tag) => tag.toUpperCase()).join(",  ")} | 6 MIN READ
        </p>
      </div>
      <Image
        src={blog.image}
        alt=""
        width={500}
        height={500}
        className="w-full rounded-md shadow"
      />
      <div className="flex flex-col items-center gap-5">
        <Image
          src={blog.author?.image!}
          alt=""
          width={100}
          height={100}
          className="rounded-full h-12 w-12"
        />
        <div className="space-y-2 text-center">
          <p className="text-[#032b4c]">
            {blog.author?.name!.toUpperCase()} | SOFTWARE ENGINEER
          </p>
          <p className="text-[#264FAD] font-semibold">@{blog.author?.name!}</p>
        </div>
      </div>
      <div
        dangerouslySetInnerHTML={createMarkup()}
        className="text-[#737373] text-lg"
      />
      <div className="flex flex-col gap-4 md:self-start">
        <p className="font-semibold text-xl">Related Blogs</p>
        <div className="flex gap-9 flex-wrap">
          {blog.relatedBlogs.map((relatedBlog, index) => {
            return <RelatedBlog blog={relatedBlog} key={index}></RelatedBlog>;
          })}
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
