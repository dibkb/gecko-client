import React from "react";
import { AiFillGithub, AiOutlineGoogle } from "react-icons/ai";
interface ButtonProps {
  label: string;
}
export const GithubButton: React.FC<ButtonProps> = ({ label }) => {
  return (
    <button
      type="submit"
      className=" text-primary flex border-2 justify-center gap-2 sm:gap-4 rounded-md py-3 border-primary group hover:bg-zinc-800"
    >
      <AiFillGithub className="h-5 w-5 sm:w-7 sm:h-7 group-hover:text-white self-center" />
      <p className="group-hover:text-white text-sm font-medium sm:text-base">
        {label}
      </p>
    </button>
  );
};
export const GoogleButton: React.FC<ButtonProps> = ({ label }) => {
  return (
    <button
      type="submit"
      className=" text-primary flex border-2 justify-center gap-2 sm:gap-4 rounded-md py-3 border-primary group hover:bg-zinc-800"
    >
      <AiOutlineGoogle className="h-5 w-5 sm:w-7 sm:h-7 group-hover:text-white self-center" />
      <p className="group-hover:text-white text-sm font-medium sm:text-base">
        {label}
      </p>
    </button>
  );
};
