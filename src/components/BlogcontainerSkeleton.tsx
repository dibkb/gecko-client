import React from "react";
export const BlogSkeleton = () => {
  return (
    <div>
      <div className={`aspect-video  mb-4 rounded-lg skeleton`} />
      <p className="h-2 w-1/3  skeleton rounded-md"></p>
      <p className="h-4 w-full  skeleton my-4 rounded-md"></p>
      <p className="h-16 w-full  skeleton my-4 rounded-md"></p>
      <span className="flex gap-3">
        <p className="w-20 h-4 rounded-full  skeleton"></p>
        <p className="w-20 h-4 rounded-full  skeleton"></p>
        <p className="w-20 h-4 rounded-full  skeleton"></p>
      </span>
      <span className="flex gap-3 mt-3">
        <p className="w-5 h-3 rounded-full skeleton"></p>
        <p className="w-5 h-3 rounded-full skeleton"></p>
        <p className="w-5 h-3 rounded-full skeleton"></p>
      </span>
    </div>
  );
};
export const BlogcontainerSkeleton: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 my-6">
      {[...Array(9)].map((e, i) => (
        <BlogSkeleton key={JSON.stringify(i)} />
      ))}
    </div>
  );
};
