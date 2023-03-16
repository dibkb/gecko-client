import {
  ArrowUpRightIcon,
  PencilSquareIcon,
  ArrowUpLeftIcon,
} from "@heroicons/react/24/solid";
import React from "react";
import { AiFillGithub, AiOutlineGoogle } from "react-icons/ai";
import { Link } from "react-router-dom";
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
export const WriteButton: React.FC = () => {
  return (
    <Link
      className="flex gap-1 items-center mx-auto rounded-md px-3 py-2 hover:bg-stone-200"
      to="/user/write"
    >
      <PencilSquareIcon className="h-5 w-5 text-zinc-700" />
      <p className="font-medium">Write</p>
    </Link>
  );
};
export const Login: React.FC = () => {
  return (
    <Link
      to="/auth/login"
      className="text-center px-4 h-10 border border-primary rounded-md hover:bg-zinc-100"
    >
      <p className="flex h-full items-center justify-center">Login</p>
    </Link>
  );
};
export const Register: React.FC = () => {
  return (
    <Link
      to="/user/register"
      className="flex items-center gap-1 bg-neutral-800 hover:bg-neutral-900
text-white px-4 h-10 rounded-md transition duration-200 hover:scale-105 justify-center"
    >
      <p>Register</p>
      <ArrowUpRightIcon className="h-4 w-4" />
    </Link>
  );
};
export const Logout: React.FC = () => {
  return (
    <span
      className="flex items-center gap-1 bg-neutral-800 hover:bg-neutral-900
text-white px-4 h-10 rounded-md justify-center"
    >
      Logout
    </span>
  );
};
