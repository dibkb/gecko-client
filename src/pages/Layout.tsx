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
    <small className="font-brand_two font-medium text-2xl">Selenium</small>
  </Link>
);
// ----------------------------------------------------------------------------------------------
export const AuthLayout: React.FC = () => {
  return (
    <div className="max-w-screen-2xl container mx-auto px-8 sm:px-6 lg:sm-4">
      <nav className="py-4 select-none">{branding}</nav>
      <Outlet />
    </div>
  );
};
export const UserLayout = () => {
  const [currUser] = useCurrentUser();
  return (
    <div className="max-w-screen-2xl container mx-auto px-8 sm:px-6 lg:sm-4">
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
    <span className="sm:hidden absolute top-16 right-0 bg-white flex flex-col w-full gap-4 cursor-pointer text-sm font-medium pb-4 shadow-md px-12">
      <Link className="flex gap-1 items-center mx-auto" to="/user/write">
        <PencilSquareIcon className="h-5 w-5 text-zinc-700" />
        <p className="font-medium">Write</p>
      </Link>
      {!currUser && (
        <>
          <Link
            to="/auth/login"
            className="text-center px-4 py-2 border border-primary rounded-md hover:bg-zinc-100"
          >
            Login
          </Link>
          <Link
            to="/user/register"
            className="flex items-center gap-1 bg-primary hover:bg-black
       text-white px-4 py-2 rounded-md transition duration-200 hover:scale-105 justify-center"
          >
            <p>Register</p>
            <ArrowUpRightIcon className="h-4 w-4" />
          </Link>
        </>
      )}
      {currUser && (
        <span className="flex items-center gap-1 cursor-pointer mx-auto">
          <UserCircleIcon className="h-6 w-6 md:h-8 md:w-8 fill-zinc-600" />
          <p className="">{currUser?.name}</p>
        </span>
      )}
    </span>
  );
  return (
    <div className="max-w-screen-2xl container mx-auto px-8 sm:px-6 lg:sm-4">
      <nav className="py-4 select-none flex items-center justify-between">
        {branding}
        {hamburger}
        {showMenu && menuItems}
        <span className="hidden sm:flex items-center gap-4 cursor-pointer text-xs font-semibold">
          <Link className="flex gap-1 items-center" to="/user/write">
            <PencilSquareIcon className="h-5 w-5 text-zinc-700" />
            <p className="font-medium">Write</p>
          </Link>
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
