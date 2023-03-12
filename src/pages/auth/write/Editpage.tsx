import React from "react";
const Editpage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-[700px]">
      <input
        placeholder="Add Title"
        type="text"
        className="w-full text-5xl font-semibold focus:outline-none"
      />
      <textarea
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
