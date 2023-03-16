import React, { useState } from "react";
import { tagData } from "./utils/tagData";
import { useFetchBlogsByTagQuery } from "./app/blog/blogApiSlice";
import BlogContainers from "./components/BlogContainers";
import { BlogcontainerSkeleton } from "./components/BlogcontainerSkeleton";
import { Banner } from "./components/Banner";
const App: React.FC = () => {
  const [selectTag, setSelectTag] = useState<any>(tagData[0]);
  const { data, error, isLoading } = useFetchBlogsByTagQuery(selectTag);
  const tagList = tagData.map((element) => {
    if (selectTag === element)
      return (
        <span
          className="whitespace-nowrap cursor-pointer text-primary border-b-2 border-primary px-3"
          key={element}
          onClick={() => setSelectTag(element)}
        >
          {element}
        </span>
      );
    else {
      return (
        <span
          className="whitespace-nowrap cursor-pointer text-zinc-500 border-b border-zinc-200 px-3"
          key={element}
          onClick={() => setSelectTag(element)}
        >
          {element}
        </span>
      );
    }
  });
  return (
    <div className="flex flex-col">
      <Banner />
      <main className="hide__scrollbar">
        <div className="w-fit mx-auto flex text-sm font-semibold select-none">
          {tagList}
        </div>
      </main>
      {!data && <BlogcontainerSkeleton />}
      {data && <BlogContainers data={data} />}
    </div>
  );
};

export default App;
