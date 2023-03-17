import React from "react";
import { useParams } from "react-router-dom";
import { useFetchBlogsByUserAdminQuery } from "../app/blog/blogApiSlice";
import { BannerProfilepage } from "../components/Banner";
import BlogContainers from "../components/BlogContainers";
import Profileskeleton from "../components/Profileskeleton";
const Profilepage = () => {
  const { userId } = useParams();
  const { data, error, isLoading } = useFetchBlogsByUserAdminQuery(userId);
  return (
    <>
      {isLoading && <Profileskeleton />}
      {data && (
        <>
          <BannerProfilepage
            name={data.user.name}
            username={data.user.username}
          />
          <BlogContainers data={data.blogs} />
        </>
      )}
    </>
  );
};

export default Profilepage;
