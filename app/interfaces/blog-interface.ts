export default interface Blog {
  _id: string;
  image: string;
  title: string;
  description: string;
  author?: Author;
  isPending: boolean;
  tags: Array<String>;
  likes: number;
  relatedBlogs: Array<Blog>;
  skills: Array<String>;
  createdAt: string;
  updatedAt: string;
  __v: 0;
}

type Author = {
  _id: string;
  name: string;
  email: string;
  image: string;
  role: string;
};
