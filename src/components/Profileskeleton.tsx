import React from "react";
import { BlogcontainerSkeleton } from "./BlogcontainerSkeleton";
const Profileskeleton: React.FC = () => {
  return (
    <div>
      <div className=" text-white text-start p-6 h-[260px] sm:h-[360px] skeleton"></div>
      <BlogcontainerSkeleton />
    </div>
  );
};

export default Profileskeleton;
