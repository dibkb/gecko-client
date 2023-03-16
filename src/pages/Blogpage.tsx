import React from "react";
import likedEmoji from "../assets/images/liked.png";
import lovedEmoji from "../assets/images/loved.png";
import helpfulEmoji from "../assets/images/helpful.png";
import { useParams } from "react-router-dom";
import { useFetchBlogsByIdQuery } from "../app/blog/blogApiSlice";
import { dateOptions } from "../utils/random";
const Blogpage = () => {
  const { blogId } = useParams();
  const { data, error, isLoading } = useFetchBlogsByIdQuery(blogId);
  return (
    <div className="my-8 md:my-24">
      <h1 className="text-center text-3xl font-semibold text-zinc-700">
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
        className={`mx-auto aspect-video rounded-lg max-h-[500px]`}
      ></div>
      <div className="flex gap-4 justify-center mt-12">
        <span className="flex gap-2 cursor-pointer items-center font-medium group">
          <img
            src={likedEmoji}
            alt=""
            className="group-hover:scale-125 transition duration-300 ease-out"
          />
          <p className="">{data?.reaction.liked}</p>
        </span>
        <span className="flex gap-2 cursor-pointer items-center font-medium group">
          <img
            src={lovedEmoji}
            alt=""
            className="group-hover:scale-125 transition duration-300 ease-out"
          />
          <p>{data?.reaction.loved}</p>
        </span>{" "}
        <span className="flex gap-2 cursor-pointer items-center font-medium group">
          <img
            src={helpfulEmoji}
            alt=""
            className="group-hover:scale-125 transition duration-300 ease-out"
          />
          <p>{data?.reaction.helpful}</p>
        </span>
      </div>
      <p className="mt-12 leading-8">{data?.content}</p>
    </div>
  );
};

export default Blogpage;
