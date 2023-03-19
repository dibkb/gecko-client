import React, { useState } from "react";
import { TrashIcon } from "@heroicons/react/24/outline";
interface Editpage {
  blogContent: string;
  title: string;
  setBlogContent: (str: string) => void;
  setTitle: (str: string) => void;
}
const Editpage: React.FC<Editpage> = ({
  blogContent,
  setBlogContent,
  title,
  setTitle,
}) => {
  return (
    <div className="flex flex-col min-h-[700px] h-auto newScrollbar">
      <textarea
        placeholder="Add Title"
        value={title ?? ""}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full text-5xl font-semibold focus:outline-none mb-4 newScrollbar"
      />
      <textarea
        value={blogContent ?? ""}
        onChange={(e) => setBlogContent(e.target.value)}
        name="blog"
        id="blog"
        cols={40}
        rows={10}
        className="w-full flex-grow outline-none font-medium newScrollbar font-brand_two text-stone-700 text-2xl"
        placeholder="Add Content"
      ></textarea>
      <span
        onClick={() => {
          setTitle("");
          setBlogContent("");
        }}
        className="select-none z-20 bg-amber-100 hover:bg-amber-200 text-orange-600 shadow-lg cursor-pointer fixed right-4 bottom-3 flex items-center gap-1 rounded-full px-3 py-2"
      >
        <TrashIcon className="h-5" />
        <p className="text-xs font-semibold">Clear All</p>
      </span>
    </div>
  );
};

export default Editpage;
