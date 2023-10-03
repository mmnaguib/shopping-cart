import { configureStore } from "@reduxjs/toolkit";
import SliderSlice from "./Slices/SliderSlice";
import ProductSlice from "./Slices/ProductSlice";
import CartSlice from "./Slices/CartSlice";

const store = configureStore({reducer: {slider: SliderSlice, product: ProductSlice, cart: CartSlice}});

export default store 