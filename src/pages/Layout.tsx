import {
  UserCircleIcon,
  ArrowUpRightIcon,
  Bars2Icon,
} from "@heroicons/react/24/solid";
import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import { Login, Logout, Register, WriteButton } from "../components/Button";
import Footer from "../components/Footer";
import { useCurrentUser } from "../hooks/useCurrentUser";
import { MediumIcon } from "../utils/Icons";
// ----------------------------------------------------------------------------------------------
export const Branding = () => (
  <Link className="flex items-center gap-4" to="/">
    <MediumIcon className="h-9 w-9 text-zinc-800" />
    <small className="font-brand_two font-medium text-2xl">Helium</small>
  </Link>
);
// ----------------------------------------------------------------------------------------------
export const AuthLayout: React.FC = () => {
  return (
    <div className="max-w-screen-2xl container mx-auto px-3 sm:px-6 lg:sm-4 pb-6">
      <nav className="py-4 select-none">
        <Branding />
      </nav>
      <Outlet />
    </div>
  );
};
export const UserLayout = () => {
  const [currUser] = useCurrentUser();
  return (
    <div className="max-w-screen-2xl container mx-auto px-3 sm:px-6 lg:sm-4 pb-6">
      <nav className="py-4 select-none flex items-center justify-between">
        <Branding />
        {currUser && (
          <Link
            to={`/user/admin/${currUser._id}`}
            className="flex items-center gap-1 cursor-pointer"
          >
            <UserCircleIcon className="h-6 w-6 md:h-8 md:w-8 fill-zinc-600" />
            <p className="text-xs md:text-base">{currUser?.name}</p>
          </Link>
        )}
      </nav>
      <Outlet />
    </div>
  );
};
export const PublicLayout: React.FC = () => {
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
      <WriteButton />
      {!currUser && (
        <>
          <Login />
          <Register />
        </>
      )}
      {currUser && (
        <>
          <Link
            to={`/user/admin/${currUser._id}`}
            className="flex items-center gap-1 cursor-pointer mx-auto px-2 py-1 rounded-md hover:bg-stone-200"
          >
            <UserCircleIcon className="h-6 w-6 md:h-8 md:w-8 fill-zinc-600" />
            <p className="">{currUser?.name}</p>
          </Link>
          <Logout />
        </>
      )}
    </span>
  );
  return (
    <div className="max-w-screen-2xl container mx-auto px-3 sm:px-6 lg:sm-4 pb-6 overflow-x-auto">
      <nav className="py-4 select-none flex items-center justify-between">
        <Branding />
        {hamburger}
        {showMenu && menuItems}
        <span className="hidden sm:flex items-center gap-4 cursor-pointer text-xs font-semibold">
          <WriteButton />
          {!currUser && (
            <main className="flex gap-3">
              <Login />
              <Register />
            </main>
          )}
          {currUser && (
            <>
              <Link
                to={`/user/admin/${currUser._id}`}
                className="flex items-center gap-1 cursor-pointer px-2 py-1 rounded-md hover:bg-stone-200"
              >
                <UserCircleIcon className="h-6 w-6 md:h-8 md:w-8 fill-zinc-600" />
                <p className="text-xs md:text-base">{currUser?.name}</p>
              </Link>
              <Logout />
            </>
          )}
        </span>
      </nav>
      <Outlet />
      <Footer />
    </div>
  );
};
