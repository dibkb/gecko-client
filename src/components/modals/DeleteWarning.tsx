import React from "react";
import { XMarkIcon, ExclamationTriangleIcon } from "@heroicons/react/24/solid";
import { createPortal } from "react-dom";
interface DeleteAccount {
  setShowPortal: (val: boolean) => void;
  deleteAccountHandler: () => void;
}
interface DeleteBlog {
  setShowPortal: (val: boolean) => void;
  deletePosthandler: () => void;
}
export const DeleteAccount: React.FC<DeleteAccount> = ({
  setShowPortal,
  deleteAccountHandler,
}) => {
  const content = (
    <div
      style={{
        backgroundColor: "rgba(22, 22, 22, 0.72)",
      }}
      className="fixed top-0 left-0 z-10 h-full w-full select-none"
    >
      <main className="bg-orange-200 shadow-xl rounded-md mx-auto mt-16 w-[90%] max-w-lg p-4 md:p-8 flex flex-col">
        <XMarkIcon
          onClick={() => {
            setShowPortal(false);
          }}
          className="h-6 ml-auto cursor-pointer text-stone-700 hover:text-red-700"
        />
        <ExclamationTriangleIcon className="h-10 text-orange-600 mx-auto" />
        <p className="font-semibold text-center mt-3">Delete Account</p>
        <p className="font-medium text-xs text-orange-600 my-3 text-center">
          Deleting your account will permanently erase all of your blog posts
          and account details from the database.You wont be able to retrive any
          of data in the future.
        </p>
        <button
          onClick={deleteAccountHandler}
          className="text-sm px-4 py-2 rounded-md text-white red-70 font-medium bg-red-600 hover:bg-red-700 self-center mt-4"
        >
          I want to delete my account
        </button>
      </main>
    </div>
  );
  return createPortal(content, document.body);
};
export const DeleteBlog: React.FC<DeleteBlog> = ({
  setShowPortal,
  deletePosthandler,
}) => {
  const content = (
    <div
      style={{
        backgroundColor: "rgba(22, 22, 22, 0.72)",
      }}
      className="fixed top-0 left-0 z-10 h-full w-full select-none overflow-hidden"
    >
      <main className="bg-orange-200 shadow-xl rounded-md mx-auto max-w-lg mt-16 w-[90%] p-4 md:p-8 flex flex-col">
        <XMarkIcon
          onClick={() => {
            setShowPortal(false);
          }}
          className="h-6 ml-auto cursor-pointer text-stone-700 hover:text-red-700"
        />
        <ExclamationTriangleIcon className="h-10 text-orange-600 mx-auto" />
        <p className="font-semibold text-center mt-3">Delete Blog</p>
        <p className="font-medium text-xs text-orange-600 my-3 text-center">
          Deleting your account will permanently erase this post from the
          database You wont be able to retrive this in the future.
        </p>
        <button
          onClick={deletePosthandler}
          className="text-sm px-4 py-2 rounded-md text-white red-70 font-medium bg-red-600 hover:bg-red-700 self-center mt-4"
        >
          Delete
        </button>
      </main>
    </div>
  );
  return createPortal(content, document.body);
};
