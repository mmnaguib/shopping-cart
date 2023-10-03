import { configureStore } from "@reduxjs/toolkit";
import slider from "./Slices/SliderSlice";
import product from "./Slices/ProductSlice";
import cart from "./Slices/CartSlice";
import user from "./Slices/UserSlice";

const store = configureStore({reducer: {slider, product, cart, user}});

export default store 