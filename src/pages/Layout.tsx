import {
  UserCircleIcon,
  PencilSquareIcon,
  ArrowUpRightIcon,
  Bars2Icon,
} from "@heroicons/react/24/solid";
import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import { SiPepsi } from "react-icons/si";
import { useCurrentUser } from "../hooks/useCurrentUser";
import { MediumIcon } from "../utils/Icons";
// ----------------------------------------------------------------------------------------------
const branding = (
  <Link className="flex items-center gap-4" to="/">
    <MediumIcon className="h-9 w-9 text-zinc-800" />
    <small className="font-brand_two font-medium text-2xl">Helium</small>
  </Link>
);
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
// ----------------------------------------------------------------------------------------------
export const AuthLayout: React.FC = () => {
  return (
    <div className="max-w-screen-2xl container mx-auto px-3 sm:px-6 lg:sm-4 pb-6">
      <nav className="py-4 select-none">{branding}</nav>
      <Outlet />
    </div>
  );
};
export const UserLayout = () => {
  const [currUser] = useCurrentUser();
  return (
    <div className="max-w-screen-2xl container mx-auto px-3 sm:px-6 lg:sm-4 pb-6">
      <nav className="py-4 select-none flex items-center justify-between">
        {branding}
        {currUser && (
          <span className="flex items-center gap-1 cursor-pointer">
            <UserCircleIcon className="h-6 w-6 md:h-8 md:w-8 fill-zinc-600" />
            <p className="text-xs md:text-base">{currUser?.name}</p>
          </span>
        )}
      </nav>
      <Outlet />
    </div>
  );
};
export const PublicLayout = () => {
  const [currUser] = useCurrentUser();
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const hamburger = (
    <main className="block sm:hidden cursor-pointer">
      <Bars2Icon
        className="h-6 w-6"
        onClick={() => {
          setShowMenu((prev) => !prev);
        }}
      />
    </main>
  );
  const menuItems = (
    <span className="sm:hidden absolute top-16 right-0 bg-white flex flex-col w-full gap-4 cursor-pointer text-sm font-medium pb-4 border-b-2 border-stone-700 shadow-lg px-12">
      {!currUser && (
        <>
          <Link
            to="/auth/login"
            className="text-center px-4 h-10 border border-primary rounded-md hover:bg-zinc-100"
          >
            <p className="flex h-full items-center justify-center">Login</p>
          </Link>
          <Link
            to="/user/register"
            className="flex items-center gap-1 bg-primary hover:bg-black
       text-white px-4 h-10 rounded-md transition duration-200 hover:scale-105 justify-center"
          >
            <p>Register</p>
            <ArrowUpRightIcon className="h-4 w-4" />
          </Link>
        </>
      )}
      {currUser && (
        <>
          <WriteButton />
          <span className="flex items-center gap-1 cursor-pointer mx-auto">
            <UserCircleIcon className="h-6 w-6 md:h-8 md:w-8 fill-zinc-600" />
            <p className="">{currUser?.name}</p>
          </span>
        </>
      )}
    </span>
  );
  return (
    <div className="max-w-screen-2xl container mx-auto px-3 sm:px-6 lg:sm-4 pb-6">
      <nav className="py-4 select-none flex items-center justify-between">
        {branding}
        {hamburger}
        {showMenu && menuItems}
        <span className="hidden sm:flex items-center gap-4 cursor-pointer text-xs font-semibold">
          <WriteButton />
          {!currUser && (
            <main className="flex gap-3">
              <Link
                to="/auth/login"
                className="px-4 py-2 border border-primary rounded-md hover:bg-zinc-100"
              >
                Login
              </Link>
              <Link
                to="/auth/register"
                className="flex items-center gap-1 bg-primary hover:bg-black text-white px-4 py-2 rounded-md transition duration-200 hover:scale-105"
              >
                <p>Register</p>
                <ArrowUpRightIcon className="h-4 w-4" />
              </Link>
            </main>
          )}
          {currUser && (
            <span className="flex items-center gap-1 cursor-pointer">
              <UserCircleIcon className="h-6 w-6 md:h-8 md:w-8 fill-zinc-600" />
              <p className="text-xs md:text-base">{currUser?.name}</p>
            </span>
          )}
        </span>
      </nav>
      <Outlet />
    </div>
  );
};
