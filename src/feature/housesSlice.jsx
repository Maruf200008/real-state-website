import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  poperty: "",
  location: "",
  priceRange: "",
  isFiltering: {},
};

const houseSlice = createSlice({
  name: "house",
  initialState,
  reducers: {
    addProperty: (state, action) => {
      state.poperty = action.payload;
    },
    addLocation: (state, action) => {
      state.location = action.payload;
    },
    addPriceRange: (state, action) => {
      state.priceRange = action.payload;
    },
    addFiltering: (state, action) => {
      state.isFiltering = action.payload;
    },
    removeFiltering : (state) => {
      state.isFiltering = {}
      state.priceRange= ""
      state.poperty = ""
      state.location = ""


    }
  },
});

export default houseSlice.reducer;
export const { addLocation, addPriceRange, addProperty, addFiltering, removeFiltering } =
  houseSlice.actions;
