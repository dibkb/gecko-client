import {
  ArrowUpRightIcon,
  PencilSquareIcon,
  TrashIcon,
} from "@heroicons/react/24/solid";
import React from "react";
import { AiFillGithub, AiOutlineGoogle } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useSendLogoutMutation } from "../app/auth/authApiSlice";
import { setLogout } from "../app/features/auth/authSlice";
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
  const dispatch = useDispatch();
  const [sendLogout, { isLoading }] = useSendLogoutMutation();
  return (
    <span
      onClick={async () => {
        await sendLogout("");
        dispatch(setLogout());
        window.location.reload();
      }}
      className="flex items-center gap-1 bg-neutral-800 hover:bg-neutral-900
text-white px-4 h-10 rounded-md justify-center"
    >
      Logout
    </span>
  );
};
export const EditButton: React.FC = () => {
  return (
    <button className="flex items-center gap-1 px-3 py-1 rounded-md text-emerald-700 text-sm font-semibold bg-emerald-50 hover:bg-emerald-100">
      <p>Edit</p>
      <PencilSquareIcon className="h-4 w-4" />
    </button>
  );
};
interface DeleteButton {
  onClick: () => void;
}
export const DeleteButton: React.FC<DeleteButton> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="flex items-center gap-1 px-3 py-1 rounded-md text-red-700 text-sm font-semibold bg-red-50 hover:bg-red-100"
    >
      <p>Delete</p>
      <TrashIcon className="h-4 w-4" />
    </button>
  );
};
