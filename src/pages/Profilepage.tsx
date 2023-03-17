import React from "react";
import { useParams } from "react-router-dom";
import { useFetchBlogsByUserAdminQuery } from "../app/blog/blogApiSlice";
import { BannerProfilepage } from "../components/Banner";
import BlogContainers from "../components/BlogContainers";
const Profilepage = () => {
  const { userId } = useParams();
  const { data, error, isLoading } = useFetchBlogsByUserAdminQuery(userId);
  console.log(data);
  return (
    <div>
      {data && (
        <>
          <BannerProfilepage
            name={data.user.name}
            username={data.user.username}
          />
          <BlogContainers data={data.blogs} />
        </>
      )}
    </div>
  );
};

export default Profilepage;
