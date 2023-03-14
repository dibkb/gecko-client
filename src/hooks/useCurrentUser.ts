import React, { useState, useEffect } from "react";
import { User } from "../app/features/auth/authSlice";
import { LOCAL_STORAGE } from "../utils/localStorage";
export const useCurrentUser = () => {
  const [currUser, setCurrUser] = useState<User | null | false>(null);
  useEffect(() => {
    const reviveuser = localStorage.getItem(LOCAL_STORAGE.LOCAL_STORAGE_USER);
    if (reviveuser) {
      setCurrUser(JSON.parse(reviveuser));
    } else {
      setCurrUser(false);
    }
  }, []);
  return [currUser];
};
