import React from "react";
interface Reactionhover {
  text: string;
}
export const Reactionhover: React.FC<Reactionhover> = ({ text }) => {
  return (
    <p className="top-10 invisible group-hover:visible absolute whitespace-nowrap text-sm border border-amber-700 rounded-md px-2 text-amber-700 bg-amber-50">
      {text}
    </p>
  );
};
