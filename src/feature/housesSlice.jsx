import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  homes: [],
};

const houseSlice = createSlice({
  name: "house",
  initialState,
  reducers: {},
});

export default houseSlice.reducer;
export const {} = houseSlice.actions;
