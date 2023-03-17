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
    fetchBlogsById: builder.query<Blog, string | undefined>({
      query: (id: string | undefined) => ({
        url: `/blog/${id}`,
        method: "GET",
      }),
      providesTags: ["Blog"],
    }),
    fetchBlogsByUserAdmin: builder.query({
      query: (id: string | undefined) => ({
        url: `/user/admin/${id}`,
        method: "GET",
      }),
      providesTags: ["Blog", "User"],
    }),
    fetchBlogsByTag: builder.query<Blog[], string>({
      query: (tag: string) => ({
        url: `/blog/filter/${tag}`,
        method: "GET",
      }),
      providesTags: ["Blog"],
    }),
    createNewBlog: builder.mutation({
      query: (content) => ({
        url: "/blog/create",
        method: "POST",
        body: content,
      }),
      invalidatesTags: ["Blog"],
    }),
    deleteBlog: builder.mutation({
      query: (id: string | undefined) => ({
        url: `/blog/${id}/delete`,
        method: "DELETE",
      }),
      invalidatesTags: ["Blog"],
    }),
  }),
});
export const {
  useFetchBlogsQuery,
  useFetchBlogsByTagQuery,
  useFetchBlogsByIdQuery,
  useFetchBlogsByUserAdminQuery,
  useCreateNewBlogMutation,
  useDeleteBlogMutation,
} = blogApiSlice;
