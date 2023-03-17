import React, { useCallback } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useFetchBlogsByIdQuery } from "../app/blog/blogApiSlice";
import { dateOptions } from "../utils/random";
import { Reaction } from "../components/Reaction";
import { Blogtags } from "../components/Blogtags";
import BlogSkeleton from "../components/BlogSkeleton";
import Errorpage from "../components/Errorpage";
import { useCurrentUser } from "../hooks/useCurrentUser";
import { StarIcon } from "@heroicons/react/24/solid";
const Blogpage = () => {
  const navigate = useNavigate();
  const { blogId } = useParams();
  const [currUser] = useCurrentUser();
  const { data, error, isLoading } = useFetchBlogsByIdQuery(blogId);
  const authorClickHandler = useCallback(() => {
    if (data?.creator === currUser?._id) {
      navigate(`/user/admin/${data?.creator}`);
    } else {
      navigate(`/`);
    }
  }, [data, currUser]);
  const content = (
    <>
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
