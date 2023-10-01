import { createSlice } from "@reduxjs/toolkit";
import { storeData } from "../../assets/data/dummyData";

const ProductSlice = createSlice({
  name: "product",
  initialState: {
    filteredProducts:
      JSON.parse(sessionStorage.getItem("filteredData")) || storeData,
    singleProduct:
      JSON.parse(sessionStorage.getItem("singleProduct")) || storeData,
    error: false,
  },
  reducers: {
    filterProducts: (state, action) => {
      try {
        const filter = storeData.filter(
          (product) => product.type === action.payload
        );
        state.storeData = filter;
        state.error = false;
        const savedState = JSON.stringify(filter);
        sessionStorage.setItem("filteredData", savedState);
      } catch (e) {
        return e.message();
      }
    },
    singleProduct: (state, action) => {
      try {
        const oneProduct = storeData.filter(
          (product) => product.id === action.payload
        );
        state.singleProduct = oneProduct;
        state.error = false;
        const savedState = JSON.stringify(oneProduct);
        sessionStorage.setItem("filteredData", savedState);
      } catch (e) {
        return e.message();
      }
    },
    filterGender: (state, action) => {
      try {
        const genderProduct = storeData.filter(
          (product) => product.gender === action.payload
        );
        state.storeData = genderProduct;
        state.error = false;
        const savedState = JSON.stringify(genderProduct);
        sessionStorage.setItem("filteredData", savedState);
      } catch (e) {
        return e.message();
      }
    },
    sortByPrice: (state, action) => {
      try {
        const filter = storeData.filter(
          (product) => product.price === action.payload
        );
        state.storeData = filter;
        state.error = false;
        const savedState = JSON.stringify(filter);
        sessionStorage.setItem("filteredData", savedState);
      } catch (e) {
        return e.message();
      }
    },
    filterByColor: (state, action) => {},
    filterBySize: (state, action) => {},
  },
});

export const {
  filterProducts,
  singleProduct,
  filterGender,
  sortByPrice,
  filterByColor,
  filterBySize,
} = ProductSlice.actions;
export default ProductSlice.reducer;
