import { configureStore } from "@reduxjs/toolkit";
import SliderSlice from "./Slices/SliderSlice";

const store = configureStore({reducer: {slider: SliderSlice}});

export default store 