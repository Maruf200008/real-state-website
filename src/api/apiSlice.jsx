import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const apiSlice = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "https://real-state-cj32.onrender.com",
  }),
  endpoints: (build) => ({}),
});
export default apiSlice;
