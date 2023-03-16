import React from "react";
import doggy from "../assets/images/doggo-min.png";
import { WriteButton } from "../pages/Layout";
const EmptyContainer = () => {
  return (
    <div className="flex flex-col items-center gap-6 pb-4 select-none">
      <img src={doggy} alt="" className="h-xl w-fit" />
      <p className="text-stone-800 text-xl text-center">
        This section is empty. Maybe you can help to fill it up.
      </p>
      <WriteButton />
      <a
        href="https://dribbble.com/makers_co"
        className="text-xs font-medium text-stone-700 hover:underline self-end"
      >
        Illustration credits: Makers Company
      </a>
    </div>
  );
};

export default EmptyContainer;
