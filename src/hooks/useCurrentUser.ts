import React, { useState, useEffect } from "react";
export const useCurrentUser = () => {
  const [currUser, setCurrUser] = useState<string | null>(null);
  useEffect(() => {
    const reviveuser = localStorage.getItem("geckoUser");
    if (reviveuser) {
      setCurrUser(JSON.parse(reviveuser));
    }
  }, []);
  return [currUser];
};
