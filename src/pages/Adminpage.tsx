import { ExclamationTriangleIcon } from "@heroicons/react/24/solid";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useFetchBlogsByUserAdminQuery } from "../app/blog/blogApiSlice";
import { BannerAdminpage } from "../components/Banner";
import BlogContainerAdmin from "../components/BlogContainerAdmin";
import Profileskeleton from "../components/Profileskeleton";
import { DeleteAccount } from "../components/modals/DeleteWarning";
const Adminpage: React.FC = () => {
  const { userId } = useParams();
  const [showModal, setShowModal] = useState<boolean>(false);
  const { data, error, isLoading } = useFetchBlogsByUserAdminQuery(userId);
  return (
    <>
      {isLoading && <Profileskeleton />}
      {data && (
        <>
          <BannerAdminpage
            name={data.user.name}
            username={data.user.username}
          />
          {showModal && (
            <DeleteAccount
              setShowPortal={setShowModal}
              deletePosthandler={() => {}}
            />
          )}
          <button
            onClick={() => {
              setShowModal(true);
            }}
            className="flex ml-auto items-center gap-1 text-red-700 text-sm font-bold bg-red-100 rounded-lg px-6 py-2 hover:bg-red-200 mt-6"
          >
            <p>Delete Account</p>
            <ExclamationTriangleIcon className="h-7 w-7 text-red-500" />
          </button>
          <BlogContainerAdmin data={data.blogs} />
        </>
      )}
    </>
  );
};

export default Adminpage;
