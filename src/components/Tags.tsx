import { XMarkIcon } from "@heroicons/react/24/solid";
import React from "react";

export const SelectedTags = ({ element, removeTagHandler }) => {
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
};
export const AvailableTags = ({ element, addTagHandler }) => {
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
};
