import { TrashIcon } from "@heroicons/react/24/solid";
import React from "react";
import { useParams } from "react-router-dom";
import { useFetchBlogsByUserAdminQuery } from "../app/blog/blogApiSlice";
import { BannerAdminpage } from "../components/Banner";
import BlogContainerAdmin from "../components/BlogContainerAdmin";
import Profileskeleton from "../components/Profileskeleton";
const Adminpage: React.FC = () => {
  const { userId } = useParams();
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
          <button className="flex items-center gap-1 text-red-700 text-sm font-bold bg-red-100 rounded-lg px-6 py-2 hover:bg-red-200 mt-6">
            <p>Delete Account</p>
            <TrashIcon className="h-4 w-4" />
          </button>
          <BlogContainerAdmin data={data.blogs} />
        </>
      )}
    </>
  );
};

export default Adminpage;
