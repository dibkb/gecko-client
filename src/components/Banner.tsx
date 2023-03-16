import React from "react";

export const Banner = () => {
  return (
    <div className="shadow-md rounded-lg bg-zinc-800 text-white text-start p-6 h-[300px] sm:h-[400px] flex flex-col justify-end gap-10 select-none">
      <h1 className="font-regular text-6xl sm:text-8xl md:text-9xl">
        Developer Insights
      </h1>
      <p className="font-medium text-zinc-400 text-sm sm:text-base">
        Thoughts and advice on experience, learning and technology.
      </p>
    </div>
  );
};
