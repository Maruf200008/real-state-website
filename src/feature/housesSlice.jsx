import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  poperty: "",
  location: "",
  priceRange: "",
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
  },
});

export default houseSlice.reducer;
export const { addLocation, addPriceRange, addProperty } = houseSlice.actions;
