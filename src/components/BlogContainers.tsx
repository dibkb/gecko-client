import React from "react";
import { ArrowUpRightIcon } from "@heroicons/react/24/solid";
import { Blog } from "../app/types";
interface BlogContainers {
  data: Blog[];
}
const BlogContainers: React.FC<BlogContainers> = ({ data }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
      {data.map((blog: Blog) => (
        <main key={blog._id}>
          <div className="bg-gradient-to-br aspect-video border"></div>
          <div className="flex justify-between">
            <p className="text-zinc-700 font-semibold text-lg">{blog.title}</p>
            <ArrowUpRightIcon className="h-5 w-5" />
          </div>
          <p className="line-clamp-3">{blog.content}</p>
        </main>
      ))}
    </div>
  );
};

export default BlogContainers;
