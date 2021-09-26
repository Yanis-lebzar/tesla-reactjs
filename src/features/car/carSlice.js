import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cars: [
    {
      name: "Model S",
      link: "/model-s",
    },
    {
      name: "Model 3",
      link: "/model-3",
    },
    {
      name: "Model X",
      link: "/model-x",
    },
    {
      name: "Model Y",
      link: "/model-y",
    },
    {
      name: "Solar Roof",

      link: "/",
    },
    {
      name: "Solar Panels",

      link: "/",
    },
  ],
};

const carSlice = createSlice({
  name: "car",
  initialState,
  reducers: {},
});

// console.log("toz");
export const selectCars = (state) => state.car.cars;
export default carSlice.reducer;
