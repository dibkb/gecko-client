import React from "react";

export const Banner: React.FC = () => {
  return (
    <div className="shadow-md rounded-lg bg-gradient-to-r from-neutral-900 to-stone-700 text-white text-start p-6 h-[300px] sm:h-[400px] flex flex-col justify-end gap-10 select-none">
      <h1 className="font-regular text-5xl min-[420px]:text-6xl min-[520px]:text-7xl sm:text-8xl md:text-9xl">
        Developer Insights
      </h1>
      <p className="font-medium text-zinc-400 text-sm sm:text-base">
        Thoughts and advice on experience, learning and technology.
      </p>
    </div>
  );
};
interface BannerAdminpage {
  name: string;
  username: string;
}
export const BannerAdminpage: React.FC<BannerAdminpage> = ({
  name,
  username,
}) => {
  return (
    <div className="shadow-md rounded-lg bg-gradient-to-r from-stone-800 to-cyan-900 text-white text-start p-6 h-[260px] sm:h-[360px] flex flex-col justify-end gap-4 select-none">
      <div className="flex items-end gap-5">
        <h1 className="font-regular text-4xl min-[420px]:text-5xl min-[520px]:text-6xl sm:text-7xl md:text-8xl">
          Welcome
        </h1>
        <h1 className="font-regular text-2xl min-[420px]:text-3xl min-[520px]:text-4xl sm:text-5xl md:text-6xl">
          {name}
        </h1>
      </div>
      <p className="font-medium text-zinc-400 text-sm sm:text-base">
        @{username}
      </p>
    </div>
  );
};
export const BannerProfilepage: React.FC<BannerAdminpage> = ({
  name,
  username,
}) => {
  return (
    <div className="shadow-md rounded-lg bg-gradient-to-r from-cyan-900 to-teal-900 text-white text-start p-6 h-[260px] sm:h-[360px] flex flex-col justify-end gap-4 select-none">
      <div className="flex items-end gap-5">
        <h1 className="font-regular text-4xl min-[420px]:text-5xl min-[520px]:text-6xl sm:text-7xl md:text-8xl">
          {name}
        </h1>
      </div>
      <p className="font-medium text-slate-300 text-sm sm:text-base">
        @{username}
      </p>
    </div>
  );
};
