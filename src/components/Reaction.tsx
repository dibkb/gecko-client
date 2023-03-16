import React from "react";
import likedEmoji from "../assets/images/liked.png";
import lovedEmoji from "../assets/images/loved.png";
import helpfulEmoji from "../assets/images/helpful.png";
import { Reactionhover } from "./Reactionhover";
export const Reaction = ({ reaction }) => {
  return (
    <div className="flex gap-4 justify-center mt-12">
      <span className="flex gap-2 cursor-pointer items-center font-medium group relative">
        <img
          src={likedEmoji}
          alt="like Emoji"
          className="group-hover:scale-125 transition duration-300 ease-out"
        />
        <Reactionhover text="Liked the article" />
        <p className="">{reaction.liked}</p>
      </span>
      <span className="flex gap-2 cursor-pointer items-center font-medium group relative">
        <img
          src={lovedEmoji}
          alt="loved Emoji"
          className="group-hover:scale-125 transition duration-300 ease-out"
        />
        <Reactionhover text="Loved the article" />
        <p>{reaction.loved}</p>
      </span>{" "}
      <span className="flex gap-2 cursor-pointer items-center font-medium group relative">
        <img
          src={helpfulEmoji}
          alt="helpful Emoji"
          className="group-hover:scale-125 transition duration-300 ease-out"
        />
        <Reactionhover text="Found the article helpful" />
        <p>{reaction.helpful}</p>
      </span>
    </div>
  );
};
