import { ExclamationTriangleIcon } from "@heroicons/react/24/solid";
import React, { useCallback, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  useDeleteBlogMutation,
  useFetchBlogsByUserAdminQuery,
} from "../app/blog/blogApiSlice";
import { BannerAdminpage } from "../components/Banner";
import BlogContainerAdmin from "../components/BlogContainerAdmin";
import Profileskeleton from "../components/Profileskeleton";
import { DeleteAccount } from "../components/modals/DeleteWarning";
import { useDispatch } from "react-redux";
import { setLogout } from "../app/features/auth/authSlice";
import { useDeleteAccountMutation } from "../app/auth/authApiSlice";
const Adminpage: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { userId } = useParams();
  const [showModal, setShowModal] = useState<boolean>(false);
  const { data, error, isLoading } = useFetchBlogsByUserAdminQuery(userId);
  const [deleteAccount] = useDeleteAccountMutation();
  const deleteAccountHandler = useCallback(async () => {
    await deleteAccount(userId);
    dispatch(setLogout());
    navigate("/");
    window.location.reload();
  }, [userId]);
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
              deleteAccountHandler={deleteAccountHandler}
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
