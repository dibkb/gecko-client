import React from "react";
import {
  ArrowUpRightIcon,
  StarIcon,
  PencilIcon,
  TrashIcon,
} from "@heroicons/react/24/solid";
import { Blog } from "../app/types";
import { dateOptions } from "../utils/random";
import { Link } from "react-router-dom";
import { Blogtags } from "./Blogtags";
import { Reaction } from "./Reaction";
import EmptyContainer from "./EmptyContainer";
interface BlogContainers {
  data: Blog[];
}
const BlogContainerAdmin: React.FC<BlogContainers> = ({ data }) => {
  if (data.length === 0) {
    return <EmptyContainer />;
  }
  const content = (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 my-6">
      {data.map((blog: Blog) => (
        <>
          <Link
            to={`/blog/${blog._id}`}
            key={blog._id}
            className="cursor-pointer group"
          >
            <div
              style={{
                backgroundImage: `url(${blog.image})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
              className={`aspect-video mb-4 rounded-lg group-hover:scale-105 transition duration-300 ease-out`}
            ></div>
            <div className="flex items-center gap-2 text-xs font-semibold text-zinc-500">
              <p>{blog.creatorName}</p>
              <StarIcon className="h-2 w-2" />
              <p>
                {new Date(blog.createdAt).toLocaleDateString(
                  "en-us",
                  dateOptions
                )}
              </p>
            </div>
            <div className="flex justify-between my-3">
              <p className="text-zinc-700 font-semibold text-lg truncate">
                {blog.title}
              </p>
              <ArrowUpRightIcon className="h-5 w-5" />
            </div>
            <p className="line-clamp-3 text-sm text-zinc-500 font-medium">
              {blog.content}
            </p>
            <Blogtags tags={blog.tags} />
            <Reaction
              reaction={blog.reaction}
              hover={false}
              parentClassName={"flex mt-4 gap-2"}
            />
          </Link>
          <div className="flex gap-4">
            <button className="flex items-center gap-1 border px-3 py-1 rounded-md border-cyan-600 text-cyan-700 text-sm font-medium bg-cyan-50 hover:bg-cyan-100">
              <p>Edit</p>
              <PencilIcon className="h-4 w-4" />
            </button>
            <button className="flex items-center gap-1 border px-3 py-1 rounded-md border-rose-600 text-rose-700 text-sm font-medium bg-rose-50 hover:bg-rose-100">
              <p>Delete</p>
              <TrashIcon className="h-4 w-4" />
            </button>
          </div>
        </>
      ))}
    </div>
  );
  return content;
};

export default BlogContainerAdmin;
