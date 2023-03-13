import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:6000/api" }),
  tagTypes: ["Blog", "User"],
  endpoints: (builder) => ({}),
});
