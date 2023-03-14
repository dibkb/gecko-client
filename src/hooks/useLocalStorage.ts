import { useEffect, useState } from "react";
import { LOCAL_STORAGE } from "../utils/localStorage";
export const useLocalStorageTitle = (): [
  string,
  React.Dispatch<React.SetStateAction<string>>
] => {
  const [title, setTitle] = useState<string>(
    JSON.parse(
      localStorage?.getItem(LOCAL_STORAGE.LOCAL_STORAGE_HEADING) as string
    )
  );
  useEffect(() => {
    localStorage.setItem(
      LOCAL_STORAGE.LOCAL_STORAGE_HEADING,
      JSON.stringify(title)
    );
  }, [title]);
  return [title, setTitle];
};
export const useLocalStorageBlogContent = (): [
  string,
  React.Dispatch<React.SetStateAction<string>>
] => {
  const [blogContent, setBlogContent] = useState<string>(
    JSON.parse(
      localStorage?.getItem(LOCAL_STORAGE.LOCAL_STORAGE_BLOG) as string
    )
  );
  useEffect(() => {
    localStorage.setItem(
      LOCAL_STORAGE.LOCAL_STORAGE_BLOG,
      JSON.stringify(blogContent)
    );
  }, [blogContent]);
  return [blogContent, setBlogContent];
};
