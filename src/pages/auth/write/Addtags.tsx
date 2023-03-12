import React from "react";
const data = [
  { id: "1", tag: "Frontend" },
  { id: "2", tag: "Backend" },
  { id: "3", tag: "System Design" },
  { id: "4", tag: "Data Structures" },
  { id: "5", tag: "Data Science" },
  { id: "6", tag: "Computer Fundamentals" },
];
const Addtags: React.FC = () => {
  const tagContent = data.map(({ id, tag }) => {
    return (
      <span
        key={id}
        className="border border-primary rounded-full px-3 py-1 cursor-pointer"
      >
        {tag}
      </span>
    );
  });
  return (
    <div>
      <h1 className="text-center text-4xl font-semibold">Add Tags</h1>
      <section className="flex flex-col mx-auto mt-24">
        <h3 className="text-center font-medium text-md">Selected Tags</h3>
      </section>
      <section className="mt-12 flex gap-x-6 gap-y-4 justify-center max-w-6xl mx-auto flex-wrap">
        {tagContent}
      </section>
    </div>
  );
};

export default Addtags;
