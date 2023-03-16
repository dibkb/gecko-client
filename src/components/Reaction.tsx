import React from "react";
import likedEmoji from "../assets/images/liked.png";
import lovedEmoji from "../assets/images/loved.png";
import helpfulEmoji from "../assets/images/helpful.png";
import { Reactionhover } from "./Reactionhover";
interface Reaction {
  reaction: { liked: number; loved: number; helpful: number } | undefined;
  hover: boolean;
  parentClassName?: string;
}
export const Reaction: React.FC<Reaction> = ({
  reaction,
  hover,
  parentClassName,
}) => {
  let imgClassName: string;
  let spanClassName: string;
  if (hover) {
    imgClassName = "group-hover:scale-125 transition duration-300 ease-out";
    spanClassName =
      "flex gap-2 cursor-pointer items-center font-medium group relative";
  } else {
    spanClassName = "flex items-center gap-1 text-xs font-medium";
    imgClassName = "h-4";
  }
  return (
    <div className={parentClassName}>
      <span className={spanClassName}>
        <img src={likedEmoji} alt="like Emoji" className={imgClassName} />
        {hover && <Reactionhover text="Liked the article" />}
        <p className="">{reaction?.liked}</p>
      </span>
      <span className={spanClassName}>
        <img src={lovedEmoji} alt="loved Emoji" className={imgClassName} />
        {hover && <Reactionhover text="Loved the article" />}
        <p>{reaction?.loved}</p>
      </span>{" "}
      <span className={spanClassName}>
        <img src={helpfulEmoji} alt="helpful Emoji" className={imgClassName} />
        {hover && <Reactionhover text="Found the article helpful" />}
        <p>{reaction?.helpful}</p>
      </span>
    </div>
  );
};
