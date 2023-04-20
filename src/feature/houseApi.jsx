import apiSlice from "../api/apiSlice";

export const houseApi = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    getHomes: build.query({
      query: () => "/houses",
    }),
  }),
});

export const { useGetHomesQuery } = houseApi;
