import React from "react";
import { useParams } from "react-router-dom";
import { useFetchBlogsByIdQuery } from "../app/blog/blogApiSlice";
import { dateOptions } from "../utils/random";
const Blogpage = () => {
  const { blogId } = useParams();
  const { data, error, isLoading } = useFetchBlogsByIdQuery(blogId);
  return (
    <div className="my-24">
      <h1 className="text-center text-3xl font-semibold text-zinc-600">
        {data?.title}
      </h1>
      <div className="flex gap-2 text-xs font-semibold text-zinc-500 w-fit mx-auto my-12">
        <p>{data?.creatorName}</p>
        <p>
          {new Date(data?.createdAt).toLocaleDateString("en-us", dateOptions)}
        </p>
      </div>
      <div
        style={{
          backgroundImage: `url(${data?.image})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
        className={`mx-auto aspect-video border mb-4 rounded-lg max-h-[500px]`}
      ></div>
      <p className="mt-12 leading-8">{data?.content}</p>
    </div>
  );
};

export default Blogpage;
