import React from "react";

export const Banner = () => {
  return (
    <div className="shadow-md rounded-lg bg-zinc-800 text-white text-start p-6 h-[400px] flex flex-col justify-end gap-10 select-none">
      <h1 className="font-regular text-9xl">Developer Insights</h1>
      <p className="font-medium text-zinc-400">
        Thoughts and advice on experience, learning and technology.
      </p>
    </div>
  );
};
