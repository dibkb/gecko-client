import React, { useState } from "react";
import { ArrowUpRightIcon, StarIcon } from "@heroicons/react/24/solid";
import placeholderImage from "../assets/images/placeholder.jpg";
import { Blog } from "../app/types";
import { dateOptions } from "../utils/random";
import { Link, useNavigate } from "react-router-dom";
import { Blogtags } from "./Blogtags";
import { Reaction } from "./Reaction";
import EmptyContainer from "./EmptyContainer";
import { DeleteButton, EditButton } from "./Button";
import { DeleteBlog } from "./modals/DeleteWarning";
import { useDeleteBlogMutation } from "../app/blog/blogApiSlice";
interface BlogContainers {
  data: Blog[];
}
interface BlogAdim {
  blog: Blog;
}
const BlogAdim: React.FC<BlogAdim> = ({ blog }) => {
  const [deleteBlog] = useDeleteBlogMutation();
  const navigate = useNavigate();
  const [showDeleteModal, setShowDeleteModal] = useState<boolean>(false);
  const deletePosthandler = (id: string | undefined) => {
    setShowDeleteModal(false);
    deleteBlog(id);
  };
  const editBlogHandler = (id: string | undefined) => {
    navigate(`/user/edit/${id}`);
  };
  return (
    <div>
      {showDeleteModal && (
        <DeleteBlog
          setShowPortal={setShowDeleteModal}
          deletePosthandler={() => deletePosthandler(blog._id)}
        />
      )}
      <Link
        to={`/blog/${blog._id ?? placeholderImage}`}
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
            {new Date(blog.createdAt).toLocaleDateString("en-us", dateOptions)}
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
          edit={false}
          parentClassName={"flex mt-4 gap-2"}
        />
      </Link>
      <div className="flex gap-4 mt-5">
        <EditButton onClick={() => editBlogHandler(blog._id)} />
        <DeleteButton onClick={() => setShowDeleteModal(true)} />
      </div>
    </div>
  );
};
const BlogContainerAdmin: React.FC<BlogContainers> = ({ data }) => {
  if (data.length === 0) {
    return <EmptyContainer />;
  }
  const content = (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 my-6">
      {data.map((blog: Blog) => (
        <BlogAdim blog={blog} key={blog._id} />
      ))}
    </div>
  );
  return content;
};

export default BlogContainerAdmin;
