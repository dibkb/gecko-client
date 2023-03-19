import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const apiSlice = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "https://helium-api.onrender.com/api",
    // baseUrl: "http://localhost:8000/api",
    credentials: "include",
  }),
  tagTypes: ["Blog", "User"],
  endpoints: (builder) => ({}),
});
