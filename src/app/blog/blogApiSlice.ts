import { apiSlice } from "../api/apiSlice";
import { Blog } from "../types";
export const blogApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    //   <return type, argument passed>
    fetchBlogs: builder.query<Blog[], void>({
      query: () => ({
        url: "/blog",
        method: "GET",
      }),
      providesTags: ["Blog"],
    }),
    fetchBlogsByTag: builder.query<Blog[], string>({
      query: (tag: string) => ({
        url: `/blog/filter/${tag}`,
        method: "GET",
      }),
      providesTags: ["Blog"],
    }),
  }),
});
export const { useFetchBlogsQuery, useFetchBlogsByTagQuery } = blogApiSlice;
