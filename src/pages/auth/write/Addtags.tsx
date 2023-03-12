import React, { useCallback, useState } from "react";
const data: Record<"id" | "tag", string>[] = [
  { id: "1", tag: "Frontend" },
  { id: "2", tag: "Backend" },
  { id: "3", tag: "System Design" },
  { id: "4", tag: "Data Structures" },
  { id: "5", tag: "Data Science" },
  { id: "6", tag: "Computer Fundamentals" },
];
const Addtags: React.FC = () => {
  const [selectedTags, setSelectedTags] = useState<
    Record<"id" | "tag", string>[]
  >([]);
  const [alltags, setAllTags] = useState<Record<"id" | "tag", string>[]>(data);
  const addTagHandler = useCallback((element) => {
    setSelectedTags((prev) => [...prev, element]);
    setAllTags((prev) => prev.filter((item) => item.id !== element.id));
  }, []);
  const tagContent = alltags.map((element) => {
    return (
      <span
        key={element.id}
        onClick={() => {
          addTagHandler(element);
        }}
        className="border border-primary rounded-full px-4 py-1 cursor-pointer hover:bg-primary hover:text-white"
      >
        {element.tag}
      </span>
    );
  });

  return (
    <div>
      <h1 className="text-center text-4xl font-semibold">Add Tags</h1>
      <section className="flex flex-col mx-auto mt-24">
        <h3 className="text-center font-medium text-md">Selected Tags</h3>
        {JSON.stringify(selectedTags)}
      </section>
      <section className="mt-12 flex gap-x-6 gap-y-4 justify-center max-w-6xl mx-auto flex-wrap select-none">
        {tagContent}
      </section>
    </div>
  );
};

export default Addtags;
