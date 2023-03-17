import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useFetchBlogsByIdQuery } from "../app/blog/blogApiSlice";
import { dateOptions } from "../utils/random";
import { Reaction } from "../components/Reaction";
import { Blogtags } from "../components/Blogtags";
import BlogSkeleton from "../components/BlogSkeleton";
import Errorpage from "../components/Errorpage";
import { useCurrentUser } from "../hooks/useCurrentUser";
import { StarIcon } from "@heroicons/react/24/solid";
import { DeleteButton, EditButton } from "../components/Button";
import { DeleteBlog } from "../components/modals/DeleteWarning";
import { useDeleteBlogMutation } from "../app/blog/blogApiSlice";
const Blogpage: React.FC = () => {
  const navigate = useNavigate();
  const { blogId } = useParams();
  const [currUser] = useCurrentUser();
  const { data, error, isLoading } = useFetchBlogsByIdQuery(blogId);
  const [admin, setAdmin] = useState<boolean>(false);
  const [showDeleteModal, setShowDeleteModal] = useState<boolean>(false);
  const [deleteBlog] = useDeleteBlogMutation();
  const deletePosthandler = (id: string | undefined) => {
    setShowDeleteModal(false);
    deleteBlog(id);
    navigate("/");
  };
  useEffect(() => {
    if (data?.creator.toString() === currUser?._id.toString()) {
      setAdmin(true);
    } else {
      setAdmin(false);
    }
  }, [data, currUser]);
  const authorClickHandler = () => {
    if (admin) {
      navigate(`/user/admin/${data?.creator}`);
    } else {
      navigate(`/user/${data?.creator}`);
    }
  };
  const Buttons = () => (
    <div className="flex gap-6 justify-center mb-6">
      <EditButton onClick={() => navigate(`/user/edit/${data?._id}`)} />
      <DeleteButton onClick={() => setShowDeleteModal(true)} />
    </div>
  );
  const content = (
    <>
      {showDeleteModal && (
        <DeleteBlog
          setShowPortal={setShowDeleteModal}
          deletePosthandler={() => deletePosthandler(data?._id)}
        />
      )}
      <div className="my-8 md:my-24">
        <h1 className="text-center text-3xl font-semibold text-zinc-700">
          {data?.title}
        </h1>
        <div className="flex items-center gap-2 text-sm font-semibold text-zinc-500 w-fit mx-auto my-12">
          <p
            onClick={authorClickHandler}
            className="cursor-pointer hover:text-stone-800 hover:underline "
          >
            {data?.creatorName}
          </p>
          <StarIcon className="h-2 w-2" />
          <p>
            {new Date(data?.createdAt).toLocaleDateString("en-us", dateOptions)}
          </p>
        </div>
        {admin && <Buttons />}
        <Blogtags tags={data?.tags} className={"justify-center my-12 gap-6"} />
        <div
          style={{
            backgroundImage: `url(${data?.image})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
          className={`mx-auto aspect-video rounded-lg max-h-[500px]`}
        ></div>
        <p className="mt-12 leading-8">{data?.content}</p>
        <Reaction
          reaction={data?.reaction}
          hover={true}
          parentClassName={"flex gap-4 justify-center mt-12"}
        />
      </div>
    </>
  );
  return (
    <>
      {isLoading && <BlogSkeleton />}
      {data && content}
      {error && <Errorpage />}
    </>
  );
};

export default Blogpage;
