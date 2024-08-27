export default interface Blog {
  _id: string;
  image: string;
  title: string;
  description: string;
  author: Author | null;
  isPending: boolean;
  tags: Array<String>;
  likes: number;
  relatedBlogs: Array<Blog>;
  skills: Array<String>;
  createdAt: string;
  updatedAt: string;
  __v: 0;
}

export type Author = {
  _id: string;
  name: string;
  email: string;
  image: string;
  role: string;
};

export interface BlogsState {
  items: Blog[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

export interface SingleBlogState {
  blog: Blog | null;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}
