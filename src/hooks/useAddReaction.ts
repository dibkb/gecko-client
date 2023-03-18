import { ReactElement } from "react";
import { useEditBlogMutation } from "../app/blog/blogApiSlice";
interface useAddReaction {
  id: string | undefined;
  type: number;
  setType: (arg: any) => void;
}
export const useAddReaction: React.FC<useAddReaction> = ({
  id,
  type,
  setType,
}): any => {
  const [editBlog] = useEditBlogMutation();
};
