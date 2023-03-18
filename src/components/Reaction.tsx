import React, { useCallback, useState } from "react";
import likedEmoji from "../assets/images/liked.png";
import lovedEmoji from "../assets/images/loved.png";
import helpfulEmoji from "../assets/images/helpful.png";
import { Reactionhover } from "./Reactionhover";
import { useAddReactionMutation } from "../app/blog/blogApiSlice";
import { clearLocalStorage } from "../utils/localStorage";
interface Reaction {
  id?: string;
  reaction: { liked: number; loved: number; helpful: number } | undefined;
  edit: boolean;
  parentClassName?: string;
}
export const Reaction: React.FC<Reaction> = ({
  id,
  reaction,
  edit,
  parentClassName,
}) => {
  let imgClassName: string;
  let spanClassName: string;
  if (edit) {
    imgClassName = "group-hover:scale-125 transition duration-300 ease-out";
    spanClassName =
      "flex gap-2 cursor-pointer items-center font-medium group relative";
  } else {
    spanClassName = "flex items-center gap-1 text-xs font-medium";
    imgClassName = "h-4";
  }
  const [addReaction] = useAddReactionMutation();
  const [liked, setLiked] = useState<number>(reaction?.liked ?? 0);
  const [loved, setLoved] = useState<number>(reaction?.loved ?? 0);
  const [helpful, setHelpful] = useState<number>(reaction?.helpful ?? 0);
  const addReactionHadler = async ({ id, reaction, setReaction }) => {
    if (edit)
      await addReaction({
        id: id,
        reaction: {
          liked,
          loved,
          helpful,
        },
      });
    setReaction(reaction + 1);
  };
  return (
    <div className={parentClassName}>
      <span
        className={spanClassName}
        onClick={() =>
          addReactionHadler({ id: id, reaction: liked, setReaction: setLiked })
        }
      >
        <img src={likedEmoji} alt="like Emoji" className={imgClassName} />
        {edit && <Reactionhover text="Liked the article" />}
        <p className="">{liked}</p>
      </span>
      <span
        onClick={() =>
          addReactionHadler({ id: id, reaction: loved, setReaction: setLoved })
        }
        className={spanClassName}
      >
        <img src={lovedEmoji} alt="loved Emoji" className={imgClassName} />
        {edit && <Reactionhover text="Loved the article" />}
        <p>{loved}</p>
      </span>
      <span
        onClick={() =>
          addReactionHadler({
            id: id,
            reaction: helpful,
            setReaction: setHelpful,
          })
        }
        className={spanClassName}
      >
        <img src={helpfulEmoji} alt="helpful Emoji" className={imgClassName} />
        {edit && <Reactionhover text="Found the article helpful" />}
        <p>{helpful}</p>
      </span>
    </div>
  );
};
