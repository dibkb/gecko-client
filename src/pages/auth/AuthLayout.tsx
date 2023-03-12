import React from "react";
import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div>
      Header
      <Outlet />
    </div>
  );
};

export default AuthLayout;
