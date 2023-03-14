import React, { useState, useEffect } from "react";
import { User } from "../app/features/auth/authSlice";
export const useCurrentUser = () => {
  const [currUser, setCurrUser] = useState<User | null>(null);
  useEffect(() => {
    const reviveuser = localStorage.getItem("geckoUser");
    if (reviveuser) {
      setCurrUser(JSON.parse(reviveuser));
    }
  }, []);
  return [currUser];
};
