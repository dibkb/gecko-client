import { ArrowUpRightIcon } from "@heroicons/react/24/solid";
import React from "react";
interface Button {
  onClick: () => void;
}
export const NextButton: React.FC<Button> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="border font-medium bg-primary hover:bg-black text-white rounded-md px-8 md:px-12 py-2 text-sm
      md:text-lg transition duration-300 ease-out hover:scale-105"
    >
      Next
    </button>
  );
};
export const PreviousButton: React.FC<Button> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="border font-medium text-primary border-primary rounded-md px-8 md:px-12 py-2 text-sm
   md:text-lg hover:bg-zinc-100"
    >
      Previous
    </button>
  );
};
export const PublishButton: React.FC<Button> = ({ onClick }) => {
  return (
    <button
      className="group flex gap-2 border font-medium bg-primary hover:bg-black text-white rounded-md px-12 py-2
    text-lg transition duration-300 ease-out hover:scale-105"
      onClick={onClick}
    >
      <p>Publish</p>
      <ArrowUpRightIcon className="h-6 w-6 text-white transition duration-300 ease-out group-hover:rotate-[360deg] " />
    </button>
  );
};
