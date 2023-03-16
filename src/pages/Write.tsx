import React, { useEffect, useState } from "react";
import Addphoto from "./write/Addphoto";
import Addtags from "./write/Addtags";
import Editpage from "./write/Editpage";
import { useCurrentUser } from "../hooks/useCurrentUser";
import { useNavigate } from "react-router-dom";
import { NextButton, PreviousButton, PublishButton } from "./write/Buttons";
import {
  useLocalStorageBlogContent,
  useLocalStorageTitle,
} from "../hooks/useLocalStorage";
const Write: React.FC = () => {
  const [currUser] = useCurrentUser();
  const navigate = useNavigate();
  useEffect(() => {
    if (currUser === false) {
      return navigate("/auth/login");
    }
  }, [currUser]);
  const [page, setPage] = useState<number>(1);
  const decrementPage = () => {
    setPage((prev) => prev - 1);
  };
  const incrementPage = () => {
    setPage((prev) => prev + 1);
  };
  // -------------------------------------BUTTONS--------------------------------
  const buttonConainer = (
    <div className=" mt-6 mb-6 flex gap-12 justify-center">
      {page !== 1 && <PreviousButton onClick={decrementPage} />}
      {page !== 3 && <NextButton onClick={incrementPage} />}
      {page === 3 && <PublishButton />}
    </div>
  );
  // -------------------------------------------------------------------------------
  const [title, setTitle] = useLocalStorageTitle();
  const [blogContent, setBlogContent] = useLocalStorageBlogContent();
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [compressedFile, setCompressedFile] = useState<File | null>(null);
  console.log("title", title);
  console.log("blogContent", blogContent);
  console.log("selectedTags", selectedTags);
  console.log("compressedFile", compressedFile);
  return (
    <div>
      {page === 1 && (
        <Editpage
          blogContent={blogContent}
          setBlogContent={setBlogContent}
          title={title}
          setTitle={setTitle}
        />
      )}
      {page === 2 && (
        <Addtags
          selectedTags={selectedTags}
          setSelectedTags={setSelectedTags}
        />
      )}
      {page === 3 && <Addphoto setCompressedFile={setCompressedFile} />}
      {buttonConainer}
    </div>
  );
};
export default Write;
