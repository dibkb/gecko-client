import {
  UserCircleIcon,
  PencilSquareIcon,
  ArrowUpRightIcon,
  Bars2Icon,
} from "@heroicons/react/24/solid";
import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import geckoLogo from "../assets/images/gecko-logo.png";
import { useCurrentUser } from "../hooks/useCurrentUser";
const branding = (
  <span className="flex items-center gap-4">
    <img src={geckoLogo} alt="" className="h-10 md:h-16" />
    <small className="font-brand text-primary tracking-brand text-[10px] md:text-base">
      GECKO
    </small>
  </span>
);
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
        <span className="flex items-center gap-1 md:gap-2 cursor-pointer">
          <UserCircleIcon className="h-6 w-6 md:h-8 md:w-8 fill-zinc-600" />
          <p className="text-xs md:text-base">{currUser?.name}</p>
        </span>
      </nav>
      <Outlet />
    </div>
  );
};
export const PublicLayout = () => {
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
    <span className="absolute top-16 bg-white flex flex-col w-full gap-4 cursor-pointer text-sm font-medium">
      <button className="flex gap-1 items-center mx-auto">
        <PencilSquareIcon className="h-5 w-5 text-zinc-700" />
        <p className="font-medium">Write</p>
      </button>
      <button className="px-4 py-2 border border-primary rounded-md hover:bg-zinc-100">
        Login
      </button>
      <button
        className="flex items-center gap-1 bg-primary hover:bg-black
       text-white px-4 py-2 rounded-md transition duration-200 hover:scale-105 justify-center"
      >
        <p>Register</p>
        <ArrowUpRightIcon className="h-4 w-4" />
      </button>
    </span>
  );
  return (
    <div className="max-w-screen-2xl container mx-auto px-8 sm:px-6 lg:sm-4">
      <nav className="py-4 select-none flex items-center justify-between relative">
        {branding}
        {hamburger}
        <span className="hidden sm:flex items-center gap-4 cursor-pointer text-sm font-medium">
          <button className="flex gap-1 items-center">
            <PencilSquareIcon className="h-5 w-5 text-zinc-700" />
            <p className="font-medium">Write</p>
          </button>
          <main className="flex gap-3">
            <button className="px-4 py-2 border border-primary rounded-md hover:bg-zinc-100">
              Login
            </button>
            <button className="flex items-center gap-1 bg-primary hover:bg-black text-white px-4 py-2 rounded-md transition duration-200 hover:scale-105">
              <p>Register</p>
              <ArrowUpRightIcon className="h-4 w-4" />
            </button>
          </main>
        </span>
        {showMenu && menuItems}
      </nav>
      <Outlet />
    </div>
  );
};
