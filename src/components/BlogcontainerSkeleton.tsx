import React from "react";

export const BlogcontainerSkeleton: React.FC = () => {
  const div = (
    <div>
      <div className={`aspect-video bg-zinc-200 mb-4 rounded-lg skeleton`} />
      <p className="h-2 w-1/3 bg-zinc-200 skeleton rounded-md"></p>
      <p className="h-4 w-full bg-zinc-200 skeleton my-4 rounded-md"></p>
      <p className="h-16 w-full bg-zinc-200 skeleton my-4 rounded-md"></p>
      <span className="flex gap-3">
        <p className="w-20 h-3 rounded-full bg-zinc-200 skeleton"></p>
        <p className="w-20 h-3 rounded-full bg-zinc-200 skeleton"></p>
        <p className="w-20 h-3 rounded-full bg-zinc-200 skeleton"></p>
      </span>
    </div>
  );
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 my-6">
      {[...Array(9)].map((element) => div)}
    </div>
  );
};
