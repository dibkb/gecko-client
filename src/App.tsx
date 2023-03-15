import React, { useState } from "react";
import { tagData } from "./utils/tagData";
import {
  useFetchBlogsQuery,
  useFetchBlogsByTagQuery,
} from "./app/blog/blogApiSlice";
const App: React.FC = () => {
  const [selectTag, setSelectTag] = useState<any>(tagData[0]);
  const { data, error, isLoading } = useFetchBlogsQuery();
  const { data: dataByTag } = useFetchBlogsByTagQuery(selectTag.tag);
  console.log(dataByTag);
  const tagList = tagData.map((element) => {
    if (selectTag.id === element.id)
      return (
        <span
          className="whitespace-nowrap cursor-pointer text-primary border-b-2 border-primary px-3"
          key={element.id}
          onClick={() => setSelectTag(element)}
        >
          {element.tag}
        </span>
      );
    else {
      return (
        <span
          className="whitespace-nowrap cursor-pointer text-zinc-500 border-b border-zinc-200 px-3"
          key={element.id}
          onClick={() => setSelectTag(element)}
        >
          {element.tag}
        </span>
      );
    }
  });
  return (
    <div className="flex flex-col">
      <h1 className="font-semibold text-5xl my-5 text-center">
        Developer Insights
      </h1>
      <p className="font-medium my-10 text-center">
        Thoughts and advice on experience, learning and technology.
      </p>
      <main className="hide__scrollbar">
        <div className="w-fit mx-auto flex text-sm font-semibold select-none">
          {tagList}
        </div>
      </main>
      {JSON.stringify(dataByTag)}
    </div>
  );
};

export default App;
