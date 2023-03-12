import { ArrowUpRightIcon } from "@heroicons/react/24/solid";
import React from "react";
import Addphoto from "./write/Addphoto";
import Addtags from "./write/Addtags";
import Editpage from "./write/Editpage";
const Write: React.FC = () => {
  const nextButton = (
    <button
      className="border font-medium bg-primary hover:bg-black text-white rounded-md px-12 py-2
     text-lg transition duration-300 ease-out hover:scale-105"
    >
      Next
    </button>
  );
  const prevButton = (
    <button
      className="border font-medium text-primary border-primary rounded-md px-12 py-2
     text-lg hover:bg-zinc-100"
    >
      Previous
    </button>
  );
  const buttonConainer = (
    <div className=" mt-24 mb-6 flex gap-12 justify-center">
      {prevButton}
      {nextButton}
    </div>
  );
  const publishButton = (
    <button className="flex justify-center gap-2 items-center mt-24 mb-6 mx-auto border font-medium bg-primary hover:bg-black text-white rounded-md px-12 py-2 text-lg group transition duration-300 ease-out hover:scale-105">
      <p>Publish</p>
      <ArrowUpRightIcon className="h-6 w-6 text-white transition delay-300 duration-300 ease-out group-hover:rotate-[360deg] " />
    </button>
  );
  return (
    <div>
      {/* <Editpage /> */}
      <Addphoto />
      {buttonConainer}
    </div>
  );
};
export default Write;
