import React from "react";
const Errorpage: React.FC = () => {
  return (
    <div className="flex flex-col items-center gap-6 pb-4 select-none">
      <img
        src={
          "https://cdn.dribbble.com/userupload/3074608/file/original-9383b4bfc24004f8dc5114b3d77402c7.jpg?compress=1&resize=500x400"
        }
        alt=""
        className="h-xl w-fit"
      />
      <p className="text-stone-800 text-3xl mb-10 text-center">
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
