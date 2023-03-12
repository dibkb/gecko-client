import React, { useCallback, useState } from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";
const data: Record<"id" | "tag", string>[] = [
  { id: "1", tag: "Frontend" },
  { id: "2", tag: "Backend" },
  { id: "3", tag: "System Design" },
  { id: "32", tag: "Mathematics" },
  { id: "33", tag: "Networking" },
  { id: "4", tag: "Data Structures" },
  { id: "61", tag: "Algorithms" },
  { id: "62", tag: "Machine Learning" },
  { id: "5", tag: "Data Science" },
  { id: "6", tag: "Computer Fundamentals" },
  { id: "34", tag: "Web Security" },
  { id: "35", tag: "Devops" },
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
  const removeTagHandler = useCallback((element) => {
    setSelectedTags((prev) => prev.filter((item) => item.id !== element.id));
    setAllTags((prev) => [...prev, element]);
  }, []);
  const allTagList = alltags.map((element) => {
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
  const selectedTagList = selectedTags.map((element) => {
    return (
      <span
        key={element.id}
        onClick={() => {
          removeTagHandler(element);
        }}
        className="relative group flex items-center gap-2 bg-primary rounded-full px-8 py-2 cursor-pointer text-white shadow-md"
      >
        <p>{element.tag}</p>
        <XMarkIcon className="h-6 w-6 absolute right-1 hidden group-hover:block" />
      </span>
    );
  });

  return (
    <div>
      <h1 className="text-center text-4xl font-semibold">Add Tags</h1>
      <section className="flex flex-col mx-auto mt-24">
        <h3 className="text-center font-medium text-md">Selected Tags</h3>
        <main className="m-24 flex gap-x-6 gap-y-4 justify-center max-w-6xl mx-auto flex-wrap select-none">
          {selectedTagList}
        </main>
      </section>
      <section className="flex flex-col mx-auto mt-24">
        <h3 className="text-center font-medium text-md">Available Tags</h3>
        <main className="mt-12 flex gap-x-6 gap-y-4 justify-center max-w-6xl mx-auto flex-wrap select-none">
          {allTagList}
        </main>
      </section>
    </div>
  );
};

export default Addtags;
