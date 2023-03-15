import React from "react";
import { ArrowUpRightIcon } from "@heroicons/react/24/solid";
import { Blog } from "../app/types";
interface BlogContainers {
  data: Blog[];
}
const BlogContainers: React.FC<BlogContainers> = ({ data }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 my-6">
      {data.map((blog: Blog) => (
        <main key={blog._id} className="cursor-pointer">
          <div className="bg-gradient-to-br aspect-video border mb-4"></div>
          <div className="flex justify-between my-3">
            <p className="text-zinc-700 font-semibold text-lg">{blog.title}</p>
            <ArrowUpRightIcon className="h-5 w-5" />
          </div>
          <p className="line-clamp-3 text-sm text-zinc-500 font-medium">
            {blog.content}
          </p>
          <div className="flex gap-3 mt-4">
            {blog.tags.map((tag) => (
              <span className="text-sm font-semibold border border-primary rounded-full px-3">
                {tag}
              </span>
            ))}
          </div>
        </main>
      ))}
    </div>
  );
};

export default BlogContainers;
