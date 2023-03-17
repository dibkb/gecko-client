import React from "react";
const TextSkeleton = () => <p className="w-full h-4 rounded-md skeleton"></p>;
const BlogSkeleton: React.FC = () => {
  return (
    <div className="my-8 md:my-24">
      <h1 className="mx-auto h-8 w-1/3 rounded-md skeleton"></h1>
      <div className="flex gap-4 my-12 justify-center">
        <p className="w-[84px] h-3 rounded-md skeleton"></p>
        <p className="w-[84px] h-3 rounded-md skeleton"></p>
      </div>
      <span className="flex gap-5 justify-center my-12">
        <p className="w-20 h-5 rounded-full skeleton"></p>
        <p className="w-20 h-5 rounded-full skeleton"></p>
        <p className="w-20 h-5 rounded-full skeleton"></p>
      </span>
      <div className={"mx-auto aspect-video rounded-lg skeleton"}></div>
      <div className="mt-12 flex flex-col gap-4">
        {[...Array(12)].map((e, i) => (
          <TextSkeleton key={JSON.stringify(i)} />
        ))}
      </div>
    </div>
  );
};

export default BlogSkeleton;
