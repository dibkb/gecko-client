import React from "react";
import doggy from "../assets/images/doggo-min.png";
const Errorpage: React.FC = () => {
  return (
    <div className="flex flex-col items-center gap-6 pb-4 select-none">
      <img src={doggy} alt="" className="h-xl w-fit" />
      <p className="text-stone-800 text-3xl mb-10">
        Oops... Looks like something went wrong
      </p>
      <a
        href="https://dribbble.com/makers_co"
        className="text-xs font-medium text-stone-700 hover:underline self-end"
      >
        Illustration credits: Makers Company
      </a>
    </div>
  );
};

export default Errorpage;
