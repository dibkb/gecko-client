import React from "react";
import { Outlet } from "react-router-dom";
import geckoLogo from "../../assets/images/gecko-logo.png";
const AuthLayout: React.FC = () => {
  return (
    <div className="max-w-screen-2xl container mx-auto px-8 sm:px-6 lg:sm-4">
      <nav className="py-4 select-none">
        <span className="flex items-center gap-4">
          <img src={geckoLogo} alt="" />
          <small className="font-brand text-primary tracking-brand">
            GECKO
          </small>
        </span>
      </nav>
      <Outlet />
    </div>
  );
};

export default AuthLayout;
