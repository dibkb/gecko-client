import React from "react";
import { WriteButton } from "./Button";
const EmptyContainer = () => {
  return (
    <div className="flex flex-col items-center gap-6 pb-4 select-none">
      <img
        src={
          "https://cdn.dribbble.com/userupload/3074608/file/original-9383b4bfc24004f8dc5114b3d77402c7.jpg?compress=1&resize=1024x768"
        }
        alt=""
        className="h-xl w-fit"
      />
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
