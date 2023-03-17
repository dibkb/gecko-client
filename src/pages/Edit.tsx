import React, { useEffect, useState } from "react";
import Addphoto from "./write/Addphoto";
import Addtags from "./write/Addtags";
import Editpage from "./write/Editpage";
import { useCurrentUser } from "../hooks/useCurrentUser";
import { useNavigate, useParams } from "react-router-dom";
import { NextButton, PreviousButton, PublishButton } from "./write/Buttons";
import {
  useLocalStorageBlogContent,
  useLocalStorageTitle,
} from "../hooks/useLocalStorage";
import {
  useFetchBlogsByIdQuery,
  useEditBlogMutation,
} from "../app/blog/blogApiSlice";
import { clearLocalStorage } from "../utils/localStorage";
import Editphoto from "./write/Editphoto";
import { BlogSkeleton } from "../components/BlogcontainerSkeleton";
const Write: React.FC = () => {
  const { blogId } = useParams();
  const [currUser] = useCurrentUser();
  const navigate = useNavigate();
  const { data, error, isLoading } = useFetchBlogsByIdQuery(blogId);
  const [editBlog] = useEditBlogMutation();
  // -------------------------------------------------------------------------------
  const [title, setTitle] = useLocalStorageTitle();
  const [blogContent, setBlogContent] = useLocalStorageBlogContent();
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [compressedFile, setCompressedFile] = useState<File | null>(null);
  const [image, setImage] = useState<string | null>(null);
  useEffect(() => {
    if (data) {
      setTitle(data?.title);
      setBlogContent(data?.content);
      setSelectedTags([]);
      setImage(data?.image);
    }
  }, [data]);
  const editBlogHandler = async () => {
    await editBlog({
      id: blogId,
      content: {
        title: title,
        content: blogContent,
        tags: selectedTags,
        image: compressedFile ? compressedFile : image,
      },
    });
    clearLocalStorage();
    navigate("/");
  };
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
      {page === 3 && <PublishButton onClick={editBlogHandler} />}
    </div>
  );
  const content = (
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
      {page === 3 && (
        <Editphoto setCompressedFile={setCompressedFile} image={image} />
      )}
      {buttonConainer}
    </div>
  );
  return (
    <>
      {isLoading && <BlogSkeleton />}
      {data && content}
    </>
  );
};
export default Write;
