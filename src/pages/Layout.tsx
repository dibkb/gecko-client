import { UserCircleIcon } from "@heroicons/react/24/solid";
import React from "react";
import { Outlet } from "react-router-dom";
import geckoLogo from "../assets/images/gecko-logo.png";
import { useCurrentUser } from "../hooks/useCurrentUser";
export const AuthLayout: React.FC = () => {
  return (
    <div className="max-w-screen-2xl container mx-auto px-8 sm:px-6 lg:sm-4">
      <nav className="py-4 select-none">
        <span className="flex items-center gap-4">
          <img src={geckoLogo} alt="" />
          <small className="font-brand text-primary tracking-brand md:text-lg">
            GECKO
          </small>
        </span>
      </nav>
      <Outlet />
    </div>
  );
};
export const UserLayout = () => {
  const [currUser] = useCurrentUser();
  return (
    <div className="max-w-screen-2xl container mx-auto px-8 sm:px-6 lg:sm-4">
      <nav className="py-4 select-none flex items-center justify-between">
        <span className="flex items-center gap-4">
          <img src={geckoLogo} alt="" />
          <small className="font-brand text-primary tracking-brand md:text-lg">
            GECKO
          </small>
        </span>
        <span className="flex items-center gap-2 cursor-pointer">
          <UserCircleIcon className="h-8 w-8 fill-zinc-600" />
          <p>{currUser?.name}</p>
        </span>
      </nav>
      <Outlet />
    </div>
  );
};
export const PublicLayout = () => {
  return (
    <div className="max-w-screen-2xl container mx-auto px-8 sm:px-6 lg:sm-4">
      <nav className="py-4 select-none flex items-center justify-between">
        <span className="flex items-center gap-4">
          <img src={geckoLogo} alt="" />
          <small className="font-brand text-primary tracking-brand md:text-lg">
            GECKO
          </small>
        </span>
        <span className="flex items-center gap-2 cursor-pointer"></span>
      </nav>
      <Outlet />
    </div>
  );
};
