import { createSlice } from "@reduxjs/toolkit";
import { storeData } from "../../assets/data/dummyData";

const ProductSlice = createSlice({
  name: "product",
  initialState: {
    filteredProducts: storeData,
    singleProduct: storeData,
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
        state.error = false;
        state.storeData = genderProduct;
        if (genderProduct.length > 0) {
          state.error = false;
          const saveState = JSON.stringify(genderProduct);
          sessionStorage.setItem("filteredData", saveState);
        } else {
          state.error = true;
          state.filteredProducts = [];
        }
      } catch (e) {
        return e.message();
      }
    },
    sortByPrice: (state, action) => {
      try {
        const priceProduct = state.filteredProducts.sort((a, b) =>
          a.price > b.price ? -1 : 1
        );
        state.filteredProducts = priceProduct;
        if (priceProduct.length) {
          state.error = false;
          if (!state.error) {
            state.filteredProducts = priceProduct;
            const saveState = JSON.stringify(priceProduct);
            sessionStorage.setItem("filteredData", saveState);
          }
        } else {
          state.error = true;
          state.filteredProducts = [];
        }
      } catch (err) {
        return err;
      }
    },
    filterByColor: (state, action) => {
      try {
        const colorProduct = state.filteredProducts.filter((product) =>
          product.color.includes(action.payload)
        );
        state.error = false;
        state.filteredProducts = colorProduct;
        if (colorProduct.length <= 0) {
          state.error = true;
          state.filteredProducts = [];
        } else {
          state.error = false;
          state.filteredProducts = colorProduct;
          const saveState = JSON.stringify(colorProduct);
          sessionStorage.setItem("filteredData", saveState);
        }
      } catch (err) {
        return err;
      }
    },
    filterBySize: (state, action) => {
      try {
        const sizeProduct = state.filteredProducts.filter((product) =>
          product.size.includes(action.payload)
        );
        state.error = false;
        state.filteredProducts = sizeProduct;
        if (sizeProduct.length > 0) {
          state.error = false;
          state.filteredProducts = sizeProduct;
          const saveState = JSON.stringify(sizeProduct);
          sessionStorage.setItem("filteredData", saveState);
        } else {
          state.error = true;
          state.filteredProducts = [];
        }
      } catch (e) {
        return e.massage();
      }
    },
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
