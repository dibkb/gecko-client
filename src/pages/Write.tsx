import { ArrowUpRightIcon } from "@heroicons/react/24/solid";
import React, { useEffect, useState } from "react";
import Addphoto from "./write/Addphoto";
import Addtags from "./write/Addtags";
import Editpage from "./write/Editpage";
import { useCurrentUser } from "../hooks/useCurrentUser";
import { useNavigate } from "react-router-dom";
import { LOCAL_STORAGE } from "../utils/localStorage";
const Write: React.FC = () => {
  const [currUser] = useCurrentUser();
  const navigate = useNavigate();
  useEffect(() => {
    if (currUser === false) {
      return navigate("/auth/login");
    }
  }, [currUser]);
  const [page, setPage] = useState<number>(1);
  // -------------------------------------BUTTONS--------------------------------
  const nextButton = (
    <button
      onClick={() => {
        setPage((prev) => prev + 1);
      }}
      className="border font-medium bg-primary hover:bg-black text-white rounded-md px-12 py-2
     text-lg transition duration-300 ease-out hover:scale-105"
    >
      Next
    </button>
  );
  const prevButton = (
    <button
      onClick={() => {
        setPage((prev) => prev - 1);
      }}
      className="border font-medium text-primary border-primary rounded-md px-12 py-2
     text-lg hover:bg-zinc-100"
    >
      Previous
    </button>
  );
  const publishButton = (
    <button
      className="group flex gap-2 border font-medium bg-primary hover:bg-black text-white rounded-md px-12 py-2
    text-lg transition duration-300 ease-out hover:scale-105"
    >
      <p>Publish</p>
      <ArrowUpRightIcon className="h-6 w-6 text-white transition delay-300 duration-300 ease-out group-hover:rotate-[360deg] " />
    </button>
  );
  const buttonConainer = (
    <div className=" mt-6 mb-6 flex gap-12 justify-center">
      {page !== 1 && prevButton}
      {page !== 3 && nextButton}
      {page === 3 && publishButton}
    </div>
  );
  // -------------------------------------------------------------------------------
  const [blogContent, setBlogContent] = useState<string>(
    JSON.parse(
      localStorage?.getItem(LOCAL_STORAGE.LOCAL_STORAGE_BLOG) as string
    )
  );
  const [heading, setHeading] = useState<string>(
    JSON.parse(
      localStorage?.getItem(LOCAL_STORAGE.LOCAL_STORAGE_HEADING) as string
    )
  );
  useEffect(() => {
    localStorage.setItem(
      LOCAL_STORAGE.LOCAL_STORAGE_HEADING,
      JSON.stringify(blogContent)
    );
  }, [heading]);
  useEffect(() => {
    localStorage.setItem(
      LOCAL_STORAGE.LOCAL_STORAGE_BLOG,
      JSON.stringify(blogContent)
    );
  }, [blogContent]);
  return (
    <div>
      {page === 1 && (
        <Editpage blogContent={blogContent} setBlogContent={setBlogContent} />
      )}
      {page === 2 && <Addtags />}
      {page === 3 && <Addphoto />}
      {buttonConainer}
    </div>
  );
};
export default Write;
