import React from "react";
import { useParams } from "react-router-dom";
import { useFetchBlogsByUserAdminQuery } from "../app/blog/blogApiSlice";
import { BannerAdminpage } from "../components/Banner";
import BlogContainerAdmin from "../components/BlogContainerAdmin";
const Adminpage: React.FC = () => {
  const { userId } = useParams();
  const { data, error, isLoading } = useFetchBlogsByUserAdminQuery(userId);
  return (
    <div>
      {data && (
        <>
          <BannerAdminpage
            name={data.user.name}
            username={data.user.username}
          />
          <BlogContainerAdmin data={data.blogs} />
        </>
      )}
    </div>
  );
};

export default Adminpage;
