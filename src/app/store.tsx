import { configureStore } from "@reduxjs/toolkit";
import SliderSlice from "./Slices/SliderSlice";
import ProductSlice from "./Slices/ProductSlice";

const store = configureStore({reducer: {slider: SliderSlice, product: ProductSlice}});

export default store 