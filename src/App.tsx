import React from "react";
import { tagData } from "./utils/tagData";
const App: React.FC = () => {
  const tagList = tagData.map((element) => {
    return (
      <span
        className="whitespace-nowrap cursor-pointer text-zinc-500 border-b px-2"
        key={element.id}
      >
        {element.tag}
      </span>
    );
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
        <div className="w-fit mx-auto flex text-sm font-medium">{tagList}</div>
      </main>
    </div>
  );
};

export default App;
