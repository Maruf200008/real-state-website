import apiSlice from "../api/apiSlice";

export const houseApi = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    getHomes: build.query({
      query: (isFiltering) => {
        const { poperty, location, priceRange } = isFiltering || {};
        if (poperty && location && priceRange) {
          return `/houses?type_like=${poperty}&country_like=${location}&price_like=${priceRange}`;
        } else if (poperty && priceRange) {
          return `/houses?type_like=${poperty}&price_like=${priceRange}`;
        } else if (poperty && location) {
          return `/houses?type_like=${poperty}&country_like=${location}`;
        } else if (location && priceRange) {
          return `/houses?country_like=${location}&price_like=${priceRange}`;
        } else if (poperty) {
          return `/houses?type_like=${poperty}`;
        } else if (location) {
          return `/houses?country_like=${location}`;
        } else if (priceRange) {
          return `/houses?price_like=${priceRange}`;
        } else {
          return "/houses";
        }
      },
    }),
    getHome: build.query({
      query: ({ houseId }) => `/houses/${houseId}`,
    }),
  }),
});

export const { useGetHomesQuery } = houseApi;
