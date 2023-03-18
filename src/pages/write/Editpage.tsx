import React, { useState } from "react";
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
    <div className="flex flex-col min-h-[700px]">
      <textarea
        placeholder="Add Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full text-5xl font-semibold focus:outline-none mb-4"
      />
      <textarea
        value={blogContent}
        onChange={(e) => setBlogContent(e.target.value)}
        name="blog"
        id="blog"
        cols={40}
        rows={10}
        className="w-full flex-grow outline-none font-medium"
        placeholder="Add Content"
      ></textarea>
    </div>
  );
};

export default Editpage;
